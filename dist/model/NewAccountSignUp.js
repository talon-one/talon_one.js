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
 * The NewAccountSignUp model module.
 * @module model/NewAccountSignUp
 * @version 4.2.0
 */
var NewAccountSignUp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewAccountSignUp</code>.
   * 
   * @alias module:model/NewAccountSignUp
   * @param email {String} The email address associated with your account.
   * @param password {String} The password for your account.
   * @param companyName {String} 
   */
  function NewAccountSignUp(email, password, companyName) {
    _classCallCheck(this, NewAccountSignUp);

    NewAccountSignUp.initialize(this, email, password, companyName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewAccountSignUp, null, [{
    key: "initialize",
    value: function initialize(obj, email, password, companyName) {
      obj['email'] = email;
      obj['password'] = password;
      obj['companyName'] = companyName;
    }
    /**
     * Constructs a <code>NewAccountSignUp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccountSignUp} obj Optional instance to populate.
     * @return {module:model/NewAccountSignUp} The populated <code>NewAccountSignUp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewAccountSignUp();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewAccountSignUp;
}();
/**
 * The email address associated with your account.
 * @member {String} email
 */


NewAccountSignUp.prototype['email'] = undefined;
/**
 * The password for your account.
 * @member {String} password
 */

NewAccountSignUp.prototype['password'] = undefined;
/**
 * @member {String} companyName
 */

NewAccountSignUp.prototype['companyName'] = undefined;
var _default = NewAccountSignUp;
exports["default"] = _default;