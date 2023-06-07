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
 * The SetDiscountPerItemEffectProps model module.
 * @module model/SetDiscountPerItemEffectProps
 * @version 5.0.1
 */
class SetDiscountPerItemEffectProps {
    /**
     * Constructs a new <code>SetDiscountPerItemEffectProps</code>.
     * The properties specific to the &#x60;setDiscountPerItem&#x60; effect, triggered whenever a validated rule contained a \&quot;set per item discount\&quot; effect. This is a discount that will be applied either on a specific item, on a specific item + additional cost or on all additional costs per item. This depends on the chosen scope. 
     * @alias module:model/SetDiscountPerItemEffectProps
     * @param name {String} The name of the discount. Contains a hashtag character indicating the index of the position of the item the discount applies to. It is identical to the value of the `position` property. 
     * @param value {Number} The total monetary value of the discount.
     * @param position {Number} The index of the item in the cart items list on which this discount should be applied.
     */
    constructor(name, value, position) { 
        
        SetDiscountPerItemEffectProps.initialize(this, name, value, position);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value, position) { 
        obj['name'] = name;
        obj['value'] = value;
        obj['position'] = position;
    }

    /**
     * Constructs a <code>SetDiscountPerItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountPerItemEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountPerItemEffectProps} The populated <code>SetDiscountPerItemEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDiscountPerItemEffectProps();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('subPosition')) {
                obj['subPosition'] = ApiClient.convertToType(data['subPosition'], 'Number');
            }
            if (data.hasOwnProperty('desiredValue')) {
                obj['desiredValue'] = ApiClient.convertToType(data['desiredValue'], 'Number');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('totalDiscount')) {
                obj['totalDiscount'] = ApiClient.convertToType(data['totalDiscount'], 'Number');
            }
            if (data.hasOwnProperty('desiredTotalDiscount')) {
                obj['desiredTotalDiscount'] = ApiClient.convertToType(data['desiredTotalDiscount'], 'Number');
            }
            if (data.hasOwnProperty('bundleIndex')) {
                obj['bundleIndex'] = ApiClient.convertToType(data['bundleIndex'], 'Number');
            }
            if (data.hasOwnProperty('bundleName')) {
                obj['bundleName'] = ApiClient.convertToType(data['bundleName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the discount. Contains a hashtag character indicating the index of the position of the item the discount applies to. It is identical to the value of the `position` property. 
 * @member {String} name
 */
SetDiscountPerItemEffectProps.prototype['name'] = undefined;

/**
 * The total monetary value of the discount.
 * @member {Number} value
 */
SetDiscountPerItemEffectProps.prototype['value'] = undefined;

/**
 * The index of the item in the cart items list on which this discount should be applied.
 * @member {Number} position
 */
SetDiscountPerItemEffectProps.prototype['position'] = undefined;

/**
 * Only used when [cart item flattening](https://docs.talon.one/docs/product/campaigns/managing-general-settings#flattening) is enabled. Indicates which item the discount applies to for cart items with `quantity` > 1. 
 * @member {Number} subPosition
 */
SetDiscountPerItemEffectProps.prototype['subPosition'] = undefined;

/**
 * The original value of the discount.
 * @member {Number} desiredValue
 */
SetDiscountPerItemEffectProps.prototype['desiredValue'] = undefined;

/**
 * The scope of the discount: - `additionalCosts`: The discount applies to all the additional costs of the item. - `itemTotal`: The discount applies to the price of the item + the additional costs of the item. - `price`: The discount applies to the price of the item. 
 * @member {String} scope
 */
SetDiscountPerItemEffectProps.prototype['scope'] = undefined;

/**
 * The total discount given if this effect is a result of a prorated discount.
 * @member {Number} totalDiscount
 */
SetDiscountPerItemEffectProps.prototype['totalDiscount'] = undefined;

/**
 * The original total discount to give if this effect is a result of a prorated discount.
 * @member {Number} desiredTotalDiscount
 */
SetDiscountPerItemEffectProps.prototype['desiredTotalDiscount'] = undefined;

/**
 * The position of the bundle in a list of item bundles created from the same bundle definition.
 * @member {Number} bundleIndex
 */
SetDiscountPerItemEffectProps.prototype['bundleIndex'] = undefined;

/**
 * The name of the bundle definition.
 * @member {String} bundleName
 */
SetDiscountPerItemEffectProps.prototype['bundleName'] = undefined;






export default SetDiscountPerItemEffectProps;

