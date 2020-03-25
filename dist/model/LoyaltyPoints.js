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
 * The LoyaltyPoints model module.
 * @module model/LoyaltyPoints
 * @version 4.0.0
 */
var LoyaltyPoints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyPoints</code>.
   * Points to add or deduct
   * @alias module:model/LoyaltyPoints
   * @param points {Number} Amount of loyalty points
   */
  function LoyaltyPoints(points) {
    _classCallCheck(this, LoyaltyPoints);

    LoyaltyPoints.initialize(this, points);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyPoints, null, [{
    key: "initialize",
    value: function initialize(obj, points) {
      obj['points'] = points;
    }
    /**
     * Constructs a <code>LoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyPoints} obj Optional instance to populate.
     * @return {module:model/LoyaltyPoints} The populated <code>LoyaltyPoints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyPoints();

        if (data.hasOwnProperty('points')) {
          obj['points'] = _ApiClient["default"].convertToType(data['points'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('expiryDuration')) {
          obj['expiryDuration'] = _ApiClient["default"].convertToType(data['expiryDuration'], 'String');
        }

        if (data.hasOwnProperty('subLedgerID')) {
          obj['subLedgerID'] = _ApiClient["default"].convertToType(data['subLedgerID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoyaltyPoints;
}();
/**
 * Amount of loyalty points
 * @member {Number} points
 */


LoyaltyPoints.prototype['points'] = undefined;
/**
 * Allows to specify a name for the addition or deduction
 * @member {String} name
 */

LoyaltyPoints.prototype['name'] = undefined;
/**
 * Indicates the duration after which the added loyalty points should expire. The format is a number followed by one letter indicating the unit, like '1h' or '40m' or '30d'.
 * @member {String} expiryDuration
 */

LoyaltyPoints.prototype['expiryDuration'] = undefined;
/**
 * This specifies if we are adding loyalty points to the main ledger or a subledger
 * @member {String} subLedgerID
 */

LoyaltyPoints.prototype['subLedgerID'] = undefined;
var _default = LoyaltyPoints;
exports["default"] = _default;