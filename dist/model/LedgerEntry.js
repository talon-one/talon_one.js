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
 * The LedgerEntry model module.
 * @module model/LedgerEntry
 * @version 4.0.0
 */
var LedgerEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LedgerEntry</code>.
   * 
   * @alias module:model/LedgerEntry
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
   * @param accountId {Number} The ID of the Talon.One account that owns this profile.
   * @param loyaltyProgramId {Number} ID of the ledger
   * @param eventId {Number} ID of the related event
   * @param amount {Number} Amount of loyalty points
   * @param reason {String} reason for awarding/deducting points
   * @param expiryDate {Date} Expiry date of the points
   */
  function LedgerEntry(id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate) {
    _classCallCheck(this, LedgerEntry);

    LedgerEntry.initialize(this, id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LedgerEntry, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, profileId, accountId, loyaltyProgramId, eventId, amount, reason, expiryDate) {
      obj['id'] = id;
      obj['created'] = created;
      obj['profileId'] = profileId;
      obj['accountId'] = accountId;
      obj['loyaltyProgramId'] = loyaltyProgramId;
      obj['eventId'] = eventId;
      obj['amount'] = amount;
      obj['reason'] = reason;
      obj['expiryDate'] = expiryDate;
    }
    /**
     * Constructs a <code>LedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LedgerEntry} obj Optional instance to populate.
     * @return {module:model/LedgerEntry} The populated <code>LedgerEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LedgerEntry();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('loyaltyProgramId')) {
          obj['loyaltyProgramId'] = _ApiClient["default"].convertToType(data['loyaltyProgramId'], 'Number');
        }

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'Number');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }

        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LedgerEntry;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


LedgerEntry.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

LedgerEntry.prototype['created'] = undefined;
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */

LedgerEntry.prototype['profileId'] = undefined;
/**
 * The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */

LedgerEntry.prototype['accountId'] = undefined;
/**
 * ID of the ledger
 * @member {Number} loyaltyProgramId
 */

LedgerEntry.prototype['loyaltyProgramId'] = undefined;
/**
 * ID of the related event
 * @member {Number} eventId
 */

LedgerEntry.prototype['eventId'] = undefined;
/**
 * Amount of loyalty points
 * @member {Number} amount
 */

LedgerEntry.prototype['amount'] = undefined;
/**
 * reason for awarding/deducting points
 * @member {String} reason
 */

LedgerEntry.prototype['reason'] = undefined;
/**
 * Expiry date of the points
 * @member {Date} expiryDate
 */

LedgerEntry.prototype['expiryDate'] = undefined;
/**
 * The ID of the balancing ledgerEntry
 * @member {Number} referenceId
 */

LedgerEntry.prototype['referenceId'] = undefined;
var _default = LedgerEntry;
exports["default"] = _default;