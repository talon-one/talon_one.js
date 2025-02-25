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
 * The SlotDef model module.
 * @module model/SlotDef
 * @version 11.0.0
 */
class SlotDef {
    /**
     * Constructs a new <code>SlotDef</code>.
     * @alias module:model/SlotDef
     * @param name {String} The dot-separated path to this slot for use in Talang.
     * @param type {String} The type of this slot, one of string, number, boolean, or list[type].
     * @param title {String} Campaigner-friendly name for the slot.
     * @param writable {Boolean} Whether or not this slot can be updated by rule effects.
     */
    constructor(name, type, title, writable) { 
        
        SlotDef.initialize(this, name, type, title, writable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, title, writable) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['title'] = title;
        obj['writable'] = writable;
    }

    /**
     * Constructs a <code>SlotDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlotDef} obj Optional instance to populate.
     * @return {module:model/SlotDef} The populated <code>SlotDef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SlotDef();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('help')) {
                obj['help'] = ApiClient.convertToType(data['help'], 'String');
            }
            if (data.hasOwnProperty('writable')) {
                obj['writable'] = ApiClient.convertToType(data['writable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The dot-separated path to this slot for use in Talang.
 * @member {String} name
 */
SlotDef.prototype['name'] = undefined;

/**
 * The type of this slot, one of string, number, boolean, or list[type].
 * @member {String} type
 */
SlotDef.prototype['type'] = undefined;

/**
 * Campaigner-friendly name for the slot.
 * @member {String} title
 */
SlotDef.prototype['title'] = undefined;

/**
 * A short description of the slot.
 * @member {String} description
 */
SlotDef.prototype['description'] = undefined;

/**
 * Extended help text for the slot.
 * @member {String} help
 */
SlotDef.prototype['help'] = undefined;

/**
 * Whether or not this slot can be updated by rule effects.
 * @member {Boolean} writable
 */
SlotDef.prototype['writable'] = undefined;






export default SlotDef;

