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
 * The TemplateArgDef model module.
 * @module model/TemplateArgDef
 * @version 4.2.0
 */
var TemplateArgDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateArgDef</code>.
   * 
   * @alias module:model/TemplateArgDef
   * @param type {module:model/TemplateArgDef.TypeEnum} The type of value this argument expects.
   * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   * @param title {String} A campaigner friendly name for the argument, this will be shown in the rule editor.
   * @param ui {Object} Arbitrary metadata that may be used to render an input for this argument.
   */
  function TemplateArgDef(type, description, title, ui) {
    _classCallCheck(this, TemplateArgDef);

    TemplateArgDef.initialize(this, type, description, title, ui);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateArgDef, null, [{
    key: "initialize",
    value: function initialize(obj, type, description, title, ui) {
      obj['type'] = type;
      obj['description'] = description;
      obj['title'] = title;
      obj['ui'] = ui;
    }
    /**
     * Constructs a <code>TemplateArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateArgDef} obj Optional instance to populate.
     * @return {module:model/TemplateArgDef} The populated <code>TemplateArgDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateArgDef();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('ui')) {
          obj['ui'] = _ApiClient["default"].convertToType(data['ui'], Object);
        }
      }

      return obj;
    }
  }]);

  return TemplateArgDef;
}();
/**
 * The type of value this argument expects.
 * @member {module:model/TemplateArgDef.TypeEnum} type
 */


TemplateArgDef.prototype['type'] = undefined;
/**
 * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
 * @member {String} description
 */

TemplateArgDef.prototype['description'] = undefined;
/**
 * A campaigner friendly name for the argument, this will be shown in the rule editor.
 * @member {String} title
 */

TemplateArgDef.prototype['title'] = undefined;
/**
 * Arbitrary metadata that may be used to render an input for this argument.
 * @member {Object} ui
 */

TemplateArgDef.prototype['ui'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

TemplateArgDef['TypeEnum'] = {
  /**
   * value: "string"
   * @const
   */
  "string": "string",

  /**
   * value: "boolean"
   * @const
   */
  "boolean": "boolean",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "time"
   * @const
   */
  "time": "time"
};
var _default = TemplateArgDef;
exports["default"] = _default;