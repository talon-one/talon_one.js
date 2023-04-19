/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The NewReferralsForMultipleAdvocates model module.
 * @module model/NewReferralsForMultipleAdvocates
 * @version 5.0.0
 */
class NewReferralsForMultipleAdvocates {
    /**
     * Constructs a new <code>NewReferralsForMultipleAdvocates</code>.
     * 
     * @alias module:model/NewReferralsForMultipleAdvocates
     * @param usageLimit {Number} The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
     * @param campaignId {Number} The ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationIds {Array.<String>} An array containing all the respective advocate profiles.
     */
    constructor(usageLimit, campaignId, advocateProfileIntegrationIds) { 
        
        NewReferralsForMultipleAdvocates.initialize(this, usageLimit, campaignId, advocateProfileIntegrationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, usageLimit, campaignId, advocateProfileIntegrationIds) { 
        obj['usageLimit'] = usageLimit;
        obj['campaignId'] = campaignId;
        obj['advocateProfileIntegrationIds'] = advocateProfileIntegrationIds;
    }

    /**
     * Constructs a <code>NewReferralsForMultipleAdvocates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReferralsForMultipleAdvocates} obj Optional instance to populate.
     * @return {module:model/NewReferralsForMultipleAdvocates} The populated <code>NewReferralsForMultipleAdvocates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewReferralsForMultipleAdvocates();

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
            if (data.hasOwnProperty('advocateProfileIntegrationIds')) {
                obj['advocateProfileIntegrationIds'] = ApiClient.convertToType(data['advocateProfileIntegrationIds'], ['String']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('validCharacters')) {
                obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
            }
            if (data.hasOwnProperty('referralPattern')) {
                obj['referralPattern'] = ApiClient.convertToType(data['referralPattern'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */
NewReferralsForMultipleAdvocates.prototype['startDate'] = undefined;

/**
 * Expiration date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
NewReferralsForMultipleAdvocates.prototype['expiryDate'] = undefined;

/**
 * The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
NewReferralsForMultipleAdvocates.prototype['usageLimit'] = undefined;

/**
 * The ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */
NewReferralsForMultipleAdvocates.prototype['campaignId'] = undefined;

/**
 * An array containing all the respective advocate profiles.
 * @member {Array.<String>} advocateProfileIntegrationIds
 */
NewReferralsForMultipleAdvocates.prototype['advocateProfileIntegrationIds'] = undefined;

/**
 * Arbitrary properties associated with this referral code.
 * @member {Object} attributes
 */
NewReferralsForMultipleAdvocates.prototype['attributes'] = undefined;

/**
 * List of characters used to generate the random parts of a code. By default, the list of characters is equivalent to the `[A-Z, 0-9]` regular expression. 
 * @member {Array.<String>} validCharacters
 */
NewReferralsForMultipleAdvocates.prototype['validCharacters'] = undefined;

/**
 * The pattern used to generate referrals. The character `#` is a placeholder and is replaced by a random character from the `validCharacters` set. 
 * @member {String} referralPattern
 */
NewReferralsForMultipleAdvocates.prototype['referralPattern'] = undefined;






export default NewReferralsForMultipleAdvocates;

