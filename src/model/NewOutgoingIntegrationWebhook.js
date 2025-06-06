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
 * The NewOutgoingIntegrationWebhook model module.
 * @module model/NewOutgoingIntegrationWebhook
 * @version 12.0.0
 */
class NewOutgoingIntegrationWebhook {
    /**
     * Constructs a new <code>NewOutgoingIntegrationWebhook</code>.
     * @alias module:model/NewOutgoingIntegrationWebhook
     * @param title {String} Webhook title.
     * @param applicationIds {Array.<Number>} IDs of the Applications to which a webhook must be linked.
     */
    constructor(title, applicationIds) { 
        
        NewOutgoingIntegrationWebhook.initialize(this, title, applicationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, applicationIds) { 
        obj['title'] = title;
        obj['applicationIds'] = applicationIds;
    }

    /**
     * Constructs a <code>NewOutgoingIntegrationWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewOutgoingIntegrationWebhook} obj Optional instance to populate.
     * @return {module:model/NewOutgoingIntegrationWebhook} The populated <code>NewOutgoingIntegrationWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewOutgoingIntegrationWebhook();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Webhook title.
 * @member {String} title
 */
NewOutgoingIntegrationWebhook.prototype['title'] = undefined;

/**
 * A description of the webhook.
 * @member {String} description
 */
NewOutgoingIntegrationWebhook.prototype['description'] = undefined;

/**
 * IDs of the Applications to which a webhook must be linked.
 * @member {Array.<Number>} applicationIds
 */
NewOutgoingIntegrationWebhook.prototype['applicationIds'] = undefined;






export default NewOutgoingIntegrationWebhook;

