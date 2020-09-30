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
 * The SamlConnectionMetadata model module.
 * @module model/SamlConnectionMetadata
 * @version 4.2.0
 */
var SamlConnectionMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SamlConnectionMetadata</code>.
   * @alias module:model/SamlConnectionMetadata
   * @param name {String} ID of the SAML service.
   * @param enabled {Boolean} Determines if this SAML connection active.
   * @param accountId {Number} 
   * @param metadataDocument {String} Identity Provider metadata XML document.
   */
  function SamlConnectionMetadata(name, enabled, accountId, metadataDocument) {
    _classCallCheck(this, SamlConnectionMetadata);

    SamlConnectionMetadata.initialize(this, name, enabled, accountId, metadataDocument);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SamlConnectionMetadata, null, [{
    key: "initialize",
    value: function initialize(obj, name, enabled, accountId, metadataDocument) {
      obj['name'] = name;
      obj['enabled'] = enabled;
      obj['accountId'] = accountId;
      obj['metadataDocument'] = metadataDocument;
    }
    /**
     * Constructs a <code>SamlConnectionMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlConnectionMetadata} obj Optional instance to populate.
     * @return {module:model/SamlConnectionMetadata} The populated <code>SamlConnectionMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SamlConnectionMetadata();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('metadataDocument')) {
          obj['metadataDocument'] = _ApiClient["default"].convertToType(data['metadataDocument'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SamlConnectionMetadata;
}();
/**
 * ID of the SAML service.
 * @member {String} name
 */


SamlConnectionMetadata.prototype['name'] = undefined;
/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */

SamlConnectionMetadata.prototype['enabled'] = undefined;
/**
 * @member {Number} accountId
 */

SamlConnectionMetadata.prototype['accountId'] = undefined;
/**
 * Identity Provider metadata XML document.
 * @member {String} metadataDocument
 */

SamlConnectionMetadata.prototype['metadataDocument'] = undefined;
var _default = SamlConnectionMetadata;
exports["default"] = _default;