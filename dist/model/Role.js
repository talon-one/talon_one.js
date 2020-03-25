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
 * The Role model module.
 * @module model/Role
 * @version 4.0.0
 */
var Role = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Role</code>.
   * 
   * @alias module:model/Role
   * @param id {Number} The ID of the role corresponding to the DB row
   * @param accountID {Number} The ID of the Talon.One account that owns this role.
   */
  function Role(id, accountID) {
    _classCallCheck(this, Role);

    Role.initialize(this, id, accountID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Role, null, [{
    key: "initialize",
    value: function initialize(obj, id, accountID) {
      obj['id'] = id;
      obj['accountID'] = accountID;
    }
    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Role();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('accountID')) {
          obj['accountID'] = _ApiClient["default"].convertToType(data['accountID'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _ApiClient["default"].convertToType(data['members'], ['Number']);
        }

        if (data.hasOwnProperty('acl')) {
          obj['acl'] = _ApiClient["default"].convertToType(data['acl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Role;
}();
/**
 * The ID of the role corresponding to the DB row
 * @member {Number} id
 */


Role.prototype['id'] = undefined;
/**
 * The ID of the Talon.One account that owns this role.
 * @member {Number} accountID
 */

Role.prototype['accountID'] = undefined;
/**
 * Name of the role
 * @member {String} name
 */

Role.prototype['name'] = undefined;
/**
 * Description of the role
 * @member {String} description
 */

Role.prototype['description'] = undefined;
/**
 * A list of user identifiers assigned to this role
 * @member {Array.<Number>} members
 */

Role.prototype['members'] = undefined;
/**
 * Role Policy this should be a stringified blob of json
 * @member {String} acl
 */

Role.prototype['acl'] = undefined;
var _default = Role;
exports["default"] = _default;