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
 * The NewUser model module.
 * @module model/NewUser
 * @version 1.0.0
 */
var NewUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewUser</code>.
   * 
   * @alias module:model/NewUser
   * @param email {String} The email address associated with your account.
   * @param password {String} The password for your account.
   * @param inviteToken {String} 
   */
  function NewUser(email, password, inviteToken) {
    _classCallCheck(this, NewUser);

    NewUser.initialize(this, email, password, inviteToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewUser, null, [{
    key: "initialize",
    value: function initialize(obj, email, password, inviteToken) {
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

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewUser();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('inviteToken')) {
          obj['inviteToken'] = _ApiClient["default"].convertToType(data['inviteToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewUser;
}();
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
var _default = NewUser;
exports["default"] = _default;