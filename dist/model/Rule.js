"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Binding = _interopRequireDefault(require("./Binding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Rule model module.
 * @module model/Rule
 * @version 4.0.0
 */
var Rule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Rule</code>.
   * @alias module:model/Rule
   * @param title {String} A short description of the rule.
   * @param condition {Array.<Object>} A Talang expression that will be evaluated in the context of the given event.
   * @param effects {Array.<Object>} An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
   */
  function Rule(title, condition, effects) {
    _classCallCheck(this, Rule);

    Rule.initialize(this, title, condition, effects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Rule, null, [{
    key: "initialize",
    value: function initialize(obj, title, condition, effects) {
      obj['title'] = title;
      obj['condition'] = condition;
      obj['effects'] = effects;
    }
    /**
     * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rule} obj Optional instance to populate.
     * @return {module:model/Rule} The populated <code>Rule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Rule();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('bindings')) {
          obj['bindings'] = _ApiClient["default"].convertToType(data['bindings'], [_Binding["default"]]);
        }

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], [Object]);
        }

        if (data.hasOwnProperty('effects')) {
          obj['effects'] = _ApiClient["default"].convertToType(data['effects'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return Rule;
}();
/**
 * A short description of the rule.
 * @member {String} title
 */


Rule.prototype['title'] = undefined;
/**
 * A longer, more detailed description of the rule.
 * @member {String} description
 */

Rule.prototype['description'] = undefined;
/**
 * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
 * @member {Array.<module:model/Binding>} bindings
 */

Rule.prototype['bindings'] = undefined;
/**
 * A Talang expression that will be evaluated in the context of the given event.
 * @member {Array.<Object>} condition
 */

Rule.prototype['condition'] = undefined;
/**
 * An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
 * @member {Array.<Object>} effects
 */

Rule.prototype['effects'] = undefined;
var _default = Rule;
exports["default"] = _default;