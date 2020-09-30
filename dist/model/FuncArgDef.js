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
 * The FuncArgDef model module.
 * @module model/FuncArgDef
 * @version 4.2.0
 */
var FuncArgDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FuncArgDef</code>.
   * @alias module:model/FuncArgDef
   * @param type {module:model/FuncArgDef.TypeEnum} The type of value this argument expects.
   * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   */
  function FuncArgDef(type, description) {
    _classCallCheck(this, FuncArgDef);

    FuncArgDef.initialize(this, type, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FuncArgDef, null, [{
    key: "initialize",
    value: function initialize(obj, type, description) {
      obj['type'] = type;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>FuncArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FuncArgDef} obj Optional instance to populate.
     * @return {module:model/FuncArgDef} The populated <code>FuncArgDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FuncArgDef();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FuncArgDef;
}();
/**
 * The type of value this argument expects.
 * @member {module:model/FuncArgDef.TypeEnum} type
 */


FuncArgDef.prototype['type'] = undefined;
/**
 * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
 * @member {String} description
 */

FuncArgDef.prototype['description'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

FuncArgDef['TypeEnum'] = {
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
var _default = FuncArgDef;
exports["default"] = _default;