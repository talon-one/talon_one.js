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
    instance = new TalonOne.CampaignAnalytics();
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

  describe('CampaignAnalytics', function() {
    it('should create an instance of CampaignAnalytics', function() {
      // uncomment below and update the code to test CampaignAnalytics
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be.a(TalonOne.CampaignAnalytics);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignRevenue (base name: "campaignRevenue")', function() {
      // uncomment below and update the code to test the property campaignRevenue
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCampaignRevenue (base name: "totalCampaignRevenue")', function() {
      // uncomment below and update the code to test the property totalCampaignRevenue
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignRefund (base name: "campaignRefund")', function() {
      // uncomment below and update the code to test the property campaignRefund
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCampaignRefund (base name: "totalCampaignRefund")', function() {
      // uncomment below and update the code to test the property totalCampaignRefund
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignDiscountCosts (base name: "campaignDiscountCosts")', function() {
      // uncomment below and update the code to test the property campaignDiscountCosts
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCampaignDiscountCosts (base name: "totalCampaignDiscountCosts")', function() {
      // uncomment below and update the code to test the property totalCampaignDiscountCosts
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignRefundedDiscounts (base name: "campaignRefundedDiscounts")', function() {
      // uncomment below and update the code to test the property campaignRefundedDiscounts
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCampaignRefundedDiscounts (base name: "totalCampaignRefundedDiscounts")', function() {
      // uncomment below and update the code to test the property totalCampaignRefundedDiscounts
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property campaignFreeItems (base name: "campaignFreeItems")', function() {
      // uncomment below and update the code to test the property campaignFreeItems
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCampaignFreeItems (base name: "totalCampaignFreeItems")', function() {
      // uncomment below and update the code to test the property totalCampaignFreeItems
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property couponRedemptions (base name: "couponRedemptions")', function() {
      // uncomment below and update the code to test the property couponRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCouponRedemptions (base name: "totalCouponRedemptions")', function() {
      // uncomment below and update the code to test the property totalCouponRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property couponRolledbackRedemptions (base name: "couponRolledbackRedemptions")', function() {
      // uncomment below and update the code to test the property couponRolledbackRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCouponRolledbackRedemptions (base name: "totalCouponRolledbackRedemptions")', function() {
      // uncomment below and update the code to test the property totalCouponRolledbackRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property referralRedemptions (base name: "referralRedemptions")', function() {
      // uncomment below and update the code to test the property referralRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalReferralRedemptions (base name: "totalReferralRedemptions")', function() {
      // uncomment below and update the code to test the property totalReferralRedemptions
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property couponsCreated (base name: "couponsCreated")', function() {
      // uncomment below and update the code to test the property couponsCreated
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalCouponsCreated (base name: "totalCouponsCreated")', function() {
      // uncomment below and update the code to test the property totalCouponsCreated
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property referralsCreated (base name: "referralsCreated")', function() {
      // uncomment below and update the code to test the property referralsCreated
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalReferralsCreated (base name: "totalReferralsCreated")', function() {
      // uncomment below and update the code to test the property totalReferralsCreated
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property addedLoyaltyPoints (base name: "addedLoyaltyPoints")', function() {
      // uncomment below and update the code to test the property addedLoyaltyPoints
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalAddedLoyaltyPoints (base name: "totalAddedLoyaltyPoints")', function() {
      // uncomment below and update the code to test the property totalAddedLoyaltyPoints
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property deductedLoyaltyPoints (base name: "deductedLoyaltyPoints")', function() {
      // uncomment below and update the code to test the property deductedLoyaltyPoints
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

    it('should have the property totalDeductedLoyaltyPoints (base name: "totalDeductedLoyaltyPoints")', function() {
      // uncomment below and update the code to test the property totalDeductedLoyaltyPoints
      //var instane = new TalonOne.CampaignAnalytics();
      //expect(instance).to.be();
    });

  });

}));
