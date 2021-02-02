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
 * The NewUser model module.
 * @module model/NewUser
 * @version 4.3.0
 */
class NewUser {
    /**
     * Constructs a new <code>NewUser</code>.
     * 
     * @alias module:model/NewUser
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     * @param inviteToken {String} 
     */
    constructor(email, password, inviteToken) { 
        
        NewUser.initialize(this, email, password, inviteToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, inviteToken) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['inviteToken'] = inviteToken;
    }

    /**
     * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUser} obj Optional instance to populate.
     * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUser();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('inviteToken')) {
                obj['inviteToken'] = ApiClient.convertToType(data['inviteToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The email address associated with your account.
 * @member {String} email
 */
NewUser.prototype['email'] = undefined;

/**
 * The password for your account.
 * @member {String} password
 */
NewUser.prototype['password'] = undefined;

/**
 * Your name.
 * @member {String} name
 */
NewUser.prototype['name'] = undefined;

/**
 * @member {String} inviteToken
 */
NewUser.prototype['inviteToken'] = undefined;






export default NewUser;

