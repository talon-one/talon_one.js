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
    instance = new TalonOne.WebhookWithOutgoingIntegrationDetails();
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

  describe('WebhookWithOutgoingIntegrationDetails', function() {
    it('should create an instance of WebhookWithOutgoingIntegrationDetails', function() {
      // uncomment below and update the code to test WebhookWithOutgoingIntegrationDetails
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be.a(TalonOne.WebhookWithOutgoingIntegrationDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property applicationIds (base name: "applicationIds")', function() {
      // uncomment below and update the code to test the property applicationIds
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property verb (base name: "verb")', function() {
      // uncomment below and update the code to test the property verb
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property outgoingIntegrationTemplateId (base name: "outgoingIntegrationTemplateId")', function() {
      // uncomment below and update the code to test the property outgoingIntegrationTemplateId
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property outgoingIntegrationTypeId (base name: "outgoingIntegrationTypeId")', function() {
      // uncomment below and update the code to test the property outgoingIntegrationTypeId
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property outgoingIntegrationTypeName (base name: "outgoingIntegrationTypeName")', function() {
      // uncomment below and update the code to test the property outgoingIntegrationTypeName
      //var instane = new TalonOne.WebhookWithOutgoingIntegrationDetails();
      //expect(instance).to.be();
    });

  });

}));
