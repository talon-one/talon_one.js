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
    define(['ApiClient', 'model/AttributesSettings', 'model/LimitConfig', 'model/LoyaltyProgram'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AttributesSettings'), require('./LimitConfig'), require('./LoyaltyProgram'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.Application = factory(root.TalonOne.ApiClient, root.TalonOne.AttributesSettings, root.TalonOne.LimitConfig, root.TalonOne.LoyaltyProgram);
  }
}(this, function(ApiClient, AttributesSettings, LimitConfig, LoyaltyProgram) {
  'use strict';




  /**
   * The Application model module.
   * @module model/Application
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>Application</code>.
   * 
   * @alias module:model/Application
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} The name of this application.
   * @param timezone {String} A string containing an IANA timezone descriptor.
   * @param currency {String} A string describing a default currency for new customer sessions.
   * @param key {String} Hex key for HMAC-signing API calls as coming from this application (16 hex digits)
   * @param loyaltyPrograms {Array.<module:model/LoyaltyProgram>} An array containing all the loyalty programs to which this application is subscribed
   */
  var exports = function(id, created, modified, accountId, name, timezone, currency, key, loyaltyPrograms) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['accountId'] = accountId;
    _this['name'] = name;

    _this['timezone'] = timezone;
    _this['currency'] = currency;




    _this['key'] = key;
    _this['loyaltyPrograms'] = loyaltyPrograms;
  };

  /**
   * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Application} obj Optional instance to populate.
   * @return {module:model/Application} The populated <code>Application</code> instance.
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
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('caseSensitivity')) {
        obj['caseSensitivity'] = ApiClient.convertToType(data['caseSensitivity'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('limits')) {
        obj['limits'] = ApiClient.convertToType(data['limits'], [LimitConfig]);
      }
      if (data.hasOwnProperty('attributesSettings')) {
        obj['attributesSettings'] = AttributesSettings.constructFromObject(data['attributesSettings']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('loyaltyPrograms')) {
        obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], [LoyaltyProgram]);
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
   * The exact moment this entity was last modified.
   * @member {Date} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * The ID of the account that owns this entity.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The name of this application.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A longer description of the application.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A string containing an IANA timezone descriptor.
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * A string describing a default currency for new customer sessions.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * A string indicating how should campaigns in this application deal with case sensitivity on coupon codes.
   * @member {module:model/Application.CaseSensitivityEnum} caseSensitivity
   */
  exports.prototype['caseSensitivity'] = undefined;
  /**
   * Arbitrary properties associated with this campaign
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * Default limits for campaigns created in this application
   * @member {Array.<module:model/LimitConfig>} limits
   */
  exports.prototype['limits'] = undefined;
  /**
   * @member {module:model/AttributesSettings} attributesSettings
   */
  exports.prototype['attributesSettings'] = undefined;
  /**
   * Hex key for HMAC-signing API calls as coming from this application (16 hex digits)
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * An array containing all the loyalty programs to which this application is subscribed
   * @member {Array.<module:model/LoyaltyProgram>} loyaltyPrograms
   */
  exports.prototype['loyaltyPrograms'] = undefined;


  /**
   * Allowed values for the <code>caseSensitivity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CaseSensitivityEnum = {
    /**
     * value: "sensitive"
     * @const
     */
    "sensitive": "sensitive",
    /**
     * value: "insensitive-uppercase"
     * @const
     */
    "insensitive-uppercase": "insensitive-uppercase",
    /**
     * value: "insensitive-lowercase"
     * @const
     */
    "insensitive-lowercase": "insensitive-lowercase"  };


  return exports;
}));


