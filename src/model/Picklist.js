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
 * The Picklist model module.
 * @module model/Picklist
 * @version 10.0.0
 */
class Picklist {
    /**
     * Constructs a new <code>Picklist</code>.
     * @alias module:model/Picklist
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param type {module:model/Picklist.TypeEnum} The type of allowed values in the picklist. If the type `time` is chosen, it must be an RFC3339 timestamp string.
     * @param values {Array.<String>} The list of allowed values provided by this picklist.
     * @param createdBy {Number} ID of the user who created this effect.
     */
    constructor(id, created, type, values, createdBy) { 
        
        Picklist.initialize(this, id, created, type, values, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, type, values, createdBy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['type'] = type;
        obj['values'] = values;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>Picklist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Picklist} obj Optional instance to populate.
     * @return {module:model/Picklist} The populated <code>Picklist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Picklist();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('imported')) {
                obj['imported'] = ApiClient.convertToType(data['imported'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Picklist.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Picklist.prototype['created'] = undefined;

/**
 * The type of allowed values in the picklist. If the type `time` is chosen, it must be an RFC3339 timestamp string.
 * @member {module:model/Picklist.TypeEnum} type
 */
Picklist.prototype['type'] = undefined;

/**
 * The list of allowed values provided by this picklist.
 * @member {Array.<String>} values
 */
Picklist.prototype['values'] = undefined;

/**
 * ID of the user who last updated this effect if available.
 * @member {Number} modifiedBy
 */
Picklist.prototype['modifiedBy'] = undefined;

/**
 * ID of the user who created this effect.
 * @member {Number} createdBy
 */
Picklist.prototype['createdBy'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Picklist.prototype['accountId'] = undefined;

/**
 * Imported flag shows that a picklist is imported by a CSV file or not
 * @member {Boolean} imported
 */
Picklist.prototype['imported'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Picklist['TypeEnum'] = {

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "time"
     * @const
     */
    "time": "time"
};



export default Picklist;

