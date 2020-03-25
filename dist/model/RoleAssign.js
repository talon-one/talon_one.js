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
 * The RoleAssign model module.
 * @module model/RoleAssign
 * @version 4.0.0
 */
var RoleAssign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RoleAssign</code>.
   * 
   * @alias module:model/RoleAssign
   * @param users {Array.<Number>} An array of userIDs
   * @param roles {Array.<Number>} An array of roleIDs
   */
  function RoleAssign(users, roles) {
    _classCallCheck(this, RoleAssign);

    RoleAssign.initialize(this, users, roles);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RoleAssign, null, [{
    key: "initialize",
    value: function initialize(obj, users, roles) {
      obj['users'] = users;
      obj['roles'] = roles;
    }
    /**
     * Constructs a <code>RoleAssign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssign} obj Optional instance to populate.
     * @return {module:model/RoleAssign} The populated <code>RoleAssign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RoleAssign();

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['Number']);
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return RoleAssign;
}();
/**
 * An array of userIDs
 * @member {Array.<Number>} users
 */


RoleAssign.prototype['users'] = undefined;
/**
 * An array of roleIDs
 * @member {Array.<Number>} roles
 */

RoleAssign.prototype['roles'] = undefined;
var _default = RoleAssign;
exports["default"] = _default;