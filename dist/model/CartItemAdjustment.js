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
 * The CartItemAdjustment model module.
 * @module model/CartItemAdjustment
 * @version 4.0.0
 */
var CartItemAdjustment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItemAdjustment</code>.
   * @alias module:model/CartItemAdjustment
   * @param payFromLoyaltyProgram {Number} Loyalty Program to be used for payment
   * @param pointPayment {Number} Amount of points to be spend
   */
  function CartItemAdjustment(payFromLoyaltyProgram, pointPayment) {
    _classCallCheck(this, CartItemAdjustment);

    CartItemAdjustment.initialize(this, payFromLoyaltyProgram, pointPayment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItemAdjustment, null, [{
    key: "initialize",
    value: function initialize(obj, payFromLoyaltyProgram, pointPayment) {
      obj['payFromLoyaltyProgram'] = payFromLoyaltyProgram;
      obj['pointPayment'] = pointPayment;
    }
    /**
     * Constructs a <code>CartItemAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItemAdjustment} obj Optional instance to populate.
     * @return {module:model/CartItemAdjustment} The populated <code>CartItemAdjustment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItemAdjustment();

        if (data.hasOwnProperty('payFromLoyaltyProgram')) {
          obj['payFromLoyaltyProgram'] = _ApiClient["default"].convertToType(data['payFromLoyaltyProgram'], 'Number');
        }

        if (data.hasOwnProperty('pointPayment')) {
          obj['pointPayment'] = _ApiClient["default"].convertToType(data['pointPayment'], 'Number');
        }

        if (data.hasOwnProperty('remainingPrice')) {
          obj['remainingPrice'] = _ApiClient["default"].convertToType(data['remainingPrice'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CartItemAdjustment;
}();
/**
 * Loyalty Program to be used for payment
 * @member {Number} payFromLoyaltyProgram
 */


CartItemAdjustment.prototype['payFromLoyaltyProgram'] = undefined;
/**
 * Amount of points to be spend
 * @member {Number} pointPayment
 */

CartItemAdjustment.prototype['pointPayment'] = undefined;
/**
 * Remaining price in currency after payment in points has been made
 * @member {Number} remainingPrice
 */

CartItemAdjustment.prototype['remainingPrice'] = undefined;
var _default = CartItemAdjustment;
exports["default"] = _default;