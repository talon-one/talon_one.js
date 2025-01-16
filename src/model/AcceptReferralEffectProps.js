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
 * The AcceptReferralEffectProps model module.
 * @module model/AcceptReferralEffectProps
 * @version 10.0.0
 */
class AcceptReferralEffectProps {
    /**
     * Constructs a new <code>AcceptReferralEffectProps</code>.
     * The properties specific to the \&quot;acceptReferral\&quot; effect. TThis gets triggered whenever the referral code is valid and all other conditions in the rules of its campaign are met.
     * @alias module:model/AcceptReferralEffectProps
     * @param value {String} The referral code that was accepted.
     */
    constructor(value) { 
        
        AcceptReferralEffectProps.initialize(this, value);
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
     * Constructs a <code>AcceptReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/AcceptReferralEffectProps} The populated <code>AcceptReferralEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AcceptReferralEffectProps();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The referral code that was accepted.
 * @member {String} value
 */
AcceptReferralEffectProps.prototype['value'] = undefined;






export default AcceptReferralEffectProps;

