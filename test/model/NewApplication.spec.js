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
    instance = new TalonOne.NewApplication();
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

  describe('NewApplication', function() {
    it('should create an instance of NewApplication', function() {
      // uncomment below and update the code to test NewApplication
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be.a(TalonOne.NewApplication);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property caseSensitivity (base name: "caseSensitivity")', function() {
      // uncomment below and update the code to test the property caseSensitivity
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property defaultDiscountScope (base name: "defaultDiscountScope")', function() {
      // uncomment below and update the code to test the property defaultDiscountScope
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property enableCascadingDiscounts (base name: "enableCascadingDiscounts")', function() {
      // uncomment below and update the code to test the property enableCascadingDiscounts
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property enableFlattenedCartItems (base name: "enableFlattenedCartItems")', function() {
      // uncomment below and update the code to test the property enableFlattenedCartItems
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property attributesSettings (base name: "attributesSettings")', function() {
      // uncomment below and update the code to test the property attributesSettings
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property sandbox (base name: "sandbox")', function() {
      // uncomment below and update the code to test the property sandbox
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property enablePartialDiscounts (base name: "enablePartialDiscounts")', function() {
      // uncomment below and update the code to test the property enablePartialDiscounts
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property defaultDiscountAdditionalCostPerItemScope (base name: "defaultDiscountAdditionalCostPerItemScope")', function() {
      // uncomment below and update the code to test the property defaultDiscountAdditionalCostPerItemScope
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new TalonOne.NewApplication();
      //expect(instance).to.be();
    });

  });

}));
