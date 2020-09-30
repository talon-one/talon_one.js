"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItem = _interopRequireDefault(require("./CartItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewCustomerSession model module.
 * @module model/NewCustomerSession
 * @version 4.2.0
 */
var NewCustomerSession = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCustomerSession</code>.
   * 
   * @alias module:model/NewCustomerSession
   */
  function NewCustomerSession() {
    _classCallCheck(this, NewCustomerSession);

    NewCustomerSession.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCustomerSession, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewCustomerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerSession} obj Optional instance to populate.
     * @return {module:model/NewCustomerSession} The populated <code>NewCustomerSession</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCustomerSession();

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }

        if (data.hasOwnProperty('coupon')) {
          obj['coupon'] = _ApiClient["default"].convertToType(data['coupon'], 'String');
        }

        if (data.hasOwnProperty('referral')) {
          obj['referral'] = _ApiClient["default"].convertToType(data['referral'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('cartItems')) {
          obj['cartItems'] = _ApiClient["default"].convertToType(data['cartItems'], [_CartItem["default"]]);
        }

        if (data.hasOwnProperty('identifiers')) {
          obj['identifiers'] = _ApiClient["default"].convertToType(data['identifiers'], ['String']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return NewCustomerSession;
}();
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */


NewCustomerSession.prototype['profileId'] = undefined;
/**
 * Any coupon code entered.
 * @member {String} coupon
 */

NewCustomerSession.prototype['coupon'] = undefined;
/**
 * Any referral code entered.
 * @member {String} referral
 */

NewCustomerSession.prototype['referral'] = undefined;
/**
 * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
 * @member {module:model/NewCustomerSession.StateEnum} state
 * @default 'open'
 */

NewCustomerSession.prototype['state'] = 'open';
/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */

NewCustomerSession.prototype['cartItems'] = undefined;
/**
 * Identifiers for the customer, this can be used for limits on values such as device ID.
 * @member {Array.<String>} identifiers
 */

NewCustomerSession.prototype['identifiers'] = undefined;
/**
 * The total sum of the cart in one session.
 * @member {Number} total
 */

NewCustomerSession.prototype['total'] = undefined;
/**
 * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
 * @member {Object} attributes
 */

NewCustomerSession.prototype['attributes'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

NewCustomerSession['StateEnum'] = {
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
var _default = NewCustomerSession;
exports["default"] = _default;