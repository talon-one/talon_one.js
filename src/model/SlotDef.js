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
    root.TalonOne.SlotDef = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SlotDef model module.
   * @module model/SlotDef
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>SlotDef</code>.
   * @alias module:model/SlotDef
   * @class
   * @param name {String} The dot-separated path to this slot for use in Talang.
   * @param type {String} The type of this slot, one of string, number, boolean, or list[type].
   * @param title {String} Campaigner-friendly name for the slot.
   * @param writable {Boolean} Whether or not this slot can be updated by rule effects.
   */
  var exports = function(name, type, title, writable) {
    var _this = this;

    _this['name'] = name;
    _this['type'] = type;
    _this['title'] = title;


    _this['writable'] = writable;
  };

  /**
   * Constructs a <code>SlotDef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlotDef} obj Optional instance to populate.
   * @return {module:model/SlotDef} The populated <code>SlotDef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('help')) {
        obj['help'] = ApiClient.convertToType(data['help'], 'String');
      }
      if (data.hasOwnProperty('writable')) {
        obj['writable'] = ApiClient.convertToType(data['writable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The dot-separated path to this slot for use in Talang.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The type of this slot, one of string, number, boolean, or list[type].
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Campaigner-friendly name for the slot.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A short description of the slot.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Extended help text for the slot.
   * @member {String} help
   */
  exports.prototype['help'] = undefined;
  /**
   * Whether or not this slot can be updated by rule effects.
   * @member {Boolean} writable
   */
  exports.prototype['writable'] = undefined;



  return exports;
}));


