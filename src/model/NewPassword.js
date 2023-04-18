/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The NewPassword model module.
 * @module model/NewPassword
 * @version 5.0.0
 */
class NewPassword {
    /**
     * Constructs a new <code>NewPassword</code>.
     * @alias module:model/NewPassword
     * @param password {String} The new password for your account.
     * @param resetToken {String} 
     */
    constructor(password, resetToken) { 
        
        NewPassword.initialize(this, password, resetToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password, resetToken) { 
        obj['password'] = password;
        obj['resetToken'] = resetToken;
    }

    /**
     * Constructs a <code>NewPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewPassword} obj Optional instance to populate.
     * @return {module:model/NewPassword} The populated <code>NewPassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewPassword();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('resetToken')) {
                obj['resetToken'] = ApiClient.convertToType(data['resetToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The new password for your account.
 * @member {String} password
 */
NewPassword.prototype['password'] = undefined;

/**
 * @member {String} resetToken
 */
NewPassword.prototype['resetToken'] = undefined;






export default NewPassword;

