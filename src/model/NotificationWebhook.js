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
 * The NotificationWebhook model module.
 * @module model/NotificationWebhook
 * @version 5.0.1
 */
class NotificationWebhook {
    /**
     * Constructs a new <code>NotificationWebhook</code>.
     * 
     * @alias module:model/NotificationWebhook
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param url {String} API URL for the given webhook-based notification.
     * @param headers {Array.<String>} List of API HTTP headers for the given webhook-based notification.
     */
    constructor(id, created, modified, applicationId, url, headers) { 
        
        NotificationWebhook.initialize(this, id, created, modified, applicationId, url, headers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, applicationId, url, headers) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['applicationId'] = applicationId;
        obj['url'] = url;
        obj['headers'] = headers;
    }

    /**
     * Constructs a <code>NotificationWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationWebhook} obj Optional instance to populate.
     * @return {module:model/NotificationWebhook} The populated <code>NotificationWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationWebhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
NotificationWebhook.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
NotificationWebhook.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
NotificationWebhook.prototype['modified'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
NotificationWebhook.prototype['applicationId'] = undefined;

/**
 * API URL for the given webhook-based notification.
 * @member {String} url
 */
NotificationWebhook.prototype['url'] = undefined;

/**
 * List of API HTTP headers for the given webhook-based notification.
 * @member {Array.<String>} headers
 */
NotificationWebhook.prototype['headers'] = undefined;






export default NotificationWebhook;

