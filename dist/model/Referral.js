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
 * The Referral model module.
 * @module model/Referral
 * @version 4.0.0
 */
var Referral = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Referral</code>.
   * 
   * @alias module:model/Referral
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
   * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
   * @param code {String} The actual referral code.
   * @param usageCounter {Number} The number of times this referral code has been successfully used.
   * @param usageLimit {Number} The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   */
  function Referral(id, created, campaignId, advocateProfileIntegrationId, code, usageCounter, usageLimit) {
    _classCallCheck(this, Referral);

    Referral.initialize(this, id, created, campaignId, advocateProfileIntegrationId, code, usageCounter, usageLimit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Referral, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, campaignId, advocateProfileIntegrationId, code, usageCounter, usageLimit) {
      obj['id'] = id;
      obj['created'] = created;
      obj['campaignId'] = campaignId;
      obj['advocateProfileIntegrationId'] = advocateProfileIntegrationId;
      obj['code'] = code;
      obj['usageCounter'] = usageCounter;
      obj['usageLimit'] = usageLimit;
    }
    /**
     * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Referral} obj Optional instance to populate.
     * @return {module:model/Referral} The populated <code>Referral</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Referral();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

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

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('usageCounter')) {
          obj['usageCounter'] = _ApiClient["default"].convertToType(data['usageCounter'], 'Number');
        }

        if (data.hasOwnProperty('usageLimit')) {
          obj['usageLimit'] = _ApiClient["default"].convertToType(data['usageLimit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Referral;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Referral.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Referral.prototype['created'] = undefined;
/**
 * ID of the campaign from which the referral received the referral code.
 * @member {Number} campaignId
 */

Referral.prototype['campaignId'] = undefined;
/**
 * The Integration Id of the Advocate's Profile
 * @member {String} advocateProfileIntegrationId
 */

Referral.prototype['advocateProfileIntegrationId'] = undefined;
/**
 * An optional Integration ID of the Friend's Profile
 * @member {String} friendProfileIntegrationId
 */

Referral.prototype['friendProfileIntegrationId'] = undefined;
/**
 * Timestamp at which point the referral code becomes valid.
 * @member {Date} startDate
 */

Referral.prototype['startDate'] = undefined;
/**
 * Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

Referral.prototype['expiryDate'] = undefined;
/**
 * The actual referral code.
 * @member {String} code
 */

Referral.prototype['code'] = undefined;
/**
 * The number of times this referral code has been successfully used.
 * @member {Number} usageCounter
 */

Referral.prototype['usageCounter'] = undefined;
/**
 * The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */

Referral.prototype['usageLimit'] = undefined;
var _default = Referral;
exports["default"] = _default;