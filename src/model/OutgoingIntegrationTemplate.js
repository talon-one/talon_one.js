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
 * The OutgoingIntegrationTemplate model module.
 * @module model/OutgoingIntegrationTemplate
 * @version 12.0.0
 */
class OutgoingIntegrationTemplate {
    /**
     * Constructs a new <code>OutgoingIntegrationTemplate</code>.
     * @alias module:model/OutgoingIntegrationTemplate
     * @param id {Number} Unique ID for this entity.
     * @param integrationType {Number} Unique ID of outgoing integration type.
     * @param title {String} The title of the integration template.
     * @param description {String} The description of the specific outgoing integration template.
     * @param payload {String} The API payload (supports templating using parameters) for this integration template.
     * @param method {module:model/OutgoingIntegrationTemplate.MethodEnum} API method for this webhook.
     * @param relativeUrl {String} The relative URL corresponding to each integration template.
     * @param headers {Array.<String>} The list of HTTP headers for this integration template.
     */
    constructor(id, integrationType, title, description, payload, method, relativeUrl, headers) { 
        
        OutgoingIntegrationTemplate.initialize(this, id, integrationType, title, description, payload, method, relativeUrl, headers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, integrationType, title, description, payload, method, relativeUrl, headers) { 
        obj['id'] = id;
        obj['integrationType'] = integrationType;
        obj['title'] = title;
        obj['description'] = description;
        obj['payload'] = payload;
        obj['method'] = method;
        obj['relativeUrl'] = relativeUrl;
        obj['headers'] = headers;
    }

    /**
     * Constructs a <code>OutgoingIntegrationTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutgoingIntegrationTemplate} obj Optional instance to populate.
     * @return {module:model/OutgoingIntegrationTemplate} The populated <code>OutgoingIntegrationTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutgoingIntegrationTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('relativeUrl')) {
                obj['relativeUrl'] = ApiClient.convertToType(data['relativeUrl'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
OutgoingIntegrationTemplate.prototype['id'] = undefined;

/**
 * Unique ID of outgoing integration type.
 * @member {Number} integrationType
 */
OutgoingIntegrationTemplate.prototype['integrationType'] = undefined;

/**
 * The title of the integration template.
 * @member {String} title
 */
OutgoingIntegrationTemplate.prototype['title'] = undefined;

/**
 * The description of the specific outgoing integration template.
 * @member {String} description
 */
OutgoingIntegrationTemplate.prototype['description'] = undefined;

/**
 * The API payload (supports templating using parameters) for this integration template.
 * @member {String} payload
 */
OutgoingIntegrationTemplate.prototype['payload'] = undefined;

/**
 * API method for this webhook.
 * @member {module:model/OutgoingIntegrationTemplate.MethodEnum} method
 */
OutgoingIntegrationTemplate.prototype['method'] = undefined;

/**
 * The relative URL corresponding to each integration template.
 * @member {String} relativeUrl
 */
OutgoingIntegrationTemplate.prototype['relativeUrl'] = undefined;

/**
 * The list of HTTP headers for this integration template.
 * @member {Array.<String>} headers
 */
OutgoingIntegrationTemplate.prototype['headers'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
OutgoingIntegrationTemplate['MethodEnum'] = {

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



export default OutgoingIntegrationTemplate;

