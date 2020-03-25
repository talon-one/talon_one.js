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
 * The CouponRejectionReason model module.
 * @module model/CouponRejectionReason
 * @version 4.0.0
 */
var CouponRejectionReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponRejectionReason</code>.
   * Holds a reference to the campaign, the coupon and the reason for which that coupon was rejected. Should only be present when there is a &#39;rejectCoupon&#39; effect.
   * @alias module:model/CouponRejectionReason
   * @param campaignId {Number} 
   * @param couponId {Number} 
   * @param reason {module:model/CouponRejectionReason.ReasonEnum} 
   */
  function CouponRejectionReason(campaignId, couponId, reason) {
    _classCallCheck(this, CouponRejectionReason);

    CouponRejectionReason.initialize(this, campaignId, couponId, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponRejectionReason, null, [{
    key: "initialize",
    value: function initialize(obj, campaignId, couponId, reason) {
      obj['campaignId'] = campaignId;
      obj['couponId'] = couponId;
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>CouponRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponRejectionReason} obj Optional instance to populate.
     * @return {module:model/CouponRejectionReason} The populated <code>CouponRejectionReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponRejectionReason();

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('couponId')) {
          obj['couponId'] = _ApiClient["default"].convertToType(data['couponId'], 'Number');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CouponRejectionReason;
}();
/**
 * @member {Number} campaignId
 */


CouponRejectionReason.prototype['campaignId'] = undefined;
/**
 * @member {Number} couponId
 */

CouponRejectionReason.prototype['couponId'] = undefined;
/**
 * @member {module:model/CouponRejectionReason.ReasonEnum} reason
 */

CouponRejectionReason.prototype['reason'] = undefined;
/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */

CouponRejectionReason['ReasonEnum'] = {
  /**
   * value: "CouponNotFound"
   * @const
   */
  "CouponNotFound": "CouponNotFound",

  /**
   * value: "CouponPartOfNotRunningCampaign"
   * @const
   */
  "CouponPartOfNotRunningCampaign": "CouponPartOfNotRunningCampaign",

  /**
   * value: "CouponValidConditionMissing"
   * @const
   */
  "CouponValidConditionMissing": "CouponValidConditionMissing",

  /**
   * value: "CouponLimitReached"
   * @const
   */
  "CouponLimitReached": "CouponLimitReached",

  /**
   * value: "CampaignLimitReached"
   * @const
   */
  "CampaignLimitReached": "CampaignLimitReached",

  /**
   * value: "ProfileLimitReached"
   * @const
   */
  "ProfileLimitReached": "ProfileLimitReached",

  /**
   * value: "CouponRecipientDoesNotMatch"
   * @const
   */
  "CouponRecipientDoesNotMatch": "CouponRecipientDoesNotMatch",

  /**
   * value: "CouponExpired"
   * @const
   */
  "CouponExpired": "CouponExpired",

  /**
   * value: "CouponStartDateInFuture"
   * @const
   */
  "CouponStartDateInFuture": "CouponStartDateInFuture",

  /**
   * value: "CouponRejectedByCondition"
   * @const
   */
  "CouponRejectedByCondition": "CouponRejectedByCondition",

  /**
   * value: "EffectCouldNotBeApplied"
   * @const
   */
  "EffectCouldNotBeApplied": "EffectCouldNotBeApplied"
};
var _default = CouponRejectionReason;
exports["default"] = _default;