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
import LedgerInfo from './LedgerInfo';
import LoyaltyCardProfileRegistration from './LoyaltyCardProfileRegistration';

/**
 * The LoyaltyCard model module.
 * @module model/LoyaltyCard
 * @version 11.0.0
 */
class LoyaltyCard {
    /**
     * Constructs a new <code>LoyaltyCard</code>.
     * @alias module:model/LoyaltyCard
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param programID {Number} The ID of the loyalty program that owns this entity.
     * @param status {String} Status of the loyalty card. Can be `active` or `inactive`. 
     * @param identifier {String} The alphanumeric identifier of the loyalty card. 
     * @param usersPerCardLimit {Number} The max amount of customer profiles that can be linked to the card. 0 means unlimited. 
     */
    constructor(id, created, programID, status, identifier, usersPerCardLimit) { 
        
        LoyaltyCard.initialize(this, id, created, programID, status, identifier, usersPerCardLimit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, programID, status, identifier, usersPerCardLimit) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['programID'] = programID;
        obj['status'] = status;
        obj['identifier'] = identifier;
        obj['usersPerCardLimit'] = usersPerCardLimit;
    }

    /**
     * Constructs a <code>LoyaltyCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyCard} obj Optional instance to populate.
     * @return {module:model/LoyaltyCard} The populated <code>LoyaltyCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('programID')) {
                obj['programID'] = ApiClient.convertToType(data['programID'], 'Number');
            }
            if (data.hasOwnProperty('programName')) {
                obj['programName'] = ApiClient.convertToType(data['programName'], 'String');
            }
            if (data.hasOwnProperty('programTitle')) {
                obj['programTitle'] = ApiClient.convertToType(data['programTitle'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('blockReason')) {
                obj['blockReason'] = ApiClient.convertToType(data['blockReason'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('usersPerCardLimit')) {
                obj['usersPerCardLimit'] = ApiClient.convertToType(data['usersPerCardLimit'], 'Number');
            }
            if (data.hasOwnProperty('profiles')) {
                obj['profiles'] = ApiClient.convertToType(data['profiles'], [LoyaltyCardProfileRegistration]);
            }
            if (data.hasOwnProperty('ledger')) {
                obj['ledger'] = LedgerInfo.constructFromObject(data['ledger']);
            }
            if (data.hasOwnProperty('subledgers')) {
                obj['subledgers'] = ApiClient.convertToType(data['subledgers'], {'String': LedgerInfo});
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('oldCardIdentifier')) {
                obj['oldCardIdentifier'] = ApiClient.convertToType(data['oldCardIdentifier'], 'String');
            }
            if (data.hasOwnProperty('newCardIdentifier')) {
                obj['newCardIdentifier'] = ApiClient.convertToType(data['newCardIdentifier'], 'String');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
LoyaltyCard.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
LoyaltyCard.prototype['created'] = undefined;

/**
 * The ID of the loyalty program that owns this entity.
 * @member {Number} programID
 */
LoyaltyCard.prototype['programID'] = undefined;

/**
 * The integration name of the loyalty program that owns this entity.
 * @member {String} programName
 */
LoyaltyCard.prototype['programName'] = undefined;

/**
 * The Campaign Manager-displayed name of the loyalty program that owns this entity.
 * @member {String} programTitle
 */
LoyaltyCard.prototype['programTitle'] = undefined;

/**
 * Status of the loyalty card. Can be `active` or `inactive`. 
 * @member {String} status
 */
LoyaltyCard.prototype['status'] = undefined;

/**
 * Reason for transferring and blocking the loyalty card. 
 * @member {String} blockReason
 */
LoyaltyCard.prototype['blockReason'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} identifier
 */
LoyaltyCard.prototype['identifier'] = undefined;

/**
 * The max amount of customer profiles that can be linked to the card. 0 means unlimited. 
 * @member {Number} usersPerCardLimit
 */
LoyaltyCard.prototype['usersPerCardLimit'] = undefined;

/**
 * Integration IDs of the customers profiles linked to the card.
 * @member {Array.<module:model/LoyaltyCardProfileRegistration>} profiles
 */
LoyaltyCard.prototype['profiles'] = undefined;

/**
 * @member {module:model/LedgerInfo} ledger
 */
LoyaltyCard.prototype['ledger'] = undefined;

/**
 * Displays point balances of the card in the subledgers of the loyalty program.
 * @member {Object.<String, module:model/LedgerInfo>} subledgers
 */
LoyaltyCard.prototype['subledgers'] = undefined;

/**
 * Timestamp of the most recent update of the loyalty card.
 * @member {Date} modified
 */
LoyaltyCard.prototype['modified'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} oldCardIdentifier
 */
LoyaltyCard.prototype['oldCardIdentifier'] = undefined;

/**
 * The alphanumeric identifier of the loyalty card. 
 * @member {String} newCardIdentifier
 */
LoyaltyCard.prototype['newCardIdentifier'] = undefined;

/**
 * The ID of the batch in which the loyalty card was created.
 * @member {String} batchId
 */
LoyaltyCard.prototype['batchId'] = undefined;






export default LoyaltyCard;

