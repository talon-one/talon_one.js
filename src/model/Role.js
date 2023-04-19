/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The Role model module.
 * @module model/Role
 * @version 5.0.0
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * 
     * @alias module:model/Role
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} Name of the role.
     * @param acl {Object} The `Access Control List` json defining the role of the user. This represents the access control on the user level.
     */
    constructor(id, created, modified, accountId, name, acl) { 
        
        Role.initialize(this, id, created, modified, accountId, name, acl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, accountId, name, acl) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['acl'] = acl;
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('campaignGroupID')) {
                obj['campaignGroupID'] = ApiClient.convertToType(data['campaignGroupID'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['Number']);
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], Object);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Role.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Role.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
Role.prototype['modified'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Role.prototype['accountId'] = undefined;

/**
 * The ID of the [Campaign Group](https://docs.talon.one/docs/product/account/managing-campaign-groups) this role was created for. 
 * @member {Number} campaignGroupID
 */
Role.prototype['campaignGroupID'] = undefined;

/**
 * Name of the role.
 * @member {String} name
 */
Role.prototype['name'] = undefined;

/**
 * Description of the role.
 * @member {String} description
 */
Role.prototype['description'] = undefined;

/**
 * A list of user identifiers assigned to this role.
 * @member {Array.<Number>} members
 */
Role.prototype['members'] = undefined;

/**
 * The `Access Control List` json defining the role of the user. This represents the access control on the user level.
 * @member {Object} acl
 */
Role.prototype['acl'] = undefined;






export default Role;

