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
import Binding from './Binding';
import Rule from './Rule';

/**
 * The NewRuleset model module.
 * @module model/NewRuleset
 * @version 4.3.0
 */
class NewRuleset {
    /**
     * Constructs a new <code>NewRuleset</code>.
     * @alias module:model/NewRuleset
     * @param rules {Array.<module:model/Rule>} Set of rules to apply.
     * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
     */
    constructor(rules, bindings) { 
        
        NewRuleset.initialize(this, rules, bindings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rules, bindings) { 
        obj['rules'] = rules;
        obj['bindings'] = bindings;
    }

    /**
     * Constructs a <code>NewRuleset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRuleset} obj Optional instance to populate.
     * @return {module:model/NewRuleset} The populated <code>NewRuleset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewRuleset();

            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
            }
            if (data.hasOwnProperty('bindings')) {
                obj['bindings'] = ApiClient.convertToType(data['bindings'], [Binding]);
            }
            if (data.hasOwnProperty('rbVersion')) {
                obj['rbVersion'] = ApiClient.convertToType(data['rbVersion'], 'String');
            }
            if (data.hasOwnProperty('activate')) {
                obj['activate'] = ApiClient.convertToType(data['activate'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Set of rules to apply.
 * @member {Array.<module:model/Rule>} rules
 */
NewRuleset.prototype['rules'] = undefined;

/**
 * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
 * @member {Array.<module:model/Binding>} bindings
 */
NewRuleset.prototype['bindings'] = undefined;

/**
 * A string indicating which version of the rulebuilder was used to create this ruleset.
 * @member {String} rbVersion
 */
NewRuleset.prototype['rbVersion'] = undefined;

/**
 * A boolean indicating whether this newly created ruleset should also be activated for the campaign owns it
 * @member {Boolean} activate
 */
NewRuleset.prototype['activate'] = undefined;






export default NewRuleset;

