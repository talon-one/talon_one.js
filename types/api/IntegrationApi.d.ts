/**
* Integration service.
* @module api/IntegrationApi
* @version 4.2.0
*/
export default class IntegrationApi {
    /**
    * Constructs a new IntegrationApi.
    * @alias module:api/IntegrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a new coupon reservation
     * Creates a coupon reservation for all passed customer profiles on this couponID
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    createCouponReservationWithHttpInfo(couponValue: string, body: any): Promise<any>;
    /**
     * Create a new coupon reservation
     * Creates a coupon reservation for all passed customer profiles on this couponID
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    createCouponReservation(couponValue: string, body: any): Promise<any>;
    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile.
     * @param {module:model/NewReferral} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Referral} and HTTP response
     */
    createReferralWithHttpInfo(body: any): Promise<any>;
    /**
     * Create a referral code for an advocate
     * Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the `campaignId` parameter, and will be associated with the profile specified in the `advocateProfileIntegrationId` parameter as the advocate's profile.
     * @param {module:model/NewReferral} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Referral}
     */
    createReferral(body: any): Promise<any>;
    /**
     * Delete coupon reservations
     * Removes all passed customer profiles reservation from this coupon
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCouponReservationWithHttpInfo(couponValue: string, body: any): Promise<any>;
    /**
     * Delete coupon reservations
     * Removes all passed customer profiles reservation from this coupon
     * @param {String} couponValue The value of a coupon
     * @param {module:model/CouponReservations} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCouponReservation(couponValue: string, body: any): Promise<any>;
    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomerDataWithHttpInfo(integrationId: string): Promise<any>;
    /**
     * Delete the personal data of a customer.
     * Delete all attributes on the customer profile and on entities that reference that customer profile.
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomerData(integrationId: string): Promise<any>;
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
    getCustomerInventoryWithHttpInfo(integrationId: string, opts: {
        profile: boolean;
        referrals: boolean;
        coupons: boolean;
        loyalty: boolean;
    }): Promise<any>;
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
    getCustomerInventory(integrationId: string, opts: {
        profile: boolean;
        referrals: boolean;
        coupons: boolean;
        loyalty: boolean;
    }): Promise<any>;
    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getReservedCustomersWithHttpInfo(couponValue: string): Promise<any>;
    /**
     * Get the users that have this coupon reserved
     * Returns all users that have this coupon marked as reserved
     * @param {String} couponValue The value of a coupon
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    getReservedCustomers(couponValue: string): Promise<any>;
    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.
     * @param {module:model/NewEvent} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    trackEventWithHttpInfo(body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Track an Event
     * Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The `sessionId` body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same `profileId` or an error will be returned.  As with customer sessions, you can use an empty string for `profileId` to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.
     * @param {module:model/NewEvent} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    trackEvent(body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Profile V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    updateCustomerProfileWithHttpInfo(integrationId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Profile V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Profile][]. This profile information can then be matched and/or updated by campaign [Rules][].  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#customer-profile [Rules]: /Getting-Started/entities#campaigns-rulesets-and-coupons
     * @param {String} integrationId The custom identifier for this profile, must be unique within the account.
     * @param {module:model/NewCustomerProfile} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    updateCustomerProfile(integrationId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Profile Audiences
     * Update one ore multiple Customer Profiles with the specified Audiences
     * @param {module:model/CustomerProfileAudienceRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateCustomerProfileAudiencesWithHttpInfo(body: any): Promise<any>;
    /**
     * Update a Customer Profile Audiences
     * Update one ore multiple Customer Profiles with the specified Audiences
     * @param {module:model/CustomerProfileAudienceRequest} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateCustomerProfileAudiences(body: any): Promise<any>;
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
    updateCustomerProfileV2WithHttpInfo(integrationId: string, body: any, opts: {
        runRuleEngine: boolean;
        dry: boolean;
    }): Promise<any>;
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
    updateCustomerProfileV2(integrationId: string, body: any, opts: {
        runRuleEngine: boolean;
        dry: boolean;
    }): Promise<any>;
    /**
     * Update multiple Customer Profiles
     * Update (or create) up to 1000 [Customer Profiles][] in 1 request.  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profiles]: /Getting-Started/entities#customer-profile
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the IntegrationStateV2  generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MultipleCustomerProfileIntegrationResponseV2} and HTTP response
     */
    updateCustomerProfilesV2WithHttpInfo(body: any, opts: {
        silent: string;
    }): Promise<any>;
    /**
     * Update multiple Customer Profiles
     * Update (or create) up to 1000 [Customer Profiles][] in 1 request.  The `integrationId` may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the `integrationId`. It is vital that this ID **not** change over time, so **don't** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  [Customer Profiles]: /Getting-Started/entities#customer-profile
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the IntegrationStateV2  generated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MultipleCustomerProfileIntegrationResponseV2}
     */
    updateCustomerProfilesV2(body: any, opts: {
        silent: string;
    }): Promise<any>;
    /**
     * Update a Customer Session V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationState} and HTTP response
     */
    updateCustomerSessionWithHttpInfo(customerSessionId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Session V1
     * ⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, please migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/NewCustomerSession} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationState}
     */
    updateCustomerSession(customerSessionId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntegrationStateV2} and HTTP response
     */
    updateCustomerSessionV2WithHttpInfo(customerSessionId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
    /**
     * Update a Customer Session
     * Update (or create) a [Customer Session][]. For example, the items in a customers cart are part of a session.  The Talon.One platform supports multiple simultaneous sessions for the same profile, so if you have multiple ways of accessing the same application you have the option of either tracking multiple independent sessions or using the same session across all of them. You should share sessions when application access points share other state, such as the users cart. If two points of access to the application have independent state (e.g. a user can have different items in their cart across the two) they should use independent customer session ID's.  The `profileId` parameter in the request body should correspond to an `integrationId` for a customer profile, to track an anonymous session use the empty string (`\"\"`) as the `profileId`. Note that you do **not** need to create a customer profile first: if the specified profile does not yet exist, an empty profile will be created automatically.  Updating a customer profile will return a response with the requested integration state. This includes the effects that were generated due to triggered campaigns, the created coupons and referral objects, as well as any entity that was requested in the request parameter \"responseContent\".  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated.  [Customer Session]: /Getting-Started/entities#customer-session
     * @param {String} customerSessionId The custom identifier for this session, must be unique within the account.
     * @param {module:model/IntegrationRequest} body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dry Flag to indicate whether to skip persisting the changes or not (Will not persist if set to 'true').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntegrationStateV2}
     */
    updateCustomerSessionV2(customerSessionId: string, body: any, opts: {
        dry: boolean;
    }): Promise<any>;
}
