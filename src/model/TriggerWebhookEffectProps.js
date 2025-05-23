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
 * The TriggerWebhookEffectProps model module.
 * @module model/TriggerWebhookEffectProps
 * @version 12.0.0
 */
class TriggerWebhookEffectProps {
    /**
     * Constructs a new <code>TriggerWebhookEffectProps</code>.
     * The properties specific to the \&quot;triggerWebhook\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;trigger webhook\&quot; effect. This is communicated as an FYI and should usually not require action on your side.
     * @alias module:model/TriggerWebhookEffectProps
     * @param webhookId {Number} The ID of the webhook that was triggered.
     * @param webhookName {String} The name of the webhook that was triggered.
     */
    constructor(webhookId, webhookName) { 
        
        TriggerWebhookEffectProps.initialize(this, webhookId, webhookName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, webhookId, webhookName) { 
        obj['webhookId'] = webhookId;
        obj['webhookName'] = webhookName;
    }

    /**
     * Constructs a <code>TriggerWebhookEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerWebhookEffectProps} obj Optional instance to populate.
     * @return {module:model/TriggerWebhookEffectProps} The populated <code>TriggerWebhookEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerWebhookEffectProps();

            if (data.hasOwnProperty('webhookId')) {
                obj['webhookId'] = ApiClient.convertToType(data['webhookId'], 'Number');
            }
            if (data.hasOwnProperty('webhookName')) {
                obj['webhookName'] = ApiClient.convertToType(data['webhookName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the webhook that was triggered.
 * @member {Number} webhookId
 */
TriggerWebhookEffectProps.prototype['webhookId'] = undefined;

/**
 * The name of the webhook that was triggered.
 * @member {String} webhookName
 */
TriggerWebhookEffectProps.prototype['webhookName'] = undefined;






export default TriggerWebhookEffectProps;

