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
 * The ApplicationApiHealth model module.
 * @module model/ApplicationApiHealth
 * @version 4.2.0
 */
var ApplicationApiHealth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationApiHealth</code>.
   * Report of health of the API connection of an application
   * @alias module:model/ApplicationApiHealth
   * @param summary {module:model/ApplicationApiHealth.SummaryEnum} One-word summary of the health of the API connection of an application
   * @param lastUsed {Date} time of last request relevant to the API health test
   */
  function ApplicationApiHealth(summary, lastUsed) {
    _classCallCheck(this, ApplicationApiHealth);

    ApplicationApiHealth.initialize(this, summary, lastUsed);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationApiHealth, null, [{
    key: "initialize",
    value: function initialize(obj, summary, lastUsed) {
      obj['summary'] = summary;
      obj['lastUsed'] = lastUsed;
    }
    /**
     * Constructs a <code>ApplicationApiHealth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationApiHealth} obj Optional instance to populate.
     * @return {module:model/ApplicationApiHealth} The populated <code>ApplicationApiHealth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationApiHealth();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('lastUsed')) {
          obj['lastUsed'] = _ApiClient["default"].convertToType(data['lastUsed'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ApplicationApiHealth;
}();
/**
 * One-word summary of the health of the API connection of an application
 * @member {module:model/ApplicationApiHealth.SummaryEnum} summary
 */


ApplicationApiHealth.prototype['summary'] = undefined;
/**
 * time of last request relevant to the API health test
 * @member {Date} lastUsed
 */

ApplicationApiHealth.prototype['lastUsed'] = undefined;
/**
 * Allowed values for the <code>summary</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationApiHealth['SummaryEnum'] = {
  /**
   * value: "OK"
   * @const
   */
  "OK": "OK",

  /**
   * value: "WARNING"
   * @const
   */
  "WARNING": "WARNING",

  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR",

  /**
   * value: "CRITICAL"
   * @const
   */
  "CRITICAL": "CRITICAL",

  /**
   * value: "NONE"
   * @const
   */
  "NONE": "NONE"
};
var _default = ApplicationApiHealth;
exports["default"] = _default;