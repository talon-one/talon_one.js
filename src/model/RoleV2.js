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
import RoleV2Permissions from './RoleV2Permissions';

/**
 * The RoleV2 model module.
 * @module model/RoleV2
 * @version 7.0.0
 */
class RoleV2 {
    /**
     * Constructs a new <code>RoleV2</code>.
     * 
     * @alias module:model/RoleV2
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     */
    constructor(id, created, modified, accountId) { 
        
        RoleV2.initialize(this, id, created, modified, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, accountId) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>RoleV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleV2} obj Optional instance to populate.
     * @return {module:model/RoleV2} The populated <code>RoleV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleV2();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = RoleV2Permissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
RoleV2.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
RoleV2.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
RoleV2.prototype['modified'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
RoleV2.prototype['accountId'] = undefined;

/**
 * Name of the role.
 * @member {String} name
 */
RoleV2.prototype['name'] = undefined;

/**
 * Description of the role.
 * @member {String} description
 */
RoleV2.prototype['description'] = undefined;

/**
 * @member {module:model/RoleV2Permissions} permissions
 */
RoleV2.prototype['permissions'] = undefined;

/**
 * A list of user IDs the role is assigned to.
 * @member {Array.<Number>} members
 */
RoleV2.prototype['members'] = undefined;






export default RoleV2;

