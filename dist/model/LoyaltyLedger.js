"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoyaltySubLedger = _interopRequireDefault(require("./LoyaltySubLedger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoyaltyLedger model module.
 * @module model/LoyaltyLedger
 * @version 4.0.0
 */
var LoyaltyLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyLedger</code>.
   * Ledger of Balance in Loyalty Program for a Customer
   * @alias module:model/LoyaltyLedger
   * @param ledger {module:model/LoyaltySubLedger} 
   */
  function LoyaltyLedger(ledger) {
    _classCallCheck(this, LoyaltyLedger);

    LoyaltyLedger.initialize(this, ledger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyLedger, null, [{
    key: "initialize",
    value: function initialize(obj, ledger) {
      obj['ledger'] = ledger;
    }
    /**
     * Constructs a <code>LoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedger} The populated <code>LoyaltyLedger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyLedger();

        if (data.hasOwnProperty('ledger')) {
          obj['ledger'] = _LoyaltySubLedger["default"].constructFromObject(data['ledger']);
        }

        if (data.hasOwnProperty('subLedgers')) {
          obj['subLedgers'] = _ApiClient["default"].convertToType(data['subLedgers'], {
            'String': _LoyaltySubLedger["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LoyaltyLedger;
}();
/**
 * @member {module:model/LoyaltySubLedger} ledger
 */


LoyaltyLedger.prototype['ledger'] = undefined;
/**
 * A map containing a list of all loyalty subledger balances
 * @member {Object.<String, module:model/LoyaltySubLedger>} subLedgers
 */

LoyaltyLedger.prototype['subLedgers'] = undefined;
var _default = LoyaltyLedger;
exports["default"] = _default;