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
 * The ItemAttribute model module.
 * @module model/ItemAttribute
 * @version 9.0.0
 */
class ItemAttribute {
    /**
     * Constructs a new <code>ItemAttribute</code>.
     * 
     * @alias module:model/ItemAttribute
     * @param attributeid {Number} The ID of the attribute of the item.
     * @param name {String} The name of the attribute.
     * @param value {Object} The value of the attribute.
     */
    constructor(attributeid, name, value) { 
        
        ItemAttribute.initialize(this, attributeid, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributeid, name, value) { 
        obj['attributeid'] = attributeid;
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ItemAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemAttribute} obj Optional instance to populate.
     * @return {module:model/ItemAttribute} The populated <code>ItemAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAttribute();

            if (data.hasOwnProperty('attributeid')) {
                obj['attributeid'] = ApiClient.convertToType(data['attributeid'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the attribute of the item.
 * @member {Number} attributeid
 */
ItemAttribute.prototype['attributeid'] = undefined;

/**
 * The name of the attribute.
 * @member {String} name
 */
ItemAttribute.prototype['name'] = undefined;

/**
 * The value of the attribute.
 * @member {Object} value
 */
ItemAttribute.prototype['value'] = undefined;






export default ItemAttribute;

