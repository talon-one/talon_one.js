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
    root.TalonOne.NewApplicationAPIKey = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewApplicationAPIKey model module.
   * @module model/NewApplicationAPIKey
   * @version 3.1.1
   */

  /**
   * Constructs a new <code>NewApplicationAPIKey</code>.
   * 
   * @alias module:model/NewApplicationAPIKey
   * @class
   * @param id {Number} ID of the API Key
   * @param createdBy {Number} ID of user who created
   * @param title {String} Title for API Key
   * @param accountID {Number} ID of account the key is used for
   * @param applicationID {Number} ID of application the key is used for
   * @param created {Date} The date the API key was created
   * @param expires {Date} The date the API key expired
   * @param key {String} Raw API Key
   */
  var exports = function(id, createdBy, title, accountID, applicationID, created, expires, key) {
    var _this = this;

    _this['id'] = id;
    _this['createdBy'] = createdBy;
    _this['title'] = title;
    _this['accountID'] = accountID;
    _this['applicationID'] = applicationID;
    _this['created'] = created;
    _this['expires'] = expires;
    _this['key'] = key;
  };

  /**
   * Constructs a <code>NewApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewApplicationAPIKey} obj Optional instance to populate.
   * @return {module:model/NewApplicationAPIKey} The populated <code>NewApplicationAPIKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('accountID')) {
        obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
      }
      if (data.hasOwnProperty('applicationID')) {
        obj['applicationID'] = ApiClient.convertToType(data['applicationID'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the API Key
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * ID of user who created
   * @member {Number} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * Title for API Key
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * ID of account the key is used for
   * @member {Number} accountID
   */
  exports.prototype['accountID'] = undefined;
  /**
   * ID of application the key is used for
   * @member {Number} applicationID
   */
  exports.prototype['applicationID'] = undefined;
  /**
   * The date the API key was created
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The date the API key expired
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * Raw API Key
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));


