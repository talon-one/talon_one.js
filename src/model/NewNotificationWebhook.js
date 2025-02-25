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
 * The NewNotificationWebhook model module.
 * @module model/NewNotificationWebhook
 * @version 11.0.0
 */
class NewNotificationWebhook {
    /**
     * Constructs a new <code>NewNotificationWebhook</code>.
     * @alias module:model/NewNotificationWebhook
     * @param url {String} API URL for the given webhook-based notification.
     * @param headers {Array.<String>} List of API HTTP headers for the given webhook-based notification.
     */
    constructor(url, headers) { 
        
        NewNotificationWebhook.initialize(this, url, headers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, headers) { 
        obj['url'] = url;
        obj['headers'] = headers;
    }

    /**
     * Constructs a <code>NewNotificationWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewNotificationWebhook} obj Optional instance to populate.
     * @return {module:model/NewNotificationWebhook} The populated <code>NewNotificationWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewNotificationWebhook();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * API URL for the given webhook-based notification.
 * @member {String} url
 */
NewNotificationWebhook.prototype['url'] = undefined;

/**
 * List of API HTTP headers for the given webhook-based notification.
 * @member {Array.<String>} headers
 */
NewNotificationWebhook.prototype['headers'] = undefined;

/**
 * Indicates whether the notification is activated.
 * @member {Boolean} enabled
 * @default true
 */
NewNotificationWebhook.prototype['enabled'] = true;






export default NewNotificationWebhook;

