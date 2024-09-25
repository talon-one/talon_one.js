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
 * The CardExpiringPointsNotificationTrigger model module.
 * @module model/CardExpiringPointsNotificationTrigger
 * @version 9.0.0
 */
class CardExpiringPointsNotificationTrigger {
    /**
     * Constructs a new <code>CardExpiringPointsNotificationTrigger</code>.
     * @alias module:model/CardExpiringPointsNotificationTrigger
     * @param amount {Number} The amount of period.
     * @param period {module:model/CardExpiringPointsNotificationTrigger.PeriodEnum} Notification period indicated by a letter; \"w\" means week, \"d\" means day.
     */
    constructor(amount, period) { 
        
        CardExpiringPointsNotificationTrigger.initialize(this, amount, period);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, period) { 
        obj['amount'] = amount;
        obj['period'] = period;
    }

    /**
     * Constructs a <code>CardExpiringPointsNotificationTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardExpiringPointsNotificationTrigger} obj Optional instance to populate.
     * @return {module:model/CardExpiringPointsNotificationTrigger} The populated <code>CardExpiringPointsNotificationTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardExpiringPointsNotificationTrigger();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The amount of period.
 * @member {Number} amount
 */
CardExpiringPointsNotificationTrigger.prototype['amount'] = undefined;

/**
 * Notification period indicated by a letter; \"w\" means week, \"d\" means day.
 * @member {module:model/CardExpiringPointsNotificationTrigger.PeriodEnum} period
 */
CardExpiringPointsNotificationTrigger.prototype['period'] = undefined;





/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
CardExpiringPointsNotificationTrigger['PeriodEnum'] = {

    /**
     * value: "w"
     * @const
     */
    "w": "w",

    /**
     * value: "d"
     * @const
     */
    "d": "d"
};



export default CardExpiringPointsNotificationTrigger;

