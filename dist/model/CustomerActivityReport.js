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
 * The CustomerActivityReport model module.
 * @module model/CustomerActivityReport
 * @version 1.0.0
 */
var CustomerActivityReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerActivityReport</code>.
   * 
   * @alias module:model/CustomerActivityReport
   * @param integrationId {String} The ID used for this entity in the application system.
   * @param created {Date} The exact moment this entity was created.
   * @param name {String} The name for this customer profile.
   * @param customerId {Number} The internal Talon.One ID of the customer.
   * @param couponRedemptions {Number} Number of coupon redemptions in all customer campaigns.
   * @param couponUseAttempts {Number} Number of coupon use attempts in all customer campaigns.
   * @param couponFailedAttempts {Number} Number of failed coupon use attempts in all customer campaigns.
   * @param accruedDiscounts {Number} Number of accrued discounts in all customer campaigns.
   * @param accruedRevenue {Number} Amount of accrued revenue in all customer campaigns.
   * @param totalOrders {Number} Number of orders in all customer campaigns.
   * @param totalOrdersNoCoupon {Number} Number of orders without coupon used in all customer campaigns.
   * @param campaignName {String} The name of the campaign this customer belongs to.
   */
  function CustomerActivityReport(integrationId, created, name, customerId, couponRedemptions, couponUseAttempts, couponFailedAttempts, accruedDiscounts, accruedRevenue, totalOrders, totalOrdersNoCoupon, campaignName) {
    _classCallCheck(this, CustomerActivityReport);

    CustomerActivityReport.initialize(this, integrationId, created, name, customerId, couponRedemptions, couponUseAttempts, couponFailedAttempts, accruedDiscounts, accruedRevenue, totalOrders, totalOrdersNoCoupon, campaignName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerActivityReport, null, [{
    key: "initialize",
    value: function initialize(obj, integrationId, created, name, customerId, couponRedemptions, couponUseAttempts, couponFailedAttempts, accruedDiscounts, accruedRevenue, totalOrders, totalOrdersNoCoupon, campaignName) {
      obj['integrationId'] = integrationId;
      obj['created'] = created;
      obj['name'] = name;
      obj['customerId'] = customerId;
      obj['couponRedemptions'] = couponRedemptions;
      obj['couponUseAttempts'] = couponUseAttempts;
      obj['couponFailedAttempts'] = couponFailedAttempts;
      obj['accruedDiscounts'] = accruedDiscounts;
      obj['accruedRevenue'] = accruedRevenue;
      obj['totalOrders'] = totalOrders;
      obj['totalOrdersNoCoupon'] = totalOrdersNoCoupon;
      obj['campaignName'] = campaignName;
    }
    /**
     * Constructs a <code>CustomerActivityReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerActivityReport} obj Optional instance to populate.
     * @return {module:model/CustomerActivityReport} The populated <code>CustomerActivityReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerActivityReport();

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('customerId')) {
          obj['customerId'] = _ApiClient["default"].convertToType(data['customerId'], 'Number');
        }

        if (data.hasOwnProperty('lastActivity')) {
          obj['lastActivity'] = _ApiClient["default"].convertToType(data['lastActivity'], 'Date');
        }

        if (data.hasOwnProperty('couponRedemptions')) {
          obj['couponRedemptions'] = _ApiClient["default"].convertToType(data['couponRedemptions'], 'Number');
        }

        if (data.hasOwnProperty('couponUseAttempts')) {
          obj['couponUseAttempts'] = _ApiClient["default"].convertToType(data['couponUseAttempts'], 'Number');
        }

        if (data.hasOwnProperty('couponFailedAttempts')) {
          obj['couponFailedAttempts'] = _ApiClient["default"].convertToType(data['couponFailedAttempts'], 'Number');
        }

        if (data.hasOwnProperty('accruedDiscounts')) {
          obj['accruedDiscounts'] = _ApiClient["default"].convertToType(data['accruedDiscounts'], 'Number');
        }

        if (data.hasOwnProperty('accruedRevenue')) {
          obj['accruedRevenue'] = _ApiClient["default"].convertToType(data['accruedRevenue'], 'Number');
        }

        if (data.hasOwnProperty('totalOrders')) {
          obj['totalOrders'] = _ApiClient["default"].convertToType(data['totalOrders'], 'Number');
        }

        if (data.hasOwnProperty('totalOrdersNoCoupon')) {
          obj['totalOrdersNoCoupon'] = _ApiClient["default"].convertToType(data['totalOrdersNoCoupon'], 'Number');
        }

        if (data.hasOwnProperty('campaignName')) {
          obj['campaignName'] = _ApiClient["default"].convertToType(data['campaignName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerActivityReport;
}();
/**
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */


CustomerActivityReport.prototype['integrationId'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

CustomerActivityReport.prototype['created'] = undefined;
/**
 * The name for this customer profile.
 * @member {String} name
 */

CustomerActivityReport.prototype['name'] = undefined;
/**
 * The internal Talon.One ID of the customer.
 * @member {Number} customerId
 */

CustomerActivityReport.prototype['customerId'] = undefined;
/**
 * The last activity of the customer.
 * @member {Date} lastActivity
 */

CustomerActivityReport.prototype['lastActivity'] = undefined;
/**
 * Number of coupon redemptions in all customer campaigns.
 * @member {Number} couponRedemptions
 */

CustomerActivityReport.prototype['couponRedemptions'] = undefined;
/**
 * Number of coupon use attempts in all customer campaigns.
 * @member {Number} couponUseAttempts
 */

CustomerActivityReport.prototype['couponUseAttempts'] = undefined;
/**
 * Number of failed coupon use attempts in all customer campaigns.
 * @member {Number} couponFailedAttempts
 */

CustomerActivityReport.prototype['couponFailedAttempts'] = undefined;
/**
 * Number of accrued discounts in all customer campaigns.
 * @member {Number} accruedDiscounts
 */

CustomerActivityReport.prototype['accruedDiscounts'] = undefined;
/**
 * Amount of accrued revenue in all customer campaigns.
 * @member {Number} accruedRevenue
 */

CustomerActivityReport.prototype['accruedRevenue'] = undefined;
/**
 * Number of orders in all customer campaigns.
 * @member {Number} totalOrders
 */

CustomerActivityReport.prototype['totalOrders'] = undefined;
/**
 * Number of orders without coupon used in all customer campaigns.
 * @member {Number} totalOrdersNoCoupon
 */

CustomerActivityReport.prototype['totalOrdersNoCoupon'] = undefined;
/**
 * The name of the campaign this customer belongs to.
 * @member {String} campaignName
 */

CustomerActivityReport.prototype['campaignName'] = undefined;
var _default = CustomerActivityReport;
exports["default"] = _default;