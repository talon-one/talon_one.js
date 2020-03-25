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
 * The RedeemReferralEffectProps model module.
 * @module model/RedeemReferralEffectProps
 * @version 4.0.0
 */
var RedeemReferralEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RedeemReferralEffectProps</code>.
   * The properties specific to the \&quot;redeemReferral\&quot; effect. This gets triggered whenever the referral code is valid, and a rule was triggered that contains a \&quot;redeem referral\&quot; effect.
   * @alias module:model/RedeemReferralEffectProps
   * @param id {Number} The id of the referral code that was redeemed
   * @param value {String} The referral code that was redeemed
   */
  function RedeemReferralEffectProps(id, value) {
    _classCallCheck(this, RedeemReferralEffectProps);

    RedeemReferralEffectProps.initialize(this, id, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RedeemReferralEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, id, value) {
      obj['id'] = id;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>RedeemReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeemReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RedeemReferralEffectProps} The populated <code>RedeemReferralEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RedeemReferralEffectProps();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RedeemReferralEffectProps;
}();
/**
 * The id of the referral code that was redeemed
 * @member {Number} id
 */


RedeemReferralEffectProps.prototype['id'] = undefined;
/**
 * The referral code that was redeemed
 * @member {String} value
 */

RedeemReferralEffectProps.prototype['value'] = undefined;
var _default = RedeemReferralEffectProps;
exports["default"] = _default;