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
 * The TemplateArgDef model module.
 * @module model/TemplateArgDef
 * @version 8.0.0
 */
class TemplateArgDef {
    /**
     * Constructs a new <code>TemplateArgDef</code>.
     * 
     * @alias module:model/TemplateArgDef
     * @param type {module:model/TemplateArgDef.TypeEnum} The type of value this argument expects.
     * @param title {String} A campaigner friendly name for the argument, this will be shown in the rule editor.
     * @param ui {Object} Arbitrary metadata that may be used to render an input for this argument.
     */
    constructor(type, title, ui) { 
        
        TemplateArgDef.initialize(this, type, title, ui);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, title, ui) { 
        obj['type'] = type;
        obj['title'] = title;
        obj['ui'] = ui;
    }

    /**
     * Constructs a <code>TemplateArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateArgDef} obj Optional instance to populate.
     * @return {module:model/TemplateArgDef} The populated <code>TemplateArgDef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateArgDef();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('ui')) {
                obj['ui'] = ApiClient.convertToType(data['ui'], Object);
            }
            if (data.hasOwnProperty('picklistID')) {
                obj['picklistID'] = ApiClient.convertToType(data['picklistID'], 'Number');
            }
            if (data.hasOwnProperty('restrictedByPicklist')) {
                obj['restrictedByPicklist'] = ApiClient.convertToType(data['restrictedByPicklist'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The type of value this argument expects.
 * @member {module:model/TemplateArgDef.TypeEnum} type
 */
TemplateArgDef.prototype['type'] = undefined;

/**
 * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
 * @member {String} description
 */
TemplateArgDef.prototype['description'] = undefined;

/**
 * A campaigner friendly name for the argument, this will be shown in the rule editor.
 * @member {String} title
 */
TemplateArgDef.prototype['title'] = undefined;

/**
 * Arbitrary metadata that may be used to render an input for this argument.
 * @member {Object} ui
 */
TemplateArgDef.prototype['ui'] = undefined;

/**
 * ID of the picklist linked to a template.
 * @member {Number} picklistID
 */
TemplateArgDef.prototype['picklistID'] = undefined;

/**
 * Whether or not this attribute's value is restricted by picklist (`picklist` property)
 * @member {Boolean} restrictedByPicklist
 */
TemplateArgDef.prototype['restrictedByPicklist'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TemplateArgDef['TypeEnum'] = {

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "time"
     * @const
     */
    "time": "time",

    /**
     * value: "(list string)"
     * @const
     */
    "(list string)": "(list string)"
};



export default TemplateArgDef;

