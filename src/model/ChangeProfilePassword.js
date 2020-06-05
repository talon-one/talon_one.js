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
 * The ChangeProfilePassword model module.
 * @module model/ChangeProfilePassword
 * @version 4.1.1
 */
class ChangeProfilePassword {
    /**
     * Constructs a new <code>ChangeProfilePassword</code>.
     * @alias module:model/ChangeProfilePassword
     * @param password {String} Your old password.
     * @param newPassword {String} Your new password.
     */
    constructor(password, newPassword) { 
        
        ChangeProfilePassword.initialize(this, password, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password, newPassword) { 
        obj['password'] = password;
        obj['newPassword'] = newPassword;
    }

    /**
     * Constructs a <code>ChangeProfilePassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeProfilePassword} obj Optional instance to populate.
     * @return {module:model/ChangeProfilePassword} The populated <code>ChangeProfilePassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeProfilePassword();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Your old password.
 * @member {String} password
 */
ChangeProfilePassword.prototype['password'] = undefined;

/**
 * Your new password.
 * @member {String} newPassword
 */
ChangeProfilePassword.prototype['newPassword'] = undefined;






export default ChangeProfilePassword;

