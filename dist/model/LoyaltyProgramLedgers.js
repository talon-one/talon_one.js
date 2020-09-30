"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoyaltyProgramBalance = _interopRequireDefault(require("./LoyaltyProgramBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoyaltyProgramLedgers model module.
 * @module model/LoyaltyProgramLedgers
 * @version 4.2.0
 */
var LoyaltyProgramLedgers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyProgramLedgers</code>.
   * Customer specific information about loyalty points.
   * @alias module:model/LoyaltyProgramLedgers
   * @param title {String} Visible name of loyalty program
   * @param name {String} Internal name of loyalty program
   * @param ledger {module:model/LoyaltyProgramBalance} 
   */
  function LoyaltyProgramLedgers(title, name, ledger) {
    _classCallCheck(this, LoyaltyProgramLedgers);

    LoyaltyProgramLedgers.initialize(this, title, name, ledger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyProgramLedgers, null, [{
    key: "initialize",
    value: function initialize(obj, title, name, ledger) {
      obj['title'] = title;
      obj['name'] = name;
      obj['ledger'] = ledger;
    }
    /**
     * Constructs a <code>LoyaltyProgramLedgers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramLedgers} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramLedgers} The populated <code>LoyaltyProgramLedgers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyProgramLedgers();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ledger')) {
          obj['ledger'] = _LoyaltyProgramBalance["default"].constructFromObject(data['ledger']);
        }

        if (data.hasOwnProperty('subLedgers')) {
          obj['subLedgers'] = _ApiClient["default"].convertToType(data['subLedgers'], {
            'String': _LoyaltyProgramBalance["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LoyaltyProgramLedgers;
}();
/**
 * Visible name of loyalty program
 * @member {String} title
 */


LoyaltyProgramLedgers.prototype['title'] = undefined;
/**
 * Internal name of loyalty program
 * @member {String} name
 */

LoyaltyProgramLedgers.prototype['name'] = undefined;
/**
 * @member {module:model/LoyaltyProgramBalance} ledger
 */

LoyaltyProgramLedgers.prototype['ledger'] = undefined;
/**
 * A map containing a list of all loyalty subledger balances
 * @member {Object.<String, module:model/LoyaltyProgramBalance>} subLedgers
 */

LoyaltyProgramLedgers.prototype['subLedgers'] = undefined;
var _default = LoyaltyProgramLedgers;
exports["default"] = _default;