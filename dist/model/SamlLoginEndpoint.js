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
 * The SamlLoginEndpoint model module.
 * @module model/SamlLoginEndpoint
 * @version 4.2.0
 */
var SamlLoginEndpoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SamlLoginEndpoint</code>.
   * @alias module:model/SamlLoginEndpoint
   * @param name {String} ID of the SAML service.
   * @param loginURL {String} Single Sign-On URL.
   */
  function SamlLoginEndpoint(name, loginURL) {
    _classCallCheck(this, SamlLoginEndpoint);

    SamlLoginEndpoint.initialize(this, name, loginURL);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SamlLoginEndpoint, null, [{
    key: "initialize",
    value: function initialize(obj, name, loginURL) {
      obj['name'] = name;
      obj['loginURL'] = loginURL;
    }
    /**
     * Constructs a <code>SamlLoginEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlLoginEndpoint} obj Optional instance to populate.
     * @return {module:model/SamlLoginEndpoint} The populated <code>SamlLoginEndpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SamlLoginEndpoint();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('loginURL')) {
          obj['loginURL'] = _ApiClient["default"].convertToType(data['loginURL'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SamlLoginEndpoint;
}();
/**
 * ID of the SAML service.
 * @member {String} name
 */


SamlLoginEndpoint.prototype['name'] = undefined;
/**
 * Single Sign-On URL.
 * @member {String} loginURL
 */

SamlLoginEndpoint.prototype['loginURL'] = undefined;
var _default = SamlLoginEndpoint;
exports["default"] = _default;