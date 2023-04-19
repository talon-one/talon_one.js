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
 * The CardLedgerTransactionLogEntryIntegrationAPI model module.
 * @module model/CardLedgerTransactionLogEntryIntegrationAPI
 * @version 5.0.0
 */
class CardLedgerTransactionLogEntryIntegrationAPI {
    /**
     * Constructs a new <code>CardLedgerTransactionLogEntryIntegrationAPI</code>.
     * Log entry for a given loyalty card transaction.
     * @alias module:model/CardLedgerTransactionLogEntryIntegrationAPI
     * @param created {Date} Date and time the loyalty card transaction occurred.
     * @param programId {Number} ID of the loyalty program.
     * @param cardIdentifier {String} The alphanumeric identifier of the loyalty card. 
     * @param type {module:model/CardLedgerTransactionLogEntryIntegrationAPI.TypeEnum} Type of transaction. Possible values:   - `addition`: Signifies added points.   - `subtraction`: Signifies deducted points. 
     * @param name {String} Name or reason of the loyalty ledger transaction.
     * @param startDate {String} When points become active. Possible values:   - `immediate`: Points are active immediately.   - a timestamp value: Points become active at a given date and time. 
     * @param expiryDate {String} Date when points expire. Possible values are:   - `unlimited`: Points have no expiration date.   - `timestamp value`: Points expire on the given date. 
     * @param subledgerId {String} ID of the subledger.
     * @param amount {Number} Amount of loyalty points added or deducted in the transaction.
     * @param id {Number} ID of the loyalty ledger transaction.
     */
    constructor(created, programId, cardIdentifier, type, name, startDate, expiryDate, subledgerId, amount, id) { 
        
        CardLedgerTransactionLogEntryIntegrationAPI.initialize(this, created, programId, cardIdentifier, type, name, startDate, expiryDate, subledgerId, amount, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, created, programId, cardIdentifier, type, name, startDate, expiryDate, subledgerId, amount, id) { 
        obj['created'] = created;
        obj['programId'] = programId;
        obj['cardIdentifier'] = cardIdentifier;
        obj['type'] = type;
        obj['name'] = name;
        obj['startDate'] = startDate;
        obj['expiryDate'] = expiryDate;
        obj['subledgerId'] = subledgerId;
        obj['amount'] = amount;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>CardLedgerTransactionLogEntryIntegrationAPI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardLedgerTransactionLogEntryIntegrationAPI} obj Optional instance to populate.
     * @return {module:model/CardLedgerTransactionLogEntryIntegrationAPI} The populated <code>CardLedgerTransactionLogEntryIntegrationAPI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardLedgerTransactionLogEntryIntegrationAPI();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('cardIdentifier')) {
                obj['cardIdentifier'] = ApiClient.convertToType(data['cardIdentifier'], 'String');
            }
            if (data.hasOwnProperty('customerSessionId')) {
                obj['customerSessionId'] = ApiClient.convertToType(data['customerSessionId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'String');
            }
            if (data.hasOwnProperty('subledgerId')) {
                obj['subledgerId'] = ApiClient.convertToType(data['subledgerId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rulesetId')) {
                obj['rulesetId'] = ApiClient.convertToType(data['rulesetId'], 'Number');
            }
            if (data.hasOwnProperty('ruleName')) {
                obj['ruleName'] = ApiClient.convertToType(data['ruleName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time the loyalty card transaction occurred.
 * @member {Date} created
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['created'] = undefined;

/**
 * ID of the loyalty program.
 * @member {Number} programId
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['programId'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} cardIdentifier
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['cardIdentifier'] = undefined;

/**
 * ID of the customer session where the transaction occurred.
 * @member {String} customerSessionId
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['customerSessionId'] = undefined;

/**
 * Type of transaction. Possible values:   - `addition`: Signifies added points.   - `subtraction`: Signifies deducted points. 
 * @member {module:model/CardLedgerTransactionLogEntryIntegrationAPI.TypeEnum} type
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['type'] = undefined;

/**
 * Name or reason of the loyalty ledger transaction.
 * @member {String} name
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['name'] = undefined;

/**
 * When points become active. Possible values:   - `immediate`: Points are active immediately.   - a timestamp value: Points become active at a given date and time. 
 * @member {String} startDate
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['startDate'] = undefined;

/**
 * Date when points expire. Possible values are:   - `unlimited`: Points have no expiration date.   - `timestamp value`: Points expire on the given date. 
 * @member {String} expiryDate
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['expiryDate'] = undefined;

/**
 * ID of the subledger.
 * @member {String} subledgerId
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['subledgerId'] = undefined;

/**
 * Amount of loyalty points added or deducted in the transaction.
 * @member {Number} amount
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['amount'] = undefined;

/**
 * ID of the loyalty ledger transaction.
 * @member {Number} id
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['id'] = undefined;

/**
 * The ID of the ruleset containing the rule that triggered this effect.
 * @member {Number} rulesetId
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['rulesetId'] = undefined;

/**
 * The name of the rule that triggered this effect.
 * @member {String} ruleName
 */
CardLedgerTransactionLogEntryIntegrationAPI.prototype['ruleName'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CardLedgerTransactionLogEntryIntegrationAPI['TypeEnum'] = {

    /**
     * value: "addition"
     * @const
     */
    "addition": "addition",

    /**
     * value: "subtraction"
     * @const
     */
    "subtraction": "subtraction"
};



export default CardLedgerTransactionLogEntryIntegrationAPI;

