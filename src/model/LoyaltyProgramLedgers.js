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

/**
 * The LoyaltyProgramLedgers model module.
 * @module model/LoyaltyProgramLedgers
 * @version 12.0.0
 */
class LoyaltyProgramLedgers {
    /**
     * Constructs a new <code>LoyaltyProgramLedgers</code>.
     * Customer-specific information about loyalty points.
     * @alias module:model/LoyaltyProgramLedgers
     * @param id {Number} The internal ID of loyalty program.
     * @param title {String} Visible name of loyalty program.
     * @param name {String} Internal name of loyalty program.
     * @param ledger {module:model/LedgerInfo} 
     */
    constructor(id, title, name, ledger) { 
        
        LoyaltyProgramLedgers.initialize(this, id, title, name, ledger);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, name, ledger) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['name'] = name;
        obj['ledger'] = ledger;
    }

    /**
     * Constructs a <code>LoyaltyProgramLedgers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramLedgers} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramLedgers} The populated <code>LoyaltyProgramLedgers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyProgramLedgers();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('joinDate')) {
                obj['joinDate'] = ApiClient.convertToType(data['joinDate'], 'Date');
            }
            if (data.hasOwnProperty('ledger')) {
                obj['ledger'] = LedgerInfo.constructFromObject(data['ledger']);
            }
            if (data.hasOwnProperty('subLedgers')) {
                obj['subLedgers'] = ApiClient.convertToType(data['subLedgers'], {'String': LedgerInfo});
            }
        }
        return obj;
    }


}

/**
 * The internal ID of loyalty program.
 * @member {Number} id
 */
LoyaltyProgramLedgers.prototype['id'] = undefined;

/**
 * Visible name of loyalty program.
 * @member {String} title
 */
LoyaltyProgramLedgers.prototype['title'] = undefined;

/**
 * Internal name of loyalty program.
 * @member {String} name
 */
LoyaltyProgramLedgers.prototype['name'] = undefined;

/**
 * The date on which the customer joined the loyalty program in RFC3339.  **Note**: This is in the loyalty program's time zone. 
 * @member {Date} joinDate
 */
LoyaltyProgramLedgers.prototype['joinDate'] = undefined;

/**
 * @member {module:model/LedgerInfo} ledger
 */
LoyaltyProgramLedgers.prototype['ledger'] = undefined;

/**
 * A map containing information about each loyalty subledger.
 * @member {Object.<String, module:model/LedgerInfo>} subLedgers
 */
LoyaltyProgramLedgers.prototype['subLedgers'] = undefined;






export default LoyaltyProgramLedgers;

