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
 * The AccountDashboardStatisticLoyaltyPoints model module.
 * @module model/AccountDashboardStatisticLoyaltyPoints
 * @version 5.0.1
 */
class AccountDashboardStatisticLoyaltyPoints {
    /**
     * Constructs a new <code>AccountDashboardStatisticLoyaltyPoints</code>.
     * @alias module:model/AccountDashboardStatisticLoyaltyPoints
     * @param total {Number} Total loyalty points earned by users.
     * @param datetime {Date} Values aggregated for the specified date.
     */
    constructor(total, datetime) { 
        
        AccountDashboardStatisticLoyaltyPoints.initialize(this, total, datetime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, datetime) { 
        obj['total'] = total;
        obj['datetime'] = datetime;
    }

    /**
     * Constructs a <code>AccountDashboardStatisticLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDashboardStatisticLoyaltyPoints} obj Optional instance to populate.
     * @return {module:model/AccountDashboardStatisticLoyaltyPoints} The populated <code>AccountDashboardStatisticLoyaltyPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDashboardStatisticLoyaltyPoints();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Total loyalty points earned by users.
 * @member {Number} total
 */
AccountDashboardStatisticLoyaltyPoints.prototype['total'] = undefined;

/**
 * Values aggregated for the specified date.
 * @member {Date} datetime
 */
AccountDashboardStatisticLoyaltyPoints.prototype['datetime'] = undefined;






export default AccountDashboardStatisticLoyaltyPoints;

