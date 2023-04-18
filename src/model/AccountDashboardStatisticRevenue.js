/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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

/**
 * The AccountDashboardStatisticRevenue model module.
 * @module model/AccountDashboardStatisticRevenue
 * @version 5.0.0
 */
class AccountDashboardStatisticRevenue {
    /**
     * Constructs a new <code>AccountDashboardStatisticRevenue</code>.
     * @alias module:model/AccountDashboardStatisticRevenue
     * @param total {Number} All revenue that went through the client's shop (including purchases that didn’t trigger an effect).
     * @param influenced {Number} The revenue that was created by a purchase that triggered an effect (excluding web hooks, notifications).
     * @param datetime {Date} Values aggregated for the specified date.
     */
    constructor(total, influenced, datetime) { 
        
        AccountDashboardStatisticRevenue.initialize(this, total, influenced, datetime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, influenced, datetime) { 
        obj['total'] = total;
        obj['influenced'] = influenced;
        obj['datetime'] = datetime;
    }

    /**
     * Constructs a <code>AccountDashboardStatisticRevenue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDashboardStatisticRevenue} obj Optional instance to populate.
     * @return {module:model/AccountDashboardStatisticRevenue} The populated <code>AccountDashboardStatisticRevenue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDashboardStatisticRevenue();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('influenced')) {
                obj['influenced'] = ApiClient.convertToType(data['influenced'], 'Number');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * All revenue that went through the client's shop (including purchases that didn’t trigger an effect).
 * @member {Number} total
 */
AccountDashboardStatisticRevenue.prototype['total'] = undefined;

/**
 * The revenue that was created by a purchase that triggered an effect (excluding web hooks, notifications).
 * @member {Number} influenced
 */
AccountDashboardStatisticRevenue.prototype['influenced'] = undefined;

/**
 * Values aggregated for the specified date.
 * @member {Date} datetime
 */
AccountDashboardStatisticRevenue.prototype['datetime'] = undefined;






export default AccountDashboardStatisticRevenue;

