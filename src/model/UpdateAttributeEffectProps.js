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
 * The UpdateAttributeEffectProps model module.
 * @module model/UpdateAttributeEffectProps
 * @version 10.0.0
 */
class UpdateAttributeEffectProps {
    /**
     * Constructs a new <code>UpdateAttributeEffectProps</code>.
     * The properties specific to the \&quot;updateAttribute\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;update an attribute\&quot; effect.
     * @alias module:model/UpdateAttributeEffectProps
     * @param path {String} The exact path of the attribute that was updated.
     * @param value {Object} The new value of this attribute. The value can be of the following types: - boolean - location - number - string - time - list of any of those types 
     */
    constructor(path, value) { 
        
        UpdateAttributeEffectProps.initialize(this, path, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, value) { 
        obj['path'] = path;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UpdateAttributeEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAttributeEffectProps} obj Optional instance to populate.
     * @return {module:model/UpdateAttributeEffectProps} The populated <code>UpdateAttributeEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAttributeEffectProps();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * The exact path of the attribute that was updated.
 * @member {String} path
 */
UpdateAttributeEffectProps.prototype['path'] = undefined;

/**
 * The new value of this attribute. The value can be of the following types: - boolean - location - number - string - time - list of any of those types 
 * @member {Object} value
 */
UpdateAttributeEffectProps.prototype['value'] = undefined;






export default UpdateAttributeEffectProps;

