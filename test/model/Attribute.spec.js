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
    instance = new TalonOne.Attribute();
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

  describe('Attribute', function() {
    it('should create an instance of Attribute', function() {
      // uncomment below and update the code to test Attribute
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be.a(TalonOne.Attribute);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property suggestions (base name: "suggestions")', function() {
      // uncomment below and update the code to test the property suggestions
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property hasAllowedList (base name: "hasAllowedList")', function() {
      // uncomment below and update the code to test the property hasAllowedList
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property restrictedBySuggestions (base name: "restrictedBySuggestions")', function() {
      // uncomment below and update the code to test the property restrictedBySuggestions
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property editable (base name: "editable")', function() {
      // uncomment below and update the code to test the property editable
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property subscribedApplicationsIds (base name: "subscribedApplicationsIds")', function() {
      // uncomment below and update the code to test the property subscribedApplicationsIds
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property subscribedCatalogsIds (base name: "subscribedCatalogsIds")', function() {
      // uncomment below and update the code to test the property subscribedCatalogsIds
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property allowedSubscriptions (base name: "allowedSubscriptions")', function() {
      // uncomment below and update the code to test the property allowedSubscriptions
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

    it('should have the property eventTypeId (base name: "eventTypeId")', function() {
      // uncomment below and update the code to test the property eventTypeId
      //var instane = new TalonOne.Attribute();
      //expect(instance).to.be();
    });

  });

}));
