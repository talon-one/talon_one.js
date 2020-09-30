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
 * The NewReferral model module.
 * @module model/NewReferral
 * @version 4.2.0
 */
class NewReferral {
    /**
     * Constructs a new <code>NewReferral</code>.
     * @alias module:model/NewReferral
     * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
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

            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('advocateProfileIntegrationId')) {
                obj['advocateProfileIntegrationId'] = ApiClient.convertToType(data['advocateProfileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('friendProfileIntegrationId')) {
                obj['friendProfileIntegrationId'] = ApiClient.convertToType(data['friendProfileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */
NewReferral.prototype['campaignId'] = undefined;

/**
 * The Integration Id of the Advocate's Profile
 * @member {String} advocateProfileIntegrationId
 */
NewReferral.prototype['advocateProfileIntegrationId'] = undefined;

/**
 * An optional Integration ID of the Friend's Profile
 * @member {String} friendProfileIntegrationId
 */
NewReferral.prototype['friendProfileIntegrationId'] = undefined;

/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */
NewReferral.prototype['startDate'] = undefined;

/**
 * Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
NewReferral.prototype['expiryDate'] = undefined;






export default NewReferral;

