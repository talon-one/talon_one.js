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
 * The LoyaltyLedgerEntry model module.
 * @module model/LoyaltyLedgerEntry
 * @version 1.0.0
 */
var LoyaltyLedgerEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyLedgerEntry</code>.
   * A single row of the ledger, describing one addition or deduction.
   * @alias module:model/LoyaltyLedgerEntry
   * @param created {Date} 
   * @param programID {Number} 
   * @param customerProfileID {String} 
   * @param type {module:model/LoyaltyLedgerEntry.TypeEnum} 
   * @param amount {Number} 
   * @param name {String} A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
   * @param subLedgerID {String} This specifies if we are adding loyalty points to the main ledger or a subledger
   */
  function LoyaltyLedgerEntry(created, programID, customerProfileID, type, amount, name, subLedgerID) {
    _classCallCheck(this, LoyaltyLedgerEntry);

    LoyaltyLedgerEntry.initialize(this, created, programID, customerProfileID, type, amount, name, subLedgerID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyLedgerEntry, null, [{
    key: "initialize",
    value: function initialize(obj, created, programID, customerProfileID, type, amount, name, subLedgerID) {
      obj['created'] = created;
      obj['programID'] = programID;
      obj['customerProfileID'] = customerProfileID;
      obj['type'] = type;
      obj['amount'] = amount;
      obj['name'] = name;
      obj['subLedgerID'] = subLedgerID;
    }
    /**
     * Constructs a <code>LoyaltyLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedgerEntry} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedgerEntry} The populated <code>LoyaltyLedgerEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyLedgerEntry();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('programID')) {
          obj['programID'] = _ApiClient["default"].convertToType(data['programID'], 'Number');
        }

        if (data.hasOwnProperty('customerProfileID')) {
          obj['customerProfileID'] = _ApiClient["default"].convertToType(data['customerProfileID'], 'String');
        }

        if (data.hasOwnProperty('customerSessionID')) {
          obj['customerSessionID'] = _ApiClient["default"].convertToType(data['customerSessionID'], 'String');
        }

        if (data.hasOwnProperty('eventID')) {
          obj['eventID'] = _ApiClient["default"].convertToType(data['eventID'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('expiryDate')) {
          obj['expiryDate'] = _ApiClient["default"].convertToType(data['expiryDate'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('subLedgerID')) {
          obj['subLedgerID'] = _ApiClient["default"].convertToType(data['subLedgerID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoyaltyLedgerEntry;
}();
/**
 * @member {Date} created
 */


LoyaltyLedgerEntry.prototype['created'] = undefined;
/**
 * @member {Number} programID
 */

LoyaltyLedgerEntry.prototype['programID'] = undefined;
/**
 * @member {String} customerProfileID
 */

LoyaltyLedgerEntry.prototype['customerProfileID'] = undefined;
/**
 * @member {String} customerSessionID
 */

LoyaltyLedgerEntry.prototype['customerSessionID'] = undefined;
/**
 * @member {Number} eventID
 */

LoyaltyLedgerEntry.prototype['eventID'] = undefined;
/**
 * @member {module:model/LoyaltyLedgerEntry.TypeEnum} type
 */

LoyaltyLedgerEntry.prototype['type'] = undefined;
/**
 * @member {Number} amount
 */

LoyaltyLedgerEntry.prototype['amount'] = undefined;
/**
 * @member {Date} expiryDate
 */

LoyaltyLedgerEntry.prototype['expiryDate'] = undefined;
/**
 * A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
 * @member {String} name
 */

LoyaltyLedgerEntry.prototype['name'] = undefined;
/**
 * This specifies if we are adding loyalty points to the main ledger or a subledger
 * @member {String} subLedgerID
 */

LoyaltyLedgerEntry.prototype['subLedgerID'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

LoyaltyLedgerEntry['TypeEnum'] = {
  /**
   * value: "addition"
   * @const
   */
  "addition": "addition",

  /**
   * value: "subtraction"
   * @const
   */
  "subtraction": "subtraction"
};
var _default = LoyaltyLedgerEntry;
exports["default"] = _default;