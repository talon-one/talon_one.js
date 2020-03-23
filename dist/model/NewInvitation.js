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
 * The NewInvitation model module.
 * @module model/NewInvitation
 * @version 1.0.0
 */
var NewInvitation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewInvitation</code>.
   * Parameters for inviting a new user
   * @alias module:model/NewInvitation
   * @param email {String} 
   * @param acl {String} a blob of acl json
   */
  function NewInvitation(email, acl) {
    _classCallCheck(this, NewInvitation);

    NewInvitation.initialize(this, email, acl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewInvitation, null, [{
    key: "initialize",
    value: function initialize(obj, email, acl) {
      obj['email'] = email;
      obj['acl'] = acl;
    }
    /**
     * Constructs a <code>NewInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInvitation} obj Optional instance to populate.
     * @return {module:model/NewInvitation} The populated <code>NewInvitation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewInvitation();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('acl')) {
          obj['acl'] = _ApiClient["default"].convertToType(data['acl'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return NewInvitation;
}();
/**
 * Name of the user being invited.
 * @member {String} name
 */


NewInvitation.prototype['name'] = undefined;
/**
 * @member {String} email
 */

NewInvitation.prototype['email'] = undefined;
/**
 * a blob of acl json
 * @member {String} acl
 */

NewInvitation.prototype['acl'] = undefined;
/**
 * An array of roleIDs to assign the new user to
 * @member {Array.<Number>} roles
 */

NewInvitation.prototype['roles'] = undefined;
var _default = NewInvitation;
exports["default"] = _default;