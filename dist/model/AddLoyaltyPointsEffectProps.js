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
 * The AddLoyaltyPointsEffectProps model module.
 * @module model/AddLoyaltyPointsEffectProps
 * @version 1.0.0
 */
var AddLoyaltyPointsEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddLoyaltyPointsEffectProps</code>.
   * The properties specific to the \&quot;addLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add loyalty\&quot; effect. These points are automatically stored and managed inside Talon.One.
   * @alias module:model/AddLoyaltyPointsEffectProps
   * @param name {String} The name/description of this loyalty point addition
   * @param programId {Number} The ID of the loyalty program where these points were added
   * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
   * @param value {Number} The amount of points that were added
   * @param recipientIntegrationId {String} The user for whom these points were added
   * @param expiryCondition {String} The amount of time (in days) these points are valid
   */
  function AddLoyaltyPointsEffectProps(name, programId, subLedgerId, value, recipientIntegrationId, expiryCondition) {
    _classCallCheck(this, AddLoyaltyPointsEffectProps);

    AddLoyaltyPointsEffectProps.initialize(this, name, programId, subLedgerId, value, recipientIntegrationId, expiryCondition);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddLoyaltyPointsEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, name, programId, subLedgerId, value, recipientIntegrationId, expiryCondition) {
      obj['name'] = name;
      obj['programId'] = programId;
      obj['subLedgerId'] = subLedgerId;
      obj['value'] = value;
      obj['recipientIntegrationId'] = recipientIntegrationId;
      obj['expiryCondition'] = expiryCondition;
    }
    /**
     * Constructs a <code>AddLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/AddLoyaltyPointsEffectProps} The populated <code>AddLoyaltyPointsEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddLoyaltyPointsEffectProps();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

        if (data.hasOwnProperty('recipientIntegrationId')) {
          obj['recipientIntegrationId'] = _ApiClient["default"].convertToType(data['recipientIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('expiryCondition')) {
          obj['expiryCondition'] = _ApiClient["default"].convertToType(data['expiryCondition'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddLoyaltyPointsEffectProps;
}();
/**
 * The name/description of this loyalty point addition
 * @member {String} name
 */


AddLoyaltyPointsEffectProps.prototype['name'] = undefined;
/**
 * The ID of the loyalty program where these points were added
 * @member {Number} programId
 */

AddLoyaltyPointsEffectProps.prototype['programId'] = undefined;
/**
 * The ID of the subledger within the loyalty program where these points were added
 * @member {String} subLedgerId
 */

AddLoyaltyPointsEffectProps.prototype['subLedgerId'] = undefined;
/**
 * The amount of points that were added
 * @member {Number} value
 */

AddLoyaltyPointsEffectProps.prototype['value'] = undefined;
/**
 * The user for whom these points were added
 * @member {String} recipientIntegrationId
 */

AddLoyaltyPointsEffectProps.prototype['recipientIntegrationId'] = undefined;
/**
 * The amount of time (in days) these points are valid
 * @member {String} expiryCondition
 */

AddLoyaltyPointsEffectProps.prototype['expiryCondition'] = undefined;
var _default = AddLoyaltyPointsEffectProps;
exports["default"] = _default;