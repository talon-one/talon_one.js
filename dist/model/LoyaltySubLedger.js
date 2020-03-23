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
 * @version 1.0.0
 */
var LoyaltySubLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltySubLedger</code>.
   * Ledger of Balance in Loyalty Program for a Customer
   * @alias module:model/LoyaltySubLedger
   * @param total {Number} 
   */
  function LoyaltySubLedger(total) {
    _classCallCheck(this, LoyaltySubLedger);

    LoyaltySubLedger.initialize(this, total);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltySubLedger, null, [{
    key: "initialize",
    value: function initialize(obj, total) {
      obj['total'] = total;
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

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_LoyaltyLedgerEntry["default"]]);
        }

        if (data.hasOwnProperty('expiringPoints')) {
          obj['expiringPoints'] = _ApiClient["default"].convertToType(data['expiringPoints'], [_LoyaltyLedgerEntry["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LoyaltySubLedger;
}();
/**
 * @member {Number} total
 */


LoyaltySubLedger.prototype['total'] = undefined;
/**
 * Transactions contains a list of all events that have happened such as additions, subtractions and expiries
 * @member {Array.<module:model/LoyaltyLedgerEntry>} transactions
 */

LoyaltySubLedger.prototype['transactions'] = undefined;
/**
 * ExpiringPoints contains a list of all points that will expiry and when
 * @member {Array.<module:model/LoyaltyLedgerEntry>} expiringPoints
 */

LoyaltySubLedger.prototype['expiringPoints'] = undefined;
var _default = LoyaltySubLedger;
exports["default"] = _default;