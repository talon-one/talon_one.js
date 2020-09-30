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
 * The ReferralRejectionReason model module.
 * @module model/ReferralRejectionReason
 * @version 4.2.0
 */
var ReferralRejectionReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReferralRejectionReason</code>.
   * Holds a reference to the campaign, the referral and the reason for which that referral was rejected. Should only be present when there is a &#39;rejectReferral&#39; effect.
   * @alias module:model/ReferralRejectionReason
   * @param campaignId {Number} 
   * @param referralId {Number} 
   * @param reason {module:model/ReferralRejectionReason.ReasonEnum} 
   */
  function ReferralRejectionReason(campaignId, referralId, reason) {
    _classCallCheck(this, ReferralRejectionReason);

    ReferralRejectionReason.initialize(this, campaignId, referralId, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReferralRejectionReason, null, [{
    key: "initialize",
    value: function initialize(obj, campaignId, referralId, reason) {
      obj['campaignId'] = campaignId;
      obj['referralId'] = referralId;
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>ReferralRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralRejectionReason} obj Optional instance to populate.
     * @return {module:model/ReferralRejectionReason} The populated <code>ReferralRejectionReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReferralRejectionReason();

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('referralId')) {
          obj['referralId'] = _ApiClient["default"].convertToType(data['referralId'], 'Number');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReferralRejectionReason;
}();
/**
 * @member {Number} campaignId
 */


ReferralRejectionReason.prototype['campaignId'] = undefined;
/**
 * @member {Number} referralId
 */

ReferralRejectionReason.prototype['referralId'] = undefined;
/**
 * @member {module:model/ReferralRejectionReason.ReasonEnum} reason
 */

ReferralRejectionReason.prototype['reason'] = undefined;
/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */

ReferralRejectionReason['ReasonEnum'] = {
  /**
   * value: "ReferralNotFound"
   * @const
   */
  "ReferralNotFound": "ReferralNotFound",

  /**
   * value: "ReferralRecipientIdSameAsAdvocate"
   * @const
   */
  "ReferralRecipientIdSameAsAdvocate": "ReferralRecipientIdSameAsAdvocate",

  /**
   * value: "ReferralPartOfNotRunningCampaign"
   * @const
   */
  "ReferralPartOfNotRunningCampaign": "ReferralPartOfNotRunningCampaign",

  /**
   * value: "ReferralLimitReached"
   * @const
   */
  "ReferralLimitReached": "ReferralLimitReached",

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
   * value: "ReferralRecipientDoesNotMatch"
   * @const
   */
  "ReferralRecipientDoesNotMatch": "ReferralRecipientDoesNotMatch",

  /**
   * value: "ReferralExpired"
   * @const
   */
  "ReferralExpired": "ReferralExpired",

  /**
   * value: "ReferralStartDateInFuture"
   * @const
   */
  "ReferralStartDateInFuture": "ReferralStartDateInFuture",

  /**
   * value: "ReferralRejectedByCondition"
   * @const
   */
  "ReferralRejectedByCondition": "ReferralRejectedByCondition",

  /**
   * value: "EffectCouldNotBeApplied"
   * @const
   */
  "EffectCouldNotBeApplied": "EffectCouldNotBeApplied"
};
var _default = ReferralRejectionReason;
exports["default"] = _default;