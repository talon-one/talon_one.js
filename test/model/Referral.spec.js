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
    instance = new TalonOne.Referral();
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

  describe('Referral', function() {
    it('should create an instance of Referral', function() {
      // uncomment below and update the code to test Referral
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be.a(TalonOne.Referral);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiryDate")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property usageLimit (base name: "usageLimit")', function() {
      // uncomment below and update the code to test the property usageLimit
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property advocateProfileIntegrationId (base name: "advocateProfileIntegrationId")', function() {
      // uncomment below and update the code to test the property advocateProfileIntegrationId
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property friendProfileIntegrationId (base name: "friendProfileIntegrationId")', function() {
      // uncomment below and update the code to test the property friendProfileIntegrationId
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property importId (base name: "importId")', function() {
      // uncomment below and update the code to test the property importId
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property usageCounter (base name: "usageCounter")', function() {
      // uncomment below and update the code to test the property usageCounter
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batchId")', function() {
      // uncomment below and update the code to test the property batchId
      //var instane = new TalonOne.Referral();
      //expect(instance).to.be();
    });

  });

}));
