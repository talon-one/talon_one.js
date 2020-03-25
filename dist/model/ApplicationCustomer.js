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
 * The ApplicationCustomer model module.
 * @module model/ApplicationCustomer
 * @version 4.0.0
 */
var ApplicationCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationCustomer</code>.
   * 
   * @alias module:model/ApplicationCustomer
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created.
   * @param integrationId {String} The ID used for this entity in the application system. The ID used for this entity in the application system.
   * @param attributes {Object} Arbitrary properties associated with this item
   * @param accountId {Number} The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
   * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
   * @param totalSales {Number} Sum of all purchases made by this customer
   * @param lastActivity {Date} Timestamp of the most recent event received from this customer
   */
  function ApplicationCustomer(id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity) {
    _classCallCheck(this, ApplicationCustomer);

    ApplicationCustomer.initialize(this, id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationCustomer, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity) {
      obj['id'] = id;
      obj['created'] = created;
      obj['integrationId'] = integrationId;
      obj['attributes'] = attributes;
      obj['accountId'] = accountId;
      obj['closedSessions'] = closedSessions;
      obj['totalSales'] = totalSales;
      obj['lastActivity'] = lastActivity;
    }
    /**
     * Constructs a <code>ApplicationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCustomer} obj Optional instance to populate.
     * @return {module:model/ApplicationCustomer} The populated <code>ApplicationCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationCustomer();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
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

  return ApplicationCustomer;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


ApplicationCustomer.prototype['id'] = undefined;
/**
 * The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created.
 * @member {Date} created
 */

ApplicationCustomer.prototype['created'] = undefined;
/**
 * The ID used for this entity in the application system. The ID used for this entity in the application system.
 * @member {String} integrationId
 */

ApplicationCustomer.prototype['integrationId'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

ApplicationCustomer.prototype['attributes'] = undefined;
/**
 * The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */

ApplicationCustomer.prototype['accountId'] = undefined;
/**
 * The total amount of closed sessions by a customer. A closed session is a successful purchase.
 * @member {Number} closedSessions
 */

ApplicationCustomer.prototype['closedSessions'] = undefined;
/**
 * Sum of all purchases made by this customer
 * @member {Number} totalSales
 */

ApplicationCustomer.prototype['totalSales'] = undefined;
/**
 * A list of loyalty programs joined by the customer
 * @member {Array.<module:model/LoyaltyMembership>} loyaltyMemberships
 */

ApplicationCustomer.prototype['loyaltyMemberships'] = undefined;
/**
 * Timestamp of the most recent event received from this customer
 * @member {Date} lastActivity
 */

ApplicationCustomer.prototype['lastActivity'] = undefined;
var _default = ApplicationCustomer;
exports["default"] = _default;