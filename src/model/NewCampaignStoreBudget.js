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
import NewCampaignStoreBudgetStoreLimit from './NewCampaignStoreBudgetStoreLimit';

/**
 * The NewCampaignStoreBudget model module.
 * @module model/NewCampaignStoreBudget
 * @version 12.0.0
 */
class NewCampaignStoreBudget {
    /**
     * Constructs a new <code>NewCampaignStoreBudget</code>.
     * @alias module:model/NewCampaignStoreBudget
     * @param action {module:model/NewCampaignStoreBudget.ActionEnum} 
     * @param storeLimits {Array.<module:model/NewCampaignStoreBudgetStoreLimit>} The set of budget limits for stores linked to the campaign.
     */
    constructor(action, storeLimits) { 
        
        NewCampaignStoreBudget.initialize(this, action, storeLimits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, storeLimits) { 
        obj['action'] = action;
        obj['storeLimits'] = storeLimits;
    }

    /**
     * Constructs a <code>NewCampaignStoreBudget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignStoreBudget} obj Optional instance to populate.
     * @return {module:model/NewCampaignStoreBudget} The populated <code>NewCampaignStoreBudget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaignStoreBudget();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('storeLimits')) {
                obj['storeLimits'] = ApiClient.convertToType(data['storeLimits'], [NewCampaignStoreBudgetStoreLimit]);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NewCampaignStoreBudget.ActionEnum} action
 */
NewCampaignStoreBudget.prototype['action'] = undefined;

/**
 * The set of budget limits for stores linked to the campaign.
 * @member {Array.<module:model/NewCampaignStoreBudgetStoreLimit>} storeLimits
 */
NewCampaignStoreBudget.prototype['storeLimits'] = undefined;

/**
 * @member {module:model/NewCampaignStoreBudget.PeriodEnum} period
 */
NewCampaignStoreBudget.prototype['period'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
NewCampaignStoreBudget['ActionEnum'] = {

    /**
     * value: "setDiscount"
     * @const
     */
    "setDiscount": "setDiscount"
};


/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
NewCampaignStoreBudget['PeriodEnum'] = {

    /**
     * value: "daily"
     * @const
     */
    "daily": "daily",

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",

    /**
     * value: "yearly"
     * @const
     */
    "yearly": "yearly"
};



export default NewCampaignStoreBudget;

