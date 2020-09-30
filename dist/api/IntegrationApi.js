"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Coupon = _interopRequireDefault(require("../model/Coupon"));

var _CouponReservations = _interopRequireDefault(require("../model/CouponReservations"));

var _CustomerInventory = _interopRequireDefault(require("../model/CustomerInventory"));

var _CustomerProfileAudienceRequest = _interopRequireDefault(require("../model/CustomerProfileAudienceRequest"));

var _CustomerProfileIntegrationRequestV = _interopRequireDefault(require("../model/CustomerProfileIntegrationRequestV2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _IntegrationRequest = _interopRequireDefault(require("../model/IntegrationRequest"));

var _IntegrationState = _interopRequireDefault(require("../model/IntegrationState"));

var _IntegrationStateV = _interopRequireDefault(require("../model/IntegrationStateV2"));

var _MultipleCustomerProfileIntegrationRequest = _interopRequireDefault(require("../model/MultipleCustomerProfileIntegrationRequest"));

var _MultipleCustomerProfileIntegrationResponseV = _interopRequireDefault(require("../model/MultipleCustomerProfileIntegrationResponseV2"));

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
* @version 4.2.0
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
     * Get information regarding entities referencing this customer profile's integrationId. Currently we support customer profile information, referral codes and reserved coupons. In the future, this will be expanded with loyalty points.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile optional flag to decide if you would like customer profile information in the response
     * @param {Boolean} opts.referrals optional flag to decide if you would like referral information in the response
     * @param {Boolean} opts.coupons optional flag to decide if you would like coupon information in the response
     * @param {Boolean} opts.loyalty optional flag to decide if you would like loyalty information in the response
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
        'referrals': opts['referrals'],
        'coupons': opts['coupons'],
        'loyalty': opts['loyalty']
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
     * Get information regarding entities referencing this customer profile's integrationId. Currently we support customer profile information, referral codes and reserved coupons. In the future, this will be expanded with loyalty points.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile optional flag to decide if you would like customer profile information in the response
     * @param {Boolean} opts.referrals optional flag to decide if you would like referral information in the response
     * @param {Boolean} opts.coupons optional flag to decide if you would like coupon information in the response
     * @param {Boolean} opts.loyalty optional flag to decide if you would like loyalty information in the response
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
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "trackEventWithHttpInfo",
    value: function trackEventWithHttpInfo(body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling trackEvent");
      }

      var pathParams = {};
      var queryParams = {
        'dry': opts['dry']
      };
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
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "trackEvent",
    value: function trackEvent(body, opts) {
      return this.trackEventWithHttpInfo(body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Profile V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "updateCustomerProfileWithHttpInfo",
    value: function updateCustomerProfileWithHttpInfo(integrationId, body, opts) {
      opts = opts || {};
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
      var queryParams = {
        'dry': opts['dry']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationState["default"];
      return this.apiClient.callApi('/v1/customer_profiles/{integrationId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Profile V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "updateCustomerProfile",
    value: function updateCustomerProfile(integrationId, body, opts) {
      return this.updateCustomerProfileWithHttpInfo(integrationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Profile Audiences
     * Update one ore multiple Customer Profiles with the specified Audiences 
     * @param {module:model/CustomerProfileAudienceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateCustomerProfileAudiencesWithHttpInfo",
    value: function updateCustomerProfileAudiencesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerProfileAudiences");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v2/customer_audiences', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Profile Audiences
     * Update one ore multiple Customer Profiles with the specified Audiences 
     * @param {module:model/CustomerProfileAudienceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateCustomerProfileAudiences",
    value: function updateCustomerProfileAudiences(body) {
      return this.updateCustomerProfileAudiencesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profile]: /Getting-Started/entities#customer-profile 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/CustomerProfileIntegrationRequestV2} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runRuleEngine Flag to indicate whether to run the rule engine (Defaults to false).
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true'. Only used when 'runRuleEngine' is set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationStateV2} and HTTP response
     */

  }, {
    key: "updateCustomerProfileV2WithHttpInfo",
    value: function updateCustomerProfileV2WithHttpInfo(integrationId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'integrationId' is set

      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateCustomerProfileV2");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerProfileV2");
      }

      var pathParams = {
        'integrationId': integrationId
      };
      var queryParams = {
        'runRuleEngine': opts['runRuleEngine'],
        'dry': opts['dry']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationStateV["default"];
      return this.apiClient.callApi('/v2/customer_profiles/{integrationId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profile]: /Getting-Started/entities#customer-profile 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/CustomerProfileIntegrationRequestV2} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runRuleEngine Flag to indicate whether to run the rule engine (Defaults to false).
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true'. Only used when 'runRuleEngine' is set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationStateV2}
     */

  }, {
    key: "updateCustomerProfileV2",
    value: function updateCustomerProfileV2(integrationId, body, opts) {
      return this.updateCustomerProfileV2WithHttpInfo(integrationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update multiple Customer Profiles
     * Update (or create) up to 1000 [Customer Profiles][] in 1 request.  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profiles]: /Getting-Started/entities#customer-profile 
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the IntegrationStateV2  generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MultipleCustomerProfileIntegrationResponseV2} and HTTP response
     */

  }, {
    key: "updateCustomerProfilesV2WithHttpInfo",
    value: function updateCustomerProfilesV2WithHttpInfo(body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerProfilesV2");
      }

      var pathParams = {};
      var queryParams = {
        'silent': opts['silent']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MultipleCustomerProfileIntegrationResponseV["default"];
      return this.apiClient.callApi('/v2/customer_profiles', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update multiple Customer Profiles
     * Update (or create) up to 1000 [Customer Profiles][] in 1 request.  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profiles]: /Getting-Started/entities#customer-profile 
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the IntegrationStateV2  generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MultipleCustomerProfileIntegrationResponseV2}
     */

  }, {
    key: "updateCustomerProfilesV2",
    value: function updateCustomerProfilesV2(body, opts) {
      return this.updateCustomerProfilesV2WithHttpInfo(body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Session V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */

  }, {
    key: "updateCustomerSessionWithHttpInfo",
    value: function updateCustomerSessionWithHttpInfo(customerSessionId, body, opts) {
      opts = opts || {};
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
      var queryParams = {
        'dry': opts['dry']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1', 'integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntegrationState["default"];
      return this.apiClient.callApi('/v1/customer_sessions/{customerSessionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Customer Session V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */

  }, {
    key: "updateCustomerSession",
    value: function updateCustomerSession(customerSessionId, body, opts) {
      return this.updateCustomerSessionWithHttpInfo(customerSessionId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationStateV2} and HTTP response
     */

  }, {
    key: "updateCustomerSessionV2WithHttpInfo",
    value: function updateCustomerSessionV2WithHttpInfo(customerSessionId, body, opts) {
      opts = opts || {};
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
      var queryParams = {
        'dry': opts['dry']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key_v1'];
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
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationStateV2}
     */

  }, {
    key: "updateCustomerSessionV2",
    value: function updateCustomerSessionV2(customerSessionId, body, opts) {
      return this.updateCustomerSessionV2WithHttpInfo(customerSessionId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return IntegrationApi;
}();

exports["default"] = IntegrationApi;