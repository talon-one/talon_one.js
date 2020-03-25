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
 * The UpdateLoyaltyProgram model module.
 * @module model/UpdateLoyaltyProgram
 * @version 4.0.0
 */
var UpdateLoyaltyProgram = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateLoyaltyProgram</code>.
   * Update Loyalty Program
   * @alias module:model/UpdateLoyaltyProgram
   */
  function UpdateLoyaltyProgram() {
    _classCallCheck(this, UpdateLoyaltyProgram);

    UpdateLoyaltyProgram.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateLoyaltyProgram, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/UpdateLoyaltyProgram} The populated <code>UpdateLoyaltyProgram</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateLoyaltyProgram();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subscribedApplications')) {
          obj['subscribedApplications'] = _ApiClient["default"].convertToType(data['subscribedApplications'], ['Number']);
        }

        if (data.hasOwnProperty('defaultValidity')) {
          obj['defaultValidity'] = _ApiClient["default"].convertToType(data['defaultValidity'], 'String');
        }

        if (data.hasOwnProperty('allowSubledger')) {
          obj['allowSubledger'] = _ApiClient["default"].convertToType(data['allowSubledger'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UpdateLoyaltyProgram;
}();
/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */


UpdateLoyaltyProgram.prototype['title'] = undefined;
/**
 * Description of our Loyalty Program.
 * @member {String} description
 */

UpdateLoyaltyProgram.prototype['description'] = undefined;
/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */

UpdateLoyaltyProgram.prototype['subscribedApplications'] = undefined;
/**
 * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
 * @member {String} defaultValidity
 */

UpdateLoyaltyProgram.prototype['defaultValidity'] = undefined;
/**
 * Indicates if this program supports subledgers inside the program
 * @member {Boolean} allowSubledger
 */

UpdateLoyaltyProgram.prototype['allowSubledger'] = undefined;
var _default = UpdateLoyaltyProgram;
exports["default"] = _default;