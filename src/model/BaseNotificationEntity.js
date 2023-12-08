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
 * The BaseNotificationEntity model module.
 * @module model/BaseNotificationEntity
 * @version 6.0.0
 */
class BaseNotificationEntity {
    /**
     * Constructs a new <code>BaseNotificationEntity</code>.
     * @alias module:model/BaseNotificationEntity
     * @param policy {Object} 
     */
    constructor(policy) { 
        
        BaseNotificationEntity.initialize(this, policy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, policy) { 
        obj['policy'] = policy;
    }

    /**
     * Constructs a <code>BaseNotificationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseNotificationEntity} obj Optional instance to populate.
     * @return {module:model/BaseNotificationEntity} The populated <code>BaseNotificationEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseNotificationEntity();

            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ApiClient.convertToType(data['policy'], Object);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} policy
 */
BaseNotificationEntity.prototype['policy'] = undefined;

/**
 * Indicates whether the notification is activated.
 * @member {Boolean} enabled
 * @default true
 */
BaseNotificationEntity.prototype['enabled'] = true;






export default BaseNotificationEntity;

