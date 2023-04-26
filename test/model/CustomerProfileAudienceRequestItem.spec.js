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
    instance = new TalonOne.CustomerProfileAudienceRequestItem();
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

  describe('CustomerProfileAudienceRequestItem', function() {
    it('should create an instance of CustomerProfileAudienceRequestItem', function() {
      // uncomment below and update the code to test CustomerProfileAudienceRequestItem
      //var instane = new TalonOne.CustomerProfileAudienceRequestItem();
      //expect(instance).to.be.a(TalonOne.CustomerProfileAudienceRequestItem);
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new TalonOne.CustomerProfileAudienceRequestItem();
      //expect(instance).to.be();
    });

    it('should have the property profileIntegrationId (base name: "profileIntegrationId")', function() {
      // uncomment below and update the code to test the property profileIntegrationId
      //var instane = new TalonOne.CustomerProfileAudienceRequestItem();
      //expect(instance).to.be();
    });

    it('should have the property audienceId (base name: "audienceId")', function() {
      // uncomment below and update the code to test the property audienceId
      //var instane = new TalonOne.CustomerProfileAudienceRequestItem();
      //expect(instance).to.be();
    });

  });

}));
