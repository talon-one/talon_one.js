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
 * The CouponRejectionReason model module.
 * @module model/CouponRejectionReason
 * @version 6.0.0
 */
class CouponRejectionReason {
    /**
     * Constructs a new <code>CouponRejectionReason</code>.
     * Holds a reference to the campaign, the coupon and the reason for which that coupon was rejected. Should only be present when there is a &#39;rejectCoupon&#39; effect.
     * @alias module:model/CouponRejectionReason
     * @param campaignId {Number} 
     * @param couponId {Number} 
     * @param reason {module:model/CouponRejectionReason.ReasonEnum} 
     */
    constructor(campaignId, couponId, reason) { 
        
        CouponRejectionReason.initialize(this, campaignId, couponId, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, couponId, reason) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponRejectionReason();

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('couponId')) {
                obj['couponId'] = ApiClient.convertToType(data['couponId'], 'Number');
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
    "EffectCouldNotBeApplied": "EffectCouldNotBeApplied",

    /**
     * value: "CouponPartOfNotTriggeredCampaign"
     * @const
     */
    "CouponPartOfNotTriggeredCampaign": "CouponPartOfNotTriggeredCampaign",

    /**
     * value: "CouponReservationRequired"
     * @const
     */
    "CouponReservationRequired": "CouponReservationRequired",

    /**
     * value: "ProfileRequired"
     * @const
     */
    "ProfileRequired": "ProfileRequired"
};



export default CouponRejectionReason;

