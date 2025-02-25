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
 * The LoyaltyProgramTransaction model module.
 * @module model/LoyaltyProgramTransaction
 * @version 11.0.0
 */
class LoyaltyProgramTransaction {
    /**
     * Constructs a new <code>LoyaltyProgramTransaction</code>.
     * @alias module:model/LoyaltyProgramTransaction
     * @param id {Number} ID of the loyalty ledger transaction.
     * @param programId {Number} ID of the loyalty program.
     * @param created {Date} Date and time the loyalty transaction occurred.
     * @param type {module:model/LoyaltyProgramTransaction.TypeEnum} Type of transaction. Possible values:   - `addition`: Signifies added points.   - `subtraction`: Signifies deducted points. 
     * @param amount {Number} Amount of loyalty points added or deducted in the transaction.
     * @param name {String} Name or reason for the loyalty ledger transaction.
     * @param startDate {String} When points become active. Possible values:   - `immediate`: Points are immediately active.   - a timestamp value: Points become active at a given date and time. 
     * @param expiryDate {String} When points expire. Possible values:   - `unlimited`: Points have no expiration date.   - a timestamp value: Points expire at a given date and time. 
     * @param subledgerId {String} ID of the subledger.
     */
    constructor(id, programId, created, type, amount, name, startDate, expiryDate, subledgerId) { 
        
        LoyaltyProgramTransaction.initialize(this, id, programId, created, type, amount, name, startDate, expiryDate, subledgerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, programId, created, type, amount, name, startDate, expiryDate, subledgerId) { 
        obj['id'] = id;
        obj['programId'] = programId;
        obj['created'] = created;
        obj['type'] = type;
        obj['amount'] = amount;
        obj['name'] = name;
        obj['startDate'] = startDate;
        obj['expiryDate'] = expiryDate;
        obj['subledgerId'] = subledgerId;
    }

    /**
     * Constructs a <code>LoyaltyProgramTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramTransaction} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramTransaction} The populated <code>LoyaltyProgramTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyProgramTransaction();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
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
            if (data.hasOwnProperty('customerProfileId')) {
                obj['customerProfileId'] = ApiClient.convertToType(data['customerProfileId'], 'String');
            }
            if (data.hasOwnProperty('cardIdentifier')) {
                obj['cardIdentifier'] = ApiClient.convertToType(data['cardIdentifier'], 'String');
            }
            if (data.hasOwnProperty('subledgerId')) {
                obj['subledgerId'] = ApiClient.convertToType(data['subledgerId'], 'String');
            }
            if (data.hasOwnProperty('customerSessionId')) {
                obj['customerSessionId'] = ApiClient.convertToType(data['customerSessionId'], 'String');
            }
            if (data.hasOwnProperty('importId')) {
                obj['importId'] = ApiClient.convertToType(data['importId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('userEmail')) {
                obj['userEmail'] = ApiClient.convertToType(data['userEmail'], 'String');
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
 * ID of the loyalty ledger transaction.
 * @member {Number} id
 */
LoyaltyProgramTransaction.prototype['id'] = undefined;

/**
 * ID of the loyalty program.
 * @member {Number} programId
 */
LoyaltyProgramTransaction.prototype['programId'] = undefined;

/**
 * ID of the campaign.
 * @member {Number} campaignId
 */
LoyaltyProgramTransaction.prototype['campaignId'] = undefined;

/**
 * Date and time the loyalty transaction occurred.
 * @member {Date} created
 */
LoyaltyProgramTransaction.prototype['created'] = undefined;

/**
 * Type of transaction. Possible values:   - `addition`: Signifies added points.   - `subtraction`: Signifies deducted points. 
 * @member {module:model/LoyaltyProgramTransaction.TypeEnum} type
 */
LoyaltyProgramTransaction.prototype['type'] = undefined;

/**
 * Amount of loyalty points added or deducted in the transaction.
 * @member {Number} amount
 */
LoyaltyProgramTransaction.prototype['amount'] = undefined;

/**
 * Name or reason for the loyalty ledger transaction.
 * @member {String} name
 */
LoyaltyProgramTransaction.prototype['name'] = undefined;

/**
 * When points become active. Possible values:   - `immediate`: Points are immediately active.   - a timestamp value: Points become active at a given date and time. 
 * @member {String} startDate
 */
LoyaltyProgramTransaction.prototype['startDate'] = undefined;

/**
 * When points expire. Possible values:   - `unlimited`: Points have no expiration date.   - a timestamp value: Points expire at a given date and time. 
 * @member {String} expiryDate
 */
LoyaltyProgramTransaction.prototype['expiryDate'] = undefined;

/**
 * Customer profile integration ID used in the loyalty program.
 * @member {String} customerProfileId
 */
LoyaltyProgramTransaction.prototype['customerProfileId'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} cardIdentifier
 */
LoyaltyProgramTransaction.prototype['cardIdentifier'] = undefined;

/**
 * ID of the subledger.
 * @member {String} subledgerId
 */
LoyaltyProgramTransaction.prototype['subledgerId'] = undefined;

/**
 * ID of the customer session where the transaction occurred.
 * @member {String} customerSessionId
 */
LoyaltyProgramTransaction.prototype['customerSessionId'] = undefined;

/**
 * ID of the import where the transaction occurred.
 * @member {Number} importId
 */
LoyaltyProgramTransaction.prototype['importId'] = undefined;

/**
 * ID of the user who manually added or deducted points. Applies only to manual transactions.
 * @member {Number} userId
 */
LoyaltyProgramTransaction.prototype['userId'] = undefined;

/**
 * The email of the Campaign Manager account that manually added or deducted points. Applies only to manual transactions.
 * @member {String} userEmail
 */
LoyaltyProgramTransaction.prototype['userEmail'] = undefined;

/**
 * ID of the ruleset containing the rule that triggered the effect. Applies only for transactions that resulted from a customer session.
 * @member {Number} rulesetId
 */
LoyaltyProgramTransaction.prototype['rulesetId'] = undefined;

/**
 * Name of the rule that triggered the effect. Applies only for transactions that resulted from a customer session.
 * @member {String} ruleName
 */
LoyaltyProgramTransaction.prototype['ruleName'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
LoyaltyProgramTransaction['TypeEnum'] = {

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



export default LoyaltyProgramTransaction;

