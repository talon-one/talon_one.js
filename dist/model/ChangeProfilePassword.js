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
 * The ChangeProfilePassword model module.
 * @module model/ChangeProfilePassword
 * @version 1.0.0
 */
var ChangeProfilePassword = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChangeProfilePassword</code>.
   * @alias module:model/ChangeProfilePassword
   * @param password {String} Your old password.
   * @param newPassword {String} Your new password.
   */
  function ChangeProfilePassword(password, newPassword) {
    _classCallCheck(this, ChangeProfilePassword);

    ChangeProfilePassword.initialize(this, password, newPassword);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChangeProfilePassword, null, [{
    key: "initialize",
    value: function initialize(obj, password, newPassword) {
      obj['password'] = password;
      obj['newPassword'] = newPassword;
    }
    /**
     * Constructs a <code>ChangeProfilePassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeProfilePassword} obj Optional instance to populate.
     * @return {module:model/ChangeProfilePassword} The populated <code>ChangeProfilePassword</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChangeProfilePassword();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('newPassword')) {
          obj['newPassword'] = _ApiClient["default"].convertToType(data['newPassword'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChangeProfilePassword;
}();
/**
 * Your old password.
 * @member {String} password
 */


ChangeProfilePassword.prototype['password'] = undefined;
/**
 * Your new password.
 * @member {String} newPassword
 */

ChangeProfilePassword.prototype['newPassword'] = undefined;
var _default = ChangeProfilePassword;
exports["default"] = _default;