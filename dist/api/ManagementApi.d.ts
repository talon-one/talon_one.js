/**
* Management service.
* @module api/ManagementApi
* @version 4.2.0
*/
export default class ManagementApi {
    /**
    * Constructs a new ManagementApi.
    * @alias module:api/ManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add points in a certain loyalty program for the specified customer
     * @param {String} programID
     * @param {String} integrationID
     * @param {module:model/LoyaltyPoints} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addLoyaltyPointsWithHttpInfo(programID: string, integrationID: string, body: any): Promise<any>;
    /**
     * Add points in a certain loyalty program for the specified customer
     * @param {String} programID
     * @param {String} integrationID
     * @param {module:model/LoyaltyPoints} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addLoyaltyPoints(programID: string, integrationID: string, body: any): Promise<any>;
    /**
     * Copy the campaign into every specified application
     * Copy the campaign into every specified application.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/CampaignCopy} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    copyCampaignToApplicationsWithHttpInfo(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Copy the campaign into every specified application
     * Copy the campaign into every specified application.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/CampaignCopy} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    copyCampaignToApplications(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Define a new additional cost
     * Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required.
     * @param {module:model/NewAdditionalCost} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */
    createAdditionalCostWithHttpInfo(body: any): Promise<any>;
    /**
     * Define a new additional cost
     * Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required.
     * @param {module:model/NewAdditionalCost} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */
    createAdditionalCost(body: any): Promise<any>;
    /**
     * Define a new custom attribute
     * Defines a new _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on. These attributes can then be given values when creating / updating these objects, and these values can be used in your campaign rules. For example, you could define a `zipCode` field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required.
     * @param {module:model/NewAttribute} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */
    createAttributeWithHttpInfo(body: any): Promise<any>;
    /**
     * Define a new custom attribute
     * Defines a new _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on. These attributes can then be given values when creating / updating these objects, and these values can be used in your campaign rules. For example, you could define a `zipCode` field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required.
     * @param {module:model/NewAttribute} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */
    createAttribute(body: any): Promise<any>;
    /**
     * Create a Campaign
     * @param {Number} applicationId
     * @param {module:model/NewCampaign} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    createCampaignWithHttpInfo(applicationId: number, body: any): Promise<any>;
    /**
     * Create a Campaign
     * @param {Number} applicationId
     * @param {module:model/NewCampaign} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    createCampaign(applicationId: number, body: any): Promise<any>;
    /**
     * Create Coupons
     * Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/NewCoupons} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    createCouponsWithHttpInfo(applicationId: number, campaignId: number, body: any, opts: {
        silent: string;
    }): Promise<any>;
    /**
     * Create Coupons
     * Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/NewCoupons} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    createCoupons(applicationId: number, campaignId: number, body: any, opts: {
        silent: string;
    }): Promise<any>;
    /**
     * Request a password reset
     * Sends an email with a password recovery link to the email of an existing account.
     * @param {module:model/NewPasswordEmail} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewPasswordEmail} and HTTP response
     */
    createPasswordRecoveryEmailWithHttpInfo(body: any): Promise<any>;
    /**
     * Request a password reset
     * Sends an email with a password recovery link to the email of an existing account.
     * @param {module:model/NewPasswordEmail} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewPasswordEmail}
     */
    createPasswordRecoveryEmail(body: any): Promise<any>;
    /**
     * Create a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/NewRuleset} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */
    createRulesetWithHttpInfo(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Create a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/NewRuleset} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */
    createRuleset(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Create a Session
     * @param {module:model/LoginParams} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Session} and HTTP response
     */
    createSessionWithHttpInfo(body: any): Promise<any>;
    /**
     * Create a Session
     * @param {module:model/LoginParams} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Session}
     */
    createSession(body: any): Promise<any>;
    /**
     * Delete a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCampaignWithHttpInfo(applicationId: number, campaignId: number): Promise<any>;
    /**
     * Delete a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCampaign(applicationId: number, campaignId: number): Promise<any>;
    /**
     * Delete one Coupon
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} couponId The ID of the coupon code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCouponWithHttpInfo(applicationId: number, campaignId: number, couponId: string): Promise<any>;
    /**
     * Delete one Coupon
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} couponId The ID of the coupon code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCoupon(applicationId: number, campaignId: number, couponId: string): Promise<any>;
    /**
     * Delete Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCouponsWithHttpInfo(applicationId: number, campaignId: number, opts: {
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        startsAfter: Date;
        startsBefore: Date;
        expiresAfter: Date;
        expiresBefore: Date;
        valid: any;
        batchId: string;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * Delete Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCoupons(applicationId: number, campaignId: number, opts: {
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        startsAfter: Date;
        startsBefore: Date;
        expiresAfter: Date;
        expiresBefore: Date;
        valid: any;
        batchId: string;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * Delete one Referral
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} referralId The ID of the referral code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteReferralWithHttpInfo(applicationId: number, campaignId: number, referralId: string): Promise<any>;
    /**
     * Delete one Referral
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} referralId The ID of the referral code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteReferral(applicationId: number, campaignId: number, referralId: string): Promise<any>;
    /**
     * Delete a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRulesetWithHttpInfo(applicationId: number, campaignId: number, rulesetId: number): Promise<any>;
    /**
     * Delete a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteRuleset(applicationId: number, campaignId: number, rulesetId: number): Promise<any>;
    /**
     * Get access logs for application (with total count)
     * @param {Number} applicationId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    getAccessLogsWithHttpInfo(applicationId: number, rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get access logs for application (with total count)
     * @param {Number} applicationId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    getAccessLogs(applicationId: number, rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get access logs for application
     * @param {Number} applicationId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
     */
    getAccessLogsWithoutTotalCountWithHttpInfo(applicationId: number, rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get access logs for application
     * @param {Number} applicationId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */
    getAccessLogsWithoutTotalCount(applicationId: number, rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get Account Details
     * Return the details of your companies Talon.One account.
     * @param {Number} accountId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
     */
    getAccountWithHttpInfo(accountId: number): Promise<any>;
    /**
     * Get Account Details
     * Return the details of your companies Talon.One account.
     * @param {Number} accountId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */
    getAccount(accountId: number): Promise<any>;
    /**
     * Get Account Analytics
     * Return the analytics of your companies Talon.One account.
     * @param {Number} accountId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAnalytics} and HTTP response
     */
    getAccountAnalyticsWithHttpInfo(accountId: number): Promise<any>;
    /**
     * Get Account Analytics
     * Return the analytics of your companies Talon.One account.
     * @param {Number} accountId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAnalytics}
     */
    getAccountAnalytics(accountId: number): Promise<any>;
    /**
     * Get an additional cost
     * Returns additional cost for the account by its id.
     * @param {Number} additionalCostId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */
    getAdditionalCostWithHttpInfo(additionalCostId: number): Promise<any>;
    /**
     * Get an additional cost
     * Returns additional cost for the account by its id.
     * @param {Number} additionalCostId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */
    getAdditionalCost(additionalCostId: number): Promise<any>;
    /**
     * List additional costs
     * Returns all the defined additional costs for the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20021} and HTTP response
     */
    getAdditionalCostsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List additional costs
     * Returns all the defined additional costs for the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20021}
     */
    getAdditionalCosts(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get all access logs
     * Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    getAllAccessLogsWithHttpInfo(rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get all access logs
     * Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    getAllAccessLogs(rangeStart: Date, rangeEnd: Date, opts: {
        path: string;
        method: any;
        status: any;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get all roles.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20030} and HTTP response
     */
    getAllRolesWithHttpInfo(): Promise<any>;
    /**
     * Get all roles.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20030}
     */
    getAllRoles(): Promise<any>;
    /**
     * Get Application
     * Get the application specified by the ID.
     * @param {Number} applicationId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Application} and HTTP response
     */
    getApplicationWithHttpInfo(applicationId: number): Promise<any>;
    /**
     * Get Application
     * Get the application specified by the ID.
     * @param {Number} applicationId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Application}
     */
    getApplication(applicationId: number): Promise<any>;
    /**
     * Get report of health of application API
     * @param {Number} applicationId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationApiHealth} and HTTP response
     */
    getApplicationApiHealthWithHttpInfo(applicationId: number): Promise<any>;
    /**
     * Get report of health of application API
     * @param {Number} applicationId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationApiHealth}
     */
    getApplicationApiHealth(applicationId: number): Promise<any>;
    /**
     * Get Application Customer
     * @param {Number} applicationId
     * @param {Number} customerId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationCustomer} and HTTP response
     */
    getApplicationCustomerWithHttpInfo(applicationId: number, customerId: number): Promise<any>;
    /**
     * Get Application Customer
     * @param {Number} applicationId
     * @param {Number} customerId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationCustomer}
     */
    getApplicationCustomer(applicationId: number, customerId: number): Promise<any>;
    /**
     * List Application Customers
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.integrationId Filter results performing an exact matching against the profile integration identifier.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20012} and HTTP response
     */
    getApplicationCustomersWithHttpInfo(applicationId: number, opts: {
        integrationId: string;
        pageSize: number;
        skip: number;
        withTotalResultSize: boolean;
    }): Promise<any>;
    /**
     * List Application Customers
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.integrationId Filter results performing an exact matching against the profile integration identifier.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20012}
     */
    getApplicationCustomers(applicationId: number, opts: {
        integrationId: string;
        pageSize: number;
        skip: number;
        withTotalResultSize: boolean;
    }): Promise<any>;
    /**
     * Get a list of the customer profiles that match the given attributes (with total count)
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile
     * @param {module:model/ApplicationCustomerSearch} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */
    getApplicationCustomersByAttributesWithHttpInfo(body: any): Promise<any>;
    /**
     * Get a list of the customer profiles that match the given attributes (with total count)
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile
     * @param {module:model/ApplicationCustomerSearch} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */
    getApplicationCustomersByAttributes(body: any): Promise<any>;
    /**
     * List Applications Event Types
     * Get all of the distinct values of the Event `type` property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent)
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20019} and HTTP response
     */
    getApplicationEventTypesWithHttpInfo(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Applications Event Types
     * Get all of the distinct values of the Event `type` property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent)
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20019}
     */
    getApplicationEventTypes(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Applications Events (with total count)
     * Lists all events recorded for an application.
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20017} and HTTP response
     */
    getApplicationEventsWithHttpInfo(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        type: string;
        createdBefore: Date;
        createdAfter: Date;
        session: string;
        profile: string;
        customerName: string;
        customerEmail: string;
        couponCode: string;
        referralCode: string;
        ruleQuery: string;
        campaignQuery: string;
    }): Promise<any>;
    /**
     * List Applications Events (with total count)
     * Lists all events recorded for an application.
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20017}
     */
    getApplicationEvents(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        type: string;
        createdBefore: Date;
        createdAfter: Date;
        session: string;
        profile: string;
        customerName: string;
        customerEmail: string;
        couponCode: string;
        referralCode: string;
        ruleQuery: string;
        campaignQuery: string;
    }): Promise<any>;
    /**
     * List Applications Events
     * Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20018} and HTTP response
     */
    getApplicationEventsWithoutTotalCountWithHttpInfo(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        type: string;
        createdBefore: Date;
        createdAfter: Date;
        session: string;
        profile: string;
        customerName: string;
        customerEmail: string;
        couponCode: string;
        referralCode: string;
        ruleQuery: string;
        campaignQuery: string;
    }): Promise<any>;
    /**
     * List Applications Events
     * Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20018}
     */
    getApplicationEventsWithoutTotalCount(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        type: string;
        createdBefore: Date;
        createdAfter: Date;
        session: string;
        profile: string;
        customerName: string;
        customerEmail: string;
        couponCode: string;
        referralCode: string;
        ruleQuery: string;
        campaignQuery: string;
    }): Promise<any>;
    /**
     * Get Application Session
     * @param {Number} applicationId
     * @param {Number} sessionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationSession} and HTTP response
     */
    getApplicationSessionWithHttpInfo(applicationId: number, sessionId: number): Promise<any>;
    /**
     * Get Application Session
     * @param {Number} applicationId
     * @param {Number} sessionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationSession}
     */
    getApplicationSession(applicationId: number, sessionId: number): Promise<any>;
    /**
     * List Application Sessions
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.profile Profile integration ID filter for sessions. Must be exact match.
     * @param {module:model/String} opts.state Filter by sessions with this state. Must be exact match.
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.coupon Filter by sessions with this coupon. Must be exact match.
     * @param {String} opts.referral Filter by sessions with this referral. Must be exact match.
     * @param {String} opts.integrationId Filter by sessions with this integrationId. Must be exact match.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20016} and HTTP response
     */
    getApplicationSessionsWithHttpInfo(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        profile: string;
        state: any;
        createdBefore: Date;
        createdAfter: Date;
        coupon: string;
        referral: string;
        integrationId: string;
    }): Promise<any>;
    /**
     * List Application Sessions
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.profile Profile integration ID filter for sessions. Must be exact match.
     * @param {module:model/String} opts.state Filter by sessions with this state. Must be exact match.
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.coupon Filter by sessions with this coupon. Must be exact match.
     * @param {String} opts.referral Filter by sessions with this referral. Must be exact match.
     * @param {String} opts.integrationId Filter by sessions with this integrationId. Must be exact match.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20016}
     */
    getApplicationSessions(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        profile: string;
        state: any;
        createdBefore: Date;
        createdAfter: Date;
        coupon: string;
        referral: string;
        integrationId: string;
    }): Promise<any>;
    /**
     * List Applications
     * List all application in the current account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    getApplicationsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Applications
     * List all application in the current account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    getApplications(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get a custom attribute
     * Returns custom attribute for the account by its id.
     * @param {Number} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */
    getAttributeWithHttpInfo(attributeId: number): Promise<any>;
    /**
     * Get a custom attribute
     * Returns custom attribute for the account by its id.
     * @param {Number} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */
    getAttribute(attributeId: number): Promise<any>;
    /**
     * List custom attributes
     * Returns all the defined custom attributes for the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20020} and HTTP response
     */
    getAttributesWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List custom attributes
     * Returns all the defined custom attributes for the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20020}
     */
    getAttributes(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    getCampaignWithHttpInfo(applicationId: number, campaignId: number): Promise<any>;
    /**
     * Get a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    getCampaign(applicationId: number, campaignId: number): Promise<any>;
    /**
     * Get analytics of campaigns
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time interval between the results in the returned time-series.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20011} and HTTP response
     */
    getCampaignAnalyticsWithHttpInfo(applicationId: number, campaignId: number, rangeStart: Date, rangeEnd: Date, opts: {
        granularity: any;
    }): Promise<any>;
    /**
     * Get analytics of campaigns
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time interval between the results in the returned time-series.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */
    getCampaignAnalytics(applicationId: number, campaignId: number, rangeStart: Date, rangeEnd: Date, opts: {
        granularity: any;
    }): Promise<any>;
    /**
     * Get a list of all campaigns that match the given attributes
     * Gets a list of all the campaigns that exactly match a set of attributes.
     * @param {Number} applicationId
     * @param {module:model/CampaignSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getCampaignByAttributesWithHttpInfo(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of all campaigns that match the given attributes
     * Gets a list of all the campaigns that exactly match a set of attributes.
     * @param {Number} applicationId
     * @param {module:model/CampaignSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getCampaignByAttributes(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        campaignState: any;
    }): Promise<any>;
    /**
     * List your Campaigns
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @param {String} opts.name Filter results performing case-insensitive matching against the name of the campaign.
     * @param {String} opts.tags Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Number} opts.campaignGroupId Filter results to campaigns owned by the specified campaign group ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getCampaignsWithHttpInfo(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        campaignState: any;
        name: string;
        tags: string;
        createdBefore: Date;
        createdAfter: Date;
        campaignGroupId: number;
    }): Promise<any>;
    /**
     * List your Campaigns
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @param {String} opts.name Filter results performing case-insensitive matching against the name of the campaign.
     * @param {String} opts.tags Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Number} opts.campaignGroupId Filter results to campaigns owned by the specified campaign group ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getCampaigns(applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        campaignState: any;
        name: string;
        tags: string;
        createdBefore: Date;
        createdAfter: Date;
        campaignGroupId: number;
    }): Promise<any>;
    /**
     * Get audit log for an account
     * Get list of changes caused by API calls for an account. Only accessible for admins.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.applicationId
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.
     * @param {Boolean} opts.includeOld When this flag is set to false, the state without the change will not be returned. The default value is true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20027} and HTTP response
     */
    getChangesWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        applicationId: number;
        createdBefore: Date;
        createdAfter: Date;
        withTotalResultSize: boolean;
        includeOld: boolean;
    }): Promise<any>;
    /**
     * Get audit log for an account
     * Get list of changes caused by API calls for an account. Only accessible for admins.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.applicationId
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.
     * @param {Boolean} opts.includeOld When this flag is set to false, the state without the change will not be returned. The default value is true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20027}
     */
    getChanges(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        applicationId: number;
        createdBefore: Date;
        createdAfter: Date;
        withTotalResultSize: boolean;
        includeOld: boolean;
    }): Promise<any>;
    /**
     * List Coupons (with total count)
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getCouponsWithHttpInfo(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        startsAfter: Date;
        startsBefore: Date;
        expiresAfter: Date;
        expiresBefore: Date;
        valid: any;
        batchId: string;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * List Coupons (with total count)
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    getCoupons(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        startsAfter: Date;
        startsBefore: Date;
        expiresAfter: Date;
        expiresBefore: Date;
        valid: any;
        batchId: string;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/CouponSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getCouponsByAttributesWithHttpInfo(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request.
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/CouponSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    getCouponsByAttributes(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria Application wide
     * @param {Number} applicationId
     * @param {module:model/CouponSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getCouponsByAttributesApplicationWideWithHttpInfo(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria Application wide
     * @param {Number} applicationId
     * @param {module:model/CouponSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    getCouponsByAttributesApplicationWide(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * List Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    getCouponsWithoutTotalCountWithHttpInfo(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * List Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    getCouponsWithoutTotalCount(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
    }): Promise<any>;
    /**
     * Get Activity Report for Single Customer
     * Fetch summary report for single application customer based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Number} customerId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerActivityReport} and HTTP response
     */
    getCustomerActivityReportWithHttpInfo(rangeStart: Date, rangeEnd: Date, applicationId: number, customerId: number, opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Get Activity Report for Single Customer
     * Fetch summary report for single application customer based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Number} customerId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerActivityReport}
     */
    getCustomerActivityReport(rangeStart: Date, rangeEnd: Date, applicationId: number, customerId: number, opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Get Activity Reports for Application Customers (with total count)
     * Fetch summary reports for all application customers based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20014} and HTTP response
     */
    getCustomerActivityReportsWithHttpInfo(rangeStart: Date, rangeEnd: Date, applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        name: string;
        integrationId: string;
        campaignName: string;
        advocateName: string;
    }): Promise<any>;
    /**
     * Get Activity Reports for Application Customers (with total count)
     * Fetch summary reports for all application customers based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20014}
     */
    getCustomerActivityReports(rangeStart: Date, rangeEnd: Date, applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        name: string;
        integrationId: string;
        campaignName: string;
        advocateName: string;
    }): Promise<any>;
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */
    getCustomerActivityReportsWithoutTotalCountWithHttpInfo(rangeStart: Date, rangeEnd: Date, applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        name: string;
        integrationId: string;
        campaignName: string;
        advocateName: string;
    }): Promise<any>;
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */
    getCustomerActivityReportsWithoutTotalCount(rangeStart: Date, rangeEnd: Date, applicationId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        name: string;
        integrationId: string;
        campaignName: string;
        advocateName: string;
    }): Promise<any>;
    /**
     * Get Analytics Report for a Customer
     * Fetch analytics for single application customer
     * @param {Number} applicationId
     * @param {Number} customerId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerAnalytics} and HTTP response
     */
    getCustomerAnalyticsWithHttpInfo(applicationId: number, customerId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get Analytics Report for a Customer
     * Fetch analytics for single application customer
     * @param {Number} applicationId
     * @param {Number} customerId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerAnalytics}
     */
    getCustomerAnalytics(applicationId: number, customerId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get Customer Profile
     * @param {Number} customerId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationCustomer} and HTTP response
     */
    getCustomerProfileWithHttpInfo(customerId: number): Promise<any>;
    /**
     * Get Customer Profile
     * @param {Number} customerId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationCustomer}
     */
    getCustomerProfile(customerId: number): Promise<any>;
    /**
     * List Customer Profiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */
    getCustomerProfilesWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * List Customer Profiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */
    getCustomerProfiles(opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile
     * @param {module:model/ApplicationCustomerSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */
    getCustomersByAttributesWithHttpInfo(body: any, opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile
     * @param {module:model/ApplicationCustomerSearch} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */
    getCustomersByAttributes(body: any, opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * List Event Types
     * Fetch all event type definitions for your account. Each event type can be
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.name Filter results to event types with the given name. This parameter implies `includeOldVersions`.
     * @param {Boolean} opts.includeOldVersions Include all versions of every event type. (default to false)
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20025} and HTTP response
     */
    getEventTypesWithHttpInfo(opts: {
        applicationIds: string;
        name: string;
        includeOldVersions: boolean;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Event Types
     * Fetch all event type definitions for your account. Each event type can be
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.name Filter results to event types with the given name. This parameter implies `includeOldVersions`.
     * @param {Boolean} opts.includeOldVersions Include all versions of every event type. (default to false)
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20025}
     */
    getEventTypes(opts: {
        applicationIds: string;
        name: string;
        includeOldVersions: boolean;
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get Exports
     * Get a list of all past exports
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId
     * @param {module:model/String} opts.entity The name of the entity type that was exported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20028} and HTTP response
     */
    getExportsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        applicationId: number;
        campaignId: number;
        entity: any;
    }): Promise<any>;
    /**
     * Get Exports
     * Get a list of all past exports
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId
     * @param {module:model/String} opts.entity The name of the entity type that was exported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20028}
     */
    getExports(opts: {
        pageSize: number;
        skip: number;
        applicationId: number;
        campaignId: number;
        entity: any;
    }): Promise<any>;
    /**
     * Get Imports
     * Get a list of all past imports
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20029} and HTTP response
     */
    getImportsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Get Imports
     * Get a list of all past imports
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20029}
     */
    getImports(opts: {
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * get the Loyalty Ledger for this integrationID
     * Get the Loyalty Ledger for this profile integration ID.
     * @param {String} programID The identifier for the application, must be unique within the account.
     * @param {String} integrationID The identifier for the application, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyLedger} and HTTP response
     */
    getLoyaltyPointsWithHttpInfo(programID: string, integrationID: string): Promise<any>;
    /**
     * get the Loyalty Ledger for this integrationID
     * Get the Loyalty Ledger for this profile integration ID.
     * @param {String} programID The identifier for the application, must be unique within the account.
     * @param {String} integrationID The identifier for the application, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyLedger}
     */
    getLoyaltyPoints(programID: string, integrationID: string): Promise<any>;
    /**
     * Get a loyalty program
     * @param {String} programID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyProgram} and HTTP response
     */
    getLoyaltyProgramWithHttpInfo(programID: string): Promise<any>;
    /**
     * Get a loyalty program
     * @param {String} programID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyProgram}
     */
    getLoyaltyProgram(programID: string): Promise<any>;
    /**
     * List all loyalty Programs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */
    getLoyaltyProgramsWithHttpInfo(): Promise<any>;
    /**
     * List all loyalty Programs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */
    getLoyaltyPrograms(): Promise<any>;
    /**
     * Get loyalty program statistics by loyalty program ID
     * @param {String} programID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyStatistics} and HTTP response
     */
    getLoyaltyStatisticsWithHttpInfo(programID: string): Promise<any>;
    /**
     * Get loyalty program statistics by loyalty program ID
     * @param {String} programID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyStatistics}
     */
    getLoyaltyStatistics(programID: string): Promise<any>;
    /**
     * List Referrals (with total count)
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`.
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    getReferralsWithHttpInfo(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        code: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        advocate: string;
    }): Promise<any>;
    /**
     * List Referrals (with total count)
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`.
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    getReferrals(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        code: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        advocate: string;
    }): Promise<any>;
    /**
     * List Referrals
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`.
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    getReferralsWithoutTotalCountWithHttpInfo(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        code: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        advocate: string;
    }): Promise<any>;
    /**
     * List Referrals
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`.
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    getReferralsWithoutTotalCount(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        code: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        advocate: string;
    }): Promise<any>;
    /**
     * Get information for the specified role.
     * @param {Number} roleId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Role} and HTTP response
     */
    getRoleWithHttpInfo(roleId: number): Promise<any>;
    /**
     * Get information for the specified role.
     * @param {Number} roleId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Role}
     */
    getRole(roleId: number): Promise<any>;
    /**
     * Get a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */
    getRulesetWithHttpInfo(applicationId: number, campaignId: number, rulesetId: number): Promise<any>;
    /**
     * Get a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */
    getRuleset(applicationId: number, campaignId: number, rulesetId: number): Promise<any>;
    /**
     * List Campaign Rulesets
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    getRulesetsWithHttpInfo(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Campaign Rulesets
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    getRulesets(applicationId: number, campaignId: number, opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get a single User
     * Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves.
     * @param {Number} userId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    getUserWithHttpInfo(userId: number): Promise<any>;
    /**
     * Get a single User
     * Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves.
     * @param {Number} userId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    getUser(userId: number): Promise<any>;
    /**
     * List Users in your account
     * Retrieve all users in your account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20026} and HTTP response
     */
    getUsersWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * List Users in your account
     * Retrieve all users in your account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20026}
     */
    getUsers(opts: {
        pageSize: number;
        skip: number;
        sort: string;
    }): Promise<any>;
    /**
     * Get Webhook
     * Returns an webhook by its id.
     * @param {Number} webhookId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhook} and HTTP response
     */
    getWebhookWithHttpInfo(webhookId: number): Promise<any>;
    /**
     * Get Webhook
     * Returns an webhook by its id.
     * @param {Number} webhookId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhook}
     */
    getWebhook(webhookId: number): Promise<any>;
    /**
     * List Webhook activation Log Entries
     * Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.integrationRequestUuid Filter results by integration request UUID.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {Date} opts.createdBefore Only return events created before this date.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20023} and HTTP response
     */
    getWebhookActivationLogsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        integrationRequestUuid: string;
        webhookId: number;
        applicationId: number;
        campaignId: number;
        createdBefore: Date;
        createdAfter: Date;
    }): Promise<any>;
    /**
     * List Webhook activation Log Entries
     * Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.integrationRequestUuid Filter results by integration request UUID.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {Date} opts.createdBefore Only return events created before this date.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20023}
     */
    getWebhookActivationLogs(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        integrationRequestUuid: string;
        webhookId: number;
        applicationId: number;
        campaignId: number;
        createdBefore: Date;
        createdAfter: Date;
    }): Promise<any>;
    /**
     * List Webhook Log Entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {String} opts.requestUuid Filter results by request UUID.
     * @param {Date} opts.createdBefore Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20024} and HTTP response
     */
    getWebhookLogsWithHttpInfo(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        status: any;
        webhookId: number;
        applicationId: number;
        campaignId: number;
        requestUuid: string;
        createdBefore: Date;
        createdAfter: Date;
    }): Promise<any>;
    /**
     * List Webhook Log Entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {String} opts.requestUuid Filter results by request UUID.
     * @param {Date} opts.createdBefore Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20024}
     */
    getWebhookLogs(opts: {
        pageSize: number;
        skip: number;
        sort: string;
        status: any;
        webhookId: number;
        applicationId: number;
        campaignId: number;
        requestUuid: string;
        createdBefore: Date;
        createdAfter: Date;
    }): Promise<any>;
    /**
     * List Webhooks
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20022} and HTTP response
     */
    getWebhooksWithHttpInfo(opts: {
        applicationIds: string;
        sort: string;
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * List Webhooks
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20022}
     */
    getWebhooks(opts: {
        applicationIds: string;
        sort: string;
        pageSize: number;
        skip: number;
    }): Promise<any>;
    /**
     * Deduct points in a certain loyalty program for the specified customer
     * @param {String} programID
     * @param {String} integrationID
     * @param {module:model/LoyaltyPoints} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeLoyaltyPointsWithHttpInfo(programID: string, integrationID: string, body: any): Promise<any>;
    /**
     * Deduct points in a certain loyalty program for the specified customer
     * @param {String} programID
     * @param {String} integrationID
     * @param {module:model/LoyaltyPoints} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeLoyaltyPoints(programID: string, integrationID: string, body: any): Promise<any>;
    /**
     * Reset password
     * Consumes the supplied password reset token and updates the password for the associated account.
     * @param {module:model/NewPassword} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewPassword} and HTTP response
     */
    resetPasswordWithHttpInfo(body: any): Promise<any>;
    /**
     * Reset password
     * Consumes the supplied password reset token and updates the password for the associated account.
     * @param {module:model/NewPassword} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewPassword}
     */
    resetPassword(body: any): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    searchCouponsAdvancedWithHttpInfo(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    searchCouponsAdvanced(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application
     * @param {Number} applicationId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    searchCouponsAdvancedApplicationWideWithHttpInfo(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application
     * @param {Number} applicationId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    searchCouponsAdvancedApplicationWide(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application
     * @param {Number} applicationId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    searchCouponsAdvancedApplicationWideWithoutTotalCountWithHttpInfo(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application
     * @param {Number} applicationId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        batchId: string;
        exactMatch: boolean;
        campaignState: any;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    searchCouponsAdvancedWithoutTotalCountWithHttpInfo(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Object} body
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    searchCouponsAdvancedWithoutTotalCount(applicationId: number, campaignId: number, body: any, opts: {
        pageSize: number;
        skip: number;
        sort: string;
        value: string;
        createdBefore: Date;
        createdAfter: Date;
        valid: any;
        usable: any;
        referralId: number;
        recipientIntegrationId: string;
        exactMatch: boolean;
        batchId: string;
    }): Promise<any>;
    /**
     * Update an additional cost
     * Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations.
     * @param {Number} additionalCostId
     * @param {module:model/NewAdditionalCost} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */
    updateAdditionalCostWithHttpInfo(additionalCostId: number, body: any): Promise<any>;
    /**
     * Update an additional cost
     * Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations.
     * @param {Number} additionalCostId
     * @param {module:model/NewAdditionalCost} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */
    updateAdditionalCost(additionalCostId: number, body: any): Promise<any>;
    /**
     * Update a custom attribute
     * Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name `region`, and your integration is sending `attributes.region` with customer profile updates, changing the name to `locale` would cause the integration requests to begin failing.  If you **really** need to change the `type` or `name` property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one.
     * @param {Number} attributeId
     * @param {module:model/NewAttribute} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */
    updateAttributeWithHttpInfo(attributeId: number, body: any): Promise<any>;
    /**
     * Update a custom attribute
     * Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name `region`, and your integration is sending `attributes.region` with customer profile updates, changing the name to `locale` would cause the integration requests to begin failing.  If you **really** need to change the `type` or `name` property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one.
     * @param {Number} attributeId
     * @param {module:model/NewAttribute} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */
    updateAttribute(attributeId: number, body: any): Promise<any>;
    /**
     * Update a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/UpdateCampaign} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */
    updateCampaignWithHttpInfo(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Update a Campaign
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/UpdateCampaign} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    updateCampaign(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Update a Coupon
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} couponId The ID of the coupon code to update
     * @param {module:model/UpdateCoupon} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    updateCouponWithHttpInfo(applicationId: number, campaignId: number, couponId: string, body: any): Promise<any>;
    /**
     * Update a Coupon
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {String} couponId The ID of the coupon code to update
     * @param {module:model/UpdateCoupon} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    updateCoupon(applicationId: number, campaignId: number, couponId: string, body: any): Promise<any>;
    /**
     * Update a Batch of Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/UpdateCouponBatch} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateCouponBatchWithHttpInfo(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Update a Batch of Coupons
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {module:model/UpdateCouponBatch} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateCouponBatch(applicationId: number, campaignId: number, body: any): Promise<any>;
    /**
     * Update a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @param {module:model/NewRuleset} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */
    updateRulesetWithHttpInfo(applicationId: number, campaignId: number, rulesetId: number, body: any): Promise<any>;
    /**
     * Update a Ruleset
     * @param {Number} applicationId
     * @param {Number} campaignId
     * @param {Number} rulesetId
     * @param {module:model/NewRuleset} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */
    updateRuleset(applicationId: number, campaignId: number, rulesetId: number, body: any): Promise<any>;
}
