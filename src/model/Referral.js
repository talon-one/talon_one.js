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
    root.TalonOne.Referral = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Referral model module.
   * @module model/Referral
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>Referral</code>.
   * 
   * @alias module:model/Referral
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
   * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
   * @param code {String} The actual referral code.
   * @param usageCounter {Number} The number of times this referral code has been successfully used.
   * @param usageLimit {Number} The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   */
  var exports = function(id, created, campaignId, advocateProfileIntegrationId, code, usageCounter, usageLimit) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['campaignId'] = campaignId;
    _this['advocateProfileIntegrationId'] = advocateProfileIntegrationId;



    _this['code'] = code;
    _this['usageCounter'] = usageCounter;
    _this['usageLimit'] = usageLimit;
  };

  /**
   * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Referral} obj Optional instance to populate.
   * @return {module:model/Referral} The populated <code>Referral</code> instance.
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
      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
      if (data.hasOwnProperty('advocateProfileIntegrationId')) {
        obj['advocateProfileIntegrationId'] = ApiClient.convertToType(data['advocateProfileIntegrationId'], 'String');
      }
      if (data.hasOwnProperty('friendProfileIntegrationId')) {
        obj['friendProfileIntegrationId'] = ApiClient.convertToType(data['friendProfileIntegrationId'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('usageCounter')) {
        obj['usageCounter'] = ApiClient.convertToType(data['usageCounter'], 'Number');
      }
      if (data.hasOwnProperty('usageLimit')) {
        obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
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
   * ID of the campaign from which the referral received the referral code.
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * The Integration Id of the Advocate's Profile
   * @member {String} advocateProfileIntegrationId
   */
  exports.prototype['advocateProfileIntegrationId'] = undefined;
  /**
   * An optional Integration ID of the Friend's Profile
   * @member {String} friendProfileIntegrationId
   */
  exports.prototype['friendProfileIntegrationId'] = undefined;
  /**
   * Timestamp at which point the referral code becomes valid.
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative.
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * The actual referral code.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The number of times this referral code has been successfully used.
   * @member {Number} usageCounter
   */
  exports.prototype['usageCounter'] = undefined;
  /**
   * The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @member {Number} usageLimit
   */
  exports.prototype['usageLimit'] = undefined;



  return exports;
}));


