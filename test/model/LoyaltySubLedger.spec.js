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
    instance = new TalonOne.LoyaltySubLedger();
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

  describe('LoyaltySubLedger', function() {
    it('should create an instance of LoyaltySubLedger', function() {
      // uncomment below and update the code to test LoyaltySubLedger
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be.a(TalonOne.LoyaltySubLedger);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property totalActivePoints (base name: "totalActivePoints")', function() {
      // uncomment below and update the code to test the property totalActivePoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property totalPendingPoints (base name: "totalPendingPoints")', function() {
      // uncomment below and update the code to test the property totalPendingPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property totalSpentPoints (base name: "totalSpentPoints")', function() {
      // uncomment below and update the code to test the property totalSpentPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property totalExpiredPoints (base name: "totalExpiredPoints")', function() {
      // uncomment below and update the code to test the property totalExpiredPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property expiringPoints (base name: "expiringPoints")', function() {
      // uncomment below and update the code to test the property expiringPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property activePoints (base name: "activePoints")', function() {
      // uncomment below and update the code to test the property activePoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property pendingPoints (base name: "pendingPoints")', function() {
      // uncomment below and update the code to test the property pendingPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property expiredPoints (base name: "expiredPoints")', function() {
      // uncomment below and update the code to test the property expiredPoints
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

    it('should have the property currentTier (base name: "currentTier")', function() {
      // uncomment below and update the code to test the property currentTier
      //var instane = new TalonOne.LoyaltySubLedger();
      //expect(instance).to.be();
    });

  });

}));
