"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoyaltyMembership = _interopRequireDefault(require("./LoyaltyMembership"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomerProfile model module.
 * @module model/CustomerProfile
 * @version 4.0.0
 */
var CustomerProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerProfile</code>.
   * 
   * @alias module:model/CustomerProfile
   * @param integrationId {String} The ID used for this entity in the application system.
   * @param created {Date} The exact moment this entity was created.
   * @param attributes {Object} Arbitrary properties associated with this item
   * @param accountId {Number} The ID of the Talon.One account that owns this profile.
   * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
   * @param totalSales {Number} Sum of all purchases made by this customer
   * @param lastActivity {Date} Timestamp of the most recent event received from this customer
   */
  function CustomerProfile(integrationId, created, attributes, accountId, closedSessions, totalSales, lastActivity) {
    _classCallCheck(this, CustomerProfile);

    CustomerProfile.initialize(this, integrationId, created, attributes, accountId, closedSessions, totalSales, lastActivity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerProfile, null, [{
    key: "initialize",
    value: function initialize(obj, integrationId, created, attributes, accountId, closedSessions, totalSales, lastActivity) {
      obj['integrationId'] = integrationId;
      obj['created'] = created;
      obj['attributes'] = attributes;
      obj['accountId'] = accountId;
      obj['closedSessions'] = closedSessions;
      obj['totalSales'] = totalSales;
      obj['lastActivity'] = lastActivity;
    }
    /**
     * Constructs a <code>CustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfile} obj Optional instance to populate.
     * @return {module:model/CustomerProfile} The populated <code>CustomerProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerProfile();

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('closedSessions')) {
          obj['closedSessions'] = _ApiClient["default"].convertToType(data['closedSessions'], 'Number');
        }

        if (data.hasOwnProperty('totalSales')) {
          obj['totalSales'] = _ApiClient["default"].convertToType(data['totalSales'], 'Number');
        }

        if (data.hasOwnProperty('loyaltyMemberships')) {
          obj['loyaltyMemberships'] = _ApiClient["default"].convertToType(data['loyaltyMemberships'], [_LoyaltyMembership["default"]]);
        }

        if (data.hasOwnProperty('lastActivity')) {
          obj['lastActivity'] = _ApiClient["default"].convertToType(data['lastActivity'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return CustomerProfile;
}();
/**
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */


CustomerProfile.prototype['integrationId'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

CustomerProfile.prototype['created'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

CustomerProfile.prototype['attributes'] = undefined;
/**
 * The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */

CustomerProfile.prototype['accountId'] = undefined;
/**
 * The total amount of closed sessions by a customer. A closed session is a successful purchase.
 * @member {Number} closedSessions
 */

CustomerProfile.prototype['closedSessions'] = undefined;
/**
 * Sum of all purchases made by this customer
 * @member {Number} totalSales
 */

CustomerProfile.prototype['totalSales'] = undefined;
/**
 * A list of loyalty programs joined by the customer
 * @member {Array.<module:model/LoyaltyMembership>} loyaltyMemberships
 */

CustomerProfile.prototype['loyaltyMemberships'] = undefined;
/**
 * Timestamp of the most recent event received from this customer
 * @member {Date} lastActivity
 */

CustomerProfile.prototype['lastActivity'] = undefined;
var _default = CustomerProfile;
exports["default"] = _default;