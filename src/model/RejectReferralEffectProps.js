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
 * The RejectReferralEffectProps model module.
 * @module model/RejectReferralEffectProps
 * @version 10.0.0
 */
class RejectReferralEffectProps {
    /**
     * Constructs a new <code>RejectReferralEffectProps</code>.
     * The properties specific to the \&quot;rejectReferral\&quot; effect. This gets triggered whenever the referral code was rejected. See rejectionReason for more info on why.
     * @alias module:model/RejectReferralEffectProps
     * @param value {String} The referral code that was rejected.
     * @param rejectionReason {String} The reason why this referral code was rejected.
     */
    constructor(value, rejectionReason) { 
        
        RejectReferralEffectProps.initialize(this, value, rejectionReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, rejectionReason) { 
        obj['value'] = value;
        obj['rejectionReason'] = rejectionReason;
    }

    /**
     * Constructs a <code>RejectReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RejectReferralEffectProps} The populated <code>RejectReferralEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RejectReferralEffectProps();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('rejectionReason')) {
                obj['rejectionReason'] = ApiClient.convertToType(data['rejectionReason'], 'String');
            }
            if (data.hasOwnProperty('conditionIndex')) {
                obj['conditionIndex'] = ApiClient.convertToType(data['conditionIndex'], 'Number');
            }
            if (data.hasOwnProperty('effectIndex')) {
                obj['effectIndex'] = ApiClient.convertToType(data['effectIndex'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('campaignExclusionReason')) {
                obj['campaignExclusionReason'] = ApiClient.convertToType(data['campaignExclusionReason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The referral code that was rejected.
 * @member {String} value
 */
RejectReferralEffectProps.prototype['value'] = undefined;

/**
 * The reason why this referral code was rejected.
 * @member {String} rejectionReason
 */
RejectReferralEffectProps.prototype['rejectionReason'] = undefined;

/**
 * The index of the condition that caused the rejection of the referral.
 * @member {Number} conditionIndex
 */
RejectReferralEffectProps.prototype['conditionIndex'] = undefined;

/**
 * The index of the effect that caused the rejection of the referral.
 * @member {Number} effectIndex
 */
RejectReferralEffectProps.prototype['effectIndex'] = undefined;

/**
 * More details about the failure.
 * @member {String} details
 */
RejectReferralEffectProps.prototype['details'] = undefined;

/**
 * The reason why the campaign was not applied.
 * @member {String} campaignExclusionReason
 */
RejectReferralEffectProps.prototype['campaignExclusionReason'] = undefined;






export default RejectReferralEffectProps;

