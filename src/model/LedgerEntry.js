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
 * The LedgerEntry model module.
 * @module model/LedgerEntry
 * @version 4.3.0
 */
class LedgerEntry {
    /**
     * Constructs a new <code>LedgerEntry</code>.
     * 
     * @alias module:model/LedgerEntry
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
     * @param accountId {Number} The ID of the Talon.One account that owns this profile.
     * @param loyaltyProgramId {Number} ID of the ledger
     * @param eventId {Number} ID of the related event
     * @param amount {Number} Amount of loyalty points
     * @param reason {String} reason for awarding/deducting points
     * @param expiryDate {Date} Expiry date of the points
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
 * Unique ID for this entity.
 * @member {Number} id
 */
LedgerEntry.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
LedgerEntry.prototype['created'] = undefined;

/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */
LedgerEntry.prototype['profileId'] = undefined;

/**
 * The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */
LedgerEntry.prototype['accountId'] = undefined;

/**
 * ID of the ledger
 * @member {Number} loyaltyProgramId
 */
LedgerEntry.prototype['loyaltyProgramId'] = undefined;

/**
 * ID of the related event
 * @member {Number} eventId
 */
LedgerEntry.prototype['eventId'] = undefined;

/**
 * Amount of loyalty points
 * @member {Number} amount
 */
LedgerEntry.prototype['amount'] = undefined;

/**
 * reason for awarding/deducting points
 * @member {String} reason
 */
LedgerEntry.prototype['reason'] = undefined;

/**
 * Expiry date of the points
 * @member {Date} expiryDate
 */
LedgerEntry.prototype['expiryDate'] = undefined;

/**
 * The ID of the balancing ledgerEntry
 * @member {Number} referenceId
 */
LedgerEntry.prototype['referenceId'] = undefined;






export default LedgerEntry;

