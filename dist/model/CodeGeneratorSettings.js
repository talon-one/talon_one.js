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
 * The CodeGeneratorSettings model module.
 * @module model/CodeGeneratorSettings
 * @version 4.2.0
 */
var CodeGeneratorSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CodeGeneratorSettings</code>.
   * @alias module:model/CodeGeneratorSettings
   * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   */
  function CodeGeneratorSettings(validCharacters, couponPattern) {
    _classCallCheck(this, CodeGeneratorSettings);

    CodeGeneratorSettings.initialize(this, validCharacters, couponPattern);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CodeGeneratorSettings, null, [{
    key: "initialize",
    value: function initialize(obj, validCharacters, couponPattern) {
      obj['validCharacters'] = validCharacters;
      obj['couponPattern'] = couponPattern;
    }
    /**
     * Constructs a <code>CodeGeneratorSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeGeneratorSettings} obj Optional instance to populate.
     * @return {module:model/CodeGeneratorSettings} The populated <code>CodeGeneratorSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CodeGeneratorSettings();

        if (data.hasOwnProperty('validCharacters')) {
          obj['validCharacters'] = _ApiClient["default"].convertToType(data['validCharacters'], ['String']);
        }

        if (data.hasOwnProperty('couponPattern')) {
          obj['couponPattern'] = _ApiClient["default"].convertToType(data['couponPattern'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CodeGeneratorSettings;
}();
/**
 * Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
 * @member {Array.<String>} validCharacters
 */


CodeGeneratorSettings.prototype['validCharacters'] = undefined;
/**
 * The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
 * @member {String} couponPattern
 */

CodeGeneratorSettings.prototype['couponPattern'] = undefined;
var _default = CodeGeneratorSettings;
exports["default"] = _default;