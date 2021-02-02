/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @version 4.3.0
 */
class TemplateArgDef {
    /**
     * Constructs a new <code>TemplateArgDef</code>.
     * 
     * @alias module:model/TemplateArgDef
     * @param type {module:model/TemplateArgDef.TypeEnum} The type of value this argument expects.
     * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
     * @param title {String} A campaigner friendly name for the argument, this will be shown in the rule editor.
     * @param ui {Object} Arbitrary metadata that may be used to render an input for this argument.
     */
    constructor(type, description, title, ui) { 
        
        TemplateArgDef.initialize(this, type, description, title, ui);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, description, title, ui) { 
        obj['type'] = type;
        obj['description'] = description;
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
    "time": "time"
};



export default TemplateArgDef;

