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
 * The NewAccountSignUp model module.
 * @module model/NewAccountSignUp
 * @version 5.0.1
 */
class NewAccountSignUp {
    /**
     * Constructs a new <code>NewAccountSignUp</code>.
     * 
     * @alias module:model/NewAccountSignUp
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     * @param companyName {String} 
     */
    constructor(email, password, companyName) { 
        
        NewAccountSignUp.initialize(this, email, password, companyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, companyName) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['companyName'] = companyName;
    }

    /**
     * Constructs a <code>NewAccountSignUp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccountSignUp} obj Optional instance to populate.
     * @return {module:model/NewAccountSignUp} The populated <code>NewAccountSignUp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAccountSignUp();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The email address associated with your account.
 * @member {String} email
 */
NewAccountSignUp.prototype['email'] = undefined;

/**
 * The password for your account.
 * @member {String} password
 */
NewAccountSignUp.prototype['password'] = undefined;

/**
 * @member {String} companyName
 */
NewAccountSignUp.prototype['companyName'] = undefined;






export default NewAccountSignUp;

