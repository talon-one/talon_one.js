/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
    instance = new TalonOne.WebhookLogEntry();
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

  describe('WebhookLogEntry', function() {
    it('should create an instance of WebhookLogEntry', function() {
      // uncomment below and update the code to test WebhookLogEntry
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be.a(TalonOne.WebhookLogEntry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property integrationRequestUuid (base name: "integrationRequestUuid")', function() {
      // uncomment below and update the code to test the property integrationRequestUuid
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property webhookId (base name: "webhookId")', function() {
      // uncomment below and update the code to test the property webhookId
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property request (base name: "request")', function() {
      // uncomment below and update the code to test the property request
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property requestTime (base name: "requestTime")', function() {
      // uncomment below and update the code to test the property requestTime
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property responseTime (base name: "responseTime")', function() {
      // uncomment below and update the code to test the property responseTime
      //var instane = new TalonOne.WebhookLogEntry();
      //expect(instance).to.be();
    });

  });

}));
