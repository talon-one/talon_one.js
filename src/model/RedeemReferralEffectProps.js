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
 * The RedeemReferralEffectProps model module.
 * @module model/RedeemReferralEffectProps
 * @version 12.0.0
 */
class RedeemReferralEffectProps {
    /**
     * Constructs a new <code>RedeemReferralEffectProps</code>.
     * This effect is **deprecated**. The properties specific to the \&quot;redeemReferral\&quot; effect. This gets triggered whenever the referral code is valid, and a rule was triggered that contains a \&quot;redeem referral\&quot; effect. 
     * @alias module:model/RedeemReferralEffectProps
     * @param id {Number} The id of the referral code that was redeemed.
     * @param value {String} The referral code that was redeemed.
     */
    constructor(id, value) { 
        
        RedeemReferralEffectProps.initialize(this, id, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, value) { 
        obj['id'] = id;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RedeemReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeemReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RedeemReferralEffectProps} The populated <code>RedeemReferralEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedeemReferralEffectProps();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the referral code that was redeemed.
 * @member {Number} id
 */
RedeemReferralEffectProps.prototype['id'] = undefined;

/**
 * The referral code that was redeemed.
 * @member {String} value
 */
RedeemReferralEffectProps.prototype['value'] = undefined;






export default RedeemReferralEffectProps;

