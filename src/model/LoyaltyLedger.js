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
import LoyaltySubLedger from './LoyaltySubLedger';

/**
 * The LoyaltyLedger model module.
 * @module model/LoyaltyLedger
 * @version 4.0.0
 */
class LoyaltyLedger {
    /**
     * Constructs a new <code>LoyaltyLedger</code>.
     * Ledger of Balance in Loyalty Program for a Customer
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
 * A map containing a list of all loyalty subledger balances
 * @member {Object.<String, module:model/LoyaltySubLedger>} subLedgers
 */
LoyaltyLedger.prototype['subLedgers'] = undefined;






export default LoyaltyLedger;

