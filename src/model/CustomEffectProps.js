/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The CustomEffectProps model module.
 * @module model/CustomEffectProps
 * @version 4.6.0
 */
class CustomEffectProps {
    /**
     * Constructs a new <code>CustomEffectProps</code>.
     * Effect containing custom payload.
     * @alias module:model/CustomEffectProps
     * @param effectId {Number} The ID of the custom effect that was triggered.
     * @param name {String} The type of the custom effect.
     * @param payload {Object} The JSON payload of the custom effect.
     */
    constructor(effectId, name, payload) { 
        
        CustomEffectProps.initialize(this, effectId, name, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, effectId, name, payload) { 
        obj['effectId'] = effectId;
        obj['name'] = name;
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>CustomEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomEffectProps} obj Optional instance to populate.
     * @return {module:model/CustomEffectProps} The populated <code>CustomEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEffectProps();

            if (data.hasOwnProperty('effectId')) {
                obj['effectId'] = ApiClient.convertToType(data['effectId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the custom effect that was triggered.
 * @member {Number} effectId
 */
CustomEffectProps.prototype['effectId'] = undefined;

/**
 * The type of the custom effect.
 * @member {String} name
 */
CustomEffectProps.prototype['name'] = undefined;

/**
 * The JSON payload of the custom effect.
 * @member {Object} payload
 */
CustomEffectProps.prototype['payload'] = undefined;






export default CustomEffectProps;

