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
    instance = new TalonOne.CustomerSessionV2();
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

  describe('CustomerSessionV2', function() {
    it('should create an instance of CustomerSessionV2', function() {
      // uncomment below and update the code to test CustomerSessionV2
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be.a(TalonOne.CustomerSessionV2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property integrationId (base name: "integrationId")', function() {
      // uncomment below and update the code to test the property integrationId
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property profileId (base name: "profileId")', function() {
      // uncomment below and update the code to test the property profileId
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property storeIntegrationId (base name: "storeIntegrationId")', function() {
      // uncomment below and update the code to test the property storeIntegrationId
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property evaluableCampaignIds (base name: "evaluableCampaignIds")', function() {
      // uncomment below and update the code to test the property evaluableCampaignIds
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property couponCodes (base name: "couponCodes")', function() {
      // uncomment below and update the code to test the property couponCodes
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property referralCode (base name: "referralCode")', function() {
      // uncomment below and update the code to test the property referralCode
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property loyaltyCards (base name: "loyaltyCards")', function() {
      // uncomment below and update the code to test the property loyaltyCards
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property cartItems (base name: "cartItems")', function() {
      // uncomment below and update the code to test the property cartItems
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property additionalCosts (base name: "additionalCosts")', function() {
      // uncomment below and update the code to test the property additionalCosts
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property identifiers (base name: "identifiers")', function() {
      // uncomment below and update the code to test the property identifiers
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property firstSession (base name: "firstSession")', function() {
      // uncomment below and update the code to test the property firstSession
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property cartItemTotal (base name: "cartItemTotal")', function() {
      // uncomment below and update the code to test the property cartItemTotal
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property additionalCostTotal (base name: "additionalCostTotal")', function() {
      // uncomment below and update the code to test the property additionalCostTotal
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

    it('should have the property closurePrediction (base name: "closurePrediction")', function() {
      // uncomment below and update the code to test the property closurePrediction
      //var instane = new TalonOne.CustomerSessionV2();
      //expect(instance).to.be();
    });

  });

}));
