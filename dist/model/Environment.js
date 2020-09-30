"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FunctionDef = _interopRequireDefault(require("./FunctionDef"));

var _SlotDef = _interopRequireDefault(require("./SlotDef"));

var _TemplateDef = _interopRequireDefault(require("./TemplateDef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Environment model module.
 * @module model/Environment
 * @version 4.2.0
 */
var Environment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Environment</code>.
   * 
   * @alias module:model/Environment
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param slots {Array.<module:model/SlotDef>} The slots defined for this application.
   * @param functions {Array.<module:model/FunctionDef>} The functions defined for this application.
   * @param templates {Array.<module:model/TemplateDef>} The templates defined for this application.
   * @param variables {String} 
   */
  function Environment(id, created, applicationId, slots, functions, templates, variables) {
    _classCallCheck(this, Environment);

    Environment.initialize(this, id, created, applicationId, slots, functions, templates, variables);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Environment, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, slots, functions, templates, variables) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['slots'] = slots;
      obj['functions'] = functions;
      obj['templates'] = templates;
      obj['variables'] = variables;
    }
    /**
     * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment} obj Optional instance to populate.
     * @return {module:model/Environment} The populated <code>Environment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Environment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('slots')) {
          obj['slots'] = _ApiClient["default"].convertToType(data['slots'], [_SlotDef["default"]]);
        }

        if (data.hasOwnProperty('functions')) {
          obj['functions'] = _ApiClient["default"].convertToType(data['functions'], [_FunctionDef["default"]]);
        }

        if (data.hasOwnProperty('templates')) {
          obj['templates'] = _ApiClient["default"].convertToType(data['templates'], [_TemplateDef["default"]]);
        }

        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Environment;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Environment.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Environment.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

Environment.prototype['applicationId'] = undefined;
/**
 * The slots defined for this application.
 * @member {Array.<module:model/SlotDef>} slots
 */

Environment.prototype['slots'] = undefined;
/**
 * The functions defined for this application.
 * @member {Array.<module:model/FunctionDef>} functions
 */

Environment.prototype['functions'] = undefined;
/**
 * The templates defined for this application.
 * @member {Array.<module:model/TemplateDef>} templates
 */

Environment.prototype['templates'] = undefined;
/**
 * @member {String} variables
 */

Environment.prototype['variables'] = undefined;
var _default = Environment;
exports["default"] = _default;