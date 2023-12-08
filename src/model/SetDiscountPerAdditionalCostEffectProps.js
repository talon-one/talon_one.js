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
 * The SetDiscountPerAdditionalCostEffectProps model module.
 * @module model/SetDiscountPerAdditionalCostEffectProps
 * @version 6.0.0
 */
class SetDiscountPerAdditionalCostEffectProps {
    /**
     * Constructs a new <code>SetDiscountPerAdditionalCostEffectProps</code>.
     * The properties specific to the \&quot;setDiscountPerAdditionalCost\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set per additional cost discount\&quot; effect. This is a discount that should be applied on a specific additional cost.
     * @alias module:model/SetDiscountPerAdditionalCostEffectProps
     * @param name {String} The name / description of this discount
     * @param additionalCostId {Number} The ID of the additional cost.
     * @param additionalCost {String} The name of the additional cost.
     * @param value {Number} The total monetary value of the discount.
     */
    constructor(name, additionalCostId, additionalCost, value) { 
        
        SetDiscountPerAdditionalCostEffectProps.initialize(this, name, additionalCostId, additionalCost, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, additionalCostId, additionalCost, value) { 
        obj['name'] = name;
        obj['additionalCostId'] = additionalCostId;
        obj['additionalCost'] = additionalCost;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>SetDiscountPerAdditionalCostEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountPerAdditionalCostEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountPerAdditionalCostEffectProps} The populated <code>SetDiscountPerAdditionalCostEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDiscountPerAdditionalCostEffectProps();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('additionalCostId')) {
                obj['additionalCostId'] = ApiClient.convertToType(data['additionalCostId'], 'Number');
            }
            if (data.hasOwnProperty('additionalCost')) {
                obj['additionalCost'] = ApiClient.convertToType(data['additionalCost'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
SetDiscountPerAdditionalCostEffectProps.prototype['name'] = undefined;

/**
 * The ID of the additional cost.
 * @member {Number} additionalCostId
 */
SetDiscountPerAdditionalCostEffectProps.prototype['additionalCostId'] = undefined;

/**
 * The name of the additional cost.
 * @member {String} additionalCost
 */
SetDiscountPerAdditionalCostEffectProps.prototype['additionalCost'] = undefined;

/**
 * The total monetary value of the discount.
 * @member {Number} value
 */
SetDiscountPerAdditionalCostEffectProps.prototype['value'] = undefined;

/**
 * The original value of the discount.
 * @member {Number} desiredValue
 */
SetDiscountPerAdditionalCostEffectProps.prototype['desiredValue'] = undefined;






export default SetDiscountPerAdditionalCostEffectProps;

