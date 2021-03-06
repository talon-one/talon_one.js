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
 * The RollbackDiscountEffectProps model module.
 * @module model/RollbackDiscountEffectProps
 * @version 4.3.0
 */
class RollbackDiscountEffectProps {
    /**
     * Constructs a new <code>RollbackDiscountEffectProps</code>.
     * The properties specific to the \&quot;rollbackDiscount\&quot; effect. This gets triggered whenever previously closed session is now cancelled and a setDiscount effect was cancelled on our internal discount limit counters.
     * @alias module:model/RollbackDiscountEffectProps
     * @param name {String} The name of the \"setDiscount\" effect that was rolled back
     * @param value {Number} The value of the discount that was rolled back
     */
    constructor(name, value) { 
        
        RollbackDiscountEffectProps.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RollbackDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackDiscountEffectProps} The populated <code>RollbackDiscountEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RollbackDiscountEffectProps();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the \"setDiscount\" effect that was rolled back
 * @member {String} name
 */
RollbackDiscountEffectProps.prototype['name'] = undefined;

/**
 * The value of the discount that was rolled back
 * @member {Number} value
 */
RollbackDiscountEffectProps.prototype['value'] = undefined;






export default RollbackDiscountEffectProps;

