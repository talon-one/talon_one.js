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
 * The ScimPatchOperation model module.
 * @module model/ScimPatchOperation
 * @version 9.0.0
 */
class ScimPatchOperation {
    /**
     * Constructs a new <code>ScimPatchOperation</code>.
     * Patch operation that is used to update the information.
     * @alias module:model/ScimPatchOperation
     * @param op {module:model/ScimPatchOperation.OpEnum} The method that should be used in the operation.
     */
    constructor(op) { 
        
        ScimPatchOperation.initialize(this, op);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, op) { 
        obj['op'] = op;
    }

    /**
     * Constructs a <code>ScimPatchOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimPatchOperation} obj Optional instance to populate.
     * @return {module:model/ScimPatchOperation} The populated <code>ScimPatchOperation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimPatchOperation();

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The method that should be used in the operation.
 * @member {module:model/ScimPatchOperation.OpEnum} op
 */
ScimPatchOperation.prototype['op'] = undefined;

/**
 * The path specifying the attribute that should be updated.
 * @member {String} path
 */
ScimPatchOperation.prototype['path'] = undefined;

/**
 * The value that should be updated. Required if `op` is `add` or `replace`.
 * @member {String} value
 */
ScimPatchOperation.prototype['value'] = undefined;





/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
ScimPatchOperation['OpEnum'] = {

    /**
     * value: "add"
     * @const
     */
    "add": "add",

    /**
     * value: "remove"
     * @const
     */
    "remove": "remove",

    /**
     * value: "replace"
     * @const
     */
    "replace": "replace"
};



export default ScimPatchOperation;

