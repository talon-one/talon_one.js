/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
    instance = new TalonOne.IntegrationStateV2();
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

  describe('IntegrationStateV2', function() {
    it('should create an instance of IntegrationStateV2', function() {
      // uncomment below and update the code to test IntegrationStateV2
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be.a(TalonOne.IntegrationStateV2);
    });

    it('should have the property customerSession (base name: "customerSession")', function() {
      // uncomment below and update the code to test the property customerSession
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property customerProfile (base name: "customerProfile")', function() {
      // uncomment below and update the code to test the property customerProfile
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property loyalty (base name: "loyalty")', function() {
      // uncomment below and update the code to test the property loyalty
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property referral (base name: "referral")', function() {
      // uncomment below and update the code to test the property referral
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property triggeredCampaigns (base name: "triggeredCampaigns")', function() {
      // uncomment below and update the code to test the property triggeredCampaigns
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property effects (base name: "effects")', function() {
      // uncomment below and update the code to test the property effects
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property ruleFailureReasons (base name: "ruleFailureReasons")', function() {
      // uncomment below and update the code to test the property ruleFailureReasons
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property createdCoupons (base name: "createdCoupons")', function() {
      // uncomment below and update the code to test the property createdCoupons
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

    it('should have the property createdReferrals (base name: "createdReferrals")', function() {
      // uncomment below and update the code to test the property createdReferrals
      //var instane = new TalonOne.IntegrationStateV2();
      //expect(instance).to.be();
    });

  });

}));
