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
 * The LoyaltyProgram model module.
 * @module model/LoyaltyProgram
 * @version 4.0.0
 */
var LoyaltyProgram = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyProgram</code>.
   * A Loyalty Program
   * @alias module:model/LoyaltyProgram
   * @param id {Number} The ID of loyalty program.
   * @param accountID {Number} The ID of the Talon.One account that owns this program.
   * @param name {String} The internal name for the Loyalty Program.
   * @param title {String} The display title for the Loyalty Program.
   * @param description {String} Description of our Loyalty Program.
   * @param subscribedApplications {Array.<Number>} A list containing the IDs of all applications that are subscribed to this Loyalty Program.
   * @param defaultValidity {String} Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
   * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program
   */
  function LoyaltyProgram(id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger) {
    _classCallCheck(this, LoyaltyProgram);

    LoyaltyProgram.initialize(this, id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyProgram, null, [{
    key: "initialize",
    value: function initialize(obj, id, accountID, name, title, description, subscribedApplications, defaultValidity, allowSubledger) {
      obj['id'] = id;
      obj['accountID'] = accountID;
      obj['name'] = name;
      obj['title'] = title;
      obj['description'] = description;
      obj['subscribedApplications'] = subscribedApplications;
      obj['defaultValidity'] = defaultValidity;
      obj['allowSubledger'] = allowSubledger;
    }
    /**
     * Constructs a <code>LoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgram} The populated <code>LoyaltyProgram</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyProgram();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('accountID')) {
          obj['accountID'] = _ApiClient["default"].convertToType(data['accountID'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

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

  return LoyaltyProgram;
}();
/**
 * The ID of loyalty program.
 * @member {Number} id
 */


LoyaltyProgram.prototype['id'] = undefined;
/**
 * The ID of the Talon.One account that owns this program.
 * @member {Number} accountID
 */

LoyaltyProgram.prototype['accountID'] = undefined;
/**
 * The internal name for the Loyalty Program.
 * @member {String} name
 */

LoyaltyProgram.prototype['name'] = undefined;
/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */

LoyaltyProgram.prototype['title'] = undefined;
/**
 * Description of our Loyalty Program.
 * @member {String} description
 */

LoyaltyProgram.prototype['description'] = undefined;
/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */

LoyaltyProgram.prototype['subscribedApplications'] = undefined;
/**
 * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m' or '30d'.
 * @member {String} defaultValidity
 */

LoyaltyProgram.prototype['defaultValidity'] = undefined;
/**
 * Indicates if this program supports subledgers inside the program
 * @member {Boolean} allowSubledger
 */

LoyaltyProgram.prototype['allowSubledger'] = undefined;
var _default = LoyaltyProgram;
exports["default"] = _default;