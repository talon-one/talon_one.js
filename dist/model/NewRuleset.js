"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Binding = _interopRequireDefault(require("./Binding"));

var _Rule = _interopRequireDefault(require("./Rule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewRuleset model module.
 * @module model/NewRuleset
 * @version 4.0.0
 */
var NewRuleset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewRuleset</code>.
   * @alias module:model/NewRuleset
   * @param rules {Array.<module:model/Rule>} Set of rules to apply.
   * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   */
  function NewRuleset(rules, bindings) {
    _classCallCheck(this, NewRuleset);

    NewRuleset.initialize(this, rules, bindings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewRuleset, null, [{
    key: "initialize",
    value: function initialize(obj, rules, bindings) {
      obj['rules'] = rules;
      obj['bindings'] = bindings;
    }
    /**
     * Constructs a <code>NewRuleset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRuleset} obj Optional instance to populate.
     * @return {module:model/NewRuleset} The populated <code>NewRuleset</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewRuleset();

        if (data.hasOwnProperty('rules')) {
          obj['rules'] = _ApiClient["default"].convertToType(data['rules'], [_Rule["default"]]);
        }

        if (data.hasOwnProperty('bindings')) {
          obj['bindings'] = _ApiClient["default"].convertToType(data['bindings'], [_Binding["default"]]);
        }

        if (data.hasOwnProperty('rbVersion')) {
          obj['rbVersion'] = _ApiClient["default"].convertToType(data['rbVersion'], 'String');
        }

        if (data.hasOwnProperty('activate')) {
          obj['activate'] = _ApiClient["default"].convertToType(data['activate'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return NewRuleset;
}();
/**
 * Set of rules to apply.
 * @member {Array.<module:model/Rule>} rules
 */


NewRuleset.prototype['rules'] = undefined;
/**
 * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
 * @member {Array.<module:model/Binding>} bindings
 */

NewRuleset.prototype['bindings'] = undefined;
/**
 * A string indicating which version of the rulebuilder was used to create this ruleset.
 * @member {String} rbVersion
 */

NewRuleset.prototype['rbVersion'] = undefined;
/**
 * A boolean indicating whether this newly created ruleset should also be activated for the campaign owns it
 * @member {Boolean} activate
 */

NewRuleset.prototype['activate'] = undefined;
var _default = NewRuleset;
exports["default"] = _default;