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
 * The LoyaltyLedgerEntry model module.
 * @module model/LoyaltyLedgerEntry
 * @version 5.0.0
 */
class LoyaltyLedgerEntry {
    /**
     * Constructs a new <code>LoyaltyLedgerEntry</code>.
     * A single row of the ledger, describing one addition or deduction.
     * @alias module:model/LoyaltyLedgerEntry
     * @param created {Date} 
     * @param programID {Number} 
     * @param type {String} The type of the ledger transaction. Possible values are: - `addition` - `subtraction` - `expire` - `expiring` (for expiring points ledgers) 
     * @param amount {Number} 
     * @param name {String} A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
     * @param subLedgerID {String} This specifies if we are adding loyalty points to the main ledger or a subledger.
     */
    constructor(created, programID, type, amount, name, subLedgerID) { 
        
        LoyaltyLedgerEntry.initialize(this, created, programID, type, amount, name, subLedgerID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, created, programID, type, amount, name, subLedgerID) { 
        obj['created'] = created;
        obj['programID'] = programID;
        obj['type'] = type;
        obj['amount'] = amount;
        obj['name'] = name;
        obj['subLedgerID'] = subLedgerID;
    }

    /**
     * Constructs a <code>LoyaltyLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedgerEntry} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedgerEntry} The populated <code>LoyaltyLedgerEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyLedgerEntry();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('programID')) {
                obj['programID'] = ApiClient.convertToType(data['programID'], 'Number');
            }
            if (data.hasOwnProperty('customerProfileID')) {
                obj['customerProfileID'] = ApiClient.convertToType(data['customerProfileID'], 'String');
            }
            if (data.hasOwnProperty('cardID')) {
                obj['cardID'] = ApiClient.convertToType(data['cardID'], 'Number');
            }
            if (data.hasOwnProperty('customerSessionID')) {
                obj['customerSessionID'] = ApiClient.convertToType(data['customerSessionID'], 'String');
            }
            if (data.hasOwnProperty('eventID')) {
                obj['eventID'] = ApiClient.convertToType(data['eventID'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subLedgerID')) {
                obj['subLedgerID'] = ApiClient.convertToType(data['subLedgerID'], 'String');
            }
            if (data.hasOwnProperty('userID')) {
                obj['userID'] = ApiClient.convertToType(data['userID'], 'Number');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created
 */
LoyaltyLedgerEntry.prototype['created'] = undefined;

/**
 * @member {Number} programID
 */
LoyaltyLedgerEntry.prototype['programID'] = undefined;

/**
 * @member {String} customerProfileID
 */
LoyaltyLedgerEntry.prototype['customerProfileID'] = undefined;

/**
 * @member {Number} cardID
 */
LoyaltyLedgerEntry.prototype['cardID'] = undefined;

/**
 * @member {String} customerSessionID
 */
LoyaltyLedgerEntry.prototype['customerSessionID'] = undefined;

/**
 * @member {Number} eventID
 */
LoyaltyLedgerEntry.prototype['eventID'] = undefined;

/**
 * The type of the ledger transaction. Possible values are: - `addition` - `subtraction` - `expire` - `expiring` (for expiring points ledgers) 
 * @member {String} type
 */
LoyaltyLedgerEntry.prototype['type'] = undefined;

/**
 * @member {Number} amount
 */
LoyaltyLedgerEntry.prototype['amount'] = undefined;

/**
 * @member {Date} startDate
 */
LoyaltyLedgerEntry.prototype['startDate'] = undefined;

/**
 * @member {Date} expiryDate
 */
LoyaltyLedgerEntry.prototype['expiryDate'] = undefined;

/**
 * A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
 * @member {String} name
 */
LoyaltyLedgerEntry.prototype['name'] = undefined;

/**
 * This specifies if we are adding loyalty points to the main ledger or a subledger.
 * @member {String} subLedgerID
 */
LoyaltyLedgerEntry.prototype['subLedgerID'] = undefined;

/**
 * This is the ID of the user who created this entry, if the addition or subtraction was done manually.
 * @member {Number} userID
 */
LoyaltyLedgerEntry.prototype['userID'] = undefined;

/**
 * Indicates if the entry belongs to the archived session.
 * @member {Boolean} archived
 */
LoyaltyLedgerEntry.prototype['archived'] = undefined;






export default LoyaltyLedgerEntry;

