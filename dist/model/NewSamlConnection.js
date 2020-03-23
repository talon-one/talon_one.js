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
 * The NewSamlConnection model module.
 * @module model/NewSamlConnection
 * @version 1.0.0
 */
var NewSamlConnection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewSamlConnection</code>.
   * 
   * @alias module:model/NewSamlConnection
   * @param x509certificate {String} X.509 Certificate.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} ID of the SAML service.
   * @param enabled {Boolean} Determines if this SAML connection active.
   * @param issuer {String} Identity Provider Entity ID.
   * @param signOnURL {String} Single Sign-On URL.
   */
  function NewSamlConnection(x509certificate, accountId, name, enabled, issuer, signOnURL) {
    _classCallCheck(this, NewSamlConnection);

    NewSamlConnection.initialize(this, x509certificate, accountId, name, enabled, issuer, signOnURL);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewSamlConnection, null, [{
    key: "initialize",
    value: function initialize(obj, x509certificate, accountId, name, enabled, issuer, signOnURL) {
      obj['x509certificate'] = x509certificate;
      obj['accountId'] = accountId;
      obj['name'] = name;
      obj['enabled'] = enabled;
      obj['issuer'] = issuer;
      obj['signOnURL'] = signOnURL;
    }
    /**
     * Constructs a <code>NewSamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSamlConnection} obj Optional instance to populate.
     * @return {module:model/NewSamlConnection} The populated <code>NewSamlConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewSamlConnection();

        if (data.hasOwnProperty('x509certificate')) {
          obj['x509certificate'] = _ApiClient["default"].convertToType(data['x509certificate'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('issuer')) {
          obj['issuer'] = _ApiClient["default"].convertToType(data['issuer'], 'String');
        }

        if (data.hasOwnProperty('signOnURL')) {
          obj['signOnURL'] = _ApiClient["default"].convertToType(data['signOnURL'], 'String');
        }

        if (data.hasOwnProperty('signOutURL')) {
          obj['signOutURL'] = _ApiClient["default"].convertToType(data['signOutURL'], 'String');
        }

        if (data.hasOwnProperty('metadataURL')) {
          obj['metadataURL'] = _ApiClient["default"].convertToType(data['metadataURL'], 'String');
        }

        if (data.hasOwnProperty('audienceURI')) {
          obj['audienceURI'] = _ApiClient["default"].convertToType(data['audienceURI'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewSamlConnection;
}();
/**
 * X.509 Certificate.
 * @member {String} x509certificate
 */


NewSamlConnection.prototype['x509certificate'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

NewSamlConnection.prototype['accountId'] = undefined;
/**
 * ID of the SAML service.
 * @member {String} name
 */

NewSamlConnection.prototype['name'] = undefined;
/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */

NewSamlConnection.prototype['enabled'] = undefined;
/**
 * Identity Provider Entity ID.
 * @member {String} issuer
 */

NewSamlConnection.prototype['issuer'] = undefined;
/**
 * Single Sign-On URL.
 * @member {String} signOnURL
 */

NewSamlConnection.prototype['signOnURL'] = undefined;
/**
 * Single Sign-Out URL.
 * @member {String} signOutURL
 */

NewSamlConnection.prototype['signOutURL'] = undefined;
/**
 * Metadata URL.
 * @member {String} metadataURL
 */

NewSamlConnection.prototype['metadataURL'] = undefined;
/**
 * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
 * @member {String} audienceURI
 */

NewSamlConnection.prototype['audienceURI'] = undefined;
var _default = NewSamlConnection;
exports["default"] = _default;