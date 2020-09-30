"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewCoupons model module.
 * @module model/NewCoupons
 * @version 4.2.0
 */
var NewCoupons = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCoupons</code>.
   * 
   * @alias module:model/NewCoupons
   * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign. Must be at least 1.
   */
  function NewCoupons(usageLimit, validCharacters, couponPattern, numberOfCoupons) {
    _classCallCheck(this, NewCoupons);

    NewCoupons.initialize(this, usageLimit, validCharacters, couponPattern, numberOfCoupons);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCoupons, null, [{
    key: "initialize",
    value: function initialize(obj, usageLimit, validCharacters, couponPattern, numberOfCoupons) {
      obj['usageLimit'] = usageLimit;
      obj['validCharacters'] = validCharacters;
      obj['couponPattern'] = couponPattern;
      obj['numberOfCoupons'] = numberOfCoupons;
    }
    /**
     * Constructs a <code>NewCoupons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCoupons} obj Optional instance to populate.
     * @return {module:model/NewCoupons} The populated <code>NewCoupons</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCoupons();

        if (data.hasOwnProperty('usageLimit')) {
          obj['usageLimit'] = _ApiClient["default"].convertToType(data['usageLimit'], 'Number');
        }

        if (data.hasOwnProperty('discountLimit')) {
          obj['discountLimit'] = _ApiClient["default"].convertToType(data['discountLimit'], 'Number');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Date');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }

        if (data.hasOwnProperty('validCharacters')) {
          obj['validCharacters'] = _ApiClient["default"].convertToType(data['validCharacters'], ['String']);
        }

        if (data.hasOwnProperty('couponPattern')) {
          obj['couponPattern'] = _ApiClient["default"].convertToType(data['couponPattern'], 'String');
        }

        if (data.hasOwnProperty('numberOfCoupons')) {
          obj['numberOfCoupons'] = _ApiClient["default"].convertToType(data['numberOfCoupons'], 'Number');
        }

        if (data.hasOwnProperty('uniquePrefix')) {
          obj['uniquePrefix'] = _ApiClient["default"].convertToType(data['uniquePrefix'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('recipientIntegrationId')) {
          obj['recipientIntegrationId'] = _ApiClient["default"].convertToType(data['recipientIntegrationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewCoupons;
}();
/**
 * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */


NewCoupons.prototype['usageLimit'] = undefined;
/**
 * The amount of discounts that can be given with this coupon code. 
 * @member {Number} discountLimit
 */

NewCoupons.prototype['discountLimit'] = undefined;
/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */

NewCoupons.prototype['startDate'] = undefined;
/**
 * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

NewCoupons.prototype['expiryDate'] = undefined;
/**
 * Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
 * @member {Array.<String>} validCharacters
 */

NewCoupons.prototype['validCharacters'] = undefined;
/**
 * The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
 * @member {String} couponPattern
 */

NewCoupons.prototype['couponPattern'] = undefined;
/**
 * The number of new coupon codes to generate for the campaign. Must be at least 1.
 * @member {Number} numberOfCoupons
 */

NewCoupons.prototype['numberOfCoupons'] = undefined;
/**
 * A unique prefix to prepend to all generated coupons.
 * @member {String} uniquePrefix
 */

NewCoupons.prototype['uniquePrefix'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

NewCoupons.prototype['attributes'] = undefined;
/**
 * The integration ID for this coupon's beneficiary's profile
 * @member {String} recipientIntegrationId
 */

NewCoupons.prototype['recipientIntegrationId'] = undefined;
var _default = NewCoupons;
exports["default"] = _default;