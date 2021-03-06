/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The Role model module.
 * @module model/Role
 * @version 4.3.0
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * 
     * @alias module:model/Role
     * @param id {Number} The ID of the role corresponding to the DB row
     * @param accountID {Number} The ID of the Talon.One account that owns this role.
     */
    constructor(id, accountID) { 
        
        Role.initialize(this, id, accountID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, accountID) { 
        obj['id'] = id;
        obj['accountID'] = accountID;
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
            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
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
 * The ID of the role corresponding to the DB row
 * @member {Number} id
 */
Role.prototype['id'] = undefined;

/**
 * The ID of the Talon.One account that owns this role.
 * @member {Number} accountID
 */
Role.prototype['accountID'] = undefined;

/**
 * The ID of the Campaign Group this role was created for.
 * @member {Number} campaignGroupID
 */
Role.prototype['campaignGroupID'] = undefined;

/**
 * Name of the role
 * @member {String} name
 */
Role.prototype['name'] = undefined;

/**
 * Description of the role
 * @member {String} description
 */
Role.prototype['description'] = undefined;

/**
 * A list of user identifiers assigned to this role
 * @member {Array.<Number>} members
 */
Role.prototype['members'] = undefined;

/**
 * Role ACL Policy
 * @member {Object} acl
 */
Role.prototype['acl'] = undefined;






export default Role;

