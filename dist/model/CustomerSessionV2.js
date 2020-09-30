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
 * The CustomerSessionV2 model module.
 * @module model/CustomerSessionV2
 * @version 4.2.0
 */
var CustomerSessionV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerSessionV2</code>.
   * 
   * @alias module:model/CustomerSessionV2
   * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @param state {module:model/CustomerSessionV2.StateEnum} Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
   * @param cartItems {Array.<module:model/CartItem>} All items the customer will be purchasing in this session
   * @param attributes {Object} A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
   * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
   * @param total {Number} The total sum of cart-items, as well as additional costs, before any discounts applied
   * @param cartItemTotal {Number} The total sum of cart-items before any discounts applied
   * @param additionalCostTotal {Number} The total sum of additional costs before any discounts applied
   */
  function CustomerSessionV2(integrationId, created, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal) {
    _classCallCheck(this, CustomerSessionV2);

    CustomerSessionV2.initialize(this, integrationId, created, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerSessionV2, null, [{
    key: "initialize",
    value: function initialize(obj, integrationId, created, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal) {
      obj['integrationId'] = integrationId;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['profileId'] = profileId;
      obj['state'] = state;
      obj['cartItems'] = cartItems;
      obj['attributes'] = attributes;
      obj['firstSession'] = firstSession;
      obj['total'] = total;
      obj['cartItemTotal'] = cartItemTotal;
      obj['additionalCostTotal'] = additionalCostTotal;
    }
    /**
     * Constructs a <code>CustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSessionV2} obj Optional instance to populate.
     * @return {module:model/CustomerSessionV2} The populated <code>CustomerSessionV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerSessionV2();

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

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

        if (data.hasOwnProperty('firstSession')) {
          obj['firstSession'] = _ApiClient["default"].convertToType(data['firstSession'], 'Boolean');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('cartItemTotal')) {
          obj['cartItemTotal'] = _ApiClient["default"].convertToType(data['cartItemTotal'], 'Number');
        }

        if (data.hasOwnProperty('additionalCostTotal')) {
          obj['additionalCostTotal'] = _ApiClient["default"].convertToType(data['additionalCostTotal'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerSessionV2;
}();
/**
 * The integration ID for this entity sent to and used in the Talon.One system.
 * @member {String} integrationId
 */


CustomerSessionV2.prototype['integrationId'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

CustomerSessionV2.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

CustomerSessionV2.prototype['applicationId'] = undefined;
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */

CustomerSessionV2.prototype['profileId'] = undefined;
/**
 * Any coupon codes entered.
 * @member {Array.<String>} couponCodes
 */

CustomerSessionV2.prototype['couponCodes'] = undefined;
/**
 * Any referral code entered.
 * @member {String} referralCode
 */

CustomerSessionV2.prototype['referralCode'] = undefined;
/**
 * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
 * @member {module:model/CustomerSessionV2.StateEnum} state
 * @default 'open'
 */

CustomerSessionV2.prototype['state'] = 'open';
/**
 * All items the customer will be purchasing in this session
 * @member {Array.<module:model/CartItem>} cartItems
 */

CustomerSessionV2.prototype['cartItems'] = undefined;
/**
 * Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees.
 * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
 */

CustomerSessionV2.prototype['additionalCosts'] = undefined;
/**
 * Identifiers for the customer, this can be used for limits on values such as device ID.
 * @member {Array.<String>} identifiers
 */

CustomerSessionV2.prototype['identifiers'] = undefined;
/**
 * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
 * @member {Object} attributes
 */

CustomerSessionV2.prototype['attributes'] = undefined;
/**
 * Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
 * @member {Boolean} firstSession
 */

CustomerSessionV2.prototype['firstSession'] = undefined;
/**
 * The total sum of cart-items, as well as additional costs, before any discounts applied
 * @member {Number} total
 */

CustomerSessionV2.prototype['total'] = undefined;
/**
 * The total sum of cart-items before any discounts applied
 * @member {Number} cartItemTotal
 */

CustomerSessionV2.prototype['cartItemTotal'] = undefined;
/**
 * The total sum of additional costs before any discounts applied
 * @member {Number} additionalCostTotal
 */

CustomerSessionV2.prototype['additionalCostTotal'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

CustomerSessionV2['StateEnum'] = {
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
var _default = CustomerSessionV2;
exports["default"] = _default;