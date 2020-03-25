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
 * The SamlConnection model module.
 * @module model/SamlConnection
 * @version 4.0.0
 */
var SamlConnection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SamlConnection</code>.
   * 
   * @alias module:model/SamlConnection
   * @param assertionConsumerServiceURL {String} The location where the SAML assertion is sent with a HTTP POST.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} ID of the SAML service.
   * @param enabled {Boolean} Determines if this SAML connection active.
   * @param issuer {String} Identity Provider Entity ID.
   * @param signOnURL {String} Single Sign-On URL.
   * @param audienceURI {String} The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   */
  function SamlConnection(assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created) {
    _classCallCheck(this, SamlConnection);

    SamlConnection.initialize(this, assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SamlConnection, null, [{
    key: "initialize",
    value: function initialize(obj, assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created) {
      obj['assertionConsumerServiceURL'] = assertionConsumerServiceURL;
      obj['accountId'] = accountId;
      obj['name'] = name;
      obj['enabled'] = enabled;
      obj['issuer'] = issuer;
      obj['signOnURL'] = signOnURL;
      obj['audienceURI'] = audienceURI;
      obj['id'] = id;
      obj['created'] = created;
    }
    /**
     * Constructs a <code>SamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlConnection} obj Optional instance to populate.
     * @return {module:model/SamlConnection} The populated <code>SamlConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SamlConnection();

        if (data.hasOwnProperty('assertionConsumerServiceURL')) {
          obj['assertionConsumerServiceURL'] = _ApiClient["default"].convertToType(data['assertionConsumerServiceURL'], 'String');
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

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SamlConnection;
}();
/**
 * The location where the SAML assertion is sent with a HTTP POST.
 * @member {String} assertionConsumerServiceURL
 */


SamlConnection.prototype['assertionConsumerServiceURL'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

SamlConnection.prototype['accountId'] = undefined;
/**
 * ID of the SAML service.
 * @member {String} name
 */

SamlConnection.prototype['name'] = undefined;
/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */

SamlConnection.prototype['enabled'] = undefined;
/**
 * Identity Provider Entity ID.
 * @member {String} issuer
 */

SamlConnection.prototype['issuer'] = undefined;
/**
 * Single Sign-On URL.
 * @member {String} signOnURL
 */

SamlConnection.prototype['signOnURL'] = undefined;
/**
 * Single Sign-Out URL.
 * @member {String} signOutURL
 */

SamlConnection.prototype['signOutURL'] = undefined;
/**
 * Metadata URL.
 * @member {String} metadataURL
 */

SamlConnection.prototype['metadataURL'] = undefined;
/**
 * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
 * @member {String} audienceURI
 */

SamlConnection.prototype['audienceURI'] = undefined;
/**
 * Unique ID for this entity.
 * @member {Number} id
 */

SamlConnection.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

SamlConnection.prototype['created'] = undefined;
var _default = SamlConnection;
exports["default"] = _default;