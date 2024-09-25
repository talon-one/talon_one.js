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
import AccountDashboardStatisticCampaigns from './AccountDashboardStatisticCampaigns';
import AccountDashboardStatisticDiscount from './AccountDashboardStatisticDiscount';
import AccountDashboardStatisticLoyaltyPoints from './AccountDashboardStatisticLoyaltyPoints';
import AccountDashboardStatisticReferrals from './AccountDashboardStatisticReferrals';
import AccountDashboardStatisticRevenue from './AccountDashboardStatisticRevenue';

/**
 * The AccountDashboardStatistic model module.
 * @module model/AccountDashboardStatistic
 * @version 9.0.0
 */
class AccountDashboardStatistic {
    /**
     * Constructs a new <code>AccountDashboardStatistic</code>.
     * @alias module:model/AccountDashboardStatistic
     * @param campaigns {module:model/AccountDashboardStatisticCampaigns} 
     */
    constructor(campaigns) { 
        
        AccountDashboardStatistic.initialize(this, campaigns);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaigns) { 
        obj['campaigns'] = campaigns;
    }

    /**
     * Constructs a <code>AccountDashboardStatistic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDashboardStatistic} obj Optional instance to populate.
     * @return {module:model/AccountDashboardStatistic} The populated <code>AccountDashboardStatistic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDashboardStatistic();

            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], [AccountDashboardStatisticRevenue]);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [AccountDashboardStatisticDiscount]);
            }
            if (data.hasOwnProperty('loyaltyPoints')) {
                obj['loyaltyPoints'] = ApiClient.convertToType(data['loyaltyPoints'], [AccountDashboardStatisticLoyaltyPoints]);
            }
            if (data.hasOwnProperty('referrals')) {
                obj['referrals'] = ApiClient.convertToType(data['referrals'], [AccountDashboardStatisticReferrals]);
            }
            if (data.hasOwnProperty('campaigns')) {
                obj['campaigns'] = AccountDashboardStatisticCampaigns.constructFromObject(data['campaigns']);
            }
        }
        return obj;
    }


}

/**
 * Aggregated statistic for account revenue.
 * @member {Array.<module:model/AccountDashboardStatisticRevenue>} revenue
 */
AccountDashboardStatistic.prototype['revenue'] = undefined;

/**
 * Aggregated statistic for account discount.
 * @member {Array.<module:model/AccountDashboardStatisticDiscount>} discounts
 */
AccountDashboardStatistic.prototype['discounts'] = undefined;

/**
 * Aggregated statistic for account loyalty points.
 * @member {Array.<module:model/AccountDashboardStatisticLoyaltyPoints>} loyaltyPoints
 */
AccountDashboardStatistic.prototype['loyaltyPoints'] = undefined;

/**
 * Aggregated statistic for account referrals.
 * @member {Array.<module:model/AccountDashboardStatisticReferrals>} referrals
 */
AccountDashboardStatistic.prototype['referrals'] = undefined;

/**
 * @member {module:model/AccountDashboardStatisticCampaigns} campaigns
 */
AccountDashboardStatistic.prototype['campaigns'] = undefined;






export default AccountDashboardStatistic;

