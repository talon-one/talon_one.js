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
 * The NewRole model module.
 * @module model/NewRole
 * @version 5.0.1
 */
class NewRole {
    /**
     * Constructs a new <code>NewRole</code>.
     * 
     * @alias module:model/NewRole
     * @param name {String} Name of the role.
     * @param acl {String} The `Access Control List` json defining the role of the user. This represents the access control on the user level.
     * @param members {Array.<Number>} An array of user identifiers.
     */
    constructor(name, acl, members) { 
        
        NewRole.initialize(this, name, acl, members);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, acl, members) { 
        obj['name'] = name;
        obj['acl'] = acl;
        obj['members'] = members;
    }

    /**
     * Constructs a <code>NewRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRole} obj Optional instance to populate.
     * @return {module:model/NewRole} The populated <code>NewRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewRole();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Name of the role.
 * @member {String} name
 */
NewRole.prototype['name'] = undefined;

/**
 * Description of the role.
 * @member {String} description
 */
NewRole.prototype['description'] = undefined;

/**
 * The `Access Control List` json defining the role of the user. This represents the access control on the user level.
 * @member {String} acl
 */
NewRole.prototype['acl'] = undefined;

/**
 * An array of user identifiers.
 * @member {Array.<Number>} members
 */
NewRole.prototype['members'] = undefined;






export default NewRole;

