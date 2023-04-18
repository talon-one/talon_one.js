/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
    instance = new TalonOne.Application();
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

  describe('Application', function() {
    it('should create an instance of Application', function() {
      // uncomment below and update the code to test Application
      //var instane = new TalonOne.Application();
      //expect(instance).to.be.a(TalonOne.Application);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property caseSensitivity (base name: "caseSensitivity")', function() {
      // uncomment below and update the code to test the property caseSensitivity
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property campaignPriority (base name: "campaignPriority")', function() {
      // uncomment below and update the code to test the property campaignPriority
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property exclusiveCampaignsStrategy (base name: "exclusiveCampaignsStrategy")', function() {
      // uncomment below and update the code to test the property exclusiveCampaignsStrategy
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultDiscountScope (base name: "defaultDiscountScope")', function() {
      // uncomment below and update the code to test the property defaultDiscountScope
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property enableCascadingDiscounts (base name: "enableCascadingDiscounts")', function() {
      // uncomment below and update the code to test the property enableCascadingDiscounts
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property enableFlattenedCartItems (base name: "enableFlattenedCartItems")', function() {
      // uncomment below and update the code to test the property enableFlattenedCartItems
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property attributesSettings (base name: "attributesSettings")', function() {
      // uncomment below and update the code to test the property attributesSettings
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property sandbox (base name: "sandbox")', function() {
      // uncomment below and update the code to test the property sandbox
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property enablePartialDiscounts (base name: "enablePartialDiscounts")', function() {
      // uncomment below and update the code to test the property enablePartialDiscounts
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultDiscountAdditionalCostPerItemScope (base name: "defaultDiscountAdditionalCostPerItemScope")', function() {
      // uncomment below and update the code to test the property defaultDiscountAdditionalCostPerItemScope
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

    it('should have the property loyaltyPrograms (base name: "loyaltyPrograms")', function() {
      // uncomment below and update the code to test the property loyaltyPrograms
      //var instane = new TalonOne.Application();
      //expect(instance).to.be();
    });

  });

}));
