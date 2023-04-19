/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
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
    instance = new TalonOne.NewAudience();
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

  describe('NewAudience', function() {
    it('should create an instance of NewAudience', function() {
      // uncomment below and update the code to test NewAudience
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be.a(TalonOne.NewAudience);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property sandbox (base name: "sandbox")', function() {
      // uncomment below and update the code to test the property sandbox
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property integration (base name: "integration")', function() {
      // uncomment below and update the code to test the property integration
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property integrationId (base name: "integrationId")', function() {
      // uncomment below and update the code to test the property integrationId
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property createdIn3rdParty (base name: "createdIn3rdParty")', function() {
      // uncomment below and update the code to test the property createdIn3rdParty
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "lastUpdate")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instane = new TalonOne.NewAudience();
      //expect(instance).to.be();
    });

  });

}));
