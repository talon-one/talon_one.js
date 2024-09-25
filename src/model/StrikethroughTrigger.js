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
 * The StrikethroughTrigger model module.
 * @module model/StrikethroughTrigger
 * @version 9.0.0
 */
class StrikethroughTrigger {
    /**
     * Constructs a new <code>StrikethroughTrigger</code>.
     * Information about the event that triggered the strikethrough labeling.
     * @alias module:model/StrikethroughTrigger
     * @param id {Number} The ID of the event that triggered the strikethrough labeling.
     * @param type {String} The type of event that triggered the strikethrough labeling.
     * @param triggeredAt {Date} The creation time of the event that triggered the strikethrough labeling.
     * @param totalAffectedItems {Number} The total number of items affected by the event that triggered the strikethrough labeling.
     * @param payload {Object} The arbitrary properties associated with this trigger type.
     */
    constructor(id, type, triggeredAt, totalAffectedItems, payload) { 
        
        StrikethroughTrigger.initialize(this, id, type, triggeredAt, totalAffectedItems, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, triggeredAt, totalAffectedItems, payload) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['triggeredAt'] = triggeredAt;
        obj['totalAffectedItems'] = totalAffectedItems;
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>StrikethroughTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StrikethroughTrigger} obj Optional instance to populate.
     * @return {module:model/StrikethroughTrigger} The populated <code>StrikethroughTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StrikethroughTrigger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('triggeredAt')) {
                obj['triggeredAt'] = ApiClient.convertToType(data['triggeredAt'], 'Date');
            }
            if (data.hasOwnProperty('totalAffectedItems')) {
                obj['totalAffectedItems'] = ApiClient.convertToType(data['totalAffectedItems'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the event that triggered the strikethrough labeling.
 * @member {Number} id
 */
StrikethroughTrigger.prototype['id'] = undefined;

/**
 * The type of event that triggered the strikethrough labeling.
 * @member {String} type
 */
StrikethroughTrigger.prototype['type'] = undefined;

/**
 * The creation time of the event that triggered the strikethrough labeling.
 * @member {Date} triggeredAt
 */
StrikethroughTrigger.prototype['triggeredAt'] = undefined;

/**
 * The total number of items affected by the event that triggered the strikethrough labeling.
 * @member {Number} totalAffectedItems
 */
StrikethroughTrigger.prototype['totalAffectedItems'] = undefined;

/**
 * The arbitrary properties associated with this trigger type.
 * @member {Object} payload
 */
StrikethroughTrigger.prototype['payload'] = undefined;






export default StrikethroughTrigger;

