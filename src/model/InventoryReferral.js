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
 * The InventoryReferral model module.
 * @module model/InventoryReferral
 * @version 6.0.0
 */
class InventoryReferral {
    /**
     * Constructs a new <code>InventoryReferral</code>.
     * 
     * @alias module:model/InventoryReferral
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param usageLimit {Number} The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
     * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationId {String} The Integration ID of the Advocate's Profile.
     * @param code {String} The referral code.
     * @param usageCounter {Number} The number of times this referral code has been successfully used.
     * @param referredCustomers {Array.<String>} An array of referred customers.
     */
    constructor(id, created, usageLimit, campaignId, advocateProfileIntegrationId, code, usageCounter, referredCustomers) { 
        
        InventoryReferral.initialize(this, id, created, usageLimit, campaignId, advocateProfileIntegrationId, code, usageCounter, referredCustomers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, usageLimit, campaignId, advocateProfileIntegrationId, code, usageCounter, referredCustomers) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['usageLimit'] = usageLimit;
        obj['campaignId'] = campaignId;
        obj['advocateProfileIntegrationId'] = advocateProfileIntegrationId;
        obj['code'] = code;
        obj['usageCounter'] = usageCounter;
        obj['referredCustomers'] = referredCustomers;
    }

    /**
     * Constructs a <code>InventoryReferral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InventoryReferral} obj Optional instance to populate.
     * @return {module:model/InventoryReferral} The populated <code>InventoryReferral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InventoryReferral();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
            if (data.hasOwnProperty('importId')) {
                obj['importId'] = ApiClient.convertToType(data['importId'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('usageCounter')) {
                obj['usageCounter'] = ApiClient.convertToType(data['usageCounter'], 'Number');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('referredCustomers')) {
                obj['referredCustomers'] = ApiClient.convertToType(data['referredCustomers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
InventoryReferral.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
InventoryReferral.prototype['created'] = undefined;

/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */
InventoryReferral.prototype['startDate'] = undefined;

/**
 * Expiration date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
InventoryReferral.prototype['expiryDate'] = undefined;

/**
 * The number of times a referral code can be used. `0` means no limit but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
InventoryReferral.prototype['usageLimit'] = undefined;

/**
 * ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */
InventoryReferral.prototype['campaignId'] = undefined;

/**
 * The Integration ID of the Advocate's Profile.
 * @member {String} advocateProfileIntegrationId
 */
InventoryReferral.prototype['advocateProfileIntegrationId'] = undefined;

/**
 * An optional Integration ID of the Friend's Profile.
 * @member {String} friendProfileIntegrationId
 */
InventoryReferral.prototype['friendProfileIntegrationId'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
InventoryReferral.prototype['attributes'] = undefined;

/**
 * The ID of the Import which created this referral.
 * @member {Number} importId
 */
InventoryReferral.prototype['importId'] = undefined;

/**
 * The referral code.
 * @member {String} code
 */
InventoryReferral.prototype['code'] = undefined;

/**
 * The number of times this referral code has been successfully used.
 * @member {Number} usageCounter
 */
InventoryReferral.prototype['usageCounter'] = undefined;

/**
 * The ID of the batch the referrals belong to.
 * @member {String} batchId
 */
InventoryReferral.prototype['batchId'] = undefined;

/**
 * An array of referred customers.
 * @member {Array.<String>} referredCustomers
 */
InventoryReferral.prototype['referredCustomers'] = undefined;






export default InventoryReferral;

