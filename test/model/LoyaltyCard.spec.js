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
    instance = new TalonOne.LoyaltyCard();
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

  describe('LoyaltyCard', function() {
    it('should create an instance of LoyaltyCard', function() {
      // uncomment below and update the code to test LoyaltyCard
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be.a(TalonOne.LoyaltyCard);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property programID (base name: "programID")', function() {
      // uncomment below and update the code to test the property programID
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property usersPerCardLimit (base name: "usersPerCardLimit")', function() {
      // uncomment below and update the code to test the property usersPerCardLimit
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property profiles (base name: "profiles")', function() {
      // uncomment below and update the code to test the property profiles
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property ledger (base name: "ledger")', function() {
      // uncomment below and update the code to test the property ledger
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property subledgers (base name: "subledgers")', function() {
      // uncomment below and update the code to test the property subledgers
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TalonOne.LoyaltyCard();
      //expect(instance).to.be();
    });

  });

}));
