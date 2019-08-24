/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalonOne);
  }
}(this, function(expect, TalonOne) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalonOne.EventType();
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

  describe('EventType', function() {
    it('should create an instance of EventType', function() {
      // uncomment below and update the code to test EventType
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be.a(TalonOne.EventType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property applicationIds (base name: "applicationIds")', function() {
      // uncomment below and update the code to test the property applicationIds
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mimeType")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property examplePayload (base name: "examplePayload")', function() {
      // uncomment below and update the code to test the property examplePayload
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property handlerLanguage (base name: "handlerLanguage")', function() {
      // uncomment below and update the code to test the property handlerLanguage
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property handler (base name: "handler")', function() {
      // uncomment below and update the code to test the property handler
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new TalonOne.EventType();
      //expect(instance).to.be();
    });

  });

}));
