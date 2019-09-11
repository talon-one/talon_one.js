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
    root.TalonOne.CartItemAdjustment = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartItemAdjustment model module.
   * @module model/CartItemAdjustment
   * @version 3.1.2
   */

  /**
   * Constructs a new <code>CartItemAdjustment</code>.
   * @alias module:model/CartItemAdjustment
   * @class
   * @param payFromLoyaltyProgram {Number} Loyalty Program to be used for payment
   * @param pointPayment {Number} Amount of points to be spend
   */
  var exports = function(payFromLoyaltyProgram, pointPayment) {
    var _this = this;

    _this['payFromLoyaltyProgram'] = payFromLoyaltyProgram;
    _this['pointPayment'] = pointPayment;

  };

  /**
   * Constructs a <code>CartItemAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartItemAdjustment} obj Optional instance to populate.
   * @return {module:model/CartItemAdjustment} The populated <code>CartItemAdjustment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payFromLoyaltyProgram')) {
        obj['payFromLoyaltyProgram'] = ApiClient.convertToType(data['payFromLoyaltyProgram'], 'Number');
      }
      if (data.hasOwnProperty('pointPayment')) {
        obj['pointPayment'] = ApiClient.convertToType(data['pointPayment'], 'Number');
      }
      if (data.hasOwnProperty('remainingPrice')) {
        obj['remainingPrice'] = ApiClient.convertToType(data['remainingPrice'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Loyalty Program to be used for payment
   * @member {Number} payFromLoyaltyProgram
   */
  exports.prototype['payFromLoyaltyProgram'] = undefined;
  /**
   * Amount of points to be spend
   * @member {Number} pointPayment
   */
  exports.prototype['pointPayment'] = undefined;
  /**
   * Remaining price in currency after payment in points has been made
   * @member {Number} remainingPrice
   */
  exports.prototype['remainingPrice'] = undefined;



  return exports;
}));


