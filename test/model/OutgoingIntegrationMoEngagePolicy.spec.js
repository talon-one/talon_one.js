/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
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
    instance = new TalonOne.OutgoingIntegrationMoEngagePolicy();
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

  describe('OutgoingIntegrationMoEngagePolicy', function() {
    it('should create an instance of OutgoingIntegrationMoEngagePolicy', function() {
      // uncomment below and update the code to test OutgoingIntegrationMoEngagePolicy
      //var instane = new TalonOne.OutgoingIntegrationMoEngagePolicy();
      //expect(instance).to.be.a(TalonOne.OutgoingIntegrationMoEngagePolicy);
    });

    it('should have the property baseUrl (base name: "baseUrl")', function() {
      // uncomment below and update the code to test the property baseUrl
      //var instane = new TalonOne.OutgoingIntegrationMoEngagePolicy();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new TalonOne.OutgoingIntegrationMoEngagePolicy();
      //expect(instance).to.be();
    });

    it('should have the property dataApiId (base name: "dataApiId")', function() {
      // uncomment below and update the code to test the property dataApiId
      //var instane = new TalonOne.OutgoingIntegrationMoEngagePolicy();
      //expect(instance).to.be();
    });

    it('should have the property dataApiKey (base name: "dataApiKey")', function() {
      // uncomment below and update the code to test the property dataApiKey
      //var instane = new TalonOne.OutgoingIntegrationMoEngagePolicy();
      //expect(instance).to.be();
    });

  });

}));
