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
 * The NewLoyaltyProgram model module.
 * @module model/NewLoyaltyProgram
 * @version 4.2.0
 */
var NewLoyaltyProgram = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewLoyaltyProgram</code>.
   * A new loyalty program
   * @alias module:model/NewLoyaltyProgram
   * @param name {String} The internal name for the Loyalty Program. This is an immutable value.
   * @param title {String} The display title for the Loyalty Program.
   * @param defaultValidity {String} Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m'.
   * @param defaultPending {String} Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like '1h' or '40m'.
   * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program
   */
  function NewLoyaltyProgram(name, title, defaultValidity, defaultPending, allowSubledger) {
    _classCallCheck(this, NewLoyaltyProgram);

    NewLoyaltyProgram.initialize(this, name, title, defaultValidity, defaultPending, allowSubledger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewLoyaltyProgram, null, [{
    key: "initialize",
    value: function initialize(obj, name, title, defaultValidity, defaultPending, allowSubledger) {
      obj['name'] = name;
      obj['title'] = title;
      obj['defaultValidity'] = defaultValidity;
      obj['defaultPending'] = defaultPending;
      obj['allowSubledger'] = allowSubledger;
    }
    /**
     * Constructs a <code>NewLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewLoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/NewLoyaltyProgram} The populated <code>NewLoyaltyProgram</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewLoyaltyProgram();

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

        if (data.hasOwnProperty('defaultPending')) {
          obj['defaultPending'] = _ApiClient["default"].convertToType(data['defaultPending'], 'String');
        }

        if (data.hasOwnProperty('allowSubledger')) {
          obj['allowSubledger'] = _ApiClient["default"].convertToType(data['allowSubledger'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return NewLoyaltyProgram;
}();
/**
 * The internal name for the Loyalty Program. This is an immutable value.
 * @member {String} name
 */


NewLoyaltyProgram.prototype['name'] = undefined;
/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */

NewLoyaltyProgram.prototype['title'] = undefined;
/**
 * Description of our Loyalty Program.
 * @member {String} description
 */

NewLoyaltyProgram.prototype['description'] = undefined;
/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */

NewLoyaltyProgram.prototype['subscribedApplications'] = undefined;
/**
 * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m'.
 * @member {String} defaultValidity
 */

NewLoyaltyProgram.prototype['defaultValidity'] = undefined;
/**
 * Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like '1h' or '40m'.
 * @member {String} defaultPending
 */

NewLoyaltyProgram.prototype['defaultPending'] = undefined;
/**
 * Indicates if this program supports subledgers inside the program
 * @member {Boolean} allowSubledger
 */

NewLoyaltyProgram.prototype['allowSubledger'] = undefined;
var _default = NewLoyaltyProgram;
exports["default"] = _default;