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
 * The NewRole model module.
 * @module model/NewRole
 * @version 1.0.0
 */
var NewRole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewRole</code>.
   * 
   * @alias module:model/NewRole
   * @param name {String} Name of the role
   * @param acl {String} Role Policy this should be a stringified blob of json
   * @param users {Array.<Number>} An array of userIDs
   */
  function NewRole(name, acl, users) {
    _classCallCheck(this, NewRole);

    NewRole.initialize(this, name, acl, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewRole, null, [{
    key: "initialize",
    value: function initialize(obj, name, acl, users) {
      obj['name'] = name;
      obj['acl'] = acl;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>NewRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRole} obj Optional instance to populate.
     * @return {module:model/NewRole} The populated <code>NewRole</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewRole();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('acl')) {
          obj['acl'] = _ApiClient["default"].convertToType(data['acl'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return NewRole;
}();
/**
 * Name of the role
 * @member {String} name
 */


NewRole.prototype['name'] = undefined;
/**
 * Description of the role
 * @member {String} description
 */

NewRole.prototype['description'] = undefined;
/**
 * Role Policy this should be a stringified blob of json
 * @member {String} acl
 */

NewRole.prototype['acl'] = undefined;
/**
 * An array of userIDs
 * @member {Array.<Number>} users
 */

NewRole.prototype['users'] = undefined;
var _default = NewRole;
exports["default"] = _default;