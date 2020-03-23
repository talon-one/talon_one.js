"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FuncArgDef = _interopRequireDefault(require("./FuncArgDef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FunctionDef model module.
 * @module model/FunctionDef
 * @version 1.0.0
 */
var FunctionDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunctionDef</code>.
   * @alias module:model/FunctionDef
   * @param name {String} The function name used in Talang.
   * @param type {String} The type of this function argument.
   * @param args {Array.<module:model/FuncArgDef>} An array of argument definitions.
   */
  function FunctionDef(name, type, args) {
    _classCallCheck(this, FunctionDef);

    FunctionDef.initialize(this, name, type, args);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FunctionDef, null, [{
    key: "initialize",
    value: function initialize(obj, name, type, args) {
      obj['name'] = name;
      obj['type'] = type;
      obj['args'] = args;
    }
    /**
     * Constructs a <code>FunctionDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionDef} obj Optional instance to populate.
     * @return {module:model/FunctionDef} The populated <code>FunctionDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunctionDef();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('help')) {
          obj['help'] = _ApiClient["default"].convertToType(data['help'], 'String');
        }

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], [_FuncArgDef["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FunctionDef;
}();
/**
 * The function name used in Talang.
 * @member {String} name
 */


FunctionDef.prototype['name'] = undefined;
/**
 * The type of this function argument.
 * @member {String} type
 */

FunctionDef.prototype['type'] = undefined;
/**
 * A short description of the function.
 * @member {String} description
 */

FunctionDef.prototype['description'] = undefined;
/**
 * Extended help text for the function.
 * @member {String} help
 */

FunctionDef.prototype['help'] = undefined;
/**
 * An array of argument definitions.
 * @member {Array.<module:model/FuncArgDef>} args
 */

FunctionDef.prototype['args'] = undefined;
var _default = FunctionDef;
exports["default"] = _default;