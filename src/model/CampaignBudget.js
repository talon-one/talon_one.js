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
 * The CampaignBudget model module.
 * @module model/CampaignBudget
 * @version 9.0.0
 */
class CampaignBudget {
    /**
     * Constructs a new <code>CampaignBudget</code>.
     * @alias module:model/CampaignBudget
     * @param action {String} The limitable action to which this limit applies. For example: - `setDiscount` - `setDiscountEffect` - `redeemCoupon` - `createCoupon` 
     * @param limit {Number} The value to set for the limit.
     * @param counter {Number} The number of occurrences of the limited action in the context of the campaign.
     */
    constructor(action, limit, counter) { 
        
        CampaignBudget.initialize(this, action, limit, counter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, limit, counter) { 
        obj['action'] = action;
        obj['limit'] = limit;
        obj['counter'] = counter;
    }

    /**
     * Constructs a <code>CampaignBudget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignBudget} obj Optional instance to populate.
     * @return {module:model/CampaignBudget} The populated <code>CampaignBudget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignBudget();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('counter')) {
                obj['counter'] = ApiClient.convertToType(data['counter'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The limitable action to which this limit applies. For example: - `setDiscount` - `setDiscountEffect` - `redeemCoupon` - `createCoupon` 
 * @member {String} action
 */
CampaignBudget.prototype['action'] = undefined;

/**
 * The value to set for the limit.
 * @member {Number} limit
 */
CampaignBudget.prototype['limit'] = undefined;

/**
 * The number of occurrences of the limited action in the context of the campaign.
 * @member {Number} counter
 */
CampaignBudget.prototype['counter'] = undefined;






export default CampaignBudget;

