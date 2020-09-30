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
 * The Coupon model module.
 * @module model/Coupon
 * @version 4.2.0
 */
var Coupon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Coupon</code>.
   * 
   * @alias module:model/Coupon
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param campaignId {Number} The ID of the campaign that owns this entity.
   * @param value {String} The actual coupon code.
   * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
   * @param usageCounter {Number} The number of times this coupon has been successfully used.
   */
  function Coupon(id, created, campaignId, value, usageLimit, usageCounter) {
    _classCallCheck(this, Coupon);

    Coupon.initialize(this, id, created, campaignId, value, usageLimit, usageCounter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Coupon, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, campaignId, value, usageLimit, usageCounter) {
      obj['id'] = id;
      obj['created'] = created;
      obj['campaignId'] = campaignId;
      obj['value'] = value;
      obj['usageLimit'] = usageLimit;
      obj['usageCounter'] = usageCounter;
    }
    /**
     * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coupon} obj Optional instance to populate.
     * @return {module:model/Coupon} The populated <code>Coupon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Coupon();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('usageLimit')) {
          obj['usageLimit'] = _ApiClient["default"].convertToType(data['usageLimit'], 'Number');
        }

        if (data.hasOwnProperty('discountLimit')) {
          obj['discountLimit'] = _ApiClient["default"].convertToType(data['discountLimit'], 'Number');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Date');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }

        if (data.hasOwnProperty('usageCounter')) {
          obj['usageCounter'] = _ApiClient["default"].convertToType(data['usageCounter'], 'Number');
        }

        if (data.hasOwnProperty('discountCounter')) {
          obj['discountCounter'] = _ApiClient["default"].convertToType(data['discountCounter'], 'Number');
        }

        if (data.hasOwnProperty('discountRemainder')) {
          obj['discountRemainder'] = _ApiClient["default"].convertToType(data['discountRemainder'], 'Number');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('referralId')) {
          obj['referralId'] = _ApiClient["default"].convertToType(data['referralId'], 'Number');
        }

        if (data.hasOwnProperty('recipientIntegrationId')) {
          obj['recipientIntegrationId'] = _ApiClient["default"].convertToType(data['recipientIntegrationId'], 'String');
        }

        if (data.hasOwnProperty('importId')) {
          obj['importId'] = _ApiClient["default"].convertToType(data['importId'], 'Number');
        }

        if (data.hasOwnProperty('reservation')) {
          obj['reservation'] = _ApiClient["default"].convertToType(data['reservation'], 'Boolean');
        }

        if (data.hasOwnProperty('batchId')) {
          obj['batchId'] = _ApiClient["default"].convertToType(data['batchId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Coupon;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Coupon.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Coupon.prototype['created'] = undefined;
/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */

Coupon.prototype['campaignId'] = undefined;
/**
 * The actual coupon code.
 * @member {String} value
 */

Coupon.prototype['value'] = undefined;
/**
 * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */

Coupon.prototype['usageLimit'] = undefined;
/**
 * The amount of discounts that can be given with this coupon code. 
 * @member {Number} discountLimit
 */

Coupon.prototype['discountLimit'] = undefined;
/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */

Coupon.prototype['startDate'] = undefined;
/**
 * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

Coupon.prototype['expiryDate'] = undefined;
/**
 * The number of times this coupon has been successfully used.
 * @member {Number} usageCounter
 */

Coupon.prototype['usageCounter'] = undefined;
/**
 * The amount of discounts given on rules redeeming this coupon. Only usable if a coupon discount budget was set for this coupon.
 * @member {Number} discountCounter
 */

Coupon.prototype['discountCounter'] = undefined;
/**
 * The remaining discount this coupon can give.
 * @member {Number} discountRemainder
 */

Coupon.prototype['discountRemainder'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

Coupon.prototype['attributes'] = undefined;
/**
 * The integration ID of the referring customer (if any) for whom this coupon was created as an effect.
 * @member {Number} referralId
 */

Coupon.prototype['referralId'] = undefined;
/**
 * The Integration ID of the customer that is allowed to redeem this coupon.
 * @member {String} recipientIntegrationId
 */

Coupon.prototype['recipientIntegrationId'] = undefined;
/**
 * The ID of the Import which created this coupon.
 * @member {Number} importId
 */

Coupon.prototype['importId'] = undefined;
/**
 * This value controls what reservations mean to a coupon. If set to true the coupon reservation is used to mark it as a favourite, if set to false the coupon reservation is used as a requirement of usage. This value defaults to true if not specified.
 * @member {Boolean} reservation
 */

Coupon.prototype['reservation'] = undefined;
/**
 * The id of the batch the coupon belongs to.
 * @member {String} batchId
 */

Coupon.prototype['batchId'] = undefined;
var _default = Coupon;
exports["default"] = _default;