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
 * The UpdateUserLatestFeedTimestamp model module.
 * @module model/UpdateUserLatestFeedTimestamp
 * @version 4.2.0
 */
var UpdateUserLatestFeedTimestamp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateUserLatestFeedTimestamp</code>.
   * Updates current user&#39;s latest seen notifications timestamp
   * @alias module:model/UpdateUserLatestFeedTimestamp
   * @param newLatestFeedTimestamp {Date} New timestamp to update for the current user
   */
  function UpdateUserLatestFeedTimestamp(newLatestFeedTimestamp) {
    _classCallCheck(this, UpdateUserLatestFeedTimestamp);

    UpdateUserLatestFeedTimestamp.initialize(this, newLatestFeedTimestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateUserLatestFeedTimestamp, null, [{
    key: "initialize",
    value: function initialize(obj, newLatestFeedTimestamp) {
      obj['newLatestFeedTimestamp'] = newLatestFeedTimestamp;
    }
    /**
     * Constructs a <code>UpdateUserLatestFeedTimestamp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserLatestFeedTimestamp} obj Optional instance to populate.
     * @return {module:model/UpdateUserLatestFeedTimestamp} The populated <code>UpdateUserLatestFeedTimestamp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUserLatestFeedTimestamp();

        if (data.hasOwnProperty('newLatestFeedTimestamp')) {
          obj['newLatestFeedTimestamp'] = _ApiClient["default"].convertToType(data['newLatestFeedTimestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return UpdateUserLatestFeedTimestamp;
}();
/**
 * New timestamp to update for the current user
 * @member {Date} newLatestFeedTimestamp
 */


UpdateUserLatestFeedTimestamp.prototype['newLatestFeedTimestamp'] = undefined;
var _default = UpdateUserLatestFeedTimestamp;
exports["default"] = _default;