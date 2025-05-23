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
 * The RoleAssign model module.
 * @module model/RoleAssign
 * @version 12.0.0
 */
class RoleAssign {
    /**
     * Constructs a new <code>RoleAssign</code>.
     * @alias module:model/RoleAssign
     * @param users {Array.<Number>} An array of user IDs.
     * @param roles {Array.<Number>} An array of role IDs.
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
 * An array of user IDs.
 * @member {Array.<Number>} users
 */
RoleAssign.prototype['users'] = undefined;

/**
 * An array of role IDs.
 * @member {Array.<Number>} roles
 */
RoleAssign.prototype['roles'] = undefined;






export default RoleAssign;

