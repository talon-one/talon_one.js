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
    instance = new TalonOne.CampaignStateNotification();
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

  describe('CampaignStateNotification', function() {
    it('should create an instance of CampaignStateNotification', function() {
      // uncomment below and update the code to test CampaignStateNotification
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be.a(TalonOne.CampaignStateNotification);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property activeRulesetId (base name: "activeRulesetId")', function() {
      // uncomment below and update the code to test the property activeRulesetId
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property couponSettings (base name: "couponSettings")', function() {
      // uncomment below and update the code to test the property couponSettings
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property referralSettings (base name: "referralSettings")', function() {
      // uncomment below and update the code to test the property referralSettings
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property campaignGroups (base name: "campaignGroups")', function() {
      // uncomment below and update the code to test the property campaignGroups
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property evaluationGroupId (base name: "evaluationGroupId")', function() {
      // uncomment below and update the code to test the property evaluationGroupId
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property linkedStoreIds (base name: "linkedStoreIds")', function() {
      // uncomment below and update the code to test the property linkedStoreIds
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property budgets (base name: "budgets")', function() {
      // uncomment below and update the code to test the property budgets
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property couponRedemptionCount (base name: "couponRedemptionCount")', function() {
      // uncomment below and update the code to test the property couponRedemptionCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property referralRedemptionCount (base name: "referralRedemptionCount")', function() {
      // uncomment below and update the code to test the property referralRedemptionCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property discountCount (base name: "discountCount")', function() {
      // uncomment below and update the code to test the property discountCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property discountEffectCount (base name: "discountEffectCount")', function() {
      // uncomment below and update the code to test the property discountEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property couponCreationCount (base name: "couponCreationCount")', function() {
      // uncomment below and update the code to test the property couponCreationCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property customEffectCount (base name: "customEffectCount")', function() {
      // uncomment below and update the code to test the property customEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property referralCreationCount (base name: "referralCreationCount")', function() {
      // uncomment below and update the code to test the property referralCreationCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property addFreeItemEffectCount (base name: "addFreeItemEffectCount")', function() {
      // uncomment below and update the code to test the property addFreeItemEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property awardedGiveawaysCount (base name: "awardedGiveawaysCount")', function() {
      // uncomment below and update the code to test the property awardedGiveawaysCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property createdLoyaltyPointsCount (base name: "createdLoyaltyPointsCount")', function() {
      // uncomment below and update the code to test the property createdLoyaltyPointsCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property createdLoyaltyPointsEffectCount (base name: "createdLoyaltyPointsEffectCount")', function() {
      // uncomment below and update the code to test the property createdLoyaltyPointsEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property redeemedLoyaltyPointsCount (base name: "redeemedLoyaltyPointsCount")', function() {
      // uncomment below and update the code to test the property redeemedLoyaltyPointsCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property redeemedLoyaltyPointsEffectCount (base name: "redeemedLoyaltyPointsEffectCount")', function() {
      // uncomment below and update the code to test the property redeemedLoyaltyPointsEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property callApiEffectCount (base name: "callApiEffectCount")', function() {
      // uncomment below and update the code to test the property callApiEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property reservecouponEffectCount (base name: "reservecouponEffectCount")', function() {
      // uncomment below and update the code to test the property reservecouponEffectCount
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "lastActivity")', function() {
      // uncomment below and update the code to test the property lastActivity
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

    it('should have the property frontendState (base name: "frontendState")', function() {
      // uncomment below and update the code to test the property frontendState
      //var instane = new TalonOne.CampaignStateNotification();
      //expect(instance).to.be();
    });

  });

}));
