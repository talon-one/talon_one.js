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
import Tier from './Tier';

/**
 * The LedgerInfo model module.
 * @module model/LedgerInfo
 * @version 7.0.0
 */
class LedgerInfo {
    /**
     * Constructs a new <code>LedgerInfo</code>.
     * 
     * @alias module:model/LedgerInfo
     * @param currentBalance {Number} Sum of currently active points.
     * @param pendingBalance {Number} Sum of pending points.
     * @param expiredBalance {Number} **DEPRECATED** Value is shown as 0. 
     * @param spentBalance {Number} **DEPRECATED** Value is shown as 0. 
     * @param tentativeCurrentBalance {Number} Sum of the tentative active points (including additions and deductions) inside the currently open session. The `currentBalance` is updated to this value when you close the session, and the effects are applied.
     */
    constructor(currentBalance, pendingBalance, expiredBalance, spentBalance, tentativeCurrentBalance) { 
        
        LedgerInfo.initialize(this, currentBalance, pendingBalance, expiredBalance, spentBalance, tentativeCurrentBalance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currentBalance, pendingBalance, expiredBalance, spentBalance, tentativeCurrentBalance) { 
        obj['currentBalance'] = currentBalance;
        obj['pendingBalance'] = pendingBalance;
        obj['expiredBalance'] = expiredBalance;
        obj['spentBalance'] = spentBalance;
        obj['tentativeCurrentBalance'] = tentativeCurrentBalance;
    }

    /**
     * Constructs a <code>LedgerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LedgerInfo} obj Optional instance to populate.
     * @return {module:model/LedgerInfo} The populated <code>LedgerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LedgerInfo();

            if (data.hasOwnProperty('currentBalance')) {
                obj['currentBalance'] = ApiClient.convertToType(data['currentBalance'], 'Number');
            }
            if (data.hasOwnProperty('pendingBalance')) {
                obj['pendingBalance'] = ApiClient.convertToType(data['pendingBalance'], 'Number');
            }
            if (data.hasOwnProperty('expiredBalance')) {
                obj['expiredBalance'] = ApiClient.convertToType(data['expiredBalance'], 'Number');
            }
            if (data.hasOwnProperty('spentBalance')) {
                obj['spentBalance'] = ApiClient.convertToType(data['spentBalance'], 'Number');
            }
            if (data.hasOwnProperty('tentativeCurrentBalance')) {
                obj['tentativeCurrentBalance'] = ApiClient.convertToType(data['tentativeCurrentBalance'], 'Number');
            }
            if (data.hasOwnProperty('tentativePendingBalance')) {
                obj['tentativePendingBalance'] = ApiClient.convertToType(data['tentativePendingBalance'], 'Number');
            }
            if (data.hasOwnProperty('currentTier')) {
                obj['currentTier'] = Tier.constructFromObject(data['currentTier']);
            }
            if (data.hasOwnProperty('pointsToNextTier')) {
                obj['pointsToNextTier'] = ApiClient.convertToType(data['pointsToNextTier'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Sum of currently active points.
 * @member {Number} currentBalance
 */
LedgerInfo.prototype['currentBalance'] = undefined;

/**
 * Sum of pending points.
 * @member {Number} pendingBalance
 */
LedgerInfo.prototype['pendingBalance'] = undefined;

/**
 * **DEPRECATED** Value is shown as 0. 
 * @member {Number} expiredBalance
 */
LedgerInfo.prototype['expiredBalance'] = undefined;

/**
 * **DEPRECATED** Value is shown as 0. 
 * @member {Number} spentBalance
 */
LedgerInfo.prototype['spentBalance'] = undefined;

/**
 * Sum of the tentative active points (including additions and deductions) inside the currently open session. The `currentBalance` is updated to this value when you close the session, and the effects are applied.
 * @member {Number} tentativeCurrentBalance
 */
LedgerInfo.prototype['tentativeCurrentBalance'] = undefined;

/**
 * Sum of pending points (including additions and deductions) inside the currently open session. The `pendingBalance` is updated to this value when you close the session, and the effects are applied.
 * @member {Number} tentativePendingBalance
 */
LedgerInfo.prototype['tentativePendingBalance'] = undefined;

/**
 * @member {module:model/Tier} currentTier
 */
LedgerInfo.prototype['currentTier'] = undefined;

/**
 * Points required to move up a tier.
 * @member {Number} pointsToNextTier
 */
LedgerInfo.prototype['pointsToNextTier'] = undefined;






export default LedgerInfo;

