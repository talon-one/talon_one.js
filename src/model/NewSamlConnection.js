/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.NewSamlConnection = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewSamlConnection model module.
   * @module model/NewSamlConnection
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>NewSamlConnection</code>.
   * 
   * @alias module:model/NewSamlConnection
   * @class
   * @param x509certificate {String} X.509 Certificate.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} ID of the SAML service.
   * @param enabled {Boolean} Determines if this SAML connection active.
   * @param issuer {String} Identity Provider Entity ID.
   * @param signOnURL {String} Single Sign-On URL.
   */
  var exports = function(x509certificate, accountId, name, enabled, issuer, signOnURL) {
    var _this = this;

    _this['x509certificate'] = x509certificate;
    _this['accountId'] = accountId;
    _this['name'] = name;
    _this['enabled'] = enabled;
    _this['issuer'] = issuer;
    _this['signOnURL'] = signOnURL;



  };

  /**
   * Constructs a <code>NewSamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewSamlConnection} obj Optional instance to populate.
   * @return {module:model/NewSamlConnection} The populated <code>NewSamlConnection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('x509certificate')) {
        obj['x509certificate'] = ApiClient.convertToType(data['x509certificate'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
      if (data.hasOwnProperty('signOnURL')) {
        obj['signOnURL'] = ApiClient.convertToType(data['signOnURL'], 'String');
      }
      if (data.hasOwnProperty('signOutURL')) {
        obj['signOutURL'] = ApiClient.convertToType(data['signOutURL'], 'String');
      }
      if (data.hasOwnProperty('metadataURL')) {
        obj['metadataURL'] = ApiClient.convertToType(data['metadataURL'], 'String');
      }
      if (data.hasOwnProperty('audienceURI')) {
        obj['audienceURI'] = ApiClient.convertToType(data['audienceURI'], 'String');
      }
    }
    return obj;
  }

  /**
   * X.509 Certificate.
   * @member {String} x509certificate
   */
  exports.prototype['x509certificate'] = undefined;
  /**
   * The ID of the account that owns this entity.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * ID of the SAML service.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Determines if this SAML connection active.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Identity Provider Entity ID.
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined;
  /**
   * Single Sign-On URL.
   * @member {String} signOnURL
   */
  exports.prototype['signOnURL'] = undefined;
  /**
   * Single Sign-Out URL.
   * @member {String} signOutURL
   */
  exports.prototype['signOutURL'] = undefined;
  /**
   * Metadata URL.
   * @member {String} metadataURL
   */
  exports.prototype['metadataURL'] = undefined;
  /**
   * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
   * @member {String} audienceURI
   */
  exports.prototype['audienceURI'] = undefined;



  return exports;
}));


