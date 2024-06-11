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
    instance = new TalonOne.ApplicationCampaignAnalytics();
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

  describe('ApplicationCampaignAnalytics', function() {
    it('should create an instance of ApplicationCampaignAnalytics', function() {
      // uncomment below and update the code to test ApplicationCampaignAnalytics
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be.a(TalonOne.ApplicationCampaignAnalytics);
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignName (base name: "campaignName")', function() {
      // uncomment below and update the code to test the property campaignName
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignTags (base name: "campaignTags")', function() {
      // uncomment below and update the code to test the property campaignTags
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignState (base name: "campaignState")', function() {
      // uncomment below and update the code to test the property campaignState
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignActiveRulesetId (base name: "campaignActiveRulesetId")', function() {
      // uncomment below and update the code to test the property campaignActiveRulesetId
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignStartTime (base name: "campaignStartTime")', function() {
      // uncomment below and update the code to test the property campaignStartTime
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignEndTime (base name: "campaignEndTime")', function() {
      // uncomment below and update the code to test the property campaignEndTime
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalRevenue (base name: "totalRevenue")', function() {
      // uncomment below and update the code to test the property totalRevenue
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property sessionsCount (base name: "sessionsCount")', function() {
      // uncomment below and update the code to test the property sessionsCount
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property avgItemsPerSession (base name: "avgItemsPerSession")', function() {
      // uncomment below and update the code to test the property avgItemsPerSession
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property avgSessionValue (base name: "avgSessionValue")', function() {
      // uncomment below and update the code to test the property avgSessionValue
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscounts (base name: "totalDiscounts")', function() {
      // uncomment below and update the code to test the property totalDiscounts
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property couponsCount (base name: "couponsCount")', function() {
      // uncomment below and update the code to test the property couponsCount
      //var instane = new TalonOne.ApplicationCampaignAnalytics();
      //expect(instance).to.be();
    });

  });

}));