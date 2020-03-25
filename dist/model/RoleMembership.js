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
 * The RoleMembership model module.
 * @module model/RoleMembership
 * @version 4.0.0
 */
var RoleMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RoleMembership</code>.
   * @alias module:model/RoleMembership
   * @param roleID {Number} ID of role
   * @param userID {Number} ID of User
   */
  function RoleMembership(roleID, userID) {
    _classCallCheck(this, RoleMembership);

    RoleMembership.initialize(this, roleID, userID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RoleMembership, null, [{
    key: "initialize",
    value: function initialize(obj, roleID, userID) {
      obj['RoleID'] = roleID;
      obj['UserID'] = userID;
    }
    /**
     * Constructs a <code>RoleMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleMembership} obj Optional instance to populate.
     * @return {module:model/RoleMembership} The populated <code>RoleMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RoleMembership();

        if (data.hasOwnProperty('RoleID')) {
          obj['RoleID'] = _ApiClient["default"].convertToType(data['RoleID'], 'Number');
        }

        if (data.hasOwnProperty('UserID')) {
          obj['UserID'] = _ApiClient["default"].convertToType(data['UserID'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RoleMembership;
}();
/**
 * ID of role
 * @member {Number} RoleID
 */


RoleMembership.prototype['RoleID'] = undefined;
/**
 * ID of User
 * @member {Number} UserID
 */

RoleMembership.prototype['UserID'] = undefined;
var _default = RoleMembership;
exports["default"] = _default;