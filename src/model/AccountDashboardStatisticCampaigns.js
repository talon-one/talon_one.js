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
 * The AccountDashboardStatisticCampaigns model module.
 * @module model/AccountDashboardStatisticCampaigns
 * @version 8.0.0
 */
class AccountDashboardStatisticCampaigns {
    /**
     * Constructs a new <code>AccountDashboardStatisticCampaigns</code>.
     * @alias module:model/AccountDashboardStatisticCampaigns
     * @param live {Number} Number of campaigns that are active and live (across all Applications).
     * @param endingSoon {Number} Campaigns scheduled to expire sometime in the next 7 days.
     * @param lowOnBudget {Number} Campaigns with less than 10% of budget left.
     */
    constructor(live, endingSoon, lowOnBudget) { 
        
        AccountDashboardStatisticCampaigns.initialize(this, live, endingSoon, lowOnBudget);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, live, endingSoon, lowOnBudget) { 
        obj['live'] = live;
        obj['endingSoon'] = endingSoon;
        obj['lowOnBudget'] = lowOnBudget;
    }

    /**
     * Constructs a <code>AccountDashboardStatisticCampaigns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDashboardStatisticCampaigns} obj Optional instance to populate.
     * @return {module:model/AccountDashboardStatisticCampaigns} The populated <code>AccountDashboardStatisticCampaigns</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDashboardStatisticCampaigns();

            if (data.hasOwnProperty('live')) {
                obj['live'] = ApiClient.convertToType(data['live'], 'Number');
            }
            if (data.hasOwnProperty('endingSoon')) {
                obj['endingSoon'] = ApiClient.convertToType(data['endingSoon'], 'Number');
            }
            if (data.hasOwnProperty('lowOnBudget')) {
                obj['lowOnBudget'] = ApiClient.convertToType(data['lowOnBudget'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of campaigns that are active and live (across all Applications).
 * @member {Number} live
 */
AccountDashboardStatisticCampaigns.prototype['live'] = undefined;

/**
 * Campaigns scheduled to expire sometime in the next 7 days.
 * @member {Number} endingSoon
 */
AccountDashboardStatisticCampaigns.prototype['endingSoon'] = undefined;

/**
 * Campaigns with less than 10% of budget left.
 * @member {Number} lowOnBudget
 */
AccountDashboardStatisticCampaigns.prototype['lowOnBudget'] = undefined;






export default AccountDashboardStatisticCampaigns;

