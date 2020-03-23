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
 * The UpdateUser model module.
 * @module model/UpdateUser
 * @version 1.0.0
 */
var UpdateUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateUser</code>.
   * @alias module:model/UpdateUser
   */
  function UpdateUser() {
    _classCallCheck(this, UpdateUser);

    UpdateUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUser} obj Optional instance to populate.
     * @return {module:model/UpdateUser} The populated <code>UpdateUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUser();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('policy')) {
          obj['policy'] = _ApiClient["default"].convertToType(data['policy'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('releaseUpdate')) {
          obj['releaseUpdate'] = _ApiClient["default"].convertToType(data['releaseUpdate'], 'Boolean');
        }

        if (data.hasOwnProperty('latestFeature')) {
          obj['latestFeature'] = _ApiClient["default"].convertToType(data['latestFeature'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['Number']);
        }

        if (data.hasOwnProperty('applicationNotificationSubscriptions')) {
          obj['applicationNotificationSubscriptions'] = _ApiClient["default"].convertToType(data['applicationNotificationSubscriptions'], Object);
        }
      }

      return obj;
    }
  }]);

  return UpdateUser;
}();
/**
 * Your name.
 * @member {String} name
 */


UpdateUser.prototype['name'] = undefined;
/**
 * a blob of acl json
 * @member {String} policy
 */

UpdateUser.prototype['policy'] = undefined;
/**
 * New state (\"deactivated\" or \"active\") for the user. Only usable by admins for the user.
 * @member {module:model/UpdateUser.StateEnum} state
 */

UpdateUser.prototype['state'] = undefined;
/**
 * Update the user via email
 * @member {Boolean} releaseUpdate
 */

UpdateUser.prototype['releaseUpdate'] = undefined;
/**
 * The latest feature you've been notified.
 * @member {String} latestFeature
 */

UpdateUser.prototype['latestFeature'] = undefined;
/**
 * Update
 * @member {Array.<Number>} roles
 */

UpdateUser.prototype['roles'] = undefined;
/**
 * @member {Object} applicationNotificationSubscriptions
 */

UpdateUser.prototype['applicationNotificationSubscriptions'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

UpdateUser['StateEnum'] = {
  /**
   * value: "deactivated"
   * @const
   */
  "deactivated": "deactivated",

  /**
   * value: "active"
   * @const
   */
  "active": "active"
};
var _default = UpdateUser;
exports["default"] = _default;