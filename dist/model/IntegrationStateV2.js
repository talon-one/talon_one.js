"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Campaign = _interopRequireDefault(require("./Campaign"));

var _Coupon = _interopRequireDefault(require("./Coupon"));

var _CustomerProfile = _interopRequireDefault(require("./CustomerProfile"));

var _CustomerSessionV = _interopRequireDefault(require("./CustomerSessionV2"));

var _Effect = _interopRequireDefault(require("./Effect"));

var _Event = _interopRequireDefault(require("./Event"));

var _Loyalty = _interopRequireDefault(require("./Loyalty"));

var _Referral = _interopRequireDefault(require("./Referral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IntegrationStateV2 model module.
 * @module model/IntegrationStateV2
 * @version 4.2.0
 */
var IntegrationStateV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationStateV2</code>.
   * Contains all entities that might interest Talon.One integrations. This is the response type returned by the V2 PUT customer_session endpoint 
   * @alias module:model/IntegrationStateV2
   * @param effects {Array.<module:model/Effect>} 
   * @param createdCoupons {Array.<module:model/Coupon>} 
   * @param createdReferrals {Array.<module:model/Referral>} 
   */
  function IntegrationStateV2(effects, createdCoupons, createdReferrals) {
    _classCallCheck(this, IntegrationStateV2);

    IntegrationStateV2.initialize(this, effects, createdCoupons, createdReferrals);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationStateV2, null, [{
    key: "initialize",
    value: function initialize(obj, effects, createdCoupons, createdReferrals) {
      obj['effects'] = effects;
      obj['createdCoupons'] = createdCoupons;
      obj['createdReferrals'] = createdReferrals;
    }
    /**
     * Constructs a <code>IntegrationStateV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationStateV2} obj Optional instance to populate.
     * @return {module:model/IntegrationStateV2} The populated <code>IntegrationStateV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationStateV2();

        if (data.hasOwnProperty('customerSession')) {
          obj['customerSession'] = _CustomerSessionV["default"].constructFromObject(data['customerSession']);
        }

        if (data.hasOwnProperty('customerProfile')) {
          obj['customerProfile'] = _CustomerProfile["default"].constructFromObject(data['customerProfile']);
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _Event["default"].constructFromObject(data['event']);
        }

        if (data.hasOwnProperty('loyalty')) {
          obj['loyalty'] = _Loyalty["default"].constructFromObject(data['loyalty']);
        }

        if (data.hasOwnProperty('referral')) {
          obj['referral'] = _Referral["default"].constructFromObject(data['referral']);
        }

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], [_Coupon["default"]]);
        }

        if (data.hasOwnProperty('triggeredCampaigns')) {
          obj['triggeredCampaigns'] = _ApiClient["default"].convertToType(data['triggeredCampaigns'], [_Campaign["default"]]);
        }

        if (data.hasOwnProperty('effects')) {
          obj['effects'] = _ApiClient["default"].convertToType(data['effects'], [_Effect["default"]]);
        }

        if (data.hasOwnProperty('createdCoupons')) {
          obj['createdCoupons'] = _ApiClient["default"].convertToType(data['createdCoupons'], [_Coupon["default"]]);
        }

        if (data.hasOwnProperty('createdReferrals')) {
          obj['createdReferrals'] = _ApiClient["default"].convertToType(data['createdReferrals'], [_Referral["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IntegrationStateV2;
}();
/**
 * @member {module:model/CustomerSessionV2} customerSession
 */


IntegrationStateV2.prototype['customerSession'] = undefined;
/**
 * @member {module:model/CustomerProfile} customerProfile
 */

IntegrationStateV2.prototype['customerProfile'] = undefined;
/**
 * @member {module:model/Event} event
 */

IntegrationStateV2.prototype['event'] = undefined;
/**
 * @member {module:model/Loyalty} loyalty
 */

IntegrationStateV2.prototype['loyalty'] = undefined;
/**
 * @member {module:model/Referral} referral
 */

IntegrationStateV2.prototype['referral'] = undefined;
/**
 * @member {Array.<module:model/Coupon>} coupons
 */

IntegrationStateV2.prototype['coupons'] = undefined;
/**
 * @member {Array.<module:model/Campaign>} triggeredCampaigns
 */

IntegrationStateV2.prototype['triggeredCampaigns'] = undefined;
/**
 * @member {Array.<module:model/Effect>} effects
 */

IntegrationStateV2.prototype['effects'] = undefined;
/**
 * @member {Array.<module:model/Coupon>} createdCoupons
 */

IntegrationStateV2.prototype['createdCoupons'] = undefined;
/**
 * @member {Array.<module:model/Referral>} createdReferrals
 */

IntegrationStateV2.prototype['createdReferrals'] = undefined;
var _default = IntegrationStateV2;
exports["default"] = _default;