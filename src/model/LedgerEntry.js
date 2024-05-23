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
 * The LedgerEntry model module.
 * @module model/LedgerEntry
 * @version 7.0.0
 */
class LedgerEntry {
    /**
     * Constructs a new <code>LedgerEntry</code>.
     * 
     * @alias module:model/LedgerEntry
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param profileId {String} ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
     * @param accountId {Number} The ID of the Talon.One account that owns this profile.
     * @param loyaltyProgramId {Number} ID of the ledger.
     * @param eventId {Number} ID of the related event.
     * @param amount {Number} Amount of loyalty points.
     * @param reason {String} reason for awarding/deducting points.
     * @param expiryDate {Date} Expiration date of the points.
     */
    constructor(id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate) { 
        
        LedgerEntry.initialize(this, id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['profileId'] = profileId;
        obj['accountId'] = accountId;
        obj['loyaltyProgramId'] = loyaltyProgramId;
        obj['eventId'] = eventId;
        obj['amount'] = amount;
        obj['reason'] = reason;
        obj['expiryDate'] = expiryDate;
    }

    /**
     * Constructs a <code>LedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LedgerEntry} obj Optional instance to populate.
     * @return {module:model/LedgerEntry} The populated <code>LedgerEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LedgerEntry();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('loyaltyProgramId')) {
                obj['loyaltyProgramId'] = ApiClient.convertToType(data['loyaltyProgramId'], 'Number');
            }
            if (data.hasOwnProperty('eventId')) {
                obj['eventId'] = ApiClient.convertToType(data['eventId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
LedgerEntry.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
LedgerEntry.prototype['created'] = undefined;

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
LedgerEntry.prototype['profileId'] = undefined;

/**
 * The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */
LedgerEntry.prototype['accountId'] = undefined;

/**
 * ID of the ledger.
 * @member {Number} loyaltyProgramId
 */
LedgerEntry.prototype['loyaltyProgramId'] = undefined;

/**
 * ID of the related event.
 * @member {Number} eventId
 */
LedgerEntry.prototype['eventId'] = undefined;

/**
 * Amount of loyalty points.
 * @member {Number} amount
 */
LedgerEntry.prototype['amount'] = undefined;

/**
 * reason for awarding/deducting points.
 * @member {String} reason
 */
LedgerEntry.prototype['reason'] = undefined;

/**
 * Expiration date of the points.
 * @member {Date} expiryDate
 */
LedgerEntry.prototype['expiryDate'] = undefined;

/**
 * The ID of the balancing ledgerEntry.
 * @member {Number} referenceId
 */
LedgerEntry.prototype['referenceId'] = undefined;






export default LedgerEntry;

