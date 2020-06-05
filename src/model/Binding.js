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
 * The Binding model module.
 * @module model/Binding
 * @version 4.1.1
 */
class Binding {
    /**
     * Constructs a new <code>Binding</code>.
     * @alias module:model/Binding
     * @param name {String} A descriptive name for the value to be bound.
     * @param expression {Array.<Object>} A Talang expression that will be evaluated and its result attached to the name of the binding.
     */
    constructor(name, expression) { 
        
        Binding.initialize(this, name, expression);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, expression) { 
        obj['name'] = name;
        obj['expression'] = expression;
    }

    /**
     * Constructs a <code>Binding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Binding} obj Optional instance to populate.
     * @return {module:model/Binding} The populated <code>Binding</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Binding();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * A descriptive name for the value to be bound.
 * @member {String} name
 */
Binding.prototype['name'] = undefined;

/**
 * A Talang expression that will be evaluated and its result attached to the name of the binding.
 * @member {Array.<Object>} expression
 */
Binding.prototype['expression'] = undefined;






export default Binding;

