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


import ApiClient from "../ApiClient";
import Coupon from '../model/Coupon';
import CouponReservations from '../model/CouponReservations';
import CustomerInventory from '../model/CustomerInventory';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import IntegrationRequest from '../model/IntegrationRequest';
import IntegrationState from '../model/IntegrationState';
import IntegrationStateV2 from '../model/IntegrationStateV2';
import NewCustomerProfile from '../model/NewCustomerProfile';
import NewCustomerSession from '../model/NewCustomerSession';
import NewEvent from '../model/NewEvent';
import NewReferral from '../model/NewReferral';
import Referral from '../model/Referral';

/**
* Integration service.
* @module api/IntegrationApi
* @version 1.0.0
*/
export default class IntegrationApi {

    /**
    * Constructs a new IntegrationApi. 
    * @alias module:api/IntegrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new coupon reservation
     * Creates a coupon reservation for all passed customer profiles on this couponID 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    createCouponReservationWithHttpInfo(couponValue, body) {
      let postBody = body;
      // verify the required parameter 'couponValue' is set
      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling createCouponReservation");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCouponReservation");
      }

      let pathParams = {
        'couponValue': couponValue
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Coupon;
      return this.apiClient.callApi(
        '/v1/coupon_reservations/{couponValue}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new coupon reservation
     * Creates a coupon reservation for all passed customer profiles on this couponID 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    createCouponReservation(couponValue, body) {
      return this.createCouponReservationWithHttpInfo(couponValue, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile. 
     * @param {module:model/NewReferral} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Referral} and HTTP response
     */
    createReferralWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createReferral");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Referral;
      return this.apiClient.callApi(
        '/v1/referrals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile. 
     * @param {module:model/NewReferral} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Referral}
     */
    createReferral(body) {
      return this.createReferralWithHttpInfo(body)
        .then(function(response_and_data) {
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
    deleteCouponReservationWithHttpInfo(couponValue, body) {
      let postBody = body;
      // verify the required parameter 'couponValue' is set
      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling deleteCouponReservation");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteCouponReservation");
      }

      let pathParams = {
        'couponValue': couponValue
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/coupon_reservations/{couponValue}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete coupon reservations
     * Removes all passed customer profiles reservation from this coupon 
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCouponReservation(couponValue, body) {
      return this.deleteCouponReservationWithHttpInfo(couponValue, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomerDataWithHttpInfo(integrationId) {
      let postBody = null;
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteCustomerData");
      }

      let pathParams = {
        'integrationId': integrationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/customer_data/{integrationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile. 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomerData(integrationId) {
      return this.deleteCustomerDataWithHttpInfo(integrationId)
        .then(function(response_and_data) {
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
    getCustomerInventoryWithHttpInfo(integrationId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getCustomerInventory");
      }

      let pathParams = {
        'integrationId': integrationId
      };
      let queryParams = {
        'profile': opts['profile'],
        'referrals': opts['referrals']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomerInventory;
      return this.apiClient.callApi(
        '/v1/customer_profiles/{integrationId}/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getCustomerInventory(integrationId, opts) {
      return this.getCustomerInventoryWithHttpInfo(integrationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all valid reserved coupons
     * Returns all coupons this user is subscribed to that are valid and usable 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    getReservedCouponsWithHttpInfo(integrationId) {
      let postBody = null;
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getReservedCoupons");
      }

      let pathParams = {
        'integrationId': integrationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/v1/coupon_reservations/coupons/{integrationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all valid reserved coupons
     * Returns all coupons this user is subscribed to that are valid and usable 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    getReservedCoupons(integrationId) {
      return this.getReservedCouponsWithHttpInfo(integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved 
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getReservedCustomersWithHttpInfo(couponValue) {
      let postBody = null;
      // verify the required parameter 'couponValue' is set
      if (couponValue === undefined || couponValue === null) {
        throw new Error("Missing the required parameter 'couponValue' when calling getReservedCustomers");
      }

      let pathParams = {
        'couponValue': couponValue
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/v1/coupon_reservations/customerprofiles/{couponValue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved 
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    getReservedCustomers(couponValue) {
      return this.getReservedCustomersWithHttpInfo(couponValue)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {module:model/NewEvent} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    trackEventWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling trackEvent");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationState;
      return this.apiClient.callApi(
        '/v1/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 
     * @param {module:model/NewEvent} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    trackEvent(body) {
      return this.trackEventWithHttpInfo(body)
        .then(function(response_and_data) {
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
    updateCustomerProfileWithHttpInfo(integrationId, body) {
      let postBody = body;
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateCustomerProfile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerProfile");
      }

      let pathParams = {
        'integrationId': integrationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationState;
      return this.apiClient.callApi(
        '/v1/customer_profiles/{integrationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Customer Profile
     * Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons 
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    updateCustomerProfile(integrationId, body) {
      return this.updateCustomerProfileWithHttpInfo(integrationId, body)
        .then(function(response_and_data) {
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
    updateCustomerSessionWithHttpInfo(customerSessionId, body) {
      let postBody = body;
      // verify the required parameter 'customerSessionId' is set
      if (customerSessionId === undefined || customerSessionId === null) {
        throw new Error("Missing the required parameter 'customerSessionId' when calling updateCustomerSession");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerSession");
      }

      let pathParams = {
        'customerSessionId': customerSessionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationState;
      return this.apiClient.callApi(
        '/v1/customer_sessions/{customerSessionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    updateCustomerSession(customerSessionId, body) {
      return this.updateCustomerSessionWithHttpInfo(customerSessionId, body)
        .then(function(response_and_data) {
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
    updateCustomerSessionV2WithHttpInfo(customerSessionId, body) {
      let postBody = body;
      // verify the required parameter 'customerSessionId' is set
      if (customerSessionId === undefined || customerSessionId === null) {
        throw new Error("Missing the required parameter 'customerSessionId' when calling updateCustomerSessionV2");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerSessionV2");
      }

      let pathParams = {
        'customerSessionId': customerSessionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_v1', 'integration_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationStateV2;
      return this.apiClient.callApi(
        '/v2/customer_sessions/{customerSessionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session 
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationStateV2}
     */
    updateCustomerSessionV2(customerSessionId, body) {
      return this.updateCustomerSessionV2WithHttpInfo(customerSessionId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
