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
 * The LoyaltyStatistics model module.
 * @module model/LoyaltyStatistics
 * @version 4.2.0
 */
var LoyaltyStatistics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyStatistics</code>.
   * 
   * @alias module:model/LoyaltyStatistics
   * @param totalActivePoints {Number} Total of active points for this loyalty program
   * @param totalPendingPoints {Number} Total of pending points for this loyalty program
   * @param totalSpentPoints {Number} Total of spent points for this loyalty program
   * @param totalExpiredPoints {Number} Total of expired points for this loyalty program
   */
  function LoyaltyStatistics(totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) {
    _classCallCheck(this, LoyaltyStatistics);

    LoyaltyStatistics.initialize(this, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyStatistics, null, [{
    key: "initialize",
    value: function initialize(obj, totalActivePoints, totalPendingPoints, totalSpentPoints, totalExpiredPoints) {
      obj['totalActivePoints'] = totalActivePoints;
      obj['totalPendingPoints'] = totalPendingPoints;
      obj['totalSpentPoints'] = totalSpentPoints;
      obj['totalExpiredPoints'] = totalExpiredPoints;
    }
    /**
     * Constructs a <code>LoyaltyStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyStatistics} obj Optional instance to populate.
     * @return {module:model/LoyaltyStatistics} The populated <code>LoyaltyStatistics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyStatistics();

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
      }

      return obj;
    }
  }]);

  return LoyaltyStatistics;
}();
/**
 * Total of active points for this loyalty program
 * @member {Number} totalActivePoints
 */


LoyaltyStatistics.prototype['totalActivePoints'] = undefined;
/**
 * Total of pending points for this loyalty program
 * @member {Number} totalPendingPoints
 */

LoyaltyStatistics.prototype['totalPendingPoints'] = undefined;
/**
 * Total of spent points for this loyalty program
 * @member {Number} totalSpentPoints
 */

LoyaltyStatistics.prototype['totalSpentPoints'] = undefined;
/**
 * Total of expired points for this loyalty program
 * @member {Number} totalExpiredPoints
 */

LoyaltyStatistics.prototype['totalExpiredPoints'] = undefined;
var _default = LoyaltyStatistics;
exports["default"] = _default;