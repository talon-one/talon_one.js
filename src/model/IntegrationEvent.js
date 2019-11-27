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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.IntegrationEvent = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntegrationEvent model module.
   * @module model/IntegrationEvent
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>IntegrationEvent</code>.
   * 
   * @alias module:model/IntegrationEvent
   * @class
   * @param type {String} A string representing the event. Must not be a reserved event name.
   * @param attributes {Object} Arbitrary additional JSON data associated with the event.
   */
  var exports = function(type, attributes) {
    var _this = this;


    _this['type'] = type;
    _this['attributes'] = attributes;
  };

  /**
   * Constructs a <code>IntegrationEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationEvent} obj Optional instance to populate.
   * @return {module:model/IntegrationEvent} The populated <code>IntegrationEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profileId')) {
        obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
    }
    return obj;
  }

  /**
   * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @member {String} profileId
   */
  exports.prototype['profileId'] = undefined;
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



  return exports;
}));


