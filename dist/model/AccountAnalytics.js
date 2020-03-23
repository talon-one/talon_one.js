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
 * The AccountAnalytics model module.
 * @module model/AccountAnalytics
 * @version 1.0.0
 */
var AccountAnalytics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountAnalytics</code>.
   * @alias module:model/AccountAnalytics
   * @param applications {Number} Total Number of Applications inside the account
   * @param activeCampaigns {Number} Total Number of Active Applications inside the account
   * @param campaigns {Number} Total Number of campaigns inside the account
   * @param coupons {Number} Total Number of coupons inside the account
   * @param activeCoupons {Number} Total Number of active coupons inside the account
   * @param expiredCoupons {Number} Total Number of expired coupons inside the account
   * @param customAttributes {Number} Total Number of custom attributes inside the account
   * @param referralCodes {Number} Total Number of referral codes inside the account
   * @param activeReferralCodes {Number} Total Number of active referral codes inside the account
   * @param expiredReferralCodes {Number} Total Number of expired referral codes inside the account
   * @param users {Number} Total Number of users inside the account
   * @param roles {Number} Total Number of roles inside the account
   * @param webhooks {Number} Total Number of webhooks inside the account
   * @param loyaltyPrograms {Number} Total Number of loyalty programs inside the account
   * @param activeRules {Number} Total Number of active rules in the account
   */
  function AccountAnalytics(applications, activeCampaigns, campaigns, coupons, activeCoupons, expiredCoupons, customAttributes, referralCodes, activeReferralCodes, expiredReferralCodes, users, roles, webhooks, loyaltyPrograms, activeRules) {
    _classCallCheck(this, AccountAnalytics);

    AccountAnalytics.initialize(this, applications, activeCampaigns, campaigns, coupons, activeCoupons, expiredCoupons, customAttributes, referralCodes, activeReferralCodes, expiredReferralCodes, users, roles, webhooks, loyaltyPrograms, activeRules);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAnalytics, null, [{
    key: "initialize",
    value: function initialize(obj, applications, activeCampaigns, campaigns, coupons, activeCoupons, expiredCoupons, customAttributes, referralCodes, activeReferralCodes, expiredReferralCodes, users, roles, webhooks, loyaltyPrograms, activeRules) {
      obj['applications'] = applications;
      obj['activeCampaigns'] = activeCampaigns;
      obj['campaigns'] = campaigns;
      obj['coupons'] = coupons;
      obj['activeCoupons'] = activeCoupons;
      obj['expiredCoupons'] = expiredCoupons;
      obj['customAttributes'] = customAttributes;
      obj['referralCodes'] = referralCodes;
      obj['activeReferralCodes'] = activeReferralCodes;
      obj['expiredReferralCodes'] = expiredReferralCodes;
      obj['users'] = users;
      obj['roles'] = roles;
      obj['webhooks'] = webhooks;
      obj['loyaltyPrograms'] = loyaltyPrograms;
      obj['activeRules'] = activeRules;
    }
    /**
     * Constructs a <code>AccountAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAnalytics} obj Optional instance to populate.
     * @return {module:model/AccountAnalytics} The populated <code>AccountAnalytics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountAnalytics();

        if (data.hasOwnProperty('applications')) {
          obj['applications'] = _ApiClient["default"].convertToType(data['applications'], 'Number');
        }

        if (data.hasOwnProperty('activeCampaigns')) {
          obj['activeCampaigns'] = _ApiClient["default"].convertToType(data['activeCampaigns'], 'Number');
        }

        if (data.hasOwnProperty('campaigns')) {
          obj['campaigns'] = _ApiClient["default"].convertToType(data['campaigns'], 'Number');
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], 'Number');
        }

        if (data.hasOwnProperty('activeCoupons')) {
          obj['activeCoupons'] = _ApiClient["default"].convertToType(data['activeCoupons'], 'Number');
        }

        if (data.hasOwnProperty('expiredCoupons')) {
          obj['expiredCoupons'] = _ApiClient["default"].convertToType(data['expiredCoupons'], 'Number');
        }

        if (data.hasOwnProperty('customAttributes')) {
          obj['customAttributes'] = _ApiClient["default"].convertToType(data['customAttributes'], 'Number');
        }

        if (data.hasOwnProperty('referralCodes')) {
          obj['referralCodes'] = _ApiClient["default"].convertToType(data['referralCodes'], 'Number');
        }

        if (data.hasOwnProperty('activeReferralCodes')) {
          obj['activeReferralCodes'] = _ApiClient["default"].convertToType(data['activeReferralCodes'], 'Number');
        }

        if (data.hasOwnProperty('expiredReferralCodes')) {
          obj['expiredReferralCodes'] = _ApiClient["default"].convertToType(data['expiredReferralCodes'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], 'Number');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'Number');
        }

        if (data.hasOwnProperty('webhooks')) {
          obj['webhooks'] = _ApiClient["default"].convertToType(data['webhooks'], 'Number');
        }

        if (data.hasOwnProperty('loyaltyPrograms')) {
          obj['loyaltyPrograms'] = _ApiClient["default"].convertToType(data['loyaltyPrograms'], 'Number');
        }

        if (data.hasOwnProperty('activeRules')) {
          obj['activeRules'] = _ApiClient["default"].convertToType(data['activeRules'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccountAnalytics;
}();
/**
 * Total Number of Applications inside the account
 * @member {Number} applications
 */


AccountAnalytics.prototype['applications'] = undefined;
/**
 * Total Number of Active Applications inside the account
 * @member {Number} activeCampaigns
 */

AccountAnalytics.prototype['activeCampaigns'] = undefined;
/**
 * Total Number of campaigns inside the account
 * @member {Number} campaigns
 */

AccountAnalytics.prototype['campaigns'] = undefined;
/**
 * Total Number of coupons inside the account
 * @member {Number} coupons
 */

AccountAnalytics.prototype['coupons'] = undefined;
/**
 * Total Number of active coupons inside the account
 * @member {Number} activeCoupons
 */

AccountAnalytics.prototype['activeCoupons'] = undefined;
/**
 * Total Number of expired coupons inside the account
 * @member {Number} expiredCoupons
 */

AccountAnalytics.prototype['expiredCoupons'] = undefined;
/**
 * Total Number of custom attributes inside the account
 * @member {Number} customAttributes
 */

AccountAnalytics.prototype['customAttributes'] = undefined;
/**
 * Total Number of referral codes inside the account
 * @member {Number} referralCodes
 */

AccountAnalytics.prototype['referralCodes'] = undefined;
/**
 * Total Number of active referral codes inside the account
 * @member {Number} activeReferralCodes
 */

AccountAnalytics.prototype['activeReferralCodes'] = undefined;
/**
 * Total Number of expired referral codes inside the account
 * @member {Number} expiredReferralCodes
 */

AccountAnalytics.prototype['expiredReferralCodes'] = undefined;
/**
 * Total Number of users inside the account
 * @member {Number} users
 */

AccountAnalytics.prototype['users'] = undefined;
/**
 * Total Number of roles inside the account
 * @member {Number} roles
 */

AccountAnalytics.prototype['roles'] = undefined;
/**
 * Total Number of webhooks inside the account
 * @member {Number} webhooks
 */

AccountAnalytics.prototype['webhooks'] = undefined;
/**
 * Total Number of loyalty programs inside the account
 * @member {Number} loyaltyPrograms
 */

AccountAnalytics.prototype['loyaltyPrograms'] = undefined;
/**
 * Total Number of active rules in the account
 * @member {Number} activeRules
 */

AccountAnalytics.prototype['activeRules'] = undefined;
var _default = AccountAnalytics;
exports["default"] = _default;