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
 * The RollbackCouponEffectProps model module.
 * @module model/RollbackCouponEffectProps
 * @version 1.0.0
 */
var RollbackCouponEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RollbackCouponEffectProps</code>.
   * The properties specific to the \&quot;rollbackCoupon\&quot; effect. This gets triggered whenever previously closed session is now cancelled and a coupon redemption was cancelled on our internal usage limit counters.
   * @alias module:model/RollbackCouponEffectProps
   * @param value {String} The coupon code whose usage has been rolled back
   */
  function RollbackCouponEffectProps(value) {
    _classCallCheck(this, RollbackCouponEffectProps);

    RollbackCouponEffectProps.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RollbackCouponEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>RollbackCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackCouponEffectProps} The populated <code>RollbackCouponEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RollbackCouponEffectProps();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RollbackCouponEffectProps;
}();
/**
 * The coupon code whose usage has been rolled back
 * @member {String} value
 */


RollbackCouponEffectProps.prototype['value'] = undefined;
var _default = RollbackCouponEffectProps;
exports["default"] = _default;