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
 * The OneTimeCode model module.
 * @module model/OneTimeCode
 * @version 8.0.0
 */
class OneTimeCode {
    /**
     * Constructs a new <code>OneTimeCode</code>.
     * @alias module:model/OneTimeCode
     * @param userId {Number} The ID of the user.
     * @param accountId {Number} The ID of the account.
     * @param token {String} The two-factor authentication token created during sign-in. This token is used to ensure that the correct user is trying to sign in with a given one-time security code.
     */
    constructor(userId, accountId, token) { 
        
        OneTimeCode.initialize(this, userId, accountId, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, accountId, token) { 
        obj['userId'] = userId;
        obj['accountId'] = accountId;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>OneTimeCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OneTimeCode} obj Optional instance to populate.
     * @return {module:model/OneTimeCode} The populated <code>OneTimeCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OneTimeCode();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the user.
 * @member {Number} userId
 */
OneTimeCode.prototype['userId'] = undefined;

/**
 * The ID of the account.
 * @member {Number} accountId
 */
OneTimeCode.prototype['accountId'] = undefined;

/**
 * The two-factor authentication token created during sign-in. This token is used to ensure that the correct user is trying to sign in with a given one-time security code.
 * @member {String} token
 */
OneTimeCode.prototype['token'] = undefined;

/**
 * The one-time security code used for signing in.
 * @member {String} code
 */
OneTimeCode.prototype['code'] = undefined;






export default OneTimeCode;

