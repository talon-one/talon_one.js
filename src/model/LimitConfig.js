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
 * The LimitConfig model module.
 * @module model/LimitConfig
 * @version 6.0.0
 */
class LimitConfig {
    /**
     * Constructs a new <code>LimitConfig</code>.
     * @alias module:model/LimitConfig
     * @param action {String} The limitable action to which this limit applies. For example: - `setDiscount` - `setDiscountEffect` - `redeemCoupon` - `createCoupon` 
     * @param limit {Number} The value to set for the limit.
     * @param entities {Array.<module:model/LimitConfig.EntitiesEnum>} The entity that this limit applies to.
     */
    constructor(action, limit, entities) { 
        
        LimitConfig.initialize(this, action, limit, entities);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, limit, entities) { 
        obj['action'] = action;
        obj['limit'] = limit;
        obj['entities'] = entities;
    }

    /**
     * Constructs a <code>LimitConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitConfig} obj Optional instance to populate.
     * @return {module:model/LimitConfig} The populated <code>LimitConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LimitConfig();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The limitable action to which this limit applies. For example: - `setDiscount` - `setDiscountEffect` - `redeemCoupon` - `createCoupon` 
 * @member {String} action
 */
LimitConfig.prototype['action'] = undefined;

/**
 * The value to set for the limit.
 * @member {Number} limit
 */
LimitConfig.prototype['limit'] = undefined;

/**
 * The period on which the budget limit recurs.
 * @member {module:model/LimitConfig.PeriodEnum} period
 */
LimitConfig.prototype['period'] = undefined;

/**
 * The entity that this limit applies to.
 * @member {Array.<module:model/LimitConfig.EntitiesEnum>} entities
 */
LimitConfig.prototype['entities'] = undefined;





/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
LimitConfig['PeriodEnum'] = {

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


/**
 * Allowed values for the <code>entities</code> property.
 * @enum {String}
 * @readonly
 */
LimitConfig['EntitiesEnum'] = {

    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",

    /**
     * value: "Referral"
     * @const
     */
    "Referral": "Referral",

    /**
     * value: "Profile"
     * @const
     */
    "Profile": "Profile",

    /**
     * value: "Identifier"
     * @const
     */
    "Identifier": "Identifier"
};



export default LimitConfig;

