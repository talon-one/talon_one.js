/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LedgerEntry', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LedgerEntry'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.Event = factory(root.TalonOne.ApiClient, root.TalonOne.LedgerEntry, root.TalonOne.Meta);
  }
}(this, function(ApiClient, LedgerEntry, Meta) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 3.1.1
   */

  /**
   * Constructs a new <code>Event</code>.
   * 
   * @alias module:model/Event
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param sessionId {String} The ID of the session that this event occurred in.
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Arbitrary additional JSON data associated with the event.
   * @param effects {Array.<Object>} An array of \"effects\" that must be applied in response to this event. Example effects include `addItemToCart` or `setDiscount`. 
   * @param ledgerEntries {Array.<module:model/LedgerEntry>} Ledger entries for the event.
   */
  var exports = function(id, created, applicationId, sessionId, type, attributes, effects, ledgerEntries) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['applicationId'] = applicationId;

    _this['sessionId'] = sessionId;
    _this['type'] = type;
    _this['attributes'] = attributes;
    _this['effects'] = effects;
    _this['ledgerEntries'] = ledgerEntries;

  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('effects')) {
        obj['effects'] = ApiClient.convertToType(data['effects'], [Object]);
      }
      if (data.hasOwnProperty('ledgerEntries')) {
        obj['ledgerEntries'] = ApiClient.convertToType(data['ledgerEntries'], [LedgerEntry]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
  /**
   * The ID of the session that this event occurred in.
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * A string representing the event. Must not be a reserved event name.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Arbitrary additional JSON data associated with the event.
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * An array of \"effects\" that must be applied in response to this event. Example effects include `addItemToCart` or `setDiscount`. 
   * @member {Array.<Object>} effects
   */
  exports.prototype['effects'] = undefined;
  /**
   * Ledger entries for the event.
   * @member {Array.<module:model/LedgerEntry>} ledgerEntries
   */
  exports.prototype['ledgerEntries'] = undefined;
  /**
   * @member {module:model/Meta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


