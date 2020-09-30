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
 * The UpdateCouponBatch model module.
 * @module model/UpdateCouponBatch
 * @version 4.2.0
 */
var UpdateCouponBatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCouponBatch</code>.
   * 
   * @alias module:model/UpdateCouponBatch
   * @param batchID {String} The id of the batch the coupon belongs to.
   */
  function UpdateCouponBatch(batchID) {
    _classCallCheck(this, UpdateCouponBatch);

    UpdateCouponBatch.initialize(this, batchID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateCouponBatch, null, [{
    key: "initialize",
    value: function initialize(obj, batchID) {
      obj['batchID'] = batchID;
    }
    /**
     * Constructs a <code>UpdateCouponBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCouponBatch} obj Optional instance to populate.
     * @return {module:model/UpdateCouponBatch} The populated <code>UpdateCouponBatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCouponBatch();

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

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('batchID')) {
          obj['batchID'] = _ApiClient["default"].convertToType(data['batchID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateCouponBatch;
}();
/**
 * The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */


UpdateCouponBatch.prototype['usageLimit'] = undefined;
/**
 * The amount of discounts that can be given with this coupon code. 
 * @member {Number} discountLimit
 */

UpdateCouponBatch.prototype['discountLimit'] = undefined;
/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */

UpdateCouponBatch.prototype['startDate'] = undefined;
/**
 * Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */

UpdateCouponBatch.prototype['expiryDate'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

UpdateCouponBatch.prototype['attributes'] = undefined;
/**
 * The id of the batch the coupon belongs to.
 * @member {String} batchID
 */

UpdateCouponBatch.prototype['batchID'] = undefined;
var _default = UpdateCouponBatch;
exports["default"] = _default;