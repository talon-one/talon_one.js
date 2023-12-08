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
 * The NewReferral model module.
 * @module model/NewReferral
 * @version 6.0.0
 */
class NewReferral {
    /**
     * Constructs a new <code>NewReferral</code>.
     * 
     * @alias module:model/NewReferral
     * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationId {String} The Integration ID of the Advocate's Profile.
     */
    constructor(campaignId, advocateProfileIntegrationId) { 
        
        NewReferral.initialize(this, campaignId, advocateProfileIntegrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaignId, advocateProfileIntegrationId) { 
        obj['campaignId'] = campaignId;
        obj['advocateProfileIntegrationId'] = advocateProfileIntegrationId;
    }

    /**
     * Constructs a <code>NewReferral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReferral} obj Optional instance to populate.
     * @return {module:model/NewReferral} The populated <code>NewReferral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewReferral();

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('usageLimit')) {
                obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('advocateProfileIntegrationId')) {
                obj['advocateProfileIntegrationId'] = ApiClient.convertToType(data['advocateProfileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('friendProfileIntegrationId')) {
                obj['friendProfileIntegrationId'] = ApiClient.convertToType(data['friendProfileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */
NewReferral.prototype['startDate'] = undefined;

/**
 * Expiration date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
NewReferral.prototype['expiryDate'] = undefined;

/**
 * The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
NewReferral.prototype['usageLimit'] = undefined;

/**
 * ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */
NewReferral.prototype['campaignId'] = undefined;

/**
 * The Integration ID of the Advocate's Profile.
 * @member {String} advocateProfileIntegrationId
 */
NewReferral.prototype['advocateProfileIntegrationId'] = undefined;

/**
 * An optional Integration ID of the Friend's Profile.
 * @member {String} friendProfileIntegrationId
 */
NewReferral.prototype['friendProfileIntegrationId'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
NewReferral.prototype['attributes'] = undefined;






export default NewReferral;

