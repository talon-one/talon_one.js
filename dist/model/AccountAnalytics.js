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
 * @version 4.2.0
 */
var AccountAnalytics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountAnalytics</code>.
   * @alias module:model/AccountAnalytics
   * @param applications {Number} Total number of applications in the account
   * @param liveApplications {Number} Total number of live applications in the account
   * @param sandboxApplications {Number} Total number of sandbox applications in the account
   * @param campaigns {Number} Total number of campaigns in the account
   * @param activeCampaigns {Number} Total number of active campaigns in the account
   * @param liveActiveCampaigns {Number} Total number of active campaigns in live applications in the account
   * @param coupons {Number} Total number of coupons in the account
   * @param activeCoupons {Number} Total number of active coupons in the account
   * @param expiredCoupons {Number} Total number of expired coupons in the account
   * @param referralCodes {Number} Total number of referral codes in the account
   * @param activeReferralCodes {Number} Total number of active referral codes in the account
   * @param expiredReferralCodes {Number} Total number of expired referral codes in the account
   * @param activeRules {Number} Total number of active rules in the account
   * @param users {Number} Total number of users in the account
   * @param roles {Number} Total number of roles in the account
   * @param customAttributes {Number} Total number of custom attributes in the account
   * @param webhooks {Number} Total number of webhooks in the account
   * @param loyaltyPrograms {Number} Total number of loyalty programs in the account
   */
  function AccountAnalytics(applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms) {
    _classCallCheck(this, AccountAnalytics);

    AccountAnalytics.initialize(this, applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountAnalytics, null, [{
    key: "initialize",
    value: function initialize(obj, applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms) {
      obj['applications'] = applications;
      obj['liveApplications'] = liveApplications;
      obj['sandboxApplications'] = sandboxApplications;
      obj['campaigns'] = campaigns;
      obj['activeCampaigns'] = activeCampaigns;
      obj['liveActiveCampaigns'] = liveActiveCampaigns;
      obj['coupons'] = coupons;
      obj['activeCoupons'] = activeCoupons;
      obj['expiredCoupons'] = expiredCoupons;
      obj['referralCodes'] = referralCodes;
      obj['activeReferralCodes'] = activeReferralCodes;
      obj['expiredReferralCodes'] = expiredReferralCodes;
      obj['activeRules'] = activeRules;
      obj['users'] = users;
      obj['roles'] = roles;
      obj['customAttributes'] = customAttributes;
      obj['webhooks'] = webhooks;
      obj['loyaltyPrograms'] = loyaltyPrograms;
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

        if (data.hasOwnProperty('liveApplications')) {
          obj['liveApplications'] = _ApiClient["default"].convertToType(data['liveApplications'], 'Number');
        }

        if (data.hasOwnProperty('sandboxApplications')) {
          obj['sandboxApplications'] = _ApiClient["default"].convertToType(data['sandboxApplications'], 'Number');
        }

        if (data.hasOwnProperty('campaigns')) {
          obj['campaigns'] = _ApiClient["default"].convertToType(data['campaigns'], 'Number');
        }

        if (data.hasOwnProperty('activeCampaigns')) {
          obj['activeCampaigns'] = _ApiClient["default"].convertToType(data['activeCampaigns'], 'Number');
        }

        if (data.hasOwnProperty('liveActiveCampaigns')) {
          obj['liveActiveCampaigns'] = _ApiClient["default"].convertToType(data['liveActiveCampaigns'], 'Number');
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

        if (data.hasOwnProperty('referralCodes')) {
          obj['referralCodes'] = _ApiClient["default"].convertToType(data['referralCodes'], 'Number');
        }

        if (data.hasOwnProperty('activeReferralCodes')) {
          obj['activeReferralCodes'] = _ApiClient["default"].convertToType(data['activeReferralCodes'], 'Number');
        }

        if (data.hasOwnProperty('expiredReferralCodes')) {
          obj['expiredReferralCodes'] = _ApiClient["default"].convertToType(data['expiredReferralCodes'], 'Number');
        }

        if (data.hasOwnProperty('activeRules')) {
          obj['activeRules'] = _ApiClient["default"].convertToType(data['activeRules'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], 'Number');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'Number');
        }

        if (data.hasOwnProperty('customAttributes')) {
          obj['customAttributes'] = _ApiClient["default"].convertToType(data['customAttributes'], 'Number');
        }

        if (data.hasOwnProperty('webhooks')) {
          obj['webhooks'] = _ApiClient["default"].convertToType(data['webhooks'], 'Number');
        }

        if (data.hasOwnProperty('loyaltyPrograms')) {
          obj['loyaltyPrograms'] = _ApiClient["default"].convertToType(data['loyaltyPrograms'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccountAnalytics;
}();
/**
 * Total number of applications in the account
 * @member {Number} applications
 */


AccountAnalytics.prototype['applications'] = undefined;
/**
 * Total number of live applications in the account
 * @member {Number} liveApplications
 */

AccountAnalytics.prototype['liveApplications'] = undefined;
/**
 * Total number of sandbox applications in the account
 * @member {Number} sandboxApplications
 */

AccountAnalytics.prototype['sandboxApplications'] = undefined;
/**
 * Total number of campaigns in the account
 * @member {Number} campaigns
 */

AccountAnalytics.prototype['campaigns'] = undefined;
/**
 * Total number of active campaigns in the account
 * @member {Number} activeCampaigns
 */

AccountAnalytics.prototype['activeCampaigns'] = undefined;
/**
 * Total number of active campaigns in live applications in the account
 * @member {Number} liveActiveCampaigns
 */

AccountAnalytics.prototype['liveActiveCampaigns'] = undefined;
/**
 * Total number of coupons in the account
 * @member {Number} coupons
 */

AccountAnalytics.prototype['coupons'] = undefined;
/**
 * Total number of active coupons in the account
 * @member {Number} activeCoupons
 */

AccountAnalytics.prototype['activeCoupons'] = undefined;
/**
 * Total number of expired coupons in the account
 * @member {Number} expiredCoupons
 */

AccountAnalytics.prototype['expiredCoupons'] = undefined;
/**
 * Total number of referral codes in the account
 * @member {Number} referralCodes
 */

AccountAnalytics.prototype['referralCodes'] = undefined;
/**
 * Total number of active referral codes in the account
 * @member {Number} activeReferralCodes
 */

AccountAnalytics.prototype['activeReferralCodes'] = undefined;
/**
 * Total number of expired referral codes in the account
 * @member {Number} expiredReferralCodes
 */

AccountAnalytics.prototype['expiredReferralCodes'] = undefined;
/**
 * Total number of active rules in the account
 * @member {Number} activeRules
 */

AccountAnalytics.prototype['activeRules'] = undefined;
/**
 * Total number of users in the account
 * @member {Number} users
 */

AccountAnalytics.prototype['users'] = undefined;
/**
 * Total number of roles in the account
 * @member {Number} roles
 */

AccountAnalytics.prototype['roles'] = undefined;
/**
 * Total number of custom attributes in the account
 * @member {Number} customAttributes
 */

AccountAnalytics.prototype['customAttributes'] = undefined;
/**
 * Total number of webhooks in the account
 * @member {Number} webhooks
 */

AccountAnalytics.prototype['webhooks'] = undefined;
/**
 * Total number of loyalty programs in the account
 * @member {Number} loyaltyPrograms
 */

AccountAnalytics.prototype['loyaltyPrograms'] = undefined;
var _default = AccountAnalytics;
exports["default"] = _default;