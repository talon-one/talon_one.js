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
 * The NewInviteEmail model module.
 * @module model/NewInviteEmail
 * @version 4.0.0
 */
var NewInviteEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewInviteEmail</code>.
   * @alias module:model/NewInviteEmail
   * @param email {String} 
   * @param token {String} 
   */
  function NewInviteEmail(email, token) {
    _classCallCheck(this, NewInviteEmail);

    NewInviteEmail.initialize(this, email, token);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewInviteEmail, null, [{
    key: "initialize",
    value: function initialize(obj, email, token) {
      obj['email'] = email;
      obj['token'] = token;
    }
    /**
     * Constructs a <code>NewInviteEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInviteEmail} obj Optional instance to populate.
     * @return {module:model/NewInviteEmail} The populated <code>NewInviteEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewInviteEmail();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewInviteEmail;
}();
/**
 * @member {String} email
 */


NewInviteEmail.prototype['email'] = undefined;
/**
 * @member {String} token
 */

NewInviteEmail.prototype['token'] = undefined;
var _default = NewInviteEmail;
exports["default"] = _default;