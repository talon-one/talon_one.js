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
    instance = new TalonOne.Effect();
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

  describe('Effect', function() {
    it('should create an instance of Effect', function() {
      // uncomment below and update the code to test Effect
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be.a(TalonOne.Effect);
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property rulesetId (base name: "rulesetId")', function() {
      // uncomment below and update the code to test the property rulesetId
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property ruleIndex (base name: "ruleIndex")', function() {
      // uncomment below and update the code to test the property ruleIndex
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property ruleName (base name: "ruleName")', function() {
      // uncomment below and update the code to test the property ruleName
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property effectType (base name: "effectType")', function() {
      // uncomment below and update the code to test the property effectType
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property triggeredByCoupon (base name: "triggeredByCoupon")', function() {
      // uncomment below and update the code to test the property triggeredByCoupon
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property triggeredForCatalogItem (base name: "triggeredForCatalogItem")', function() {
      // uncomment below and update the code to test the property triggeredForCatalogItem
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property conditionIndex (base name: "conditionIndex")', function() {
      // uncomment below and update the code to test the property conditionIndex
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property evaluationGroupID (base name: "evaluationGroupID")', function() {
      // uncomment below and update the code to test the property evaluationGroupID
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property evaluationGroupMode (base name: "evaluationGroupMode")', function() {
      // uncomment below and update the code to test the property evaluationGroupMode
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property campaignRevisionId (base name: "campaignRevisionId")', function() {
      // uncomment below and update the code to test the property campaignRevisionId
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property campaignRevisionVersionId (base name: "campaignRevisionVersionId")', function() {
      // uncomment below and update the code to test the property campaignRevisionVersionId
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

    it('should have the property props (base name: "props")', function() {
      // uncomment below and update the code to test the property props
      //var instane = new TalonOne.Effect();
      //expect(instance).to.be();
    });

  });

}));
