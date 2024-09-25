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
 * The LoyaltyBalance model module.
 * @module model/LoyaltyBalance
 * @version 9.0.0
 */
class LoyaltyBalance {
    /**
     * Constructs a new <code>LoyaltyBalance</code>.
     * Point balance of a ledger in the Loyalty Program.
     * @alias module:model/LoyaltyBalance
     */
    constructor() { 
        
        LoyaltyBalance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoyaltyBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyBalance} obj Optional instance to populate.
     * @return {module:model/LoyaltyBalance} The populated <code>LoyaltyBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyBalance();

            if (data.hasOwnProperty('activePoints')) {
                obj['activePoints'] = ApiClient.convertToType(data['activePoints'], 'Number');
            }
            if (data.hasOwnProperty('pendingPoints')) {
                obj['pendingPoints'] = ApiClient.convertToType(data['pendingPoints'], 'Number');
            }
            if (data.hasOwnProperty('spentPoints')) {
                obj['spentPoints'] = ApiClient.convertToType(data['spentPoints'], 'Number');
            }
            if (data.hasOwnProperty('expiredPoints')) {
                obj['expiredPoints'] = ApiClient.convertToType(data['expiredPoints'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total amount of points awarded to this customer and available to spend.
 * @member {Number} activePoints
 */
LoyaltyBalance.prototype['activePoints'] = undefined;

/**
 * Total amount of points awarded to this customer but not available until their start date.
 * @member {Number} pendingPoints
 */
LoyaltyBalance.prototype['pendingPoints'] = undefined;

/**
 * Total amount of points already spent by this customer.
 * @member {Number} spentPoints
 */
LoyaltyBalance.prototype['spentPoints'] = undefined;

/**
 * Total amount of points awarded but never redeemed. They cannot be used anymore.
 * @member {Number} expiredPoints
 */
LoyaltyBalance.prototype['expiredPoints'] = undefined;






export default LoyaltyBalance;

