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
import LoyaltySubLedger from './LoyaltySubLedger';

/**
 * The LoyaltyLedger model module.
 * @module model/LoyaltyLedger
 * @version 10.0.0
 */
class LoyaltyLedger {
    /**
     * Constructs a new <code>LoyaltyLedger</code>.
     * Ledger of Balance in Loyalty Program for a Customer.
     * @alias module:model/LoyaltyLedger
     * @param ledger {module:model/LoyaltySubLedger} 
     */
    constructor(ledger) { 
        
        LoyaltyLedger.initialize(this, ledger);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ledger) { 
        obj['ledger'] = ledger;
    }

    /**
     * Constructs a <code>LoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedger} The populated <code>LoyaltyLedger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyLedger();

            if (data.hasOwnProperty('ledger')) {
                obj['ledger'] = LoyaltySubLedger.constructFromObject(data['ledger']);
            }
            if (data.hasOwnProperty('subLedgers')) {
                obj['subLedgers'] = ApiClient.convertToType(data['subLedgers'], {'String': LoyaltySubLedger});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LoyaltySubLedger} ledger
 */
LoyaltyLedger.prototype['ledger'] = undefined;

/**
 * A map containing a list of all loyalty subledger balances.
 * @member {Object.<String, module:model/LoyaltySubLedger>} subLedgers
 */
LoyaltyLedger.prototype['subLedgers'] = undefined;






export default LoyaltyLedger;

