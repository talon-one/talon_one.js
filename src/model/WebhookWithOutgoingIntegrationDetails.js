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
import TemplateArgDef from './TemplateArgDef';

/**
 * The WebhookWithOutgoingIntegrationDetails model module.
 * @module model/WebhookWithOutgoingIntegrationDetails
 * @version 8.0.0
 */
class WebhookWithOutgoingIntegrationDetails {
    /**
     * Constructs a new <code>WebhookWithOutgoingIntegrationDetails</code>.
     * 
     * @alias module:model/WebhookWithOutgoingIntegrationDetails
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param applicationIds {Array.<Number>} The IDs of the Applications that are related to this entity. The IDs of the Applications that are related to this entity.
     * @param title {String} Name or title for this webhook.
     * @param verb {module:model/WebhookWithOutgoingIntegrationDetails.VerbEnum} API method for this webhook.
     * @param url {String} API URL (supports templating using parameters) for this webhook.
     * @param headers {Array.<String>} List of API HTTP headers for this webhook.
     * @param params {Array.<module:model/TemplateArgDef>} Array of template argument definitions.
     * @param enabled {Boolean} Enables or disables webhook from showing in the Rule Builder.
     */
    constructor(id, created, modified, applicationIds, title, verb, url, headers, params, enabled) { 
        
        WebhookWithOutgoingIntegrationDetails.initialize(this, id, created, modified, applicationIds, title, verb, url, headers, params, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, applicationIds, title, verb, url, headers, params, enabled) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['applicationIds'] = applicationIds;
        obj['title'] = title;
        obj['verb'] = verb;
        obj['url'] = url;
        obj['headers'] = headers;
        obj['params'] = params;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>WebhookWithOutgoingIntegrationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookWithOutgoingIntegrationDetails} obj Optional instance to populate.
     * @return {module:model/WebhookWithOutgoingIntegrationDetails} The populated <code>WebhookWithOutgoingIntegrationDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookWithOutgoingIntegrationDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [TemplateArgDef]);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('outgoingIntegrationTemplateId')) {
                obj['outgoingIntegrationTemplateId'] = ApiClient.convertToType(data['outgoingIntegrationTemplateId'], 'Number');
            }
            if (data.hasOwnProperty('outgoingIntegrationTypeId')) {
                obj['outgoingIntegrationTypeId'] = ApiClient.convertToType(data['outgoingIntegrationTypeId'], 'Number');
            }
            if (data.hasOwnProperty('outgoingIntegrationTypeName')) {
                obj['outgoingIntegrationTypeName'] = ApiClient.convertToType(data['outgoingIntegrationTypeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
WebhookWithOutgoingIntegrationDetails.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
WebhookWithOutgoingIntegrationDetails.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
WebhookWithOutgoingIntegrationDetails.prototype['modified'] = undefined;

/**
 * The IDs of the Applications that are related to this entity. The IDs of the Applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */
WebhookWithOutgoingIntegrationDetails.prototype['applicationIds'] = undefined;

/**
 * Name or title for this webhook.
 * @member {String} title
 */
WebhookWithOutgoingIntegrationDetails.prototype['title'] = undefined;

/**
 * API method for this webhook.
 * @member {module:model/WebhookWithOutgoingIntegrationDetails.VerbEnum} verb
 */
WebhookWithOutgoingIntegrationDetails.prototype['verb'] = undefined;

/**
 * API URL (supports templating using parameters) for this webhook.
 * @member {String} url
 */
WebhookWithOutgoingIntegrationDetails.prototype['url'] = undefined;

/**
 * List of API HTTP headers for this webhook.
 * @member {Array.<String>} headers
 */
WebhookWithOutgoingIntegrationDetails.prototype['headers'] = undefined;

/**
 * API payload (supports templating using parameters) for this webhook.
 * @member {String} payload
 */
WebhookWithOutgoingIntegrationDetails.prototype['payload'] = undefined;

/**
 * Array of template argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} params
 */
WebhookWithOutgoingIntegrationDetails.prototype['params'] = undefined;

/**
 * Enables or disables webhook from showing in the Rule Builder.
 * @member {Boolean} enabled
 */
WebhookWithOutgoingIntegrationDetails.prototype['enabled'] = undefined;

/**
 * Identifier of the outgoing integration template.
 * @member {Number} outgoingIntegrationTemplateId
 */
WebhookWithOutgoingIntegrationDetails.prototype['outgoingIntegrationTemplateId'] = undefined;

/**
 * Identifier of the outgoing integration type.
 * @member {Number} outgoingIntegrationTypeId
 */
WebhookWithOutgoingIntegrationDetails.prototype['outgoingIntegrationTypeId'] = undefined;

/**
 * Name of the outgoing integration.
 * @member {String} outgoingIntegrationTypeName
 */
WebhookWithOutgoingIntegrationDetails.prototype['outgoingIntegrationTypeName'] = undefined;





/**
 * Allowed values for the <code>verb</code> property.
 * @enum {String}
 * @readonly
 */
WebhookWithOutgoingIntegrationDetails['VerbEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH"
};



export default WebhookWithOutgoingIntegrationDetails;

