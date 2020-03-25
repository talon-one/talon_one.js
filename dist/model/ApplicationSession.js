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
 * The ApplicationSession model module.
 * @module model/ApplicationSession
 * @version 4.0.0
 */
var ApplicationSession = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationSession</code>.
   * 
   * @alias module:model/ApplicationSession
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created. The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param integrationId {String} The ID used for this entity in the application system.
   * @param coupon {String} Any coupon code entered.
   * @param referral {String} Any referral code entered.
   * @param state {module:model/ApplicationSession.StateEnum} Indicating if the customer session is in progress (\"open\"), \"closed\", or \"cancelled\".
   * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
   * @param discounts {Object.<String, Number>} A map of labelled discount values, in the same currency as the session.
   */
  function ApplicationSession(id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts) {
    _classCallCheck(this, ApplicationSession);

    ApplicationSession.initialize(this, id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationSession, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['integrationId'] = integrationId;
      obj['coupon'] = coupon;
      obj['referral'] = referral;
      obj['state'] = state;
      obj['cartItems'] = cartItems;
      obj['discounts'] = discounts;
    }
    /**
     * Constructs a <code>ApplicationSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSession} obj Optional instance to populate.
     * @return {module:model/ApplicationSession} The populated <code>ApplicationSession</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationSession();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'Number');
        }

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }

        if (data.hasOwnProperty('profileintegrationid')) {
          obj['profileintegrationid'] = _ApiClient["default"].convertToType(data['profileintegrationid'], 'String');
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

        if (data.hasOwnProperty('discounts')) {
          obj['discounts'] = _ApiClient["default"].convertToType(data['discounts'], {
            'String': 'Number'
          });
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

  return ApplicationSession;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


ApplicationSession.prototype['id'] = undefined;
/**
 * The exact moment this entity was created. The exact moment this entity was created.
 * @member {Date} created
 */

ApplicationSession.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

ApplicationSession.prototype['applicationId'] = undefined;
/**
 * The globally unique Talon.One ID of the customer that created this entity.
 * @member {Number} profileId
 */

ApplicationSession.prototype['profileId'] = undefined;
/**
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */

ApplicationSession.prototype['integrationId'] = undefined;
/**
 * Integration ID of the customer for the session.
 * @member {String} profileintegrationid
 */

ApplicationSession.prototype['profileintegrationid'] = undefined;
/**
 * Any coupon code entered.
 * @member {String} coupon
 */

ApplicationSession.prototype['coupon'] = undefined;
/**
 * Any referral code entered.
 * @member {String} referral
 */

ApplicationSession.prototype['referral'] = undefined;
/**
 * Indicating if the customer session is in progress (\"open\"), \"closed\", or \"cancelled\".
 * @member {module:model/ApplicationSession.StateEnum} state
 */

ApplicationSession.prototype['state'] = undefined;
/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */

ApplicationSession.prototype['cartItems'] = undefined;
/**
 * A map of labelled discount values, in the same currency as the session.
 * @member {Object.<String, Number>} discounts
 */

ApplicationSession.prototype['discounts'] = undefined;
/**
 * The total sum of the session before any discounts applied.
 * @member {Number} total
 */

ApplicationSession.prototype['total'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

ApplicationSession.prototype['attributes'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationSession['StateEnum'] = {
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
var _default = ApplicationSession;
exports["default"] = _default;