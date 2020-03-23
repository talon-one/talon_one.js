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
 * The LoyaltyProgramBalance model module.
 * @module model/LoyaltyProgramBalance
 * @version 1.0.0
 */
var LoyaltyProgramBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyProgramBalance</code>.
   * The balance in a Loyalty Program for some Customer.
   * @alias module:model/LoyaltyProgramBalance
   * @param currentBalance {Number} 
   */
  function LoyaltyProgramBalance(currentBalance) {
    _classCallCheck(this, LoyaltyProgramBalance);

    LoyaltyProgramBalance.initialize(this, currentBalance);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyProgramBalance, null, [{
    key: "initialize",
    value: function initialize(obj, currentBalance) {
      obj['currentBalance'] = currentBalance;
    }
    /**
     * Constructs a <code>LoyaltyProgramBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramBalance} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramBalance} The populated <code>LoyaltyProgramBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyProgramBalance();

        if (data.hasOwnProperty('currentBalance')) {
          obj['currentBalance'] = _ApiClient["default"].convertToType(data['currentBalance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LoyaltyProgramBalance;
}();
/**
 * @member {Number} currentBalance
 */


LoyaltyProgramBalance.prototype['currentBalance'] = undefined;
var _default = LoyaltyProgramBalance;
exports["default"] = _default;