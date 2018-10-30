/**
 * @module api/IntegrationApi
 */

var url = require('url')
var http = require('http')
var https = require('https')
var crypto = require('crypto')

exports.Client = IntegrationClient
exports.createClient = IntegrationClient
exports.handleEffect = registerEffectHandler

var globalEffectHandlers = {}

const API_CUSTOMER_SESSIONS_PATH        = '/v1/customer_sessions/'
const API_CUSTOMER_PROFILES_PATH        = '/v1/customer_profiles/'
const API_EVENTS_PATH                   = '/v1/events'
const API_REFERRALS_PATH                = '/v1/referrals'
const API_CUSTOMER_PROFILES_SEARCH_PATH = '/v1/customer_profiles_search'

/**
 * Register a global effect handler. This handler will be called whenever a
 * matching effect is returned by the API, with it's first argument being the
 * `context` value of the client that performed the request. See the API docs on
 * handling effects to see which handlers should be registered and what their
 * remaining arguments will be.
 *
 * @alias module:talon-one/integration.handleEffect
 * @param {string} effectName The name of the effect to handle.
 * @param {Function} handler The handler callback.
 * @see {@link http://developers.talon.one/integration-api/handling-effects/}
 */
function registerEffectHandler(effectName, handler) {
  globalEffectHandlers[effectName] = handler
}

function handleEffects (client, response, callback) {
  try {
    response.event.effects.forEach(function (effect) {
      var call = effect[3]
      var effectName = call[0]
      var handler
      if ((handler = globalEffectHandlers[effectName])) {
        var effectArgs = call.slice(1)
        effectArgs.unshift(client.context)
        handler.apply(null, effectArgs)
      }
    })
    callback(null, response)
  } catch (error) {
    callback(error)
  }
}

function effectsCallback(client, callback) {
  return function(error, response) {
    (error) ? callback(error) : handleEffects(client, response, callback)
  }
}

/**
 * Create an HTTP client that will handle signing requests for the integration API
 *
 * @class
 * @alias module:talon-one/integration.Client
 * @param {string} baseUrl The root URL for requests, e.g. https://mycompany.talon.one
 * @param {number|string} applicationId The ID of the application sending the request.
 * @param {string} applicationKey The hexadecimal API key for the application sending the request.
 * @param {object} context Data specific to this client instance that will be passed to global effect handlers.
 */
function IntegrationClient (baseUrl, applicationId, applicationKey, context) {
  if (!(this instanceof IntegrationClient)) {
    return new IntegrationClient(baseUrl, applicationId, applicationKey)
  }

  this.defaults = url.parse(baseUrl)
  this.defaults.pathname = this.defaults.pathname.replace(/\/$/, '')
  this.applicationId = applicationId
  this.hmacKey = new Buffer(applicationKey, 'hex')
  this.context = context || {}
}

/**
 * Update/create a customer session.
 *
 * @param {string} sessionId: The integration ID of the customer session
 * @param {Object} updates an object containing session properties to update
 * @see {@link http://developers.talon.one/integration-api/reference/#updateCustomerSession}
 */
IntegrationClient.prototype.updateCustomerSession = function (sessionId, updates, callback) {
  return this.request('PUT', API_CUSTOMER_SESSIONS_PATH + sessionId, updates, effectsCallback(this, callback))
}

/**
 * Update/create a customer profile
 *
 * @param {string} customerId: The integration ID of the customer profile
 * @param {Object} updates an object containing profile properties to update
 * @see {@link http://developers.talon.one/integration-api/reference/#updateCustomerProfile}
 */
IntegrationClient.prototype.updateCustomerProfile = function (customerId, updates, callback) {
  return this.request('PUT', API_CUSTOMER_PROFILES_PATH + customerId, updates, effectsCallback(this, callback))
}

/**
 * Track a custom event
 *
 * @param {string} sessionId:       The integration ID of the customer session for this event
 * @param {string|null} customerId: An optional integration ID of the customer profile for this event
 * @param {string} eventType:       A string representing the event. Must not be a reserved event name
 * @param {Object} eventData:       Arbitrary data associated with this event
 * @see {@link http://developers.talon.one/integration-api/reference/#trackEvent}
 */
IntegrationClient.prototype.trackEvent = function (sessionId, customerId, eventType, eventData, callback) {
  return this.request('POST', API_EVENTS_PATH,
    {sessionId: sessionId, profileId: customerId, type: eventType, attributes: eventData}, effectsCallback(this, callback))
}

/**
 * Create a referral code
 *
 * @param {number} campaignId:    ID of the Campaign for which the referral code is being created
 * @param {string} advocateId:    The profile integration ID of the referral's advocate
 * @param {Object|null} options:  Specify optional parameters for the referral creation:
 *                                  - friendId: A profile integration ID of the friend being referred
 *                                  - start: A string with an RFC3339 timestamp to set a start date for validation
 *                                  - end: A string with an RFC3339 timestamp to set an end date for validation
 * @see {@link http://developers.talon.one/integration-api/reference/#createReferral}
 */
IntegrationClient.prototype.createReferral = function (campaignId, advocateId, options, callback) {
  var newReferral = {
    campaignId: campaignId,
    advocateProfileIntegrationId: advocateId,
  }
  if (options) {
    newReferral.friendProfileIntegrationId = options.friendId
    newReferral.startDate = options.start
    newReferral.expiryDate = options.end
  }

  return this.request('POST', API_REFERRALS_PATH, newReferral, callback)
}

/**
 * Get a list of the customers that match a specific set of attributes
 *
 * @param {Object} customerAttr: Attributes that have to be matched by the customers returned
 *
 * @see {@link http://developers.talon.one/integration-api/reference/#customersByAttributes}
 */
IntegrationClient.prototype.customersByAttributes = function (customerAttr, callback) {
  return this.request('POST', API_CUSTOMER_PROFILES_SEARCH_PATH, { attributes: customerAttr }, callback)
}

IntegrationClient.prototype.request = function (method, path, payload, callback) {
  var impl = this.defaults.protocol == "http:" ? http : https
  var req = impl.request({
    method: method,
    port: this.defaults.port,
    hostname: this.defaults.hostname,
    path: this.defaults.pathname + path,
  })

  if (payload) {
    var buff = new Buffer(JSON.stringify(payload))
    var hmac = crypto.createHmac('md5', this.hmacKey);
    hmac.write(buff);
    hmac.end()
    var signature = hmac.read().toString('hex')
    req.setHeader('Content-Type', 'application/json')
    req.setHeader('Content-Signature', 'signer=' + this.applicationId + '; signature=' + signature)
    req.write(buff)
  }

  req.end()

  var self = this
  var buffs = []
  req.on('error', callback)
  req.on('response', function (res) {
    var responseLength = 0
    res.on('error', callback)
    res.on('data', function (buff) {
      buffs.push(buff)
      responseLength += buff.length
    })
    res.on('end', function () {
      var buff = Buffer.concat(buffs, responseLength)
      var data
      try {
        data = JSON.parse(buff.toString())
      } catch (err) {
        callback(new Error('Received non-JSON response: ' + buff))
      }
      if (res.statusCode >= 200 && res.statusCode < 300) {
        callback(null, data)
      } else {
        var err = new Error(data.message)
        err.errors = data.errors || [];
        err.statusCode = res.statusCode
        callback(err)
      }
    })
  })

  return req
}
