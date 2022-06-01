/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
    instance = new TalonOne.ApplicationCustomer();
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

  describe('ApplicationCustomer', function() {
    it('should create an instance of ApplicationCustomer', function() {
      // uncomment below and update the code to test ApplicationCustomer
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be.a(TalonOne.ApplicationCustomer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property integrationId (base name: "integrationId")', function() {
      // uncomment below and update the code to test the property integrationId
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property closedSessions (base name: "closedSessions")', function() {
      // uncomment below and update the code to test the property closedSessions
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property totalSales (base name: "totalSales")', function() {
      // uncomment below and update the code to test the property totalSales
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property loyaltyMemberships (base name: "loyaltyMemberships")', function() {
      // uncomment below and update the code to test the property loyaltyMemberships
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property audienceMemberships (base name: "audienceMemberships")', function() {
      // uncomment below and update the code to test the property audienceMemberships
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "lastActivity")', function() {
      // uncomment below and update the code to test the property lastActivity
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

    it('should have the property advocateIntegrationId (base name: "advocateIntegrationId")', function() {
      // uncomment below and update the code to test the property advocateIntegrationId
      //var instane = new TalonOne.ApplicationCustomer();
      //expect(instance).to.be();
    });

  });

}));
