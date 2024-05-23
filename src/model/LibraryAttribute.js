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
 * The LibraryAttribute model module.
 * @module model/LibraryAttribute
 * @version 7.0.0
 */
class LibraryAttribute {
    /**
     * Constructs a new <code>LibraryAttribute</code>.
     * 
     * @alias module:model/LibraryAttribute
     * @param entity {module:model/LibraryAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
     * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
     * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param type {module:model/LibraryAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
     * @param description {String} A description of the attribute.
     * @param presets {Array.<String>} The presets that indicate to which industry the attribute applies to.
     * @param suggestions {Array.<String>} Short suggestions that are used to group attributes.
     */
    constructor(entity, name, title, type, description, presets, suggestions) { 
        
        LibraryAttribute.initialize(this, entity, name, title, type, description, presets, suggestions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entity, name, title, type, description, presets, suggestions) { 
        obj['entity'] = entity;
        obj['name'] = name;
        obj['title'] = title;
        obj['type'] = type;
        obj['description'] = description;
        obj['presets'] = presets;
        obj['suggestions'] = suggestions;
    }

    /**
     * Constructs a <code>LibraryAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LibraryAttribute} obj Optional instance to populate.
     * @return {module:model/LibraryAttribute} The populated <code>LibraryAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryAttribute();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('suggestions')) {
                obj['suggestions'] = ApiClient.convertToType(data['suggestions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
 * @member {module:model/LibraryAttribute.EntityEnum} entity
 */
LibraryAttribute.prototype['entity'] = undefined;

/**
 * The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
 * @member {String} name
 */
LibraryAttribute.prototype['name'] = undefined;

/**
 * The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */
LibraryAttribute.prototype['title'] = undefined;

/**
 * The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
 * @member {module:model/LibraryAttribute.TypeEnum} type
 */
LibraryAttribute.prototype['type'] = undefined;

/**
 * A description of the attribute.
 * @member {String} description
 */
LibraryAttribute.prototype['description'] = undefined;

/**
 * The presets that indicate to which industry the attribute applies to.
 * @member {Array.<String>} presets
 */
LibraryAttribute.prototype['presets'] = undefined;

/**
 * Short suggestions that are used to group attributes.
 * @member {Array.<String>} suggestions
 */
LibraryAttribute.prototype['suggestions'] = undefined;





/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */
LibraryAttribute['EntityEnum'] = {

    /**
     * value: "Application"
     * @const
     */
    "Application": "Application",

    /**
     * value: "Campaign"
     * @const
     */
    "Campaign": "Campaign",

    /**
     * value: "CustomerProfile"
     * @const
     */
    "CustomerProfile": "CustomerProfile",

    /**
     * value: "CustomerSession"
     * @const
     */
    "CustomerSession": "CustomerSession",

    /**
     * value: "CartItem"
     * @const
     */
    "CartItem": "CartItem",

    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",

    /**
     * value: "Event"
     * @const
     */
    "Event": "Event"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
LibraryAttribute['TypeEnum'] = {

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "time"
     * @const
     */
    "time": "time"
};



export default LibraryAttribute;

