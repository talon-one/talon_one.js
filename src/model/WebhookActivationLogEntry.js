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
 * The WebhookActivationLogEntry model module.
 * @module model/WebhookActivationLogEntry
 * @version 5.0.1
 */
class WebhookActivationLogEntry {
    /**
     * Constructs a new <code>WebhookActivationLogEntry</code>.
     * Log of activated webhooks.
     * @alias module:model/WebhookActivationLogEntry
     * @param integrationRequestUuid {String} UUID reference of the integration request that triggered the effect with the webhook.
     * @param webhookId {Number} ID of the webhook that triggered the request.
     * @param applicationId {Number} ID of the application that triggered the webhook.
     * @param campaignId {Number} ID of the campaign that triggered the webhook.
     * @param created {Date} Timestamp of request
     */
    constructor(integrationRequestUuid, webhookId, applicationId, campaignId, created) { 
        
        WebhookActivationLogEntry.initialize(this, integrationRequestUuid, webhookId, applicationId, campaignId, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationRequestUuid, webhookId, applicationId, campaignId, created) { 
        obj['integrationRequestUuid'] = integrationRequestUuid;
        obj['webhookId'] = webhookId;
        obj['applicationId'] = applicationId;
        obj['campaignId'] = campaignId;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>WebhookActivationLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookActivationLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookActivationLogEntry} The populated <code>WebhookActivationLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookActivationLogEntry();

            if (data.hasOwnProperty('integrationRequestUuid')) {
                obj['integrationRequestUuid'] = ApiClient.convertToType(data['integrationRequestUuid'], 'String');
            }
            if (data.hasOwnProperty('webhookId')) {
                obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * UUID reference of the integration request that triggered the effect with the webhook.
 * @member {String} integrationRequestUuid
 */
WebhookActivationLogEntry.prototype['integrationRequestUuid'] = undefined;

/**
 * ID of the webhook that triggered the request.
 * @member {Number} webhookId
 */
WebhookActivationLogEntry.prototype['webhookId'] = undefined;

/**
 * ID of the application that triggered the webhook.
 * @member {Number} applicationId
 */
WebhookActivationLogEntry.prototype['applicationId'] = undefined;

/**
 * ID of the campaign that triggered the webhook.
 * @member {Number} campaignId
 */
WebhookActivationLogEntry.prototype['campaignId'] = undefined;

/**
 * Timestamp of request
 * @member {Date} created
 */
WebhookActivationLogEntry.prototype['created'] = undefined;






export default WebhookActivationLogEntry;

