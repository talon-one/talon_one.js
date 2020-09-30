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
 * The AccountLimits model module.
 * @module model/AccountLimits
 * @version 4.2.0
 */
var AccountLimits = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountLimits</code>.
   * @alias module:model/AccountLimits
   * @param liveApplications {Number} Total number of allowed live applications in the account
   * @param sandboxApplications {Number} Total number of allowed sandbox applications in the account
   * @param activeCampaigns {Number} Total number of allowed active campaigns in live applications in the account
   * @param coupons {Number} Total number of allowed coupons in the account
   * @param referralCodes {Number} Total number of allowed referral codes in the account
   * @param activeRules {Number} Total number of allowed active rulesets in the account
   * @param liveLoyaltyPrograms {Number} Total number of allowed live loyalty programs in the account
   * @param sandboxLoyaltyPrograms {Number} Total number of allowed sandbox loyalty programs in the account
   * @param webhooks {Number} Total number of allowed webhooks in the account
   * @param users {Number} Total number of allowed users in the account
   * @param apiVolume {Number} Allowed volume of API requests to the account
   * @param promotionTypes {Array.<String>} Array of promotion types that are employed in the account
   */
  function AccountLimits(liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) {
    _classCallCheck(this, AccountLimits);

    AccountLimits.initialize(this, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountLimits, null, [{
    key: "initialize",
    value: function initialize(obj, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) {
      obj['liveApplications'] = liveApplications;
      obj['sandboxApplications'] = sandboxApplications;
      obj['activeCampaigns'] = activeCampaigns;
      obj['coupons'] = coupons;
      obj['referralCodes'] = referralCodes;
      obj['activeRules'] = activeRules;
      obj['liveLoyaltyPrograms'] = liveLoyaltyPrograms;
      obj['sandboxLoyaltyPrograms'] = sandboxLoyaltyPrograms;
      obj['webhooks'] = webhooks;
      obj['users'] = users;
      obj['apiVolume'] = apiVolume;
      obj['promotionTypes'] = promotionTypes;
    }
    /**
     * Constructs a <code>AccountLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountLimits} obj Optional instance to populate.
     * @return {module:model/AccountLimits} The populated <code>AccountLimits</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountLimits();

        if (data.hasOwnProperty('liveApplications')) {
          obj['liveApplications'] = _ApiClient["default"].convertToType(data['liveApplications'], 'Number');
        }

        if (data.hasOwnProperty('sandboxApplications')) {
          obj['sandboxApplications'] = _ApiClient["default"].convertToType(data['sandboxApplications'], 'Number');
        }

        if (data.hasOwnProperty('activeCampaigns')) {
          obj['activeCampaigns'] = _ApiClient["default"].convertToType(data['activeCampaigns'], 'Number');
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], 'Number');
        }

        if (data.hasOwnProperty('referralCodes')) {
          obj['referralCodes'] = _ApiClient["default"].convertToType(data['referralCodes'], 'Number');
        }

        if (data.hasOwnProperty('activeRules')) {
          obj['activeRules'] = _ApiClient["default"].convertToType(data['activeRules'], 'Number');
        }

        if (data.hasOwnProperty('liveLoyaltyPrograms')) {
          obj['liveLoyaltyPrograms'] = _ApiClient["default"].convertToType(data['liveLoyaltyPrograms'], 'Number');
        }

        if (data.hasOwnProperty('sandboxLoyaltyPrograms')) {
          obj['sandboxLoyaltyPrograms'] = _ApiClient["default"].convertToType(data['sandboxLoyaltyPrograms'], 'Number');
        }

        if (data.hasOwnProperty('webhooks')) {
          obj['webhooks'] = _ApiClient["default"].convertToType(data['webhooks'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], 'Number');
        }

        if (data.hasOwnProperty('apiVolume')) {
          obj['apiVolume'] = _ApiClient["default"].convertToType(data['apiVolume'], 'Number');
        }

        if (data.hasOwnProperty('promotionTypes')) {
          obj['promotionTypes'] = _ApiClient["default"].convertToType(data['promotionTypes'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AccountLimits;
}();
/**
 * Total number of allowed live applications in the account
 * @member {Number} liveApplications
 */


AccountLimits.prototype['liveApplications'] = undefined;
/**
 * Total number of allowed sandbox applications in the account
 * @member {Number} sandboxApplications
 */

AccountLimits.prototype['sandboxApplications'] = undefined;
/**
 * Total number of allowed active campaigns in live applications in the account
 * @member {Number} activeCampaigns
 */

AccountLimits.prototype['activeCampaigns'] = undefined;
/**
 * Total number of allowed coupons in the account
 * @member {Number} coupons
 */

AccountLimits.prototype['coupons'] = undefined;
/**
 * Total number of allowed referral codes in the account
 * @member {Number} referralCodes
 */

AccountLimits.prototype['referralCodes'] = undefined;
/**
 * Total number of allowed active rulesets in the account
 * @member {Number} activeRules
 */

AccountLimits.prototype['activeRules'] = undefined;
/**
 * Total number of allowed live loyalty programs in the account
 * @member {Number} liveLoyaltyPrograms
 */

AccountLimits.prototype['liveLoyaltyPrograms'] = undefined;
/**
 * Total number of allowed sandbox loyalty programs in the account
 * @member {Number} sandboxLoyaltyPrograms
 */

AccountLimits.prototype['sandboxLoyaltyPrograms'] = undefined;
/**
 * Total number of allowed webhooks in the account
 * @member {Number} webhooks
 */

AccountLimits.prototype['webhooks'] = undefined;
/**
 * Total number of allowed users in the account
 * @member {Number} users
 */

AccountLimits.prototype['users'] = undefined;
/**
 * Allowed volume of API requests to the account
 * @member {Number} apiVolume
 */

AccountLimits.prototype['apiVolume'] = undefined;
/**
 * Array of promotion types that are employed in the account
 * @member {Array.<String>} promotionTypes
 */

AccountLimits.prototype['promotionTypes'] = undefined;
var _default = AccountLimits;
exports["default"] = _default;