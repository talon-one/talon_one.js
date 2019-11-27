/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.ReferralRejectionReason = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReferralRejectionReason model module.
   * @module model/ReferralRejectionReason
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>ReferralRejectionReason</code>.
   * Holds a reference to the campaign, the referral and the reason for which that referral was rejected. Should only be present when there is a &#39;rejectReferral&#39; effect.
   * @alias module:model/ReferralRejectionReason
   * @class
   * @param campaignId {Number} 
   * @param referralId {Number} 
   * @param reason {module:model/ReferralRejectionReason.ReasonEnum} 
   */
  var exports = function(campaignId, referralId, reason) {
    var _this = this;

    _this['campaignId'] = campaignId;
    _this['referralId'] = referralId;
    _this['reason'] = reason;
  };

  /**
   * Constructs a <code>ReferralRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferralRejectionReason} obj Optional instance to populate.
   * @return {module:model/ReferralRejectionReason} The populated <code>ReferralRejectionReason</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
      }
      if (data.hasOwnProperty('referralId')) {
        obj['referralId'] = ApiClient.convertToType(data['referralId'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * @member {Number} referralId
   */
  exports.prototype['referralId'] = undefined;
  /**
   * @member {module:model/ReferralRejectionReason.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
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
     * value: "ReferralValidConditionMissing"
     * @const
     */
    "ReferralValidConditionMissing": "ReferralValidConditionMissing",
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
    "EffectCouldNotBeApplied": "EffectCouldNotBeApplied"  };


  return exports;
}));


