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
import BaseNotificationWebhook from './BaseNotificationWebhook';

/**
 * The BaseNotification model module.
 * @module model/BaseNotification
 * @version 5.0.1
 */
class BaseNotification {
    /**
     * Constructs a new <code>BaseNotification</code>.
     * 
     * @alias module:model/BaseNotification
     * @param policy {Object} 
     * @param webhook {module:model/BaseNotificationWebhook} 
     * @param id {Number} Unique ID for this entity.
     */
    constructor(policy, webhook, id) { 
        
        BaseNotification.initialize(this, policy, webhook, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, policy, webhook, id) { 
        obj['policy'] = policy;
        obj['webhook'] = webhook;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>BaseNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseNotification} obj Optional instance to populate.
     * @return {module:model/BaseNotification} The populated <code>BaseNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseNotification();

            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ApiClient.convertToType(data['policy'], Object);
            }
            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = BaseNotificationWebhook.constructFromObject(data['webhook']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} policy
 */
BaseNotification.prototype['policy'] = undefined;

/**
 * @member {module:model/BaseNotificationWebhook} webhook
 */
BaseNotification.prototype['webhook'] = undefined;

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
BaseNotification.prototype['id'] = undefined;






export default BaseNotification;

