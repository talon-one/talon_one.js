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
    instance = new TalonOne.Account();
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

  describe('Account', function() {
    it('should create an instance of Account', function() {
      // uncomment below and update the code to test Account
      //var instane = new TalonOne.Account();
      //expect(instance).to.be.a(TalonOne.Account);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property domainName (base name: "domainName")', function() {
      // uncomment below and update the code to test the property domainName
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property billingEmail (base name: "billingEmail")', function() {
      // uncomment below and update the code to test the property billingEmail
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property planName (base name: "planName")', function() {
      // uncomment below and update the code to test the property planName
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property planExpires (base name: "planExpires")', function() {
      // uncomment below and update the code to test the property planExpires
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property applicationLimit (base name: "applicationLimit")', function() {
      // uncomment below and update the code to test the property applicationLimit
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property userLimit (base name: "userLimit")', function() {
      // uncomment below and update the code to test the property userLimit
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property campaignLimit (base name: "campaignLimit")', function() {
      // uncomment below and update the code to test the property campaignLimit
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property apiLimit (base name: "apiLimit")', function() {
      // uncomment below and update the code to test the property apiLimit
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property applicationCount (base name: "applicationCount")', function() {
      // uncomment below and update the code to test the property applicationCount
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property userCount (base name: "userCount")', function() {
      // uncomment below and update the code to test the property userCount
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property campaignsActiveCount (base name: "campaignsActiveCount")', function() {
      // uncomment below and update the code to test the property campaignsActiveCount
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property campaignsInactiveCount (base name: "campaignsInactiveCount")', function() {
      // uncomment below and update the code to test the property campaignsInactiveCount
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TalonOne.Account();
      //expect(instance).to.be();
    });

  });

}));
