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
 * The DeductLoyaltyPointsEffectProps model module.
 * @module model/DeductLoyaltyPointsEffectProps
 * @version 1.0.0
 */
var DeductLoyaltyPointsEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeductLoyaltyPointsEffectProps</code>.
   * The properties specific to the \&quot;deductLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.
   * @alias module:model/DeductLoyaltyPointsEffectProps
   * @param ruleTitle {String} The title of the rule that contained triggered this points deduction
   * @param programId {Number} The ID of the loyalty program where these points were added
   * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
   * @param value {Number} The amount of points that were deducted
   */
  function DeductLoyaltyPointsEffectProps(ruleTitle, programId, subLedgerId, value) {
    _classCallCheck(this, DeductLoyaltyPointsEffectProps);

    DeductLoyaltyPointsEffectProps.initialize(this, ruleTitle, programId, subLedgerId, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeductLoyaltyPointsEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, ruleTitle, programId, subLedgerId, value) {
      obj['ruleTitle'] = ruleTitle;
      obj['programId'] = programId;
      obj['subLedgerId'] = subLedgerId;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>DeductLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeductLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/DeductLoyaltyPointsEffectProps} The populated <code>DeductLoyaltyPointsEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeductLoyaltyPointsEffectProps();

        if (data.hasOwnProperty('ruleTitle')) {
          obj['ruleTitle'] = _ApiClient["default"].convertToType(data['ruleTitle'], 'String');
        }

        if (data.hasOwnProperty('programId')) {
          obj['programId'] = _ApiClient["default"].convertToType(data['programId'], 'Number');
        }

        if (data.hasOwnProperty('subLedgerId')) {
          obj['subLedgerId'] = _ApiClient["default"].convertToType(data['subLedgerId'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeductLoyaltyPointsEffectProps;
}();
/**
 * The title of the rule that contained triggered this points deduction
 * @member {String} ruleTitle
 */


DeductLoyaltyPointsEffectProps.prototype['ruleTitle'] = undefined;
/**
 * The ID of the loyalty program where these points were added
 * @member {Number} programId
 */

DeductLoyaltyPointsEffectProps.prototype['programId'] = undefined;
/**
 * The ID of the subledger within the loyalty program where these points were added
 * @member {String} subLedgerId
 */

DeductLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;
/**
 * The amount of points that were deducted
 * @member {Number} value
 */

DeductLoyaltyPointsEffectProps.prototype['value'] = undefined;
var _default = DeductLoyaltyPointsEffectProps;
exports["default"] = _default;