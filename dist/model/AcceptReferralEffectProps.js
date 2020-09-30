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
 * The AcceptReferralEffectProps model module.
 * @module model/AcceptReferralEffectProps
 * @version 4.2.0
 */
var AcceptReferralEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AcceptReferralEffectProps</code>.
   * The properties specific to the \&quot;acceptReferral\&quot; effect. TThis gets triggered whenever the referral code is valid and all other conditions in the rules of its campaign are met.
   * @alias module:model/AcceptReferralEffectProps
   * @param value {String} The referral code that was accepted
   */
  function AcceptReferralEffectProps(value) {
    _classCallCheck(this, AcceptReferralEffectProps);

    AcceptReferralEffectProps.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptReferralEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>AcceptReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/AcceptReferralEffectProps} The populated <code>AcceptReferralEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptReferralEffectProps();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AcceptReferralEffectProps;
}();
/**
 * The referral code that was accepted
 * @member {String} value
 */


AcceptReferralEffectProps.prototype['value'] = undefined;
var _default = AcceptReferralEffectProps;
exports["default"] = _default;