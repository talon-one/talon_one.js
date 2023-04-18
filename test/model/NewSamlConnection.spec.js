/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalonOne);
  }
}(this, function(expect, TalonOne) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalonOne.NewSamlConnection();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NewSamlConnection', function() {
    it('should create an instance of NewSamlConnection', function() {
      // uncomment below and update the code to test NewSamlConnection
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be.a(TalonOne.NewSamlConnection);
    });

    it('should have the property x509certificate (base name: "x509certificate")', function() {
      // uncomment below and update the code to test the property x509certificate
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property signOnURL (base name: "signOnURL")', function() {
      // uncomment below and update the code to test the property signOnURL
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property signOutURL (base name: "signOutURL")', function() {
      // uncomment below and update the code to test the property signOutURL
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property metadataURL (base name: "metadataURL")', function() {
      // uncomment below and update the code to test the property metadataURL
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

    it('should have the property audienceURI (base name: "audienceURI")', function() {
      // uncomment below and update the code to test the property audienceURI
      //var instane = new TalonOne.NewSamlConnection();
      //expect(instance).to.be();
    });

  });

}));
