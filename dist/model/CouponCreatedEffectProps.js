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
 * The CouponCreatedEffectProps model module.
 * @module model/CouponCreatedEffectProps
 * @version 4.0.0
 */
var CouponCreatedEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponCreatedEffectProps</code>.
   * The properties specific to the \&quot;couponCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create coupon\&quot; effect, and a coupon was created for a customer. See \&quot;createdCoupons\&quot; on the response for all details of this coupon.
   * @alias module:model/CouponCreatedEffectProps
   * @param value {String} The coupon code that was created
   * @param profileId {String} The integration identifier of the customer for whom this coupon was created
   */
  function CouponCreatedEffectProps(value, profileId) {
    _classCallCheck(this, CouponCreatedEffectProps);

    CouponCreatedEffectProps.initialize(this, value, profileId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponCreatedEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, value, profileId) {
      obj['value'] = value;
      obj['profileId'] = profileId;
    }
    /**
     * Constructs a <code>CouponCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/CouponCreatedEffectProps} The populated <code>CouponCreatedEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponCreatedEffectProps();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponCreatedEffectProps;
}();
/**
 * The coupon code that was created
 * @member {String} value
 */


CouponCreatedEffectProps.prototype['value'] = undefined;
/**
 * The integration identifier of the customer for whom this coupon was created
 * @member {String} profileId
 */

CouponCreatedEffectProps.prototype['profileId'] = undefined;
var _default = CouponCreatedEffectProps;
exports["default"] = _default;