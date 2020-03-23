"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouponRejectionReason = _interopRequireDefault(require("./CouponRejectionReason"));

var _ReferralRejectionReason = _interopRequireDefault(require("./ReferralRejectionReason"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Meta model module.
 * @module model/Meta
 * @version 1.0.0
 */
var Meta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Meta</code>.
   * @alias module:model/Meta
   */
  function Meta() {
    _classCallCheck(this, Meta);

    Meta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Meta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Meta();

        if (data.hasOwnProperty('campaigns')) {
          obj['campaigns'] = _ApiClient["default"].convertToType(data['campaigns'], Object);
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], Object);
        }

        if (data.hasOwnProperty('couponRejectionReason')) {
          obj['couponRejectionReason'] = _CouponRejectionReason["default"].constructFromObject(data['couponRejectionReason']);
        }

        if (data.hasOwnProperty('referralRejectionReason')) {
          obj['referralRejectionReason'] = _ReferralRejectionReason["default"].constructFromObject(data['referralRejectionReason']);
        }

        if (data.hasOwnProperty('warnings')) {
          obj['warnings'] = _ApiClient["default"].convertToType(data['warnings'], Object);
        }
      }

      return obj;
    }
  }]);

  return Meta;
}();
/**
 * Maps each evaluated campaign ID to a key-value list of that campaigns attributes. Campaigns without attributes will be omitted.
 * @member {Object} campaigns
 */


Meta.prototype['campaigns'] = undefined;
/**
 * Maps the coupon value to a key-value list of that coupons attributes.
 * @member {Object} coupons
 */

Meta.prototype['coupons'] = undefined;
/**
 * @member {module:model/CouponRejectionReason} couponRejectionReason
 */

Meta.prototype['couponRejectionReason'] = undefined;
/**
 * @member {module:model/ReferralRejectionReason} referralRejectionReason
 */

Meta.prototype['referralRejectionReason'] = undefined;
/**
 * @member {Object} warnings
 */

Meta.prototype['warnings'] = undefined;
var _default = Meta;
exports["default"] = _default;