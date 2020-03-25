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
 * The NewReferral model module.
 * @module model/NewReferral
 * @version 4.0.0
 */
var NewReferral = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewReferral</code>.
   * @alias module:model/NewReferral
   * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
   * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
   */
  function NewReferral(campaignId, advocateProfileIntegrationId) {
    _classCallCheck(this, NewReferral);

    NewReferral.initialize(this, campaignId, advocateProfileIntegrationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewReferral, null, [{
    key: "initialize",
    value: function initialize(obj, campaignId, advocateProfileIntegrationId) {
      obj['campaignId'] = campaignId;
      obj['advocateProfileIntegrationId'] = advocateProfileIntegrationId;
    }
    /**
     * Constructs a <code>NewReferral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReferral} obj Optional instance to populate.
     * @return {module:model/NewReferral} The populated <code>NewReferral</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewReferral();

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('advocateProfileIntegrationId')) {
          obj['advocateProfileIntegrationId'] = _ApiClient["default"].convertToType(data['advocateProfileIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('friendProfileIntegrationId')) {
          obj['friendProfileIntegrationId'] = _ApiClient["default"].convertToType(data['friendProfileIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Date');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return NewReferral;
}();
/**
 * ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */


NewReferral.prototype['campaignId'] = undefined;
/**
 * The Integration Id of the Advocate's Profile
 * @member {String} advocateProfileIntegrationId
 */

NewReferral.prototype['advocateProfileIntegrationId'] = undefined;
/**
 * An optional Integration ID of the Friend's Profile
 * @member {String} friendProfileIntegrationId
 */

NewReferral.prototype['friendProfileIntegrationId'] = undefined;
/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */

NewReferral.prototype['startDate'] = undefined;
/**
 * Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

NewReferral.prototype['expiryDate'] = undefined;
var _default = NewReferral;
exports["default"] = _default;