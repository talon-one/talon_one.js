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
import ExpiringPointsNotificationTrigger from './ExpiringPointsNotificationTrigger';

/**
 * The ExpiringPointsNotificationPolicy model module.
 * @module model/ExpiringPointsNotificationPolicy
 * @version 11.0.0
 */
class ExpiringPointsNotificationPolicy {
    /**
     * Constructs a new <code>ExpiringPointsNotificationPolicy</code>.
     * @alias module:model/ExpiringPointsNotificationPolicy
     * @param name {String} Notification name.
     * @param triggers {Array.<module:model/ExpiringPointsNotificationTrigger>} 
     */
    constructor(name, triggers) { 
        
        ExpiringPointsNotificationPolicy.initialize(this, name, triggers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, triggers) { 
        obj['name'] = name;
        obj['triggers'] = triggers;
    }

    /**
     * Constructs a <code>ExpiringPointsNotificationPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpiringPointsNotificationPolicy} obj Optional instance to populate.
     * @return {module:model/ExpiringPointsNotificationPolicy} The populated <code>ExpiringPointsNotificationPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpiringPointsNotificationPolicy();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], [ExpiringPointsNotificationTrigger]);
            }
            if (data.hasOwnProperty('batchingEnabled')) {
                obj['batchingEnabled'] = ApiClient.convertToType(data['batchingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('batchSize')) {
                obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Notification name.
 * @member {String} name
 */
ExpiringPointsNotificationPolicy.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ExpiringPointsNotificationTrigger>} triggers
 */
ExpiringPointsNotificationPolicy.prototype['triggers'] = undefined;

/**
 * Indicates whether batching is activated.
 * @member {Boolean} batchingEnabled
 * @default true
 */
ExpiringPointsNotificationPolicy.prototype['batchingEnabled'] = true;

/**
 * The required size of each batch of data. This value applies only when `batchingEnabled` is `true`.
 * @member {Number} batchSize
 */
ExpiringPointsNotificationPolicy.prototype['batchSize'] = undefined;






export default ExpiringPointsNotificationPolicy;

