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
import LoyaltyBalanceWithTier from './LoyaltyBalanceWithTier';

/**
 * The LoyaltyBalancesWithTiers model module.
 * @module model/LoyaltyBalancesWithTiers
 * @version 10.0.0
 */
class LoyaltyBalancesWithTiers {
    /**
     * Constructs a new <code>LoyaltyBalancesWithTiers</code>.
     * List of loyalty balances for a ledger and its subledgers.
     * @alias module:model/LoyaltyBalancesWithTiers
     */
    constructor() { 
        
        LoyaltyBalancesWithTiers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoyaltyBalancesWithTiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyBalancesWithTiers} obj Optional instance to populate.
     * @return {module:model/LoyaltyBalancesWithTiers} The populated <code>LoyaltyBalancesWithTiers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyBalancesWithTiers();

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = LoyaltyBalanceWithTier.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('subledgerBalances')) {
                obj['subledgerBalances'] = ApiClient.convertToType(data['subledgerBalances'], {'String': LoyaltyBalanceWithTier});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LoyaltyBalanceWithTier} balance
 */
LoyaltyBalancesWithTiers.prototype['balance'] = undefined;

/**
 * Map of the loyalty balances of the subledgers of a ledger.
 * @member {Object.<String, module:model/LoyaltyBalanceWithTier>} subledgerBalances
 */
LoyaltyBalancesWithTiers.prototype['subledgerBalances'] = undefined;






export default LoyaltyBalancesWithTiers;

