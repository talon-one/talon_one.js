"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 4.2.0
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * 
   * @alias module:model/User
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param email {String} The email address associated with your account.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param inviteToken {String} Invite token, empty if the user as already accepted their invite.
   * @param state {module:model/User.StateEnum} Current user state.
   * @param name {String} Full name
   * @param policy {Object} User ACL Policy
   */
  function User(id, created, modified, email, accountId, inviteToken, state, name, policy) {
    _classCallCheck(this, User);

    User.initialize(this, id, created, modified, email, accountId, inviteToken, state, name, policy);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, modified, email, accountId, inviteToken, state, name, policy) {
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

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('inviteToken')) {
          obj['inviteToken'] = _ApiClient["default"].convertToType(data['inviteToken'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('policy')) {
          obj['policy'] = _ApiClient["default"].convertToType(data['policy'], Object);
        }

        if (data.hasOwnProperty('latestFeedTimestamp')) {
          obj['latestFeedTimestamp'] = _ApiClient["default"].convertToType(data['latestFeedTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['Number']);
        }

        if (data.hasOwnProperty('applicationNotificationSubscriptions')) {
          obj['applicationNotificationSubscriptions'] = _ApiClient["default"].convertToType(data['applicationNotificationSubscriptions'], Object);
        }

        if (data.hasOwnProperty('authMethod')) {
          obj['authMethod'] = _ApiClient["default"].convertToType(data['authMethod'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


User.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

User.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
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
 * Contains a list of all roles the user is a member of
 * @member {Array.<Number>} roles
 */

User.prototype['roles'] = undefined;
/**
 * @member {Object} applicationNotificationSubscriptions
 */

User.prototype['applicationNotificationSubscriptions'] = undefined;
/**
 * The Authentication method for this user
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
var _default = User;
exports["default"] = _default;