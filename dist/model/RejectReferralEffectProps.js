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
 * The RejectReferralEffectProps model module.
 * @module model/RejectReferralEffectProps
 * @version 1.0.0
 */
var RejectReferralEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RejectReferralEffectProps</code>.
   * The properties specific to the \&quot;rejectReferral\&quot; effect. This gets triggered whenever the referral code was rejected. See rejectionReason for more info on why.
   * @alias module:model/RejectReferralEffectProps
   * @param value {String} The referral code that was rejected
   * @param rejectionReason {String} The reason why this referral code was rejected
   */
  function RejectReferralEffectProps(value, rejectionReason) {
    _classCallCheck(this, RejectReferralEffectProps);

    RejectReferralEffectProps.initialize(this, value, rejectionReason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RejectReferralEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, value, rejectionReason) {
      obj['value'] = value;
      obj['rejectionReason'] = rejectionReason;
    }
    /**
     * Constructs a <code>RejectReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RejectReferralEffectProps} The populated <code>RejectReferralEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RejectReferralEffectProps();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('rejectionReason')) {
          obj['rejectionReason'] = _ApiClient["default"].convertToType(data['rejectionReason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RejectReferralEffectProps;
}();
/**
 * The referral code that was rejected
 * @member {String} value
 */


RejectReferralEffectProps.prototype['value'] = undefined;
/**
 * The reason why this referral code was rejected
 * @member {String} rejectionReason
 */

RejectReferralEffectProps.prototype['rejectionReason'] = undefined;
var _default = RejectReferralEffectProps;
exports["default"] = _default;