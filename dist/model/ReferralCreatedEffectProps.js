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
 * The ReferralCreatedEffectProps model module.
 * @module model/ReferralCreatedEffectProps
 * @version 4.2.0
 */
var ReferralCreatedEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReferralCreatedEffectProps</code>.
   * The properties specific to the \&quot;referralCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create referral\&quot; effect, and a referral code was created for a customer. See \&quot;createdReferrals\&quot; on the response for all details of this referral code.
   * @alias module:model/ReferralCreatedEffectProps
   * @param value {String} The referral code that was created
   */
  function ReferralCreatedEffectProps(value) {
    _classCallCheck(this, ReferralCreatedEffectProps);

    ReferralCreatedEffectProps.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReferralCreatedEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ReferralCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/ReferralCreatedEffectProps} The populated <code>ReferralCreatedEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReferralCreatedEffectProps();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReferralCreatedEffectProps;
}();
/**
 * The referral code that was created
 * @member {String} value
 */


ReferralCreatedEffectProps.prototype['value'] = undefined;
var _default = ReferralCreatedEffectProps;
exports["default"] = _default;