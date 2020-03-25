"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributesSettings = _interopRequireDefault(require("./AttributesSettings"));

var _LimitConfig = _interopRequireDefault(require("./LimitConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateApplication model module.
 * @module model/UpdateApplication
 * @version 4.0.0
 */
var UpdateApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateApplication</code>.
   * @alias module:model/UpdateApplication
   * @param name {String} The name of this application.
   * @param timezone {String} A string containing an IANA timezone descriptor.
   * @param currency {String} A string describing a default currency for new customer sessions.
   */
  function UpdateApplication(name, timezone, currency) {
    _classCallCheck(this, UpdateApplication);

    UpdateApplication.initialize(this, name, timezone, currency);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateApplication, null, [{
    key: "initialize",
    value: function initialize(obj, name, timezone, currency) {
      obj['name'] = name;
      obj['timezone'] = timezone;
      obj['currency'] = currency;
    }
    /**
     * Constructs a <code>UpdateApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApplication} obj Optional instance to populate.
     * @return {module:model/UpdateApplication} The populated <code>UpdateApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateApplication();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('caseSensitivity')) {
          obj['caseSensitivity'] = _ApiClient["default"].convertToType(data['caseSensitivity'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _ApiClient["default"].convertToType(data['limits'], [_LimitConfig["default"]]);
        }

        if (data.hasOwnProperty('attributesSettings')) {
          obj['attributesSettings'] = _AttributesSettings["default"].constructFromObject(data['attributesSettings']);
        }
      }

      return obj;
    }
  }]);

  return UpdateApplication;
}();
/**
 * The name of this application.
 * @member {String} name
 */


UpdateApplication.prototype['name'] = undefined;
/**
 * A longer description of the application.
 * @member {String} description
 */

UpdateApplication.prototype['description'] = undefined;
/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */

UpdateApplication.prototype['timezone'] = undefined;
/**
 * A string describing a default currency for new customer sessions.
 * @member {String} currency
 */

UpdateApplication.prototype['currency'] = undefined;
/**
 * A string indicating how should campaigns in this application deal with case sensitivity on coupon codes.
 * @member {module:model/UpdateApplication.CaseSensitivityEnum} caseSensitivity
 */

UpdateApplication.prototype['caseSensitivity'] = undefined;
/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */

UpdateApplication.prototype['attributes'] = undefined;
/**
 * Default limits for campaigns created in this application
 * @member {Array.<module:model/LimitConfig>} limits
 */

UpdateApplication.prototype['limits'] = undefined;
/**
 * @member {module:model/AttributesSettings} attributesSettings
 */

UpdateApplication.prototype['attributesSettings'] = undefined;
/**
 * Allowed values for the <code>caseSensitivity</code> property.
 * @enum {String}
 * @readonly
 */

UpdateApplication['CaseSensitivityEnum'] = {
  /**
   * value: "sensitive"
   * @const
   */
  "sensitive": "sensitive",

  /**
   * value: "insensitive-uppercase"
   * @const
   */
  "insensitive-uppercase": "insensitive-uppercase",

  /**
   * value: "insensitive-lowercase"
   * @const
   */
  "insensitive-lowercase": "insensitive-lowercase"
};
var _default = UpdateApplication;
exports["default"] = _default;