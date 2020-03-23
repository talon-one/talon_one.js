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
 * The Ruleset model module.
 * @module model/Ruleset
 * @version 1.0.0
 */
var Ruleset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ruleset</code>.
   * 
   * @alias module:model/Ruleset
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param campaignId {Number} The ID of the campaign that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param rules {Array.<module:model/Rule>} Set of rules to apply.
   * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   */
  function Ruleset(id, created, campaignId, userId, rules, bindings) {
    _classCallCheck(this, Ruleset);

    Ruleset.initialize(this, id, created, campaignId, userId, rules, bindings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ruleset, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, campaignId, userId, rules, bindings) {
      obj['id'] = id;
      obj['created'] = created;
      obj['campaignId'] = campaignId;
      obj['userId'] = userId;
      obj['rules'] = rules;
      obj['bindings'] = bindings;
    }
    /**
     * Constructs a <code>Ruleset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ruleset} obj Optional instance to populate.
     * @return {module:model/Ruleset} The populated <code>Ruleset</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ruleset();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

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

        if (data.hasOwnProperty('activatedAt')) {
          obj['activatedAt'] = _ApiClient["default"].convertToType(data['activatedAt'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Ruleset;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Ruleset.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Ruleset.prototype['created'] = undefined;
/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */

Ruleset.prototype['campaignId'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */

Ruleset.prototype['userId'] = undefined;
/**
 * Set of rules to apply.
 * @member {Array.<module:model/Rule>} rules
 */

Ruleset.prototype['rules'] = undefined;
/**
 * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
 * @member {Array.<module:model/Binding>} bindings
 */

Ruleset.prototype['bindings'] = undefined;
/**
 * A string indicating which version of the rulebuilder was used to create this ruleset.
 * @member {String} rbVersion
 */

Ruleset.prototype['rbVersion'] = undefined;
/**
 * A boolean indicating whether this newly created ruleset should also be activated for the campaign owns it
 * @member {Boolean} activate
 */

Ruleset.prototype['activate'] = undefined;
/**
 * Timestamp indicating when this Ruleset was activated.
 * @member {Date} activatedAt
 */

Ruleset.prototype['activatedAt'] = undefined;
var _default = Ruleset;
exports["default"] = _default;