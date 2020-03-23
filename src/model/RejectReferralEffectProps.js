/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @version 1.0.0
 */
class RejectReferralEffectProps {
    /**
     * Constructs a new <code>RejectReferralEffectProps</code>.
     * The properties specific to the \&quot;rejectReferral\&quot; effect. This gets triggered whenever the referral code was rejected. See rejectionReason for more info on why.
     * @alias module:model/RejectReferralEffectProps
     * @param value {String} The referral code that was rejected
     * @param rejectionReason {String} The reason why this referral code was rejected
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
        }
        return obj;
    }


}

/**
 * The referral code that was rejected
 * @member {String} value
 */
RejectReferralEffectProps.prototype['value'] = undefined;

/**
 * The reason why this referral code was rejected
 * @member {String} rejectionReason
 */
RejectReferralEffectProps.prototype['rejectionReason'] = undefined;






export default RejectReferralEffectProps;
