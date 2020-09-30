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
 * The Binding model module.
 * @module model/Binding
 * @version 4.2.0
 */
var Binding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Binding</code>.
   * @alias module:model/Binding
   * @param name {String} A descriptive name for the value to be bound.
   * @param expression {Array.<Object>} A Talang expression that will be evaluated and its result attached to the name of the binding.
   */
  function Binding(name, expression) {
    _classCallCheck(this, Binding);

    Binding.initialize(this, name, expression);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Binding, null, [{
    key: "initialize",
    value: function initialize(obj, name, expression) {
      obj['name'] = name;
      obj['expression'] = expression;
    }
    /**
     * Constructs a <code>Binding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Binding} obj Optional instance to populate.
     * @return {module:model/Binding} The populated <code>Binding</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Binding();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('expression')) {
          obj['expression'] = _ApiClient["default"].convertToType(data['expression'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return Binding;
}();
/**
 * A descriptive name for the value to be bound.
 * @member {String} name
 */


Binding.prototype['name'] = undefined;
/**
 * A Talang expression that will be evaluated and its result attached to the name of the binding.
 * @member {Array.<Object>} expression
 */

Binding.prototype['expression'] = undefined;
var _default = Binding;
exports["default"] = _default;