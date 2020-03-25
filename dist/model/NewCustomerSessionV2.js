"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AdditionalCost = _interopRequireDefault(require("./AdditionalCost"));

var _CartItem = _interopRequireDefault(require("./CartItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewCustomerSessionV2 model module.
 * @module model/NewCustomerSessionV2
 * @version 4.0.0
 */
var NewCustomerSessionV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCustomerSessionV2</code>.
   * 
   * @alias module:model/NewCustomerSessionV2
   */
  function NewCustomerSessionV2() {
    _classCallCheck(this, NewCustomerSessionV2);

    NewCustomerSessionV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCustomerSessionV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewCustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerSessionV2} obj Optional instance to populate.
     * @return {module:model/NewCustomerSessionV2} The populated <code>NewCustomerSessionV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCustomerSessionV2();

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }

        if (data.hasOwnProperty('couponCodes')) {
          obj['couponCodes'] = _ApiClient["default"].convertToType(data['couponCodes'], ['String']);
        }

        if (data.hasOwnProperty('referralCode')) {
          obj['referralCode'] = _ApiClient["default"].convertToType(data['referralCode'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('cartItems')) {
          obj['cartItems'] = _ApiClient["default"].convertToType(data['cartItems'], [_CartItem["default"]]);
        }

        if (data.hasOwnProperty('additionalCosts')) {
          obj['additionalCosts'] = _ApiClient["default"].convertToType(data['additionalCosts'], {
            'String': _AdditionalCost["default"]
          });
        }

        if (data.hasOwnProperty('identifiers')) {
          obj['identifiers'] = _ApiClient["default"].convertToType(data['identifiers'], ['String']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return NewCustomerSessionV2;
}();
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */


NewCustomerSessionV2.prototype['profileId'] = undefined;
/**
 * Any coupon codes entered.
 * @member {Array.<String>} couponCodes
 */

NewCustomerSessionV2.prototype['couponCodes'] = undefined;
/**
 * Any referral code entered.
 * @member {String} referralCode
 */

NewCustomerSessionV2.prototype['referralCode'] = undefined;
/**
 * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
 * @member {module:model/NewCustomerSessionV2.StateEnum} state
 * @default 'open'
 */

NewCustomerSessionV2.prototype['state'] = 'open';
/**
 * All items the customer will be purchasing in this session
 * @member {Array.<module:model/CartItem>} cartItems
 */

NewCustomerSessionV2.prototype['cartItems'] = undefined;
/**
 * Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees.
 * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
 */

NewCustomerSessionV2.prototype['additionalCosts'] = undefined;
/**
 * Identifiers for the customer, this can be used for limits on values such as device ID.
 * @member {Array.<String>} identifiers
 */

NewCustomerSessionV2.prototype['identifiers'] = undefined;
/**
 * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
 * @member {Object} attributes
 */

NewCustomerSessionV2.prototype['attributes'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

NewCustomerSessionV2['StateEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed",

  /**
   * value: "cancelled"
   * @const
   */
  "cancelled": "cancelled"
};
var _default = NewCustomerSessionV2;
exports["default"] = _default;