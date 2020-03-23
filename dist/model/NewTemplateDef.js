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
 * The NewTemplateDef model module.
 * @module model/NewTemplateDef
 * @version 1.0.0
 */
var NewTemplateDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewTemplateDef</code>.
   * @alias module:model/NewTemplateDef
   * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
   * @param category {String} Used for grouping templates in the rule editor sidebar.
   * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
   * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
   */
  function NewTemplateDef(title, category, expr, args) {
    _classCallCheck(this, NewTemplateDef);

    NewTemplateDef.initialize(this, title, category, expr, args);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewTemplateDef, null, [{
    key: "initialize",
    value: function initialize(obj, title, category, expr, args) {
      obj['title'] = title;
      obj['category'] = category;
      obj['expr'] = expr;
      obj['args'] = args;
    }
    /**
     * Constructs a <code>NewTemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewTemplateDef} obj Optional instance to populate.
     * @return {module:model/NewTemplateDef} The populated <code>NewTemplateDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewTemplateDef();

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
      }

      return obj;
    }
  }]);

  return NewTemplateDef;
}();
/**
 * Campaigner-friendly name for the template that will be shown in the rule editor.
 * @member {String} title
 */


NewTemplateDef.prototype['title'] = undefined;
/**
 * A short description of the template that will be shown in the rule editor.
 * @member {String} description
 */

NewTemplateDef.prototype['description'] = undefined;
/**
 * Extended help text for the template.
 * @member {String} help
 */

NewTemplateDef.prototype['help'] = undefined;
/**
 * Used for grouping templates in the rule editor sidebar.
 * @member {String} category
 */

NewTemplateDef.prototype['category'] = undefined;
/**
 * A Talang expression that contains variable bindings referring to args.
 * @member {Array.<Object>} expr
 */

NewTemplateDef.prototype['expr'] = undefined;
/**
 * An array of argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} args
 */

NewTemplateDef.prototype['args'] = undefined;
/**
 * A flag to control exposure in Rule Builder.
 * @member {Boolean} expose
 * @default false
 */

NewTemplateDef.prototype['expose'] = false;
var _default = NewTemplateDef;
exports["default"] = _default;