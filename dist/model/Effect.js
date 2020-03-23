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
 * The Effect model module.
 * @module model/Effect
 * @version 1.0.0
 */
var Effect = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Effect</code>.
   * 
   * @alias module:model/Effect
   * @param campaignId {Number} The ID of the campaign that triggered this effect
   * @param rulesetId {Number} The ID of the ruleset that was active in the campaign when this effect was triggered
   * @param ruleIndex {Number} The position of the rule that triggered this effect within the ruleset
   * @param ruleName {String} The name of the rule that triggered this effect
   * @param effectType {String} The type of effect that was triggered
   * @param props {Object} 
   */
  function Effect(campaignId, rulesetId, ruleIndex, ruleName, effectType, props) {
    _classCallCheck(this, Effect);

    Effect.initialize(this, campaignId, rulesetId, ruleIndex, ruleName, effectType, props);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Effect, null, [{
    key: "initialize",
    value: function initialize(obj, campaignId, rulesetId, ruleIndex, ruleName, effectType, props) {
      obj['campaignId'] = campaignId;
      obj['rulesetId'] = rulesetId;
      obj['ruleIndex'] = ruleIndex;
      obj['ruleName'] = ruleName;
      obj['effectType'] = effectType;
      obj['props'] = props;
    }
    /**
     * Constructs a <code>Effect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Effect} obj Optional instance to populate.
     * @return {module:model/Effect} The populated <code>Effect</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Effect();

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('rulesetId')) {
          obj['rulesetId'] = _ApiClient["default"].convertToType(data['rulesetId'], 'Number');
        }

        if (data.hasOwnProperty('ruleIndex')) {
          obj['ruleIndex'] = _ApiClient["default"].convertToType(data['ruleIndex'], 'Number');
        }

        if (data.hasOwnProperty('ruleName')) {
          obj['ruleName'] = _ApiClient["default"].convertToType(data['ruleName'], 'String');
        }

        if (data.hasOwnProperty('effectType')) {
          obj['effectType'] = _ApiClient["default"].convertToType(data['effectType'], 'String');
        }

        if (data.hasOwnProperty('props')) {
          obj['props'] = _ApiClient["default"].convertToType(data['props'], Object);
        }
      }

      return obj;
    }
  }]);

  return Effect;
}();
/**
 * The ID of the campaign that triggered this effect
 * @member {Number} campaignId
 */


Effect.prototype['campaignId'] = undefined;
/**
 * The ID of the ruleset that was active in the campaign when this effect was triggered
 * @member {Number} rulesetId
 */

Effect.prototype['rulesetId'] = undefined;
/**
 * The position of the rule that triggered this effect within the ruleset
 * @member {Number} ruleIndex
 */

Effect.prototype['ruleIndex'] = undefined;
/**
 * The name of the rule that triggered this effect
 * @member {String} ruleName
 */

Effect.prototype['ruleName'] = undefined;
/**
 * The type of effect that was triggered
 * @member {String} effectType
 */

Effect.prototype['effectType'] = undefined;
/**
 * @member {Object} props
 */

Effect.prototype['props'] = undefined;
var _default = Effect;
exports["default"] = _default;