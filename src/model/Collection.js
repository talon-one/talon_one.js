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
 * The Collection model module.
 * @module model/Collection
 * @version 7.0.0
 */
class Collection {
    /**
     * Constructs a new <code>Collection</code>.
     * 
     * @alias module:model/Collection
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param modified {Date} The time this entity was last modified.
     * @param name {String} The name of this collection.
     * @param createdBy {Number} ID of the user who created this effect.
     */
    constructor(id, created, accountId, modified, name, createdBy) { 
        
        Collection.initialize(this, id, created, accountId, modified, name, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, modified, name, createdBy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['modified'] = modified;
        obj['name'] = name;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>Collection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection} obj Optional instance to populate.
     * @return {module:model/Collection} The populated <code>Collection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collection();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Collection.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Collection.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Collection.prototype['accountId'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
Collection.prototype['modified'] = undefined;

/**
 * A short description of the purpose of this collection.
 * @member {String} description
 */
Collection.prototype['description'] = undefined;

/**
 * A list of the IDs of the Applications where this collection is enabled.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
Collection.prototype['subscribedApplicationsIds'] = undefined;

/**
 * The name of this collection.
 * @member {String} name
 */
Collection.prototype['name'] = undefined;

/**
 * ID of the user who last updated this effect if available.
 * @member {Number} modifiedBy
 */
Collection.prototype['modifiedBy'] = undefined;

/**
 * ID of the user who created this effect.
 * @member {Number} createdBy
 */
Collection.prototype['createdBy'] = undefined;

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
Collection.prototype['applicationId'] = undefined;

/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */
Collection.prototype['campaignId'] = undefined;

/**
 * The content of the collection.
 * @member {Array.<String>} payload
 */
Collection.prototype['payload'] = undefined;






export default Collection;

