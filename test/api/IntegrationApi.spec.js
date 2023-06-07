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
    instance = new TalonOne.IntegrationApi();
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

  describe('IntegrationApi', function() {
    describe('createAudienceV2', function() {
      it('should call createAudienceV2 successfully', function(done) {
        //uncomment below and update the code to test createAudienceV2
        //instance.createAudienceV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCouponReservation', function() {
      it('should call createCouponReservation successfully', function(done) {
        //uncomment below and update the code to test createCouponReservation
        //instance.createCouponReservation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createReferral', function() {
      it('should call createReferral successfully', function(done) {
        //uncomment below and update the code to test createReferral
        //instance.createReferral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createReferralsForMultipleAdvocates', function() {
      it('should call createReferralsForMultipleAdvocates successfully', function(done) {
        //uncomment below and update the code to test createReferralsForMultipleAdvocates
        //instance.createReferralsForMultipleAdvocates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAudienceMembershipsV2', function() {
      it('should call deleteAudienceMembershipsV2 successfully', function(done) {
        //uncomment below and update the code to test deleteAudienceMembershipsV2
        //instance.deleteAudienceMembershipsV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAudienceV2', function() {
      it('should call deleteAudienceV2 successfully', function(done) {
        //uncomment below and update the code to test deleteAudienceV2
        //instance.deleteAudienceV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCouponReservation', function() {
      it('should call deleteCouponReservation successfully', function(done) {
        //uncomment below and update the code to test deleteCouponReservation
        //instance.deleteCouponReservation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerData', function() {
      it('should call deleteCustomerData successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerData
        //instance.deleteCustomerData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInventory', function() {
      it('should call getCustomerInventory successfully', function(done) {
        //uncomment below and update the code to test getCustomerInventory
        //instance.getCustomerInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerSession', function() {
      it('should call getCustomerSession successfully', function(done) {
        //uncomment below and update the code to test getCustomerSession
        //instance.getCustomerSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyBalances', function() {
      it('should call getLoyaltyBalances successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyBalances
        //instance.getLoyaltyBalances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyCardBalances', function() {
      it('should call getLoyaltyCardBalances successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyCardBalances
        //instance.getLoyaltyCardBalances(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyCardTransactions', function() {
      it('should call getLoyaltyCardTransactions successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyCardTransactions
        //instance.getLoyaltyCardTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoyaltyProgramProfileTransactions', function() {
      it('should call getLoyaltyProgramProfileTransactions successfully', function(done) {
        //uncomment below and update the code to test getLoyaltyProgramProfileTransactions
        //instance.getLoyaltyProgramProfileTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReservedCustomers', function() {
      it('should call getReservedCustomers successfully', function(done) {
        //uncomment below and update the code to test getReservedCustomers
        //instance.getReservedCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('linkLoyaltyCardToProfile', function() {
      it('should call linkLoyaltyCardToProfile successfully', function(done) {
        //uncomment below and update the code to test linkLoyaltyCardToProfile
        //instance.linkLoyaltyCardToProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reopenCustomerSession', function() {
      it('should call reopenCustomerSession successfully', function(done) {
        //uncomment below and update the code to test reopenCustomerSession
        //instance.reopenCustomerSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('returnCartItems', function() {
      it('should call returnCartItems successfully', function(done) {
        //uncomment below and update the code to test returnCartItems
        //instance.returnCartItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncCatalog', function() {
      it('should call syncCatalog successfully', function(done) {
        //uncomment below and update the code to test syncCatalog
        //instance.syncCatalog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackEventV2', function() {
      it('should call trackEventV2 successfully', function(done) {
        //uncomment below and update the code to test trackEventV2
        //instance.trackEventV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAudienceCustomersAttributes', function() {
      it('should call updateAudienceCustomersAttributes successfully', function(done) {
        //uncomment below and update the code to test updateAudienceCustomersAttributes
        //instance.updateAudienceCustomersAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAudienceV2', function() {
      it('should call updateAudienceV2 successfully', function(done) {
        //uncomment below and update the code to test updateAudienceV2
        //instance.updateAudienceV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerProfileAudiences', function() {
      it('should call updateCustomerProfileAudiences successfully', function(done) {
        //uncomment below and update the code to test updateCustomerProfileAudiences
        //instance.updateCustomerProfileAudiences(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerProfileV2', function() {
      it('should call updateCustomerProfileV2 successfully', function(done) {
        //uncomment below and update the code to test updateCustomerProfileV2
        //instance.updateCustomerProfileV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerProfilesV2', function() {
      it('should call updateCustomerProfilesV2 successfully', function(done) {
        //uncomment below and update the code to test updateCustomerProfilesV2
        //instance.updateCustomerProfilesV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerSessionV2', function() {
      it('should call updateCustomerSessionV2 successfully', function(done) {
        //uncomment below and update the code to test updateCustomerSessionV2
        //instance.updateCustomerSessionV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
