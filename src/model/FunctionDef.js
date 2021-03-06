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
import FuncArgDef from './FuncArgDef';

/**
 * The FunctionDef model module.
 * @module model/FunctionDef
 * @version 4.3.0
 */
class FunctionDef {
    /**
     * Constructs a new <code>FunctionDef</code>.
     * @alias module:model/FunctionDef
     * @param name {String} The function name used in Talang.
     * @param type {String} The type of this function argument.
     * @param args {Array.<module:model/FuncArgDef>} An array of argument definitions.
     */
    constructor(name, type, args) { 
        
        FunctionDef.initialize(this, name, type, args);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, args) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['args'] = args;
    }

    /**
     * Constructs a <code>FunctionDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionDef} obj Optional instance to populate.
     * @return {module:model/FunctionDef} The populated <code>FunctionDef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunctionDef();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [FuncArgDef]);
            }
        }
        return obj;
    }


}

/**
 * The function name used in Talang.
 * @member {String} name
 */
FunctionDef.prototype['name'] = undefined;

/**
 * The type of this function argument.
 * @member {String} type
 */
FunctionDef.prototype['type'] = undefined;

/**
 * A short description of the function.
 * @member {String} description
 */
FunctionDef.prototype['description'] = undefined;

/**
 * Extended help text for the function.
 * @member {String} help
 */
FunctionDef.prototype['help'] = undefined;

/**
 * An array of argument definitions.
 * @member {Array.<module:model/FuncArgDef>} args
 */
FunctionDef.prototype['args'] = undefined;






export default FunctionDef;

