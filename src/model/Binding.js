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
 * The Binding model module.
 * @module model/Binding
 * @version 5.0.0
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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], [Object]);
            }
            if (data.hasOwnProperty('valueType')) {
                obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
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
 * The kind of binding. Possible values are: - `bundle` - `cartItemFilter` - `subledgerBalance` - `templateParameter` 
 * @member {String} type
 */
Binding.prototype['type'] = undefined;

/**
 * A Talang expression that will be evaluated and its result attached to the name of the binding.
 * @member {Array.<Object>} expression
 */
Binding.prototype['expression'] = undefined;

/**
 * Can be one of the following: - `string` - `number` - `boolean` 
 * @member {String} valueType
 */
Binding.prototype['valueType'] = undefined;






export default Binding;

