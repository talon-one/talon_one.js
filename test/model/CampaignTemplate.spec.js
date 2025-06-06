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
    instance = new TalonOne.CampaignTemplate();
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

  describe('CampaignTemplate', function() {
    it('should create an instance of CampaignTemplate', function() {
      // uncomment below and update the code to test CampaignTemplate
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be.a(TalonOne.CampaignTemplate);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property campaignAttributes (base name: "campaignAttributes")', function() {
      // uncomment below and update the code to test the property campaignAttributes
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property couponAttributes (base name: "couponAttributes")', function() {
      // uncomment below and update the code to test the property couponAttributes
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property activeRulesetId (base name: "activeRulesetId")', function() {
      // uncomment below and update the code to test the property activeRulesetId
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property couponSettings (base name: "couponSettings")', function() {
      // uncomment below and update the code to test the property couponSettings
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property couponReservationSettings (base name: "couponReservationSettings")', function() {
      // uncomment below and update the code to test the property couponReservationSettings
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property referralSettings (base name: "referralSettings")', function() {
      // uncomment below and update the code to test the property referralSettings
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property templateParams (base name: "templateParams")', function() {
      // uncomment below and update the code to test the property templateParams
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationsIds (base name: "applicationsIds")', function() {
      // uncomment below and update the code to test the property applicationsIds
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property campaignCollections (base name: "campaignCollections")', function() {
      // uncomment below and update the code to test the property campaignCollections
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property defaultCampaignGroupId (base name: "defaultCampaignGroupId")', function() {
      // uncomment below and update the code to test the property defaultCampaignGroupId
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property campaignType (base name: "campaignType")', function() {
      // uncomment below and update the code to test the property campaignType
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property validApplicationIds (base name: "validApplicationIds")', function() {
      // uncomment below and update the code to test the property validApplicationIds
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property isUserFavorite (base name: "isUserFavorite")', function() {
      // uncomment below and update the code to test the property isUserFavorite
      //var instane = new TalonOne.CampaignTemplate();
      //expect(instance).to.be();
    });

  });

}));
