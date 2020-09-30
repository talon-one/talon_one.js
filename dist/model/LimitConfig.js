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
 * The LimitConfig model module.
 * @module model/LimitConfig
 * @version 4.2.0
 */
var LimitConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LimitConfig</code>.
   * @alias module:model/LimitConfig
   * @param action {module:model/LimitConfig.ActionEnum} The limitable action to which this limit will be applied
   * @param limit {Number} The value to set for the limit
   * @param entities {Array.<module:model/LimitConfig.EntitiesEnum>} The entities that make the address of this limit
   */
  function LimitConfig(action, limit, entities) {
    _classCallCheck(this, LimitConfig);

    LimitConfig.initialize(this, action, limit, entities);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LimitConfig, null, [{
    key: "initialize",
    value: function initialize(obj, action, limit, entities) {
      obj['action'] = action;
      obj['limit'] = limit;
      obj['entities'] = entities;
    }
    /**
     * Constructs a <code>LimitConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitConfig} obj Optional instance to populate.
     * @return {module:model/LimitConfig} The populated <code>LimitConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LimitConfig();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('entities')) {
          obj['entities'] = _ApiClient["default"].convertToType(data['entities'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return LimitConfig;
}();
/**
 * The limitable action to which this limit will be applied
 * @member {module:model/LimitConfig.ActionEnum} action
 */


LimitConfig.prototype['action'] = undefined;
/**
 * The value to set for the limit
 * @member {Number} limit
 */

LimitConfig.prototype['limit'] = undefined;
/**
 * The entities that make the address of this limit
 * @member {Array.<module:model/LimitConfig.EntitiesEnum>} entities
 */

LimitConfig.prototype['entities'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

LimitConfig['ActionEnum'] = {
  /**
   * value: "redeemCoupon"
   * @const
   */
  "redeemCoupon": "redeemCoupon",

  /**
   * value: "redeemReferral"
   * @const
   */
  "redeemReferral": "redeemReferral",

  /**
   * value: "setDiscount"
   * @const
   */
  "setDiscount": "setDiscount",

  /**
   * value: "createCoupon"
   * @const
   */
  "createCoupon": "createCoupon",

  /**
   * value: "setDiscountEffect"
   * @const
   */
  "setDiscountEffect": "setDiscountEffect"
};
/**
 * Allowed values for the <code>entities</code> property.
 * @enum {String}
 * @readonly
 */

LimitConfig['EntitiesEnum'] = {
  /**
   * value: "Coupon"
   * @const
   */
  "Coupon": "Coupon",

  /**
   * value: "Referral"
   * @const
   */
  "Referral": "Referral",

  /**
   * value: "Profile"
   * @const
   */
  "Profile": "Profile",

  /**
   * value: "Identifier"
   * @const
   */
  "Identifier": "Identifier"
};
var _default = LimitConfig;
exports["default"] = _default;