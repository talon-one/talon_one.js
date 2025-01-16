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
 * The Catalog model module.
 * @module model/Catalog
 * @version 10.0.0
 */
class Catalog {
    /**
     * Constructs a new <code>Catalog</code>.
     * @alias module:model/Catalog
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param modified {Date} The time this entity was last modified.
     * @param name {String} The cart item catalog name.
     * @param description {String} A description of this cart item catalog.
     * @param version {Number} The current version of this catalog.
     * @param createdBy {Number} The ID of user who created this catalog.
     */
    constructor(id, created, accountId, modified, name, description, version, createdBy) { 
        
        Catalog.initialize(this, id, created, accountId, modified, name, description, version, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, modified, name, description, version, createdBy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['modified'] = modified;
        obj['name'] = name;
        obj['description'] = description;
        obj['version'] = version;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Catalog} obj Optional instance to populate.
     * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Catalog();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Catalog.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Catalog.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Catalog.prototype['accountId'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
Catalog.prototype['modified'] = undefined;

/**
 * The cart item catalog name.
 * @member {String} name
 */
Catalog.prototype['name'] = undefined;

/**
 * A description of this cart item catalog.
 * @member {String} description
 */
Catalog.prototype['description'] = undefined;

/**
 * A list of the IDs of the applications that are subscribed to this catalog.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
Catalog.prototype['subscribedApplicationsIds'] = undefined;

/**
 * The current version of this catalog.
 * @member {Number} version
 */
Catalog.prototype['version'] = undefined;

/**
 * The ID of user who created this catalog.
 * @member {Number} createdBy
 */
Catalog.prototype['createdBy'] = undefined;






export default Catalog;

