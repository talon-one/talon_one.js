"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("../model/Coupon"));

var _CouponReservations = _interopRequireDefault(require("../model/CouponReservations"));

var _CustomerInventory = _interopRequireDefault(require("../model/CustomerInventory"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _IntegrationRequest = _interopRequireDefault(require("../model/IntegrationRequest"));

var _IntegrationState = _interopRequireDefault(require("../model/IntegrationState"));

var _IntegrationStateV = _interopRequireDefault(require("../model/IntegrationStateV2"));

var _NewCustomerProfile = _interopRequireDefault(require("../model/NewCustomerProfile"));

var _NewCustomerSession = _interopRequireDefault(require("../model/NewCustomerSession"));

var _NewEvent = _interopRequireDefault(require("../model/NewEvent"));

var _NewReferral = _interopRequireDefault(require("../model/NewReferral"));

var _Referral = _interopRequireDefault(require("../model/Referral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Integration service.
* @module api/IntegrationApi
* @version 4.0.0
*/
var IntegrationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IntegrationApi. 
  * @alias module:api/IntegrationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IntegrationApi(apiClient) {
    _classCallCheck(this, IntegrationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a new coupon reservation
   * Creates a coupon reservation for all passed customer profiles on this couponID 
   * @param {String} couponValue The value of a coupon
   * @param {module:model/CouponReservations} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
   */


  _createClass(IntegrationApi, [{
    key: "createCouponReservationWithHttpInfo",
    value: function createCouponReservationWithHttpInfo(couponValue, body) {
      var postBody = body; // verify the required parameter 'couponValue' is set

      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling createCouponReservation");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCouponReservation");
      }

      var pathParams = {
        'couponValue': couponValue
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Coupon["default"];
      return this.apiClient.callApi('/v1/coupon_reservations/{couponValue}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a new coupon reservation
     * Creates a coupon reservation for all passed customer profiles on this couponID 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */

  }, {
    key: "createCouponReservation",
    value: function createCouponReservation(couponValue, body) {
      return this.createCouponReservationWithHttpInfo(couponValue, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile. 
     * @param {module:model/NewReferral} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Referral} and HTTP response
     */

  }, {
    key: "createReferralWithHttpInfo",
    value: function createReferralWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createReferral");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Referral["default"];
      return this.apiClient.callApi('/v1/referrals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile. 
     * @param {module:model/NewReferral} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Referral}
     */

  }, {
    key: "createReferral",
    value: function createReferral(body) {
      return this.createReferralWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete coupon reservations
     * Removes all passed customer profiles reservation from this coupon 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCouponReservationWithHttpInfo",
    value: function deleteCouponReservationWithHttpInfo(couponValue, body) {
      var postBody = body; // verify the required parameter 'couponValue' is set

      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling deleteCouponReservation");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteCouponReservation");
      }

      var pathParams = {
        'couponValue': couponValue
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/coupon_reservations/{couponValue}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete coupon reservations
     * Removes all passed customer profiles reservation from this coupon 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCouponReservation",
    value: function deleteCouponReservation(couponValue, body) {
      return this.deleteCouponReservationWithHttpInfo(couponValue, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCustomerDataWithHttpInfo",
    value: function deleteCustomerDataWithHttpInfo(integrationId) {
      var postBody = null; // verify the required parameter 'integrationId' is set

      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteCustomerData");
      }

      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/customer_data/{integrationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCustomerData",
    value: function deleteCustomerData(integrationId) {
      return this.deleteCustomerDataWithHttpInfo(integrationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an inventory of all data associated with a specific customer profile.
     * Get information regarding entities referencing this customer profile's integrationId. Currently we support customer profile information and referral codes. In the future, this will be expanded with coupon codes and loyalty points.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.profile optional flag to decide if you would like customer profile information in the response
     * @param {Object} opts.referrals optional flag to decide if you would like referral information in the response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerInventory} and HTTP response
     */

  }, {
    key: "getCustomerInventoryWithHttpInfo",
    value: function getCustomerInventoryWithHttpInfo(integrationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'integrationId' is set

      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getCustomerInventory");
      }

      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {
        'profile': opts['profile'],
        'referrals': opts['referrals']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerInventory["default"];
      return this.apiClient.callApi('/v1/customer_profiles/{integrationId}/inventory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an inventory of all data associated with a specific customer profile.
     * Get information regarding entities referencing this customer profile's integrationId. Currently we support customer profile information and referral codes. In the future, this will be expanded with coupon codes and loyalty points.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.profile optional flag to decide if you would like customer profile information in the response
     * @param {Object} opts.referrals optional flag to decide if you would like referral information in the response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerInventory}
     */

  }, {
    key: "getCustomerInventory",
    value: function getCustomerInventory(integrationId, opts) {
      return this.getCustomerInventoryWithHttpInfo(integrationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all valid reserved coupons
     * Returns all coupons this user is subscribed to that are valid and usable 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getReservedCouponsWithHttpInfo",
    value: function getReservedCouponsWithHttpInfo(integrationId) {
      var postBody = null; // verify the required parameter 'integrationId' is set

      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getReservedCoupons");
      }

      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/v1/coupon_reservations/coupons/{integrationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all valid reserved coupons
     * Returns all coupons this user is subscribed to that are valid and usable 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getReservedCoupons",
    value: function getReservedCoupons(integrationId) {
      return this.getReservedCouponsWithHttpInfo(integrationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved 
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "getReservedCustomersWithHttpInfo",
    value: function getReservedCustomersWithHttpInfo(couponValue) {
      var postBody = null; // verify the required parameter 'couponValue' is set

      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling getReservedCustomers");
      }

      var pathParams = {
        'couponValue': couponValue
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/coupon_reservations/customerprofiles/{couponValue}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved 
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "getReservedCustomers",
    value: function getReservedCustomers(couponValue) {
      return this.getReservedCustomersWithHttpInfo(couponValue).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {module:model/NewEvent} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "trackEventWithHttpInfo",
    value: function trackEventWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling trackEvent");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationState["default"];
      return this.apiClient.callApi('/v1/events', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {module:model/NewEvent} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "trackEvent",
    value: function trackEvent(body) {
      return this.trackEventWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "updateCustomerProfileWithHttpInfo",
    value: function updateCustomerProfileWithHttpInfo(integrationId, body) {
      var postBody = body; // verify the required parameter 'integrationId' is set

      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateCustomerProfile");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerProfile");
      }

      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationState["default"];
      return this.apiClient.callApi('/v1/customer_profiles/{integrationId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "updateCustomerProfile",
    value: function updateCustomerProfile(integrationId, body) {
      return this.updateCustomerProfileWithHttpInfo(integrationId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "updateCustomerSessionWithHttpInfo",
    value: function updateCustomerSessionWithHttpInfo(customerSessionId, body) {
      var postBody = body; // verify the required parameter 'customerSessionId' is set

      if (customerSessionId === undefined || customerSessionId === null) {
        throw new Error("Missing the required parameter 'customerSessionId' when calling updateCustomerSession");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerSession");
      }

      var pathParams = {
        'customerSessionId': customerSessionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationState["default"];
      return this.apiClient.callApi('/v1/customer_sessions/{customerSessionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "updateCustomerSession",
    value: function updateCustomerSession(customerSessionId, body) {
      return this.updateCustomerSessionWithHttpInfo(customerSessionId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationStateV2} and HTTP response
     */

  }, {
    key: "updateCustomerSessionV2WithHttpInfo",
    value: function updateCustomerSessionV2WithHttpInfo(customerSessionId, body) {
      var postBody = body; // verify the required parameter 'customerSessionId' is set

      if (customerSessionId === undefined || customerSessionId === null) {
        throw new Error("Missing the required parameter 'customerSessionId' when calling updateCustomerSessionV2");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerSessionV2");
      }

      var pathParams = {
        'customerSessionId': customerSessionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationStateV["default"];
      return this.apiClient.callApi('/v2/customer_sessions/{customerSessionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationStateV2}
     */

  }, {
    key: "updateCustomerSessionV2",
    value: function updateCustomerSessionV2(customerSessionId, body) {
      return this.updateCustomerSessionV2WithHttpInfo(customerSessionId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return IntegrationApi;
}();

exports["default"] = IntegrationApi;