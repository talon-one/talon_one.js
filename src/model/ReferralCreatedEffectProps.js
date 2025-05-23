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
 * The ReferralCreatedEffectProps model module.
 * @module model/ReferralCreatedEffectProps
 * @version 12.0.0
 */
class ReferralCreatedEffectProps {
    /**
     * Constructs a new <code>ReferralCreatedEffectProps</code>.
     * The properties specific to the \&quot;referralCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create referral\&quot; effect, and a referral code was created for a customer. See \&quot;createdReferrals\&quot; on the response for all details of this referral code.
     * @alias module:model/ReferralCreatedEffectProps
     * @param value {String} The referral code that was created.
     */
    constructor(value) { 
        
        ReferralCreatedEffectProps.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ReferralCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/ReferralCreatedEffectProps} The populated <code>ReferralCreatedEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferralCreatedEffectProps();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The referral code that was created.
 * @member {String} value
 */
ReferralCreatedEffectProps.prototype['value'] = undefined;






export default ReferralCreatedEffectProps;

