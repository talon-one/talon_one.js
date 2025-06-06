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
 * The Session model module.
 * @module model/Session
 * @version 12.0.0
 */
class Session {
    /**
     * Constructs a new <code>Session</code>.
     * @alias module:model/Session
     * @param userId {Number} The ID of the user of this session.
     * @param token {String} The token to use as a bearer token to query Management API endpoints.
     * @param created {Date} Unix timestamp indicating when the session was first created.
     */
    constructor(userId, token, created) { 
        
        Session.initialize(this, userId, token, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, token, created) { 
        obj['userId'] = userId;
        obj['token'] = token;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Session} obj Optional instance to populate.
     * @return {module:model/Session} The populated <code>Session</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Session();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The ID of the user of this session.
 * @member {Number} userId
 */
Session.prototype['userId'] = undefined;

/**
 * The token to use as a bearer token to query Management API endpoints.
 * @member {String} token
 */
Session.prototype['token'] = undefined;

/**
 * Unix timestamp indicating when the session was first created.
 * @member {Date} created
 */
Session.prototype['created'] = undefined;






export default Session;

