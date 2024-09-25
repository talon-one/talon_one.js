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
    instance = new TalonOne.UpdateLoyaltyProgram();
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

  describe('UpdateLoyaltyProgram', function() {
    it('should create an instance of UpdateLoyaltyProgram', function() {
      // uncomment below and update the code to test UpdateLoyaltyProgram
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be.a(TalonOne.UpdateLoyaltyProgram);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property subscribedApplications (base name: "subscribedApplications")', function() {
      // uncomment below and update the code to test the property subscribedApplications
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property defaultValidity (base name: "defaultValidity")', function() {
      // uncomment below and update the code to test the property defaultValidity
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property defaultPending (base name: "defaultPending")', function() {
      // uncomment below and update the code to test the property defaultPending
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property allowSubledger (base name: "allowSubledger")', function() {
      // uncomment below and update the code to test the property allowSubledger
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property usersPerCardLimit (base name: "usersPerCardLimit")', function() {
      // uncomment below and update the code to test the property usersPerCardLimit
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property sandbox (base name: "sandbox")', function() {
      // uncomment below and update the code to test the property sandbox
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property programJoinPolicy (base name: "programJoinPolicy")', function() {
      // uncomment below and update the code to test the property programJoinPolicy
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property tiersExpirationPolicy (base name: "tiersExpirationPolicy")', function() {
      // uncomment below and update the code to test the property tiersExpirationPolicy
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property tierCycleStartDate (base name: "tierCycleStartDate")', function() {
      // uncomment below and update the code to test the property tierCycleStartDate
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property tiersExpireIn (base name: "tiersExpireIn")', function() {
      // uncomment below and update the code to test the property tiersExpireIn
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property tiersDowngradePolicy (base name: "tiersDowngradePolicy")', function() {
      // uncomment below and update the code to test the property tiersDowngradePolicy
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property cardCodeSettings (base name: "cardCodeSettings")', function() {
      // uncomment below and update the code to test the property cardCodeSettings
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

    it('should have the property tiers (base name: "tiers")', function() {
      // uncomment below and update the code to test the property tiers
      //var instane = new TalonOne.UpdateLoyaltyProgram();
      //expect(instance).to.be();
    });

  });

}));
