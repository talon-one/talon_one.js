# TalonOne.ManagementApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoyaltyPoints**](ManagementApi.md#addLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/add_points | Add points in a certain loyalty program for the specified customer
[**copyCampaignToApplications**](ManagementApi.md#copyCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into every specified application
[**createCampaign**](ManagementApi.md#createCampaign) | **POST** /v1/applications/{applicationId}/campaigns | Create a Campaign
[**createCoupons**](ManagementApi.md#createCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create Coupons
[**createPasswordRecoveryEmail**](ManagementApi.md#createPasswordRecoveryEmail) | **POST** /v1/password_recovery_emails | Request a password reset
[**createRuleset**](ManagementApi.md#createRuleset) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | Create a Ruleset
[**createSession**](ManagementApi.md#createSession) | **POST** /v1/sessions | Create a Session
[**deleteCampaign**](ManagementApi.md#deleteCampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete a Campaign
[**deleteCoupon**](ManagementApi.md#deleteCoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete one Coupon
[**deleteCoupons**](ManagementApi.md#deleteCoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete Coupons
[**deleteReferral**](ManagementApi.md#deleteReferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete one Referral
[**deleteRuleset**](ManagementApi.md#deleteRuleset) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Delete a Ruleset
[**getAccessLogs**](ManagementApi.md#getAccessLogs) | **GET** /v1/applications/{applicationId}/access_logs | Get access logs for application
[**getAccessLogsWithoutTotalCount**](ManagementApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for application
[**getAccount**](ManagementApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get Account Details
[**getAccountAnalytics**](ManagementApi.md#getAccountAnalytics) | **GET** /v1/accounts/{accountId}/analytics | Get Account Analytics
[**getAccountLimits**](ManagementApi.md#getAccountLimits) | **GET** /v1/accounts/{accountId}/limits | Get Account Limits
[**getAllAccessLogs**](ManagementApi.md#getAllAccessLogs) | **GET** /v1/access_logs | Get all access logs
[**getAllRoles**](ManagementApi.md#getAllRoles) | **GET** /v1/roles | Get all roles.
[**getApplication**](ManagementApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
[**getApplicationApiHealth**](ManagementApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get report of health of application API
[**getApplicationCustomer**](ManagementApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get Application Customer
[**getApplicationCustomers**](ManagementApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List Application Customers
[**getApplicationCustomersByAttributes**](ManagementApi.md#getApplicationCustomersByAttributes) | **POST** /v1/application_customer_search | Get a list of the customer profiles that match the given attributes
[**getApplicationEventTypes**](ManagementApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications Event Types
[**getApplicationEvents**](ManagementApi.md#getApplicationEvents) | **GET** /v1/applications/{applicationId}/events | List Applications Events
[**getApplicationEventsWithoutTotalCount**](ManagementApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications Events
[**getApplicationSession**](ManagementApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application Session
[**getApplicationSessions**](ManagementApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application Sessions
[**getApplications**](ManagementApi.md#getApplications) | **GET** /v1/applications | List Applications
[**getAttribute**](ManagementApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get a custom attribute
[**getCampaign**](ManagementApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get a Campaign
[**getCampaignAnalytics**](ManagementApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
[**getCampaignByAttributes**](ManagementApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | Get a list of all campaigns that match the given attributes
[**getCampaignSet**](ManagementApi.md#getCampaignSet) | **GET** /v1/applications/{applicationId}/campaign_set | List CampaignSet
[**getCampaigns**](ManagementApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List your Campaigns
[**getChanges**](ManagementApi.md#getChanges) | **GET** /v1/changes | Get audit log for an account
[**getCoupons**](ManagementApi.md#getCoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | List Coupons
[**getCouponsByAttributes**](ManagementApi.md#getCouponsByAttributes) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search | Get a list of the coupons that match the given attributes
[**getCouponsByAttributesApplicationWide**](ManagementApi.md#getCouponsByAttributesApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search | Get a list of the coupons that match the given attributes in all active campaigns of an application
[**getCouponsWithoutTotalCount**](ManagementApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List Coupons
[**getCustomerActivityReport**](ManagementApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get Activity Report for Single Customer
[**getCustomerActivityReports**](ManagementApi.md#getCustomerActivityReports) | **GET** /v1/applications/{applicationId}/customer_activity_reports | Get Activity Reports for Application Customers
[**getCustomerActivityReportsWithoutTotalCount**](ManagementApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
[**getCustomerAnalytics**](ManagementApi.md#getCustomerAnalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get Analytics Report for a Customer
[**getCustomerProfile**](ManagementApi.md#getCustomerProfile) | **GET** /v1/customers/{customerId} | Get Customer Profile
[**getCustomerProfiles**](ManagementApi.md#getCustomerProfiles) | **GET** /v1/customers/no_total | List Customer Profiles
[**getCustomersByAttributes**](ManagementApi.md#getCustomersByAttributes) | **POST** /v1/customer_search/no_total | Get a list of the customer profiles that match the given attributes
[**getEventTypes**](ManagementApi.md#getEventTypes) | **GET** /v1/event_types | List Event Types
[**getExports**](ManagementApi.md#getExports) | **GET** /v1/exports | Get Exports
[**getImports**](ManagementApi.md#getImports) | **GET** /v1/imports | Get Imports
[**getLoyaltyPoints**](ManagementApi.md#getLoyaltyPoints) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID} | get the Loyalty Ledger for this integrationID
[**getLoyaltyProgram**](ManagementApi.md#getLoyaltyProgram) | **GET** /v1/loyalty_programs/{programID} | Get a loyalty program
[**getLoyaltyPrograms**](ManagementApi.md#getLoyaltyPrograms) | **GET** /v1/loyalty_programs | List all loyalty Programs
[**getReferrals**](ManagementApi.md#getReferrals) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals | List Referrals
[**getReferralsWithoutTotalCount**](ManagementApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List Referrals
[**getRole**](ManagementApi.md#getRole) | **GET** /v1/roles/{roleId} | Get information for the specified role.
[**getRuleset**](ManagementApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get a Ruleset
[**getRulesets**](ManagementApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List Campaign Rulesets
[**getUser**](ManagementApi.md#getUser) | **GET** /v1/users/{userId} | Get a single User
[**getUsers**](ManagementApi.md#getUsers) | **GET** /v1/users | List Users in your account
[**getWebhook**](ManagementApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook
[**getWebhookActivationLogs**](ManagementApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List Webhook activation Log Entries
[**getWebhookLogs**](ManagementApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List Webhook Log Entries
[**getWebhooks**](ManagementApi.md#getWebhooks) | **GET** /v1/webhooks | List Webhooks
[**refreshAnalytics**](ManagementApi.md#refreshAnalytics) | **POST** /v1/refresh_analytics | Trigger refresh on stale analytics.
[**removeLoyaltyPoints**](ManagementApi.md#removeLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/deduct_points | Deduct points in a certain loyalty program for the specified customer
[**resetPassword**](ManagementApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
[**searchCouponsAdvanced**](ManagementApi.md#searchCouponsAdvanced) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced | Get a list of the coupons that match the given attributes
[**searchCouponsAdvancedApplicationWide**](ManagementApi.md#searchCouponsAdvancedApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search_advanced | Get a list of the coupons that match the given attributes in all active campaigns of an application
[**searchCouponsAdvancedApplicationWideWithoutTotalCount**](ManagementApi.md#searchCouponsAdvancedApplicationWideWithoutTotalCount) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | Get a list of the coupons that match the given attributes in all active campaigns of an application
[**searchCouponsAdvancedWithoutTotalCount**](ManagementApi.md#searchCouponsAdvancedWithoutTotalCount) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total | Get a list of the coupons that match the given attributes
[**setAccountLimits**](ManagementApi.md#setAccountLimits) | **PUT** /v1/accounts/{accountId}/limits | Set account limits
[**updateCampaign**](ManagementApi.md#updateCampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update a Campaign
[**updateCampaignSet**](ManagementApi.md#updateCampaignSet) | **PUT** /v1/applications/{applicationId}/campaign_set | Update a Campaign Set
[**updateCoupon**](ManagementApi.md#updateCoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update a Coupon
[**updateCouponBatch**](ManagementApi.md#updateCouponBatch) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Update a Batch of Coupons
[**updateRuleset**](ManagementApi.md#updateRuleset) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Update a Ruleset


<a name="addLoyaltyPoints"></a>
# **addLoyaltyPoints**
> addLoyaltyPoints(programID, integrationID, body)

Add points in a certain loyalty program for the specified customer



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var programID = "programID_example"; // String | 

var integrationID = "integrationID_example"; // String | 

var body = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 

apiInstance.addLoyaltyPoints(programID, integrationID, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **String**|  | 
 **integrationID** | **String**|  | 
 **body** | [**LoyaltyPoints**](LoyaltyPoints.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyCampaignToApplications"></a>
# **copyCampaignToApplications**
> InlineResponse2003 copyCampaignToApplications(applicationId, campaignId, body)

Copy the campaign into every specified application

Copy the campaign into every specified application.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.CampaignCopy(); // CampaignCopy | 

apiInstance.copyCampaignToApplications(applicationId, campaignId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**CampaignCopy**](CampaignCopy.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCampaign"></a>
# **createCampaign**
> Campaign createCampaign(applicationId, body)

Create a Campaign



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.NewCampaign(); // NewCampaign | 

apiInstance.createCampaign(applicationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**NewCampaign**](NewCampaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCoupons"></a>
# **createCoupons**
> InlineResponse2001 createCoupons(applicationId, campaignId, body, opts)

Create Coupons

Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupns can be created.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.NewCoupons(); // NewCoupons | 

var opts = { 
  'silent': "silent_example" // String | If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
};
apiInstance.createCoupons(applicationId, campaignId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**NewCoupons**](NewCoupons.md)|  | 
 **silent** | **String**| If set to &#39;yes&#39;, response will be an empty 204, otherwise a list of the coupons generated (to to 1000). | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPasswordRecoveryEmail"></a>
# **createPasswordRecoveryEmail**
> NewPasswordEmail createPasswordRecoveryEmail(body)

Request a password reset

Sends an email with a password recovery link to the email of an existing account. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var body = new TalonOne.NewPasswordEmail(); // NewPasswordEmail | 

apiInstance.createPasswordRecoveryEmail(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewPasswordEmail**](NewPasswordEmail.md)|  | 

### Return type

[**NewPasswordEmail**](NewPasswordEmail.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleset"></a>
# **createRuleset**
> Ruleset createRuleset(applicationId, campaignId, body)

Create a Ruleset



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.NewRuleset(); // NewRuleset | 

apiInstance.createRuleset(applicationId, campaignId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**NewRuleset**](NewRuleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSession"></a>
# **createSession**
> Session createSession(body)

Create a Session



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var body = new TalonOne.LoginParams(); // LoginParams | 

apiInstance.createSession(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginParams**](LoginParams.md)|  | 

### Return type

[**Session**](Session.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCampaign"></a>
# **deleteCampaign**
> deleteCampaign(applicationId, campaignId)

Delete a Campaign



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

apiInstance.deleteCampaign(applicationId, campaignId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCoupon"></a>
# **deleteCoupon**
> deleteCoupon(applicationId, campaignId, couponId)

Delete one Coupon



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var couponId = "couponId_example"; // String | The ID of the coupon code to delete

apiInstance.deleteCoupon(applicationId, campaignId, couponId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **couponId** | **String**| The ID of the coupon code to delete | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCoupons"></a>
# **deleteCoupons**
> deleteCoupons(applicationId, campaignId, opts)

Delete Coupons



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'startsAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'startsBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'expiresAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'expiresBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false // Boolean | Filter results to an exact case-insensitive matching against the coupon code
};
apiInstance.deleteCoupons(applicationId, campaignId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **startsAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **startsBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **expiresAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **expiresBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReferral"></a>
# **deleteReferral**
> deleteReferral(applicationId, campaignId, referralId)

Delete one Referral



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var referralId = "referralId_example"; // String | The ID of the referral code to delete

apiInstance.deleteReferral(applicationId, campaignId, referralId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **referralId** | **String**| The ID of the referral code to delete | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleset"></a>
# **deleteRuleset**
> deleteRuleset(applicationId, campaignId, rulesetId)

Delete a Ruleset



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var rulesetId = 56; // Number | 

apiInstance.deleteRuleset(applicationId, campaignId, rulesetId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **rulesetId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccessLogs"></a>
# **getAccessLogs**
> InlineResponse2009 getAccessLogs(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var opts = { 
  'path': "path_example", // String | Only return results where the request path matches the given regular expresssion.
  'method': "method_example", // String | Only return results where the request method matches the given regular expresssion.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAccessLogs(applicationId, rangeStart, rangeEnd, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **path** | **String**| Only return results where the request path matches the given regular expresssion. | [optional] 
 **method** | **String**| Only return results where the request method matches the given regular expresssion. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccessLogsWithoutTotalCount"></a>
# **getAccessLogsWithoutTotalCount**
> InlineResponse20010 getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var opts = { 
  'path': "path_example", // String | Only return results where the request path matches the given regular expresssion.
  'method': "method_example", // String | Only return results where the request method matches the given regular expresssion.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **path** | **String**| Only return results where the request path matches the given regular expresssion. | [optional] 
 **method** | **String**| Only return results where the request method matches the given regular expresssion. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccount"></a>
# **getAccount**
> Account getAccount(accountId)

Get Account Details

Return the details of your companies Talon.One account. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var accountId = 56; // Number | 

apiInstance.getAccount(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 

### Return type

[**Account**](Account.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountAnalytics"></a>
# **getAccountAnalytics**
> AccountAnalytics getAccountAnalytics(accountId)

Get Account Analytics

Return the analytics of your companies Talon.One account. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var accountId = 56; // Number | 

apiInstance.getAccountAnalytics(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 

### Return type

[**AccountAnalytics**](AccountAnalytics.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountLimits"></a>
# **getAccountLimits**
> AccountLimits getAccountLimits(accountId)

Get Account Limits

Returns a list of all account limits set 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var accountId = 56; // Number | 

apiInstance.getAccountLimits(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 

### Return type

[**AccountLimits**](AccountLimits.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAccessLogs"></a>
# **getAllAccessLogs**
> InlineResponse2009 getAllAccessLogs(rangeStart, rangeEnd, opts)

Get all access logs

Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var opts = { 
  'path': "path_example", // String | Only return results where the request path matches the given regular expresssion.
  'method': "method_example", // String | Only return results where the request method matches the given regular expresssion.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAllAccessLogs(rangeStart, rangeEnd, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **path** | **String**| Only return results where the request path matches the given regular expresssion. | [optional] 
 **method** | **String**| Only return results where the request method matches the given regular expresssion. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRoles"></a>
# **getAllRoles**
> InlineResponse20028 getAllRoles()

Get all roles.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();
apiInstance.getAllRoles().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplication"></a>
# **getApplication**
> Application getApplication(applicationId)

Get Application

Get the application specified by the ID.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

apiInstance.getApplication(applicationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 

### Return type

[**Application**](Application.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationApiHealth"></a>
# **getApplicationApiHealth**
> ApplicationApiHealth getApplicationApiHealth(applicationId)

Get report of health of application API



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

apiInstance.getApplicationApiHealth(applicationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 

### Return type

[**ApplicationApiHealth**](ApplicationApiHealth.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomer"></a>
# **getApplicationCustomer**
> ApplicationCustomer getApplicationCustomer(applicationId, customerId)

Get Application Customer



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var customerId = 56; // Number | 

apiInstance.getApplicationCustomer(applicationId, customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **customerId** | **Number**|  | 

### Return type

[**ApplicationCustomer**](ApplicationCustomer.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomers"></a>
# **getApplicationCustomers**
> InlineResponse20012 getApplicationCustomers(applicationId)

List Application Customers



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

apiInstance.getApplicationCustomers(applicationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomersByAttributes"></a>
# **getApplicationCustomersByAttributes**
> InlineResponse20013 getApplicationCustomersByAttributes(body)

Get a list of the customer profiles that match the given attributes

Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: http://help.talon.one/customer/en/portal/articles/2525263-data-model?b_id&#x3D;14115#customer-profile 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: integration_auth
var integration_auth = defaultClient.authentications['integration_auth'];
integration_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//integration_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var body = new TalonOne.ApplicationCustomerSearch(); // ApplicationCustomerSearch | 

apiInstance.getApplicationCustomersByAttributes(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicationCustomerSearch**](ApplicationCustomerSearch.md)|  | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[integration_auth](../README.md#integration_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEventTypes"></a>
# **getApplicationEventTypes**
> InlineResponse20019 getApplicationEventTypes(applicationId, opts)

List Applications Event Types

Get all of the distinct values of the Event &#x60;type&#x60; property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent) 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getApplicationEventTypes(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEvents"></a>
# **getApplicationEvents**
> InlineResponse20017 getApplicationEvents(applicationId, opts)

List Applications Events

Lists all events recorded for an application. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'type': "type_example", // String | Comma-separated list of types by which to filter events. Must be exact match(es).
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created after this date
  'session': "session_example", // String | Session integration ID filter for events. Must be exact match.
  'profile': "profile_example", // String | Profile integration ID filter for events. Must be exact match.
  'customerName': "customerName_example", // String | Customer name filter for events. Will match substrings case-insensitively.
  'customerEmail': "customerEmail_example", // String | Customer e-mail address filter for events. Will match substrings case-insensitively.
  'effectsQuery': "effectsQuery_example", // String | Effects filter for events. Will perform a full-text search on the text content of the events effects, if any.
  'attributesQuery': "attributesQuery_example", // String | Attributes filter for events. Will perform a full-text search on the text content of the events attributes, both keys and values.
  'ruleQuery': "ruleQuery_example", // String | Rule name filter for events
  'campaignQuery': "campaignQuery_example" // String | Campaign name filter for events
};
apiInstance.getApplicationEvents(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **type** | **String**| Comma-separated list of types by which to filter events. Must be exact match(es). | [optional] 
 **createdBefore** | **Date**| Only return events created before this date | [optional] 
 **createdAfter** | **Date**| Only return events created after this date | [optional] 
 **session** | **String**| Session integration ID filter for events. Must be exact match. | [optional] 
 **profile** | **String**| Profile integration ID filter for events. Must be exact match. | [optional] 
 **customerName** | **String**| Customer name filter for events. Will match substrings case-insensitively. | [optional] 
 **customerEmail** | **String**| Customer e-mail address filter for events. Will match substrings case-insensitively. | [optional] 
 **effectsQuery** | **String**| Effects filter for events. Will perform a full-text search on the text content of the events effects, if any. | [optional] 
 **attributesQuery** | **String**| Attributes filter for events. Will perform a full-text search on the text content of the events attributes, both keys and values. | [optional] 
 **ruleQuery** | **String**| Rule name filter for events | [optional] 
 **campaignQuery** | **String**| Campaign name filter for events | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEventsWithoutTotalCount"></a>
# **getApplicationEventsWithoutTotalCount**
> InlineResponse20018 getApplicationEventsWithoutTotalCount(applicationId, opts)

List Applications Events

Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'type': "type_example", // String | Comma-separated list of types by which to filter events. Must be exact match(es).
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created after this date
  'session': "session_example", // String | Session integration ID filter for events. Must be exact match.
  'profile': "profile_example", // String | Profile integration ID filter for events. Must be exact match.
  'customerName': "customerName_example", // String | Customer name filter for events. Will match substrings case-insensitively.
  'customerEmail': "customerEmail_example", // String | Customer e-mail address filter for events. Will match substrings case-insensitively.
  'effectsQuery': "effectsQuery_example", // String | Effects filter for events. Will perform a full-text search on the text content of the events effects, if any.
  'attributesQuery': "attributesQuery_example", // String | Attributes filter for events. Will perform a full-text search on the text content of the events attributes, both keys and values.
  'ruleQuery': "ruleQuery_example", // String | Rule name filter for events
  'campaignQuery': "campaignQuery_example" // String | Campaign name filter for events
};
apiInstance.getApplicationEventsWithoutTotalCount(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **type** | **String**| Comma-separated list of types by which to filter events. Must be exact match(es). | [optional] 
 **createdBefore** | **Date**| Only return events created before this date | [optional] 
 **createdAfter** | **Date**| Only return events created after this date | [optional] 
 **session** | **String**| Session integration ID filter for events. Must be exact match. | [optional] 
 **profile** | **String**| Profile integration ID filter for events. Must be exact match. | [optional] 
 **customerName** | **String**| Customer name filter for events. Will match substrings case-insensitively. | [optional] 
 **customerEmail** | **String**| Customer e-mail address filter for events. Will match substrings case-insensitively. | [optional] 
 **effectsQuery** | **String**| Effects filter for events. Will perform a full-text search on the text content of the events effects, if any. | [optional] 
 **attributesQuery** | **String**| Attributes filter for events. Will perform a full-text search on the text content of the events attributes, both keys and values. | [optional] 
 **ruleQuery** | **String**| Rule name filter for events | [optional] 
 **campaignQuery** | **String**| Campaign name filter for events | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationSession"></a>
# **getApplicationSession**
> ApplicationSession getApplicationSession(applicationId, sessionId)

Get Application Session



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var sessionId = 56; // Number | 

apiInstance.getApplicationSession(applicationId, sessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **sessionId** | **Number**|  | 

### Return type

[**ApplicationSession**](ApplicationSession.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationSessions"></a>
# **getApplicationSessions**
> InlineResponse20016 getApplicationSessions(applicationId, opts)

List Application Sessions



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'profile': "profile_example", // String | Profile integration ID filter for sessions. Must be exact match.
  'state': "state_example", // String | Filter by sessions with this state. Must be exact match.
  'coupon': "coupon_example" // String | Filter by sessions with this coupon. Must be exact match.
};
apiInstance.getApplicationSessions(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **profile** | **String**| Profile integration ID filter for sessions. Must be exact match. | [optional] 
 **state** | **String**| Filter by sessions with this state. Must be exact match. | [optional] 
 **coupon** | **String**| Filter by sessions with this coupon. Must be exact match. | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplications"></a>
# **getApplications**
> InlineResponse2002 getApplications(opts)

List Applications

List all application in the current account.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getApplications(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAttribute"></a>
# **getAttribute**
> Attribute getAttribute(attributeId)

Get a custom attribute

Returns custom attribute for the account by its id. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var attributeId = 56; // Number | 

apiInstance.getAttribute(attributeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Number**|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaign"></a>
# **getCampaign**
> Campaign getCampaign(applicationId, campaignId)

Get a Campaign



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

apiInstance.getCampaign(applicationId, campaignId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignAnalytics"></a>
# **getCampaignAnalytics**
> InlineResponse20011 getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts)

Get analytics of campaigns



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var opts = { 
  'granularity': "granularity_example" // String | The time interval between the results in the returned time-series.
};
apiInstance.getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **granularity** | **String**| The time interval between the results in the returned time-series. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignByAttributes"></a>
# **getCampaignByAttributes**
> InlineResponse2003 getCampaignByAttributes(applicationId, body, opts)

Get a list of all campaigns that match the given attributes

Gets a list of all the campaigns that exactly match a set of attributes. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.CampaignSearch(); // CampaignSearch | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.getCampaignByAttributes(applicationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**CampaignSearch**](CampaignSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignSet"></a>
# **getCampaignSet**
> CampaignSet getCampaignSet(applicationId)

List CampaignSet



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

apiInstance.getCampaignSet(applicationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 

### Return type

[**CampaignSet**](CampaignSet.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaigns"></a>
# **getCampaigns**
> InlineResponse2003 getCampaigns(applicationId, opts)

List your Campaigns



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.
  'name': "name_example", // String | Filter results performing case-insensitive matching against the name of the campaign.
  'tags': "tags_example", // String | Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
};
apiInstance.getCampaigns(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 
 **name** | **String**| Filter results performing case-insensitive matching against the name of the campaign. | [optional] 
 **tags** | **String**| Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \&quot;name\&quot; query parameter, a logical OR will be performed to search both tags and name for the provided values  | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChanges"></a>
# **getChanges**
> InlineResponse20025 getChanges(opts)

Get audit log for an account

Get list of changes caused by API calls for an account. Only accessible for admins.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getChanges(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCoupons"></a>
# **getCoupons**
> InlineResponse2001 getCoupons(applicationId, campaignId, opts)

List Coupons



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'startsAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'startsBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'expiresAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'expiresBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false // Boolean | Filter results to an exact case-insensitive matching against the coupon code
};
apiInstance.getCoupons(applicationId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **startsAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **startsBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **expiresAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **expiresBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByAttributes"></a>
# **getCouponsByAttributes**
> InlineResponse2001 getCouponsByAttributes(applicationId, campaignId, body, opts)

Get a list of the coupons that match the given attributes

Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.CouponSearch(); // CouponSearch | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example" // String | Filter results by batches of coupons
};
apiInstance.getCouponsByAttributes(applicationId, campaignId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**CouponSearch**](CouponSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByAttributesApplicationWide"></a>
# **getCouponsByAttributesApplicationWide**
> InlineResponse2001 getCouponsByAttributesApplicationWide(applicationId, body, opts)

Get a list of the coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria Application wide 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.CouponSearch(); // CouponSearch | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.getCouponsByAttributesApplicationWide(applicationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**CouponSearch**](CouponSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsWithoutTotalCount"></a>
# **getCouponsWithoutTotalCount**
> InlineResponse2005 getCouponsWithoutTotalCount(applicationId, campaignId, opts)

List Coupons



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false // Boolean | Filter results to an exact case-insensitive matching against the coupon code
};
apiInstance.getCouponsWithoutTotalCount(applicationId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerActivityReport"></a>
# **getCustomerActivityReport**
> CustomerActivityReport getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts)

Get Activity Report for Single Customer

Fetch summary report for single application customer based on a time range

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var applicationId = 56; // Number | 

var customerId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **applicationId** | **Number**|  | 
 **customerId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**CustomerActivityReport**](CustomerActivityReport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerActivityReports"></a>
# **getCustomerActivityReports**
> InlineResponse20014 getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'name': "name_example", // String | Only return reports matching the customer name
  'integrationId': "integrationId_example", // String | Only return reports matching the integrationId
  'campaignName': "campaignName_example", // String | Only return reports matching the campaignName
  'advocateName': "advocateName_example" // String | Only return reports matching the current customer referrer name
};
apiInstance.getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **name** | **String**| Only return reports matching the customer name | [optional] 
 **integrationId** | **String**| Only return reports matching the integrationId | [optional] 
 **campaignName** | **String**| Only return reports matching the campaignName | [optional] 
 **advocateName** | **String**| Only return reports matching the current customer referrer name | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerActivityReportsWithoutTotalCount"></a>
# **getCustomerActivityReportsWithoutTotalCount**
> InlineResponse20015 getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string

var rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'name': "name_example", // String | Only return reports matching the customer name
  'integrationId': "integrationId_example", // String | Only return reports matching the integrationId
  'campaignName': "campaignName_example", // String | Only return reports matching the campaignName
  'advocateName': "advocateName_example" // String | Only return reports matching the current customer referrer name
};
apiInstance.getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **applicationId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **name** | **String**| Only return reports matching the customer name | [optional] 
 **integrationId** | **String**| Only return reports matching the integrationId | [optional] 
 **campaignName** | **String**| Only return reports matching the campaignName | [optional] 
 **advocateName** | **String**| Only return reports matching the current customer referrer name | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerAnalytics"></a>
# **getCustomerAnalytics**
> CustomerAnalytics getCustomerAnalytics(applicationId, customerId, opts)

Get Analytics Report for a Customer

Fetch analytics for single application customer

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var customerId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getCustomerAnalytics(applicationId, customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **customerId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**CustomerAnalytics**](CustomerAnalytics.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerProfile"></a>
# **getCustomerProfile**
> ApplicationCustomer getCustomerProfile(applicationId, customerId)

Get Customer Profile



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var customerId = 56; // Number | 

apiInstance.getCustomerProfile(applicationId, customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **customerId** | **Number**|  | 

### Return type

[**ApplicationCustomer**](ApplicationCustomer.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerProfiles"></a>
# **getCustomerProfiles**
> InlineResponse20013 getCustomerProfiles(opts)

List Customer Profiles



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomerProfiles(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomersByAttributes"></a>
# **getCustomersByAttributes**
> InlineResponse20013 getCustomersByAttributes(body, opts)

Get a list of the customer profiles that match the given attributes

Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: http://help.talon.one/customer/en/portal/articles/2525263-data-model?b_id&#x3D;14115#customer-profile 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var body = new TalonOne.ApplicationCustomerSearch(); // ApplicationCustomerSearch | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomersByAttributes(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicationCustomerSearch**](ApplicationCustomerSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventTypes"></a>
# **getEventTypes**
> InlineResponse20023 getEventTypes(opts)

List Event Types

Fetch all event type definitions for your account. Each event type can be 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'name': "name_example", // String | Filter results to event types with the given name. This parameter implies `includeOldVersions`.
  'includeOldVersions': false, // Boolean | Include all versions of every event type.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getEventTypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationIds** | **String**| Filter by one or more application ids separated by comma | [optional] 
 **name** | **String**| Filter results to event types with the given name. This parameter implies &#x60;includeOldVersions&#x60;. | [optional] 
 **includeOldVersions** | **Boolean**| Include all versions of every event type. | [optional] [default to false]
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExports"></a>
# **getExports**
> InlineResponse20026 getExports(opts)

Get Exports

Get a list of all past exports 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'applicationId': 56, // Number | 
  'campaignId': 56, // Number | 
  'entity': "entity_example" // String | The name of the entity type that was exported.
};
apiInstance.getExports(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **applicationId** | **Number**|  | [optional] 
 **campaignId** | **Number**|  | [optional] 
 **entity** | **String**| The name of the entity type that was exported. | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImports"></a>
# **getImports**
> InlineResponse20027 getImports(opts)

Get Imports

Get a list of all past imports 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getImports(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLoyaltyPoints"></a>
# **getLoyaltyPoints**
> LoyaltyLedger getLoyaltyPoints(programID, integrationID)

get the Loyalty Ledger for this integrationID

Get the Loyalty Ledger for this profile integration ID.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var programID = "programID_example"; // String | The identifier for the application, must be unique within the account.

var integrationID = "integrationID_example"; // String | The identifier for the application, must be unique within the account.

apiInstance.getLoyaltyPoints(programID, integrationID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **String**| The identifier for the application, must be unique within the account. | 
 **integrationID** | **String**| The identifier for the application, must be unique within the account. | 

### Return type

[**LoyaltyLedger**](LoyaltyLedger.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLoyaltyProgram"></a>
# **getLoyaltyProgram**
> LoyaltyProgram getLoyaltyProgram(programID)

Get a loyalty program



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var programID = "programID_example"; // String | 

apiInstance.getLoyaltyProgram(programID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **String**|  | 

### Return type

[**LoyaltyProgram**](LoyaltyProgram.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLoyaltyPrograms"></a>
# **getLoyaltyPrograms**
> InlineResponse2008 getLoyaltyPrograms()

List all loyalty Programs



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();
apiInstance.getLoyaltyPrograms().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReferrals"></a>
# **getReferrals**
> InlineResponse2006 getReferrals(applicationId, campaignId, opts)

List Referrals



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'code': "code_example", // String | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
  'advocate': "advocate_example" // String | Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
};
apiInstance.getReferrals(applicationId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **code** | **String**| Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **advocate** | **String**| Filter results by match with a profile id specified in the referral&#39;s AdvocateProfileIntegrationId field | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReferralsWithoutTotalCount"></a>
# **getReferralsWithoutTotalCount**
> InlineResponse2007 getReferralsWithoutTotalCount(applicationId, campaignId, opts)

List Referrals



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'code': "code_example", // String | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
  'advocate': "advocate_example" // String | Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
};
apiInstance.getReferralsWithoutTotalCount(applicationId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **code** | **String**| Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **advocate** | **String**| Filter results by match with a profile id specified in the referral&#39;s AdvocateProfileIntegrationId field | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRole"></a>
# **getRole**
> Role getRole(roleId)

Get information for the specified role.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var roleId = 56; // Number | 

apiInstance.getRole(roleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Number**|  | 

### Return type

[**Role**](Role.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleset"></a>
# **getRuleset**
> Ruleset getRuleset(applicationId, campaignId, rulesetId)

Get a Ruleset



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var rulesetId = 56; // Number | 

apiInstance.getRuleset(applicationId, campaignId, rulesetId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **rulesetId** | **Number**|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRulesets"></a>
# **getRulesets**
> InlineResponse2004 getRulesets(applicationId, campaignId, opts)

List Campaign Rulesets



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getRulesets(applicationId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userId)

Get a single User

Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var userId = 56; // Number | 

apiInstance.getUser(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> InlineResponse20024 getUsers(opts)

List Users in your account

Retrieve all users in your account. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhook"></a>
# **getWebhook**
> Webhook getWebhook(webhookId)

Get Webhook

Returns an webhook by its id.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var webhookId = 56; // Number | 

apiInstance.getWebhook(webhookId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhookActivationLogs"></a>
# **getWebhookActivationLogs**
> InlineResponse20021 getWebhookActivationLogs(opts)

List Webhook activation Log Entries

Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'integrationRequestUuid': "integrationRequestUuid_example", // String | Filter results by integration request UUID.
  'webhookId': 8.14, // Number | Filter results by Webhook.
  'applicationId': 8.14, // Number | 
  'campaignId': 8.14, // Number | Filter results by campaign.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
};
apiInstance.getWebhookActivationLogs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **integrationRequestUuid** | **String**| Filter results by integration request UUID. | [optional] 
 **webhookId** | **Number**| Filter results by Webhook. | [optional] 
 **applicationId** | **Number**|  | [optional] 
 **campaignId** | **Number**| Filter results by campaign. | [optional] 
 **createdBefore** | **Date**| Only return events created before this date. | [optional] 
 **createdAfter** | **Date**| Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhookLogs"></a>
# **getWebhookLogs**
> InlineResponse20022 getWebhookLogs(opts)

List Webhook Log Entries



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'webhookId': 8.14, // Number | Filter results by Webhook.
  'applicationId': 8.14, // Number | 
  'campaignId': 8.14, // Number | Filter results by campaign.
  'requestUuid': "requestUuid_example", // String | Filter results by request UUID.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
};
apiInstance.getWebhookLogs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **webhookId** | **Number**| Filter results by Webhook. | [optional] 
 **applicationId** | **Number**|  | [optional] 
 **campaignId** | **Number**| Filter results by campaign. | [optional] 
 **requestUuid** | **String**| Filter results by request UUID. | [optional] 
 **createdBefore** | **Date**| Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string. | [optional] 
 **createdAfter** | **Date**| Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhooks"></a>
# **getWebhooks**
> InlineResponse20020 getWebhooks(opts)

List Webhooks



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var opts = { 
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getWebhooks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationIds** | **String**| Filter by one or more application ids separated by comma | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshAnalytics"></a>
# **refreshAnalytics**
> refreshAnalytics()

Trigger refresh on stale analytics.

Should be used to trigger a manual refresh of analytics.

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();
apiInstance.refreshAnalytics().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeLoyaltyPoints"></a>
# **removeLoyaltyPoints**
> removeLoyaltyPoints(programID, integrationID, body)

Deduct points in a certain loyalty program for the specified customer



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var programID = "programID_example"; // String | 

var integrationID = "integrationID_example"; // String | 

var body = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 

apiInstance.removeLoyaltyPoints(programID, integrationID, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **String**|  | 
 **integrationID** | **String**|  | 
 **body** | [**LoyaltyPoints**](LoyaltyPoints.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPassword"></a>
# **resetPassword**
> NewPassword resetPassword(body)

Reset password

Consumes the supplied password reset token and updates the password for the associated account. 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var body = new TalonOne.NewPassword(); // NewPassword | 

apiInstance.resetPassword(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewPassword**](NewPassword.md)|  | 

### Return type

[**NewPassword**](NewPassword.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvanced"></a>
# **searchCouponsAdvanced**
> InlineResponse2001 searchCouponsAdvanced(applicationId, campaignId, body, opts)

Get a list of the coupons that match the given attributes

Gets a list of all the coupons with attributes matching the query criteria 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.AttributeQuery(); // AttributeQuery | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example" // String | Filter results by batches of coupons
};
apiInstance.searchCouponsAdvanced(applicationId, campaignId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**AttributeQuery**](AttributeQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvancedApplicationWide"></a>
# **searchCouponsAdvancedApplicationWide**
> InlineResponse2001 searchCouponsAdvancedApplicationWide(applicationId, body, opts)

Get a list of the coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.AttributeQuery(); // AttributeQuery | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.searchCouponsAdvancedApplicationWide(applicationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**AttributeQuery**](AttributeQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvancedApplicationWideWithoutTotalCount"></a>
# **searchCouponsAdvancedApplicationWideWithoutTotalCount**
> InlineResponse2005 searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts)

Get a list of the coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.AttributeQuery(); // AttributeQuery | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**AttributeQuery**](AttributeQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvancedWithoutTotalCount"></a>
# **searchCouponsAdvancedWithoutTotalCount**
> InlineResponse2005 searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts)

Get a list of the coupons that match the given attributes

Gets a list of all the coupons with attributes matching the query criteria 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.AttributeQuery(); // AttributeQuery | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example" // String | Filter results by batches of coupons
};
apiInstance.searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**AttributeQuery**](AttributeQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setAccountLimits"></a>
# **setAccountLimits**
> setAccountLimits(accountId, body)

Set account limits

sets account limits 

### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var accountId = 56; // Number | 

var body = new TalonOne.AccountLimits(); // AccountLimits | 

apiInstance.setAccountLimits(accountId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **body** | [**AccountLimits**](AccountLimits.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaign"></a>
# **updateCampaign**
> Campaign updateCampaign(applicationId, campaignId, body)

Update a Campaign



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.UpdateCampaign(); // UpdateCampaign | 

apiInstance.updateCampaign(applicationId, campaignId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**UpdateCampaign**](UpdateCampaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignSet"></a>
# **updateCampaignSet**
> CampaignSet updateCampaignSet(applicationId, body)

Update a Campaign Set



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var body = new TalonOne.NewCampaignSet(); // NewCampaignSet | 

apiInstance.updateCampaignSet(applicationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**NewCampaignSet**](NewCampaignSet.md)|  | 

### Return type

[**CampaignSet**](CampaignSet.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCoupon"></a>
# **updateCoupon**
> Coupon updateCoupon(applicationId, campaignId, couponId, body)

Update a Coupon



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var couponId = "couponId_example"; // String | The ID of the coupon code to update

var body = new TalonOne.UpdateCoupon(); // UpdateCoupon | 

apiInstance.updateCoupon(applicationId, campaignId, couponId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **couponId** | **String**| The ID of the coupon code to update | 
 **body** | [**UpdateCoupon**](UpdateCoupon.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCouponBatch"></a>
# **updateCouponBatch**
> updateCouponBatch(applicationId, campaignId, body)

Update a Batch of Coupons



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var body = new TalonOne.UpdateCouponBatch(); // UpdateCouponBatch | 

apiInstance.updateCouponBatch(applicationId, campaignId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**UpdateCouponBatch**](UpdateCouponBatch.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleset"></a>
# **updateRuleset**
> Ruleset updateRuleset(applicationId, campaignId, rulesetId, body)

Update a Ruleset



### Example
```javascript
var TalonOne = require('talon_one');
var defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalonOne.ManagementApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var rulesetId = 56; // Number | 

var body = new TalonOne.NewRuleset(); // NewRuleset | 

apiInstance.updateRuleset(applicationId, campaignId, rulesetId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **rulesetId** | **Number**|  | 
 **body** | [**NewRuleset**](NewRuleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

