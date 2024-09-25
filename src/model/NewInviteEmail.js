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
 * The NewInviteEmail model module.
 * @module model/NewInviteEmail
 * @version 9.0.0
 */
class NewInviteEmail {
    /**
     * Constructs a new <code>NewInviteEmail</code>.
     * @alias module:model/NewInviteEmail
     * @param email {String} Email address of the user.
     * @param token {String} Invitation token of the user.
     */
    constructor(email, token) { 
        
        NewInviteEmail.initialize(this, email, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, token) { 
        obj['email'] = email;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>NewInviteEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInviteEmail} obj Optional instance to populate.
     * @return {module:model/NewInviteEmail} The populated <code>NewInviteEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewInviteEmail();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email address of the user.
 * @member {String} email
 */
NewInviteEmail.prototype['email'] = undefined;

/**
 * Invitation token of the user.
 * @member {String} token
 */
NewInviteEmail.prototype['token'] = undefined;






export default NewInviteEmail;

