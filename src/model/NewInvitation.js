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
 * The NewInvitation model module.
 * @module model/NewInvitation
 * @version 5.0.0
 */
class NewInvitation {
    /**
     * Constructs a new <code>NewInvitation</code>.
     * Parameters for inviting a new user.
     * @alias module:model/NewInvitation
     * @param email {String} 
     * @param acl {String} The `Access Control List` json defining the role of the user.  This represents the access control on the user level. Use one of the following: - normal user: `{\"Role\": 0}` - admin: `{\"Role\": 127}` 
     */
    constructor(email, acl) { 
        
        NewInvitation.initialize(this, email, acl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, acl) { 
        obj['email'] = email;
        obj['acl'] = acl;
    }

    /**
     * Constructs a <code>NewInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInvitation} obj Optional instance to populate.
     * @return {module:model/NewInvitation} The populated <code>NewInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewInvitation();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Name of the user being invited.
 * @member {String} name
 */
NewInvitation.prototype['name'] = undefined;

/**
 * @member {String} email
 */
NewInvitation.prototype['email'] = undefined;

/**
 * The `Access Control List` json defining the role of the user.  This represents the access control on the user level. Use one of the following: - normal user: `{\"Role\": 0}` - admin: `{\"Role\": 127}` 
 * @member {String} acl
 */
NewInvitation.prototype['acl'] = undefined;

/**
 * An array of roleIDs to assign the new user to.
 * @member {Array.<Number>} roles
 */
NewInvitation.prototype['roles'] = undefined;






export default NewInvitation;

