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
 * The User model module.
 * @module model/User
 * @version 5.0.1
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * 
     * @alias module:model/User
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param email {String} The email address associated with your account.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param inviteToken {String} Invite token, empty if the user as already accepted their invite.
     * @param state {module:model/User.StateEnum} Current user state.
     * @param name {String} Full name
     * @param policy {Object} User ACL Policy
     */
    constructor(id, created, modified, email, accountId, inviteToken, state, name, policy) { 
        
        User.initialize(this, id, created, modified, email, accountId, inviteToken, state, name, policy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, email, accountId, inviteToken, state, name, policy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['email'] = email;
        obj['accountId'] = accountId;
        obj['inviteToken'] = inviteToken;
        obj['state'] = state;
        obj['name'] = name;
        obj['policy'] = policy;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('inviteToken')) {
                obj['inviteToken'] = ApiClient.convertToType(data['inviteToken'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ApiClient.convertToType(data['policy'], Object);
            }
            if (data.hasOwnProperty('latestFeedTimestamp')) {
                obj['latestFeedTimestamp'] = ApiClient.convertToType(data['latestFeedTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['Number']);
            }
            if (data.hasOwnProperty('applicationNotificationSubscriptions')) {
                obj['applicationNotificationSubscriptions'] = ApiClient.convertToType(data['applicationNotificationSubscriptions'], Object);
            }
            if (data.hasOwnProperty('authMethod')) {
                obj['authMethod'] = ApiClient.convertToType(data['authMethod'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
User.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
User.prototype['modified'] = undefined;

/**
 * The email address associated with your account.
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
User.prototype['accountId'] = undefined;

/**
 * Invite token, empty if the user as already accepted their invite.
 * @member {String} inviteToken
 */
User.prototype['inviteToken'] = undefined;

/**
 * Current user state.
 * @member {module:model/User.StateEnum} state
 */
User.prototype['state'] = undefined;

/**
 * Full name
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * User ACL Policy
 * @member {Object} policy
 */
User.prototype['policy'] = undefined;

/**
 * Latest timestamp the user has been notified for feed.
 * @member {Date} latestFeedTimestamp
 */
User.prototype['latestFeedTimestamp'] = undefined;

/**
 * Contains a list of all roles the user is a member of.
 * @member {Array.<Number>} roles
 */
User.prototype['roles'] = undefined;

/**
 * @member {Object} applicationNotificationSubscriptions
 */
User.prototype['applicationNotificationSubscriptions'] = undefined;

/**
 * The Authentication method for this user.
 * @member {String} authMethod
 */
User.prototype['authMethod'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
User['StateEnum'] = {

    /**
     * value: "invited"
     * @const
     */
    "invited": "invited",

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "deactivated"
     * @const
     */
    "deactivated": "deactivated"
};



export default User;

