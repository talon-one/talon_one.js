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
    instance = new TalonOne.LoyaltyProgramBalance();
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

  describe('LoyaltyProgramBalance', function() {
    it('should create an instance of LoyaltyProgramBalance', function() {
      // uncomment below and update the code to test LoyaltyProgramBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be.a(TalonOne.LoyaltyProgramBalance);
    });

    it('should have the property currentBalance (base name: "currentBalance")', function() {
      // uncomment below and update the code to test the property currentBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

    it('should have the property pendingBalance (base name: "pendingBalance")', function() {
      // uncomment below and update the code to test the property pendingBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

    it('should have the property expiredBalance (base name: "expiredBalance")', function() {
      // uncomment below and update the code to test the property expiredBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

    it('should have the property spentBalance (base name: "spentBalance")', function() {
      // uncomment below and update the code to test the property spentBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

    it('should have the property tentativeCurrentBalance (base name: "tentativeCurrentBalance")', function() {
      // uncomment below and update the code to test the property tentativeCurrentBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

    it('should have the property tentativePendingBalance (base name: "tentativePendingBalance")', function() {
      // uncomment below and update the code to test the property tentativePendingBalance
      //var instane = new TalonOne.LoyaltyProgramBalance();
      //expect(instance).to.be();
    });

  });

}));
