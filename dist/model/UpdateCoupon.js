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
 * The UpdateCoupon model module.
 * @module model/UpdateCoupon
 * @version 4.0.0
 */
var UpdateCoupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCoupon</code>.
   * 
   * @alias module:model/UpdateCoupon
   */
  function UpdateCoupon() {
    _classCallCheck(this, UpdateCoupon);

    UpdateCoupon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateCoupon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCoupon} obj Optional instance to populate.
     * @return {module:model/UpdateCoupon} The populated <code>UpdateCoupon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCoupon();

        if (data.hasOwnProperty('usageLimit')) {
          obj['usageLimit'] = _ApiClient["default"].convertToType(data['usageLimit'], 'Number');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Date');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }

        if (data.hasOwnProperty('recipientIntegrationId')) {
          obj['recipientIntegrationId'] = _ApiClient["default"].convertToType(data['recipientIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return UpdateCoupon;
}();
/**
 * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */


UpdateCoupon.prototype['usageLimit'] = undefined;
/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */

UpdateCoupon.prototype['startDate'] = undefined;
/**
 * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

UpdateCoupon.prototype['expiryDate'] = undefined;
/**
 * The integration ID for this coupon's beneficiary's profile
 * @member {String} recipientIntegrationId
 */

UpdateCoupon.prototype['recipientIntegrationId'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

UpdateCoupon.prototype['attributes'] = undefined;
var _default = UpdateCoupon;
exports["default"] = _default;