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
    instance = new TalonOne.StrikethroughLabelingNotification();
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

  describe('StrikethroughLabelingNotification', function() {
    it('should create an instance of StrikethroughLabelingNotification', function() {
      // uncomment below and update the code to test StrikethroughLabelingNotification
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be.a(TalonOne.StrikethroughLabelingNotification);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property validFrom (base name: "validFrom")', function() {
      // uncomment below and update the code to test the property validFrom
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property currentBatch (base name: "currentBatch")', function() {
      // uncomment below and update the code to test the property currentBatch
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property totalBatches (base name: "totalBatches")', function() {
      // uncomment below and update the code to test the property totalBatches
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

    it('should have the property changedItems (base name: "changedItems")', function() {
      // uncomment below and update the code to test the property changedItems
      //var instane = new TalonOne.StrikethroughLabelingNotification();
      //expect(instance).to.be();
    });

  });

}));
