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
 * The NewPassword model module.
 * @module model/NewPassword
 * @version 4.0.0
 */
var NewPassword = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewPassword</code>.
   * @alias module:model/NewPassword
   * @param password {String} The new password for your account.
   * @param resetToken {String} 
   */
  function NewPassword(password, resetToken) {
    _classCallCheck(this, NewPassword);

    NewPassword.initialize(this, password, resetToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewPassword, null, [{
    key: "initialize",
    value: function initialize(obj, password, resetToken) {
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

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewPassword();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('resetToken')) {
          obj['resetToken'] = _ApiClient["default"].convertToType(data['resetToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewPassword;
}();
/**
 * The new password for your account.
 * @member {String} password
 */


NewPassword.prototype['password'] = undefined;
/**
 * @member {String} resetToken
 */

NewPassword.prototype['resetToken'] = undefined;
var _default = NewPassword;
exports["default"] = _default;