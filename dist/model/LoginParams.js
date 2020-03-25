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
 * The LoginParams model module.
 * @module model/LoginParams
 * @version 4.0.0
 */
var LoginParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoginParams</code>.
   * 
   * @alias module:model/LoginParams
   * @param email {String} The email address associated with your account.
   * @param password {String} The password for your account.
   */
  function LoginParams(email, password) {
    _classCallCheck(this, LoginParams);

    LoginParams.initialize(this, email, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoginParams, null, [{
    key: "initialize",
    value: function initialize(obj, email, password) {
      obj['email'] = email;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>LoginParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginParams} obj Optional instance to populate.
     * @return {module:model/LoginParams} The populated <code>LoginParams</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoginParams();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoginParams;
}();
/**
 * The email address associated with your account.
 * @member {String} email
 */


LoginParams.prototype['email'] = undefined;
/**
 * The password for your account.
 * @member {String} password
 */

LoginParams.prototype['password'] = undefined;
var _default = LoginParams;
exports["default"] = _default;