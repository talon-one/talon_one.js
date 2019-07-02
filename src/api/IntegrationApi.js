/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IntegrationState', 'model/NewCustomerProfile', 'model/NewCustomerSession', 'model/NewEvent', 'model/NewReferral', 'model/Referral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IntegrationState'), require('../model/NewCustomerProfile'), require('../model/NewCustomerSession'), require('../model/NewEvent'), require('../model/NewReferral'), require('../model/Referral'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.IntegrationApi = factory(root.TalononeApi.ApiClient, root.TalononeApi.IntegrationState, root.TalononeApi.NewCustomerProfile, root.TalononeApi.NewCustomerSession, root.TalononeApi.NewEvent, root.TalononeApi.NewReferral, root.TalononeApi.Referral);
  }
}(this, function(ApiClient, IntegrationState, NewCustomerProfile, NewCustomerSession, NewEvent, NewReferral, Referral) {
  'use strict';

  /**
   * Integration service.
   * @module api/IntegrationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IntegrationApi. 
   * @alias module:api/IntegrationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the &#x60;campaignId&#x60; parameter, and will be associated with the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate&#39;s profile. 
     * @param {Object} opts Optional parameters
     * @param {module:model/NewReferral} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Referral} and HTTP response
     */
    this.createReferralWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Referral;

      return this.apiClient.callApi(
        '/v1/referrals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the &#x60;campaignId&#x60; parameter, and will be associated with the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate&#39;s profile. 
     * @param {Object} opts Optional parameters
     * @param {module:model/NewReferral} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Referral}
     */
    this.createReferral = function(opts) {
      return this.createReferralWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCustomerDataWithHttpInfo = function(integrationId) {
      var postBody = null;

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteCustomerData");
      }


      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1/customer_data/{integrationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCustomerData = function(integrationId) {
      return this.deleteCustomerDataWithHttpInfo(integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The &#x60;sessionId&#x60; body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same &#x60;profileId&#x60; or an error will be returned.  As with customer sessions, you can use an empty string for &#x60;profileId&#x60; to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {Object} opts Optional parameters
     * @param {module:model/NewEvent} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    this.trackEventWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationState;

      return this.apiClient.callApi(
        '/v1/events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The &#x60;sessionId&#x60; body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same &#x60;profileId&#x60; or an error will be returned.  As with customer sessions, you can use an empty string for &#x60;profileId&#x60; to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {Object} opts Optional parameters
     * @param {module:model/NewEvent} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    this.trackEvent = function(opts) {
      return this.trackEventWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The &#x60;integrationId&#x60; may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the &#x60;integrationId&#x60;. It is vital that this ID **not** change over time, so **don&#39;t** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewCustomerProfile} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    this.updateCustomerProfileWithHttpInfo = function(integrationId, opts) {
      console.log(opts)
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateCustomerProfile");
      }


      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationState;

      return this.apiClient.callApi(
        '/v1/customer_profiles/{integrationId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The &#x60;integrationId&#x60; may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the &#x60;integrationId&#x60;. It is vital that this ID **not** change over time, so **don&#39;t** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewCustomerProfile} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    this.updateCustomerProfile = function(integrationId, opts) {
      return this.updateCustomerProfileWithHttpInfo(integrationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID&#39;s.  The &#x60;profileId&#x60; parameter in the request body should correspond to an &#x60;integrationId&#x60; for a customer profile, to track an anonymous session use the empty string (&#x60;\&quot;\&quot;&#x60;) as the &#x60;profileId&#x60;. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewCustomerSession} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    this.updateCustomerSessionWithHttpInfo = function(customerSessionId, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'customerSessionId' is set
      if (customerSessionId === undefined || customerSessionId === null) {
        throw new Error("Missing the required parameter 'customerSessionId' when calling updateCustomerSession");
      }


      var pathParams = {
        'customerSessionId': customerSessionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationState;

      return this.apiClient.callApi(
        '/v1/customer_sessions/{customerSessionId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID&#39;s.  The &#x60;profileId&#x60; parameter in the request body should correspond to an &#x60;integrationId&#x60; for a customer profile, to track an anonymous session use the empty string (&#x60;\&quot;\&quot;&#x60;) as the &#x60;profileId&#x60;. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {module:model/NewCustomerSession} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    this.updateCustomerSession = function(customerSessionId, opts) {
      return this.updateCustomerSessionWithHttpInfo(customerSessionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
