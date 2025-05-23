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
 * The OutgoingIntegrationType model module.
 * @module model/OutgoingIntegrationType
 * @version 12.0.0
 */
class OutgoingIntegrationType {
    /**
     * Constructs a new <code>OutgoingIntegrationType</code>.
     * @alias module:model/OutgoingIntegrationType
     * @param id {Number} Unique ID for this entity.
     * @param name {String} Name of the outgoing integration.
     */
    constructor(id, name) { 
        
        OutgoingIntegrationType.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>OutgoingIntegrationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutgoingIntegrationType} obj Optional instance to populate.
     * @return {module:model/OutgoingIntegrationType} The populated <code>OutgoingIntegrationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutgoingIntegrationType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('documentationLink')) {
                obj['documentationLink'] = ApiClient.convertToType(data['documentationLink'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
OutgoingIntegrationType.prototype['id'] = undefined;

/**
 * Name of the outgoing integration.
 * @member {String} name
 */
OutgoingIntegrationType.prototype['name'] = undefined;

/**
 * Description of the outgoing integration.
 * @member {String} description
 */
OutgoingIntegrationType.prototype['description'] = undefined;

/**
 * Category of the outgoing integration.
 * @member {String} category
 */
OutgoingIntegrationType.prototype['category'] = undefined;

/**
 * Http link to the outgoing integration's documentation.
 * @member {String} documentationLink
 */
OutgoingIntegrationType.prototype['documentationLink'] = undefined;






export default OutgoingIntegrationType;

