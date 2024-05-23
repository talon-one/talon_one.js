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
 * The NewInvitation model module.
 * @module model/NewInvitation
 * @version 7.0.0
 */
class NewInvitation {
    /**
     * Constructs a new <code>NewInvitation</code>.
     * Parameters for inviting a new user.
     * @alias module:model/NewInvitation
     * @param email {String} Email address of the user.
     */
    constructor(email) { 
        
        NewInvitation.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
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
            if (data.hasOwnProperty('isAdmin')) {
                obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'Boolean');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['Number']);
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the user.
 * @member {String} name
 */
NewInvitation.prototype['name'] = undefined;

/**
 * Email address of the user.
 * @member {String} email
 */
NewInvitation.prototype['email'] = undefined;

/**
 * Indicates whether the user is an `admin`.
 * @member {Boolean} isAdmin
 */
NewInvitation.prototype['isAdmin'] = undefined;

/**
 * A list of the IDs of the roles assigned to the user.
 * @member {Array.<Number>} roles
 */
NewInvitation.prototype['roles'] = undefined;

/**
 * Indicates the access level of the user.
 * @member {String} acl
 */
NewInvitation.prototype['acl'] = undefined;






export default NewInvitation;

