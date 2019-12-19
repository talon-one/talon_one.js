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
    root.TalonOne.NewCoupons = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewCoupons model module.
   * @module model/NewCoupons
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>NewCoupons</code>.
   * 
   * @alias module:model/NewCoupons
   * @class
   * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign. Must be at least 1.
   */
  var exports = function(usageLimit, validCharacters, couponPattern, numberOfCoupons) {
    var _this = this;

    _this['usageLimit'] = usageLimit;


    _this['validCharacters'] = validCharacters;
    _this['couponPattern'] = couponPattern;
    _this['numberOfCoupons'] = numberOfCoupons;



  };

  /**
   * Constructs a <code>NewCoupons</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewCoupons} obj Optional instance to populate.
   * @return {module:model/NewCoupons} The populated <code>NewCoupons</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usageLimit')) {
        obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('validCharacters')) {
        obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
      }
      if (data.hasOwnProperty('couponPattern')) {
        obj['couponPattern'] = ApiClient.convertToType(data['couponPattern'], 'String');
      }
      if (data.hasOwnProperty('numberOfCoupons')) {
        obj['numberOfCoupons'] = ApiClient.convertToType(data['numberOfCoupons'], 'Number');
      }
      if (data.hasOwnProperty('uniquePrefix')) {
        obj['uniquePrefix'] = ApiClient.convertToType(data['uniquePrefix'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('recipientIntegrationId')) {
        obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @member {Number} usageLimit
   */
  exports.prototype['usageLimit'] = undefined;
  /**
   * Timestamp at which point the coupon becomes valid.
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @member {Array.<String>} validCharacters
   */
  exports.prototype['validCharacters'] = undefined;
  /**
   * The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   * @member {String} couponPattern
   */
  exports.prototype['couponPattern'] = undefined;
  /**
   * The number of new coupon codes to generate for the campaign. Must be at least 1.
   * @member {Number} numberOfCoupons
   */
  exports.prototype['numberOfCoupons'] = undefined;
  /**
   * A unique prefix to prepend to all generated coupons.
   * @member {String} uniquePrefix
   */
  exports.prototype['uniquePrefix'] = undefined;
  /**
   * Arbitrary properties associated with this item
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * The integration ID for this coupon's beneficiary's profile
   * @member {String} recipientIntegrationId
   */
  exports.prototype['recipientIntegrationId'] = undefined;



  return exports;
}));


