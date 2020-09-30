"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoyaltyLedgerEntry = _interopRequireDefault(require("./LoyaltyLedgerEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoyaltySubLedger model module.
 * @module model/LoyaltySubLedger
 * @version 4.2.0
 */
var LoyaltySubLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltySubLedger</code>.
   * Ledger of Balance in Loyalty Program for a Customer
   * @alias module:model/LoyaltySubLedger
   * @param total {Number} ⚠️ Deprecated: Please use 'totalActivePoints' property instead. Total amount of currently active and available points in the customer's balance 
   * @param totalActivePoints {Number} Total amount of currently active and available points in the customer's balance
   * @param totalPendingPoints {Number} Total amount of pending points, which are not active yet but will become active in the future
   * @param totalSpentPoints {Number} Total amount of points already spent by this customer
   * @param totalExpiredPoints {Number} Total amount of points, that expired without ever being spent
   */
  function LoyaltySubLedger(total, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) {
    _classCallCheck(this, LoyaltySubLedger);

    LoyaltySubLedger.initialize(this, total, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltySubLedger, null, [{
    key: "initialize",
    value: function initialize(obj, total, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) {
      obj['total'] = total;
      obj['totalActivePoints'] = totalActivePoints;
      obj['totalPendingPoints'] = totalPendingPoints;
      obj['totalSpentPoints'] = totalSpentPoints;
      obj['totalExpiredPoints'] = totalExpiredPoints;
    }
    /**
     * Constructs a <code>LoyaltySubLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltySubLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltySubLedger} The populated <code>LoyaltySubLedger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltySubLedger();

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('totalActivePoints')) {
          obj['totalActivePoints'] = _ApiClient["default"].convertToType(data['totalActivePoints'], 'Number');
        }

        if (data.hasOwnProperty('totalPendingPoints')) {
          obj['totalPendingPoints'] = _ApiClient["default"].convertToType(data['totalPendingPoints'], 'Number');
        }

        if (data.hasOwnProperty('totalSpentPoints')) {
          obj['totalSpentPoints'] = _ApiClient["default"].convertToType(data['totalSpentPoints'], 'Number');
        }

        if (data.hasOwnProperty('totalExpiredPoints')) {
          obj['totalExpiredPoints'] = _ApiClient["default"].convertToType(data['totalExpiredPoints'], 'Number');
        }

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_LoyaltyLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('expiringPoints')) {
          obj['expiringPoints'] = _ApiClient["default"].convertToType(data['expiringPoints'], [_LoyaltyLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('activePoints')) {
          obj['activePoints'] = _ApiClient["default"].convertToType(data['activePoints'], [_LoyaltyLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('pendingPoints')) {
          obj['pendingPoints'] = _ApiClient["default"].convertToType(data['pendingPoints'], [_LoyaltyLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('expiredPoints')) {
          obj['expiredPoints'] = _ApiClient["default"].convertToType(data['expiredPoints'], [_LoyaltyLedgerEntry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LoyaltySubLedger;
}();
/**
 * ⚠️ Deprecated: Please use 'totalActivePoints' property instead. Total amount of currently active and available points in the customer's balance 
 * @member {Number} total
 */


LoyaltySubLedger.prototype['total'] = undefined;
/**
 * Total amount of currently active and available points in the customer's balance
 * @member {Number} totalActivePoints
 */

LoyaltySubLedger.prototype['totalActivePoints'] = undefined;
/**
 * Total amount of pending points, which are not active yet but will become active in the future
 * @member {Number} totalPendingPoints
 */

LoyaltySubLedger.prototype['totalPendingPoints'] = undefined;
/**
 * Total amount of points already spent by this customer
 * @member {Number} totalSpentPoints
 */

LoyaltySubLedger.prototype['totalSpentPoints'] = undefined;
/**
 * Total amount of points, that expired without ever being spent
 * @member {Number} totalExpiredPoints
 */

LoyaltySubLedger.prototype['totalExpiredPoints'] = undefined;
/**
 * List of all events that have happened such as additions, subtractions and expiries
 * @member {Array.<module:model/LoyaltyLedgerEntry>} transactions
 */

LoyaltySubLedger.prototype['transactions'] = undefined;
/**
 * List of all points that will expire
 * @member {Array.<module:model/LoyaltyLedgerEntry>} expiringPoints
 */

LoyaltySubLedger.prototype['expiringPoints'] = undefined;
/**
 * List of all currently active points
 * @member {Array.<module:model/LoyaltyLedgerEntry>} activePoints
 */

LoyaltySubLedger.prototype['activePoints'] = undefined;
/**
 * List of all points pending activation
 * @member {Array.<module:model/LoyaltyLedgerEntry>} pendingPoints
 */

LoyaltySubLedger.prototype['pendingPoints'] = undefined;
/**
 * List of expired points
 * @member {Array.<module:model/LoyaltyLedgerEntry>} expiredPoints
 */

LoyaltySubLedger.prototype['expiredPoints'] = undefined;
var _default = LoyaltySubLedger;
exports["default"] = _default;