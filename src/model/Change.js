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
 * The Change model module.
 * @module model/Change
 * @version 10.0.0
 */
class Change {
    /**
     * Constructs a new <code>Change</code>.
     * @alias module:model/Change
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param userId {Number} The ID of the user associated with this entity.
     * @param entity {String} API endpoint on which the change was initiated.
     */
    constructor(id, created, userId, entity) { 
        
        Change.initialize(this, id, created, userId, entity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, userId, entity) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['userId'] = userId;
        obj['entity'] = entity;
    }

    /**
     * Constructs a <code>Change</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Change} obj Optional instance to populate.
     * @return {module:model/Change} The populated <code>Change</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Change();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('old')) {
                obj['old'] = ApiClient.convertToType(data['old'], Object);
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], Object);
            }
            if (data.hasOwnProperty('managementKeyId')) {
                obj['managementKeyId'] = ApiClient.convertToType(data['managementKeyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Change.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Change.prototype['created'] = undefined;

/**
 * The ID of the user associated with this entity.
 * @member {Number} userId
 */
Change.prototype['userId'] = undefined;

/**
 * ID of application associated with change.
 * @member {Number} applicationId
 */
Change.prototype['applicationId'] = undefined;

/**
 * API endpoint on which the change was initiated.
 * @member {String} entity
 */
Change.prototype['entity'] = undefined;

/**
 * Resource before the change occurred.
 * @member {Object} old
 */
Change.prototype['old'] = undefined;

/**
 * Resource after the change occurred.
 * @member {Object} new
 */
Change.prototype['new'] = undefined;

/**
 * ID of management key used to perform changes.
 * @member {Number} managementKeyId
 */
Change.prototype['managementKeyId'] = undefined;






export default Change;

