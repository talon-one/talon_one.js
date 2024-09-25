/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReferralRejectionReason model module.
 * @module model/ReferralRejectionReason
 * @version 9.0.0
 */
class ReferralRejectionReason {
    /**
     * Constructs a new <code>ReferralRejectionReason</code>.
     * Holds a reference to the campaign, the referral and the reason for which that referral was rejected. Should only be present when there is a &#39;rejectReferral&#39; effect.
     * @alias module:model/ReferralRejectionReason
     * @param campaignId {Number} 
     * @param referralId {Number} 
     * @param reason {module:model/ReferralRejectionReason.ReasonEnum} 
     */
    constructor(campaignId, referralId, reason) { 
        
        ReferralRejectionReason.initialize(this, campaignId, referralId, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, referralId, reason) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferralRejectionReason();

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


}

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
    "EffectCouldNotBeApplied": "EffectCouldNotBeApplied",

    /**
     * value: "ReferralPartOfNotTriggeredCampaign"
     * @const
     */
    "ReferralPartOfNotTriggeredCampaign": "ReferralPartOfNotTriggeredCampaign"
};



export default ReferralRejectionReason;

