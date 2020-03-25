"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateArgDef = _interopRequireDefault(require("./TemplateArgDef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDef model module.
 * @module model/TemplateDef
 * @version 4.0.0
 */
var TemplateDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDef</code>.
   * 
   * @alias module:model/TemplateDef
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
   * @param description {String} A short description of the template that will be shown in the rule editor.
   * @param help {String} Extended help text for the template.
   * @param category {String} Used for grouping templates in the rule editor sidebar.
   * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
   * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
   * @param name {String} The template name used in Talang.
   */
  function TemplateDef(id, created, applicationId, title, description, help, category, expr, args, name) {
    _classCallCheck(this, TemplateDef);

    TemplateDef.initialize(this, id, created, applicationId, title, description, help, category, expr, args, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDef, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, title, description, help, category, expr, args, name) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['title'] = title;
      obj['description'] = description;
      obj['help'] = help;
      obj['category'] = category;
      obj['expr'] = expr;
      obj['args'] = args;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>TemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDef} obj Optional instance to populate.
     * @return {module:model/TemplateDef} The populated <code>TemplateDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDef();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('help')) {
          obj['help'] = _ApiClient["default"].convertToType(data['help'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('expr')) {
          obj['expr'] = _ApiClient["default"].convertToType(data['expr'], [Object]);
        }

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], [_TemplateArgDef["default"]]);
        }

        if (data.hasOwnProperty('expose')) {
          obj['expose'] = _ApiClient["default"].convertToType(data['expose'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TemplateDef;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


TemplateDef.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

TemplateDef.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

TemplateDef.prototype['applicationId'] = undefined;
/**
 * Campaigner-friendly name for the template that will be shown in the rule editor.
 * @member {String} title
 */

TemplateDef.prototype['title'] = undefined;
/**
 * A short description of the template that will be shown in the rule editor.
 * @member {String} description
 */

TemplateDef.prototype['description'] = undefined;
/**
 * Extended help text for the template.
 * @member {String} help
 */

TemplateDef.prototype['help'] = undefined;
/**
 * Used for grouping templates in the rule editor sidebar.
 * @member {String} category
 */

TemplateDef.prototype['category'] = undefined;
/**
 * A Talang expression that contains variable bindings referring to args.
 * @member {Array.<Object>} expr
 */

TemplateDef.prototype['expr'] = undefined;
/**
 * An array of argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} args
 */

TemplateDef.prototype['args'] = undefined;
/**
 * A flag to control exposure in Rule Builder.
 * @member {Boolean} expose
 * @default false
 */

TemplateDef.prototype['expose'] = false;
/**
 * The template name used in Talang.
 * @member {String} name
 */

TemplateDef.prototype['name'] = undefined;
var _default = TemplateDef;
exports["default"] = _default;