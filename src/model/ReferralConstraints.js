/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The ReferralConstraints model module.
 * @module model/ReferralConstraints
 * @version 5.0.0
 */
class ReferralConstraints {
    /**
     * Constructs a new <code>ReferralConstraints</code>.
     * @alias module:model/ReferralConstraints
     */
    constructor() { 
        
        ReferralConstraints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferralConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralConstraints} obj Optional instance to populate.
     * @return {module:model/ReferralConstraints} The populated <code>ReferralConstraints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferralConstraints();

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('usageLimit')) {
                obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */
ReferralConstraints.prototype['startDate'] = undefined;

/**
 * Expiration date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
ReferralConstraints.prototype['expiryDate'] = undefined;

/**
 * The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
ReferralConstraints.prototype['usageLimit'] = undefined;






export default ReferralConstraints;

