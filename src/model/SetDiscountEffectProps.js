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
 * The SetDiscountEffectProps model module.
 * @module model/SetDiscountEffectProps
 * @version 5.0.1
 */
class SetDiscountEffectProps {
    /**
     * Constructs a new <code>SetDiscountEffectProps</code>.
     * The properties specific to the \&quot;setDiscount\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set discount\&quot; effect. This is a discount that should be applied on the scope of defined with it.
     * @alias module:model/SetDiscountEffectProps
     * @param name {String} The name / description of this discount
     * @param value {Number} The total monetary value of the discount.
     */
    constructor(name, value) { 
        
        SetDiscountEffectProps.initialize(this, name, value);
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
     * Constructs a <code>SetDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountEffectProps} The populated <code>SetDiscountEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDiscountEffectProps();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('desiredValue')) {
                obj['desiredValue'] = ApiClient.convertToType(data['desiredValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name / description of this discount
 * @member {String} name
 */
SetDiscountEffectProps.prototype['name'] = undefined;

/**
 * The total monetary value of the discount.
 * @member {Number} value
 */
SetDiscountEffectProps.prototype['value'] = undefined;

/**
 * The scope which the discount was applied on, can be one of (cartItems,additionalCosts,sessionTotal).
 * @member {String} scope
 */
SetDiscountEffectProps.prototype['scope'] = undefined;

/**
 * The original value of the discount.
 * @member {Number} desiredValue
 */
SetDiscountEffectProps.prototype['desiredValue'] = undefined;






export default SetDiscountEffectProps;

