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
 * The FuncArgDef model module.
 * @module model/FuncArgDef
 * @version 4.1.0
 */
class FuncArgDef {
    /**
     * Constructs a new <code>FuncArgDef</code>.
     * @alias module:model/FuncArgDef
     * @param type {module:model/FuncArgDef.TypeEnum} The type of value this argument expects.
     * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
     */
    constructor(type, description) { 
        
        FuncArgDef.initialize(this, type, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, description) { 
        obj['type'] = type;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>FuncArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FuncArgDef} obj Optional instance to populate.
     * @return {module:model/FuncArgDef} The populated <code>FuncArgDef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FuncArgDef();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of value this argument expects.
 * @member {module:model/FuncArgDef.TypeEnum} type
 */
FuncArgDef.prototype['type'] = undefined;

/**
 * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
 * @member {String} description
 */
FuncArgDef.prototype['description'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FuncArgDef['TypeEnum'] = {

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



export default FuncArgDef;

