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
 * The CustomerAnalytics model module.
 * @module model/CustomerAnalytics
 * @version 4.2.0
 */
var CustomerAnalytics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerAnalytics</code>.
   * 
   * @alias module:model/CustomerAnalytics
   * @param acceptedCoupons {Number} Total accepted coupons for this customer
   * @param createdCoupons {Number} Total created coupons for this customer
   * @param freeItems {Number} Total free items given to this customer
   * @param totalOrders {Number} Total orders made by this customer
   * @param totalDiscountedOrders {Number} Total orders made by this customer that had a discount
   * @param totalRevenue {Number} Total Revenue across all closed sessions
   * @param totalDiscounts {Number} The sum of discounts that were given across all closed sessions
   */
  function CustomerAnalytics(acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts) {
    _classCallCheck(this, CustomerAnalytics);

    CustomerAnalytics.initialize(this, acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerAnalytics, null, [{
    key: "initialize",
    value: function initialize(obj, acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts) {
      obj['acceptedCoupons'] = acceptedCoupons;
      obj['createdCoupons'] = createdCoupons;
      obj['freeItems'] = freeItems;
      obj['totalOrders'] = totalOrders;
      obj['totalDiscountedOrders'] = totalDiscountedOrders;
      obj['totalRevenue'] = totalRevenue;
      obj['totalDiscounts'] = totalDiscounts;
    }
    /**
     * Constructs a <code>CustomerAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerAnalytics} obj Optional instance to populate.
     * @return {module:model/CustomerAnalytics} The populated <code>CustomerAnalytics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerAnalytics();

        if (data.hasOwnProperty('acceptedCoupons')) {
          obj['acceptedCoupons'] = _ApiClient["default"].convertToType(data['acceptedCoupons'], 'Number');
        }

        if (data.hasOwnProperty('createdCoupons')) {
          obj['createdCoupons'] = _ApiClient["default"].convertToType(data['createdCoupons'], 'Number');
        }

        if (data.hasOwnProperty('freeItems')) {
          obj['freeItems'] = _ApiClient["default"].convertToType(data['freeItems'], 'Number');
        }

        if (data.hasOwnProperty('totalOrders')) {
          obj['totalOrders'] = _ApiClient["default"].convertToType(data['totalOrders'], 'Number');
        }

        if (data.hasOwnProperty('totalDiscountedOrders')) {
          obj['totalDiscountedOrders'] = _ApiClient["default"].convertToType(data['totalDiscountedOrders'], 'Number');
        }

        if (data.hasOwnProperty('totalRevenue')) {
          obj['totalRevenue'] = _ApiClient["default"].convertToType(data['totalRevenue'], 'Number');
        }

        if (data.hasOwnProperty('totalDiscounts')) {
          obj['totalDiscounts'] = _ApiClient["default"].convertToType(data['totalDiscounts'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerAnalytics;
}();
/**
 * Total accepted coupons for this customer
 * @member {Number} acceptedCoupons
 */


CustomerAnalytics.prototype['acceptedCoupons'] = undefined;
/**
 * Total created coupons for this customer
 * @member {Number} createdCoupons
 */

CustomerAnalytics.prototype['createdCoupons'] = undefined;
/**
 * Total free items given to this customer
 * @member {Number} freeItems
 */

CustomerAnalytics.prototype['freeItems'] = undefined;
/**
 * Total orders made by this customer
 * @member {Number} totalOrders
 */

CustomerAnalytics.prototype['totalOrders'] = undefined;
/**
 * Total orders made by this customer that had a discount
 * @member {Number} totalDiscountedOrders
 */

CustomerAnalytics.prototype['totalDiscountedOrders'] = undefined;
/**
 * Total Revenue across all closed sessions
 * @member {Number} totalRevenue
 */

CustomerAnalytics.prototype['totalRevenue'] = undefined;
/**
 * The sum of discounts that were given across all closed sessions
 * @member {Number} totalDiscounts
 */

CustomerAnalytics.prototype['totalDiscounts'] = undefined;
var _default = CustomerAnalytics;
exports["default"] = _default;