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
    instance = new TalonOne.NewCampaignTemplate();
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

  describe('NewCampaignTemplate', function() {
    it('should create an instance of NewCampaignTemplate', function() {
      // uncomment below and update the code to test NewCampaignTemplate
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be.a(TalonOne.NewCampaignTemplate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property campaignAttributes (base name: "campaignAttributes")', function() {
      // uncomment below and update the code to test the property campaignAttributes
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property couponAttributes (base name: "couponAttributes")', function() {
      // uncomment below and update the code to test the property couponAttributes
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property couponSettings (base name: "couponSettings")', function() {
      // uncomment below and update the code to test the property couponSettings
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property referralSettings (base name: "referralSettings")', function() {
      // uncomment below and update the code to test the property referralSettings
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property templateParams (base name: "templateParams")', function() {
      // uncomment below and update the code to test the property templateParams
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property campaignCollections (base name: "campaignCollections")', function() {
      // uncomment below and update the code to test the property campaignCollections
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

    it('should have the property defaultCampaignGroupId (base name: "defaultCampaignGroupId")', function() {
      // uncomment below and update the code to test the property defaultCampaignGroupId
      //var instane = new TalonOne.NewCampaignTemplate();
      //expect(instance).to.be();
    });

  });

}));
