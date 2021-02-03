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
 * The RoleAssign model module.
 * @module model/RoleAssign
 * @version 4.3.0
 */
class RoleAssign {
    /**
     * Constructs a new <code>RoleAssign</code>.
     * 
     * @alias module:model/RoleAssign
     * @param users {Array.<Number>} An array of userIDs
     * @param roles {Array.<Number>} An array of roleIDs
     */
    constructor(users, roles) { 
        
        RoleAssign.initialize(this, users, roles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, users, roles) { 
        obj['users'] = users;
        obj['roles'] = roles;
    }

    /**
     * Constructs a <code>RoleAssign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssign} obj Optional instance to populate.
     * @return {module:model/RoleAssign} The populated <code>RoleAssign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleAssign();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['Number']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * An array of userIDs
 * @member {Array.<Number>} users
 */
RoleAssign.prototype['users'] = undefined;

/**
 * An array of roleIDs
 * @member {Array.<Number>} roles
 */
RoleAssign.prototype['roles'] = undefined;






export default RoleAssign;

