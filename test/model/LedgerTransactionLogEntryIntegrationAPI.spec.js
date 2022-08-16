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
    instance = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
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

  describe('LedgerTransactionLogEntryIntegrationAPI', function() {
    it('should create an instance of LedgerTransactionLogEntryIntegrationAPI', function() {
      // uncomment below and update the code to test LedgerTransactionLogEntryIntegrationAPI
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be.a(TalonOne.LedgerTransactionLogEntryIntegrationAPI);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property programId (base name: "programId")', function() {
      // uncomment below and update the code to test the property programId
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property customerSessionId (base name: "customerSessionId")', function() {
      // uncomment below and update the code to test the property customerSessionId
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiryDate")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property subledgerId (base name: "subledgerId")', function() {
      // uncomment below and update the code to test the property subledgerId
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property rulesetId (base name: "rulesetId")', function() {
      // uncomment below and update the code to test the property rulesetId
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

    it('should have the property ruleName (base name: "ruleName")', function() {
      // uncomment below and update the code to test the property ruleName
      //var instane = new TalonOne.LedgerTransactionLogEntryIntegrationAPI();
      //expect(instance).to.be();
    });

  });

}));