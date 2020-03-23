/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
    instance = new TalonOne.ErrorSource();
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

  describe('ErrorSource', function() {
    it('should create an instance of ErrorSource', function() {
      // uncomment below and update the code to test ErrorSource
      //var instane = new TalonOne.ErrorSource();
      //expect(instance).to.be.a(TalonOne.ErrorSource);
    });

    it('should have the property pointer (base name: "pointer")', function() {
      // uncomment below and update the code to test the property pointer
      //var instane = new TalonOne.ErrorSource();
      //expect(instance).to.be();
    });

    it('should have the property parameter (base name: "parameter")', function() {
      // uncomment below and update the code to test the property parameter
      //var instane = new TalonOne.ErrorSource();
      //expect(instance).to.be();
    });

    it('should have the property line (base name: "line")', function() {
      // uncomment below and update the code to test the property line
      //var instane = new TalonOne.ErrorSource();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new TalonOne.ErrorSource();
      //expect(instance).to.be();
    });

  });

}));
