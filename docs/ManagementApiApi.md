# TalononeApi.ManagementApiApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIKey**](ManagementApiApi.md#createAPIKey) | **POST** /v1/api_keys | Create an API Key
[**createApplication**](ManagementApiApi.md#createApplication) | **POST** /v1/applications | Create an Application
[**createCampaign**](ManagementApiApi.md#createCampaign) | **POST** /v1/applications/{applicationId}/campaigns | Create a Campaign
[**createCoupons**](ManagementApiApi.md#createCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create Coupons
[**createEventType**](ManagementApiApi.md#createEventType) | **POST** /v1/event_types | Create Event Type
[**createInvite**](ManagementApiApi.md#createInvite) | **POST** /v1/invites | Invite a new user to your account
[**createPasswordRecoveryEmail**](ManagementApiApi.md#createPasswordRecoveryEmail) | **POST** /v1/password_recovery_emails | Request a password reset
[**createRole**](ManagementApiApi.md#createRole) | **POST** /v1/roles | Create a role
[**createRuleset**](ManagementApiApi.md#createRuleset) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | Create a Ruleset
[**createSession**](ManagementApiApi.md#createSession) | **POST** /v1/sessions | Create a Session
[**createWebhook**](ManagementApiApi.md#createWebhook) | **POST** /v1/webhooks | Create Webhook
[**deleteAPIKey**](ManagementApiApi.md#deleteAPIKey) | **DELETE** /api_keys/{apiKeyId} | Delete an API key
[**deleteApplication**](ManagementApiApi.md#deleteApplication) | **DELETE** /v1/applications/{applicationId} | Delete an Application
[**deleteAttribute**](ManagementApiApi.md#deleteAttribute) | **DELETE** /v1/attributes/{attributeId} | Delete a custom attribute
[**deleteCampaign**](ManagementApiApi.md#deleteCampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete a Campaign
[**deleteCoupon**](ManagementApiApi.md#deleteCoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete one Coupon
[**deleteCoupons**](ManagementApiApi.md#deleteCoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete Coupons
[**deleteEventType**](ManagementApiApi.md#deleteEventType) | **DELETE** /v1/event_types/{eventTypeId} | Delete Event Type
[**deleteReferral**](ManagementApiApi.md#deleteReferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete one Referral
[**deleteRole**](ManagementApiApi.md#deleteRole) | **DELETE** /roles/{roleId} | Delete a role
[**deleteRuleset**](ManagementApiApi.md#deleteRuleset) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Delete a Ruleset
[**deleteUser**](ManagementApiApi.md#deleteUser) | **DELETE** /v1/users/{userId} | Delete a User
[**deleteWebhook**](ManagementApiApi.md#deleteWebhook) | **DELETE** /v1/webhooks/{webhookId} | Delete Webhook
[**destroySession**](ManagementApiApi.md#destroySession) | **DELETE** /v1/sessions | Destroy a Session
[**duplicateCampaignToApplications**](ManagementApiApi.md#duplicateCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/campaign_duplicate | Duplicate the campaign into every specified application
[**getAPIKey**](ManagementApiApi.md#getAPIKey) | **GET** /api_keys/{apiKeyId} | Get API Key
[**getAPIKeys**](ManagementApiApi.md#getAPIKeys) | **GET** /v1/api_keys | List API Keys for the account
[**getAccessLogs**](ManagementApiApi.md#getAccessLogs) | **GET** /v1/applications/{applicationId}/access_logs | Get access logs for application
[**getAccessLogsWithoutTotalCount**](ManagementApiApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for application
[**getAccount**](ManagementApiApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get Account Details
[**getAllAccessLogs**](ManagementApiApi.md#getAllAccessLogs) | **GET** /v1/access_logs | Get all access logs
[**getApplication**](ManagementApiApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
[**getApplicationApiHealth**](ManagementApiApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get report of health of application API
[**getApplicationCustomer**](ManagementApiApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get Application Customer
[**getApplicationCustomers**](ManagementApiApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List Application Customers
[**getApplicationCustomersByAttributes**](ManagementApiApi.md#getApplicationCustomersByAttributes) | **POST** /v1/application_customer_search | Get a list of the customer profiles that match the given attributes
[**getApplicationEventTypes**](ManagementApiApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications Event Types
[**getApplicationEvents**](ManagementApiApi.md#getApplicationEvents) | **GET** /v1/applications/{applicationId}/events | List Applications Events
[**getApplicationEventsWithoutTotalCount**](ManagementApiApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications Events
[**getApplicationSession**](ManagementApiApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application Session
[**getApplicationSessions**](ManagementApiApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application Sessions
[**getApplications**](ManagementApiApi.md#getApplications) | **GET** /v1/applications | List Applications
[**getAttribute**](ManagementApiApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get a custom attribute
[**getCampaign**](ManagementApiApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get a Campaign
[**getCampaignAnalytics**](ManagementApiApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
[**getCampaignByAttributes**](ManagementApiApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | Get a list of all campaigns that match the given attributes
[**getCampaignSet**](ManagementApiApi.md#getCampaignSet) | **GET** /v1/applications/{applicationId}/campaign_set | List CampaignSet
[**getCampaigns**](ManagementApiApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List your Campaigns
[**getChanges**](ManagementApiApi.md#getChanges) | **GET** /v1/changes | Get audit log for an account
[**getCoupons**](ManagementApiApi.md#getCoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | List Coupons
[**getCouponsByAttributes**](ManagementApiApi.md#getCouponsByAttributes) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search | Get a list of the coupons that match the given attributes
[**getCouponsByAttributesApplicationWide**](ManagementApiApi.md#getCouponsByAttributesApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search | Get a list of the coupons that match the given attributes in all active campaigns of an application
[**getCouponsWithoutTotalCount**](ManagementApiApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List Coupons
[**getCustomerActivityReport**](ManagementApiApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get Activity Report for Single Customer
[**getCustomerActivityReports**](ManagementApiApi.md#getCustomerActivityReports) | **GET** /v1/applications/{applicationId}/customer_activity_reports | Get Activity Reports for Application Customers
[**getCustomerActivityReportsWithoutTotalCount**](ManagementApiApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
[**getEventType**](ManagementApiApi.md#getEventType) | **GET** /v1/event_types/{eventTypeId} | Get Event Type
[**getEventTypes**](ManagementApiApi.md#getEventTypes) | **GET** /v1/event_types | List Event Types
[**getExports**](ManagementApiApi.md#getExports) | **GET** /v1/exports | Get Exports
[**getFeaturesFeed**](ManagementApiApi.md#getFeaturesFeed) | **GET** /v1/misc/help_center_articles | Fetch the features RSS feed.
[**getImports**](ManagementApiApi.md#getImports) | **GET** /v1/imports | Get Imports
[**getManagerConfig**](ManagementApiApi.md#getManagerConfig) | **GET** /v1/manager_config | Get Campaign Manager config
[**getReferrals**](ManagementApiApi.md#getReferrals) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals | List Referrals
[**getReferralsWithoutTotalCount**](ManagementApiApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List Referrals
[**getRole**](ManagementApiApi.md#getRole) | **GET** /roles/{roleId} | Get role
[**getRoles**](ManagementApiApi.md#getRoles) | **GET** /v1/roles | List roles for the account
[**getRuleset**](ManagementApiApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get a Ruleset
[**getRulesets**](ManagementApiApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List Campaign Rulesets
[**getUser**](ManagementApiApi.md#getUser) | **GET** /v1/users/{userId} | Get a single User
[**getUsers**](ManagementApiApi.md#getUsers) | **GET** /v1/users | List Users in your account
[**getWebhook**](ManagementApiApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook
[**getWebhookActivationLogs**](ManagementApiApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List Webhook activation Log Entries
[**getWebhookLogs**](ManagementApiApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List Webhook Log Entries
[**getWebhooks**](ManagementApiApi.md#getWebhooks) | **GET** /v1/webhooks | List Webhooks
[**refreshAnalytics**](ManagementApiApi.md#refreshAnalytics) | **POST** /v1/refresh_analytics | Triger refresh on stale analytics.
[**renewAPIToken**](ManagementApiApi.md#renewAPIToken) | **PUT** /v1/api_keys/renew_token | Renew the token for an API key
[**resetPassword**](ManagementApiApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
[**searchCouponsAdvanced**](ManagementApiApi.md#searchCouponsAdvanced) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced | Get a list of the coupons that match the given attributes
[**searchCouponsAdvancedApplicationWide**](ManagementApiApi.md#searchCouponsAdvancedApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search_advanced | Get a list of the coupons that match the given attributes in all active campaigns of an application
[**updateAPIKey**](ManagementApiApi.md#updateAPIKey) | **PUT** /api_keys/{apiKeyId} | Update API key data
[**updateAccount**](ManagementApiApi.md#updateAccount) | **PUT** /v1/accounts/{accountId} | Update Account
[**updateApplication**](ManagementApiApi.md#updateApplication) | **PUT** /v1/applications/{applicationId} | Update Application data
[**updateAttribute**](ManagementApiApi.md#updateAttribute) | **PUT** /v1/attributes/{attributeId} | Update a custom attribute
[**updateCampaign**](ManagementApiApi.md#updateCampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update a Campaign
[**updateCampaignSet**](ManagementApiApi.md#updateCampaignSet) | **PUT** /v1/applications/{applicationId}/campaign_set | Update a Campaign Set
[**updateCoupon**](ManagementApiApi.md#updateCoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update a Coupon
[**updateManagerConfig**](ManagementApiApi.md#updateManagerConfig) | **PUT** /v1/manager_config | Update Campaign Manager config
[**updateRole**](ManagementApiApi.md#updateRole) | **PUT** /roles/{roleId} | Update role data
[**updateRuleset**](ManagementApiApi.md#updateRuleset) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Update a Ruleset
[**updateUser**](ManagementApiApi.md#updateUser) | **PUT** /v1/users/{userId} | Update User data
[**updateUserLatestFeature**](ManagementApiApi.md#updateUserLatestFeature) | **PUT** /v1/misc/update_user_latest_feature | Updates the latest feature without the need of the user&#39;s password
[**updateWebhook**](ManagementApiApi.md#updateWebhook) | **PUT** /v1/webhooks/{webhookId} | Update Webhook


<a name="createAPIKey"></a>
# **createAPIKey**
> InlineResponse201 createAPIKey(opts)

Create an API Key

Create a new API key in the account.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body13() // Body13 | 
};
apiInstance.createAPIKey(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body13**](Body13.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createApplication"></a>
# **createApplication**
> InlineResponse200Data createApplication(opts)

Create an Application

Create a new application in the current account.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body() // Body | 
};
apiInstance.createApplication(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

[**InlineResponse200Data**](InlineResponse200Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCampaign"></a>
# **createCampaign**
> InlineResponse2001Data createCampaign(applicationId, opts)

Create a Campaign



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body2() // Body2 | 
};
apiInstance.createCampaign(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**Body2**](Body2.md)|  | [optional] 

### Return type

[**InlineResponse2001Data**](InlineResponse2001Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCoupons"></a>
# **createCoupons**
> InlineResponse2004 createCoupons(applicationId, campaignId, opts)

Create Coupons

Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupns can be created.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'silent': "silent_example", // String | If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
  'body': new TalononeApi.Body9() // Body9 | 
};
apiInstance.createCoupons(applicationId, campaignId, opts).then(function(data) {
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
 **silent** | **String**| If set to &#39;yes&#39;, response will be an empty 204, otherwise a list of the coupons generated (to to 1000). | [optional] 
 **body** | [**Body9**](Body9.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEventType"></a>
# **createEventType**
> InlineResponse20026Data createEventType(body)

Create Event Type

Define a new event type. Due to event types being immutable, this operation also serves the purpose of updating an event type. To create a new version of an existing event type use the same name with a new &#x60;version&#x60; (by convention the new version is &#x60;oldVersion + 1&#x60;, but any unique &#x60;(name, version)&#x60; combination is allowed. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var body = new TalononeApi.Body22(); // Body22 | 

apiInstance.createEventType(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body22**](Body22.md)|  | 

### Return type

[**InlineResponse20026Data**](InlineResponse20026Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInvite"></a>
# **createInvite**
> InlineResponse20027Data createInvite(opts)

Invite a new user to your account

Creates a new invitation within your account. To trigger sending of an invitation email, use the &#x60;createInviteEmail&#x60; operation below. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body24() // Body24 | 
};
apiInstance.createInvite(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body24**](Body24.md)|  | [optional] 

### Return type

[**InlineResponse20027Data**](InlineResponse20027Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPasswordRecoveryEmail"></a>
# **createPasswordRecoveryEmail**
> InlineResponse204 createPasswordRecoveryEmail(opts)

Request a password reset

Sends an email with a password recovery link to the email of an existing account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body25() // Body25 | 
};
apiInstance.createPasswordRecoveryEmail(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body25**](Body25.md)|  | [optional] 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRole"></a>
# **createRole**
> InlineResponse2009Data createRole(opts)

Create a role

Create a new role in the account.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body16() // Body16 | 
};
apiInstance.createRole(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body16**](Body16.md)|  | [optional] 

### Return type

[**InlineResponse2009Data**](InlineResponse2009Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleset"></a>
# **createRuleset**
> InlineResponse2003Data createRuleset(applicationId, campaignId, opts)

Create a Ruleset



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body7() // Body7 | 
};
apiInstance.createRuleset(applicationId, campaignId, opts).then(function(data) {
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
 **body** | [**Body7**](Body7.md)|  | [optional] 

### Return type

[**InlineResponse2003Data**](InlineResponse2003Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSession"></a>
# **createSession**
> InlineResponse2011 createSession(opts)

Create a Session



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body28() // Body28 | 
};
apiInstance.createSession(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body28**](Body28.md)|  | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebhook"></a>
# **createWebhook**
> InlineResponse20023Data createWebhook(body)

Create Webhook

Creates a new webhook.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var body = new TalononeApi.Body20(); // Body20 | 

apiInstance.createWebhook(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body20**](Body20.md)|  | 

### Return type

[**InlineResponse20023Data**](InlineResponse20023Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAPIKey"></a>
# **deleteAPIKey**
> deleteAPIKey(apiKeyId)

Delete an API key

Delete an API Key.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var apiKeyId = 56; // Number | The identifier for the API key

apiInstance.deleteAPIKey(apiKeyId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | **Number**| The identifier for the API key | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApplication"></a>
# **deleteApplication**
> deleteApplication(applicationId)

Delete an Application

Delete the application specified by the ID. Also deletes associated data.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

apiInstance.deleteApplication(applicationId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAttribute"></a>
# **deleteAttribute**
> deleteAttribute(attributeId)

Delete a custom attribute

Removes a defined custom attribute.  **Warning:** this will also destroy all data associated with the attribute! 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var attributeId = 56; // Number | 

apiInstance.deleteAttribute(attributeId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Number**|  | 

### Return type

null (empty response body)

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

<a name="deleteEventType"></a>
# **deleteEventType**
> deleteEventType(eventTypeId)

Delete Event Type

Removes an existing event type.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var eventTypeId = 56; // Number | 

apiInstance.deleteEventType(eventTypeId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | **Number**|  | 

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

<a name="deleteRole"></a>
# **deleteRole**
> deleteRole(roleId)

Delete a role

Delete a role.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var roleId = 56; // Number | The identifier for the role

apiInstance.deleteRole(roleId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Number**| The identifier for the role | 

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete a User



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var userId = 56; // Number | 

apiInstance.deleteUser(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebhook"></a>
# **deleteWebhook**
> deleteWebhook(webhookId)

Delete Webhook

Removes an existing webhook.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var webhookId = 56; // Number | 

apiInstance.deleteWebhook(webhookId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="destroySession"></a>
# **destroySession**
> destroySession()

Destroy a Session



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();
apiInstance.destroySession().then(function() {
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

<a name="duplicateCampaignToApplications"></a>
# **duplicateCampaignToApplications**
> InlineResponse2001 duplicateCampaignToApplications(applicationId, campaignId, opts)

Duplicate the campaign into every specified application

Duplicate the campaign into every specified application. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body5() // Body5 | 
};
apiInstance.duplicateCampaignToApplications(applicationId, campaignId, opts).then(function(data) {
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
 **body** | [**Body5**](Body5.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIKey"></a>
# **getAPIKey**
> InlineResponse2008Data getAPIKey(apiKeyId)

Get API Key

Get a specific API key.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var apiKeyId = 56; // Number | The identifier for the API key

apiInstance.getAPIKey(apiKeyId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | **Number**| The identifier for the API key | 

### Return type

[**InlineResponse2008Data**](InlineResponse2008Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIKeys"></a>
# **getAPIKeys**
> InlineResponse2008 getAPIKeys(opts)

List API Keys for the account

Show API keys for this account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAPIKeys(opts).then(function(data) {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccessLogs"></a>
# **getAccessLogs**
> InlineResponse20011 getAccessLogs(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccessLogsWithoutTotalCount"></a>
# **getAccessLogsWithoutTotalCount**
> InlineResponse20012 getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccount"></a>
# **getAccount**
> InlineResponse20029 getAccount(accountId)

Get Account Details

Return the details of your companies Talon.One account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAccessLogs"></a>
# **getAllAccessLogs**
> InlineResponse20011 getAllAccessLogs(rangeStart, rangeEnd, opts)

Get all access logs

Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplication"></a>
# **getApplication**
> InlineResponse200Data getApplication(applicationId)

Get Application

Get the application specified by the ID.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse200Data**](InlineResponse200Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationApiHealth"></a>
# **getApplicationApiHealth**
> InlineResponse20010 getApplicationApiHealth(applicationId)

Get report of health of application API



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomer"></a>
# **getApplicationCustomer**
> InlineResponse20014Data getApplicationCustomer(applicationId, customerId)

Get Application Customer



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20014Data**](InlineResponse20014Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomers"></a>
# **getApplicationCustomers**
> InlineResponse20014 getApplicationCustomers(applicationId)

List Application Customers



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationCustomersByAttributes"></a>
# **getApplicationCustomersByAttributes**
> InlineResponse20015 getApplicationCustomersByAttributes(opts)

Get a list of the customer profiles that match the given attributes

Gets a list of all the cusomer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: http://help.talon.one/customer/en/portal/articles/2525263-data-model?b_id&#x3D;14115#customer-profile 

### Example
```javascript
var TalononeApi = require('talonone_api');

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body18() // Body18 | 
};
apiInstance.getApplicationCustomersByAttributes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body18**](Body18.md)|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEventTypes"></a>
# **getApplicationEventTypes**
> InlineResponse20021 getApplicationEventTypes(applicationId, opts)

List Applications Event Types

Get all of the distinct values of the Event &#x60;type&#x60; property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent) 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEvents"></a>
# **getApplicationEvents**
> InlineResponse20019 getApplicationEvents(applicationId, opts)

List Applications Events

Lists all events recorded for an application. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationEventsWithoutTotalCount"></a>
# **getApplicationEventsWithoutTotalCount**
> InlineResponse20020 getApplicationEventsWithoutTotalCount(applicationId, opts)

List Applications Events

Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationSession"></a>
# **getApplicationSession**
> InlineResponse20018Data getApplicationSession(applicationId, sessionId)

Get Application Session



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20018Data**](InlineResponse20018Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationSessions"></a>
# **getApplicationSessions**
> InlineResponse20018 getApplicationSessions(applicationId, opts)

List Application Sessions



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'profile': "profile_example" // String | Profile integration ID filter for sessions. Must be exact match.
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

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplications"></a>
# **getApplications**
> InlineResponse200 getApplications(opts)

List Applications

List all application in the current account.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAttribute"></a>
# **getAttribute**
> InlineResponse20022 getAttribute(attributeId)

Get a custom attribute

Returns custom attribute for the account by its id. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaign"></a>
# **getCampaign**
> InlineResponse2001Data getCampaign(applicationId, campaignId)

Get a Campaign



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse2001Data**](InlineResponse2001Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignAnalytics"></a>
# **getCampaignAnalytics**
> InlineResponse20013 getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts)

Get analytics of campaigns



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | The identifier for the application

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
 **applicationId** | **Number**| The identifier for the application | 
 **campaignId** | **Number**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **granularity** | **String**| The time interval between the results in the returned time-series. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignByAttributes"></a>
# **getCampaignByAttributes**
> InlineResponse2001 getCampaignByAttributes(applicationId, opts)

Get a list of all campaigns that match the given attributes

Gets a list of all the campaigns that exactly match a set of attributes. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.
  'body': new TalononeApi.Body6() // Body6 | 
};
apiInstance.getCampaignByAttributes(applicationId, opts).then(function(data) {
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
 **body** | [**Body6**](Body6.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignSet"></a>
# **getCampaignSet**
> InlineResponse2002 getCampaignSet(applicationId)

List CampaignSet



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaigns"></a>
# **getCampaigns**
> InlineResponse2001 getCampaigns(applicationId, opts)

List your Campaigns



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
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

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChanges"></a>
# **getChanges**
> InlineResponse20028 getChanges(opts)

Get audit log for an account

Get list of changes caused by API calls for an account. Only accessible for admins.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCoupons"></a>
# **getCoupons**
> InlineResponse2004 getCoupons(applicationId, campaignId, opts)

List Coupons



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByAttributes"></a>
# **getCouponsByAttributes**
> InlineResponse2004 getCouponsByAttributes(applicationId, campaignId, opts)

Get a list of the coupons that match the given attributes

Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'body': new TalononeApi.Body11() // Body11 | 
};
apiInstance.getCouponsByAttributes(applicationId, campaignId, opts).then(function(data) {
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
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **body** | [**Body11**](Body11.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponsByAttributesApplicationWide"></a>
# **getCouponsByAttributesApplicationWide**
> InlineResponse2004 getCouponsByAttributesApplicationWide(applicationId, opts)

Get a list of the coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria Application wide 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

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
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.
  'body': new TalononeApi.Body12() // Body12 | 
};
apiInstance.getCouponsByAttributesApplicationWide(applicationId, opts).then(function(data) {
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
 **body** | [**Body12**](Body12.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
> InlineResponse20016Data getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts)

Get Activity Report for Single Customer

Fetch summary report for single application customer based on a time range

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20016Data**](InlineResponse20016Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerActivityReports"></a>
# **getCustomerActivityReports**
> InlineResponse20016 getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerActivityReportsWithoutTotalCount"></a>
# **getCustomerActivityReportsWithoutTotalCount**
> InlineResponse20017 getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventType"></a>
# **getEventType**
> InlineResponse20026Data getEventType(eventTypeId)

Get Event Type

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var eventTypeId = 56; // Number | 

apiInstance.getEventType(eventTypeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | **Number**|  | 

### Return type

[**InlineResponse20026Data**](InlineResponse20026Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventTypes"></a>
# **getEventTypes**
> InlineResponse20026 getEventTypes(opts)

List Event Types

Fetch all event type definitions for your account. Each event type can be 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExports"></a>
# **getExports**
> InlineResponse20031 getExports(opts)

Get Exports

Get a list of all past exports 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeaturesFeed"></a>
# **getFeaturesFeed**
> InlineResponse20033 getFeaturesFeed()

Fetch the features RSS feed.



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();
apiInstance.getFeaturesFeed().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImports"></a>
# **getImports**
> InlineResponse20032 getImports(opts)

Get Imports

Get a list of all past imports 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManagerConfig"></a>
# **getManagerConfig**
> InlineResponse20030 getManagerConfig()

Get Campaign Manager config

Get the current users individual campaign manager configuration. This configuration contains settings for the UI that have no effect on the operation of the API or environment. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();
apiInstance.getManagerConfig().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
> InlineResponse2009Data getRole(roleId)

Get role

Get a specific role.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var roleId = 56; // Number | The identifier for the role

apiInstance.getRole(roleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **Number**| The identifier for the role | 

### Return type

[**InlineResponse2009Data**](InlineResponse2009Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRoles"></a>
# **getRoles**
> InlineResponse2009 getRoles(opts)

List roles for the account

Show roles for this account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getRoles(opts).then(function(data) {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleset"></a>
# **getRuleset**
> InlineResponse2003Data getRuleset(applicationId, campaignId, rulesetId)

Get a Ruleset



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse2003Data**](InlineResponse2003Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRulesets"></a>
# **getRulesets**
> InlineResponse2003 getRulesets(applicationId, campaignId, opts)

List Campaign Rulesets



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> InlineResponse20027Data getUser(userId)

Get a single User

Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20027Data**](InlineResponse20027Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> InlineResponse20027 getUsers(opts)

List Users in your account

Retrieve all users in your account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhook"></a>
# **getWebhook**
> InlineResponse20023Data getWebhook(webhookId)

Get Webhook

Returns an webhook by its id.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20023Data**](InlineResponse20023Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhookActivationLogs"></a>
# **getWebhookActivationLogs**
> InlineResponse20024 getWebhookActivationLogs(opts)

List Webhook activation Log Entries

Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'integrationRequestUuid': "integrationRequestUuid_example", // String | Filter results by integration request UUID.
  'webhookId': 56, // Number | Filter results by Webhook.
  'applicationId': 56, // Number | 
  'campaignId': 56, // Number | Filter results by campaign.
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

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhookLogs"></a>
# **getWebhookLogs**
> InlineResponse20025 getWebhookLogs(opts)

List Webhook Log Entries



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'webhookId': 56, // Number | Filter results by Webhook.
  'applicationId': 56, // Number | 
  'campaignId': 56, // Number | Filter results by campaign.
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

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhooks"></a>
# **getWebhooks**
> InlineResponse20023 getWebhooks(opts)

List Webhooks



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshAnalytics"></a>
# **refreshAnalytics**
> refreshAnalytics()

Triger refresh on stale analytics.

Should be used to trigger a manual refresh of analytics.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();
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

<a name="renewAPIToken"></a>
# **renewAPIToken**
> InlineResponse2008Data renewAPIToken(opts)

Renew the token for an API key

Renew the token for an API key.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body14() // Body14 | 
};
apiInstance.renewAPIToken(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body14**](Body14.md)|  | [optional] 

### Return type

[**InlineResponse2008Data**](InlineResponse2008Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPassword"></a>
# **resetPassword**
> InlineResponse2041 resetPassword(opts)

Reset password

Consumes the supplied password reset token and updates the password for the associated account. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body26() // Body26 | 
};
apiInstance.resetPassword(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body26**](Body26.md)|  | [optional] 

### Return type

[**InlineResponse2041**](InlineResponse2041.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvanced"></a>
# **searchCouponsAdvanced**
> InlineResponse2004 searchCouponsAdvanced(applicationId, campaignId, opts)

Get a list of the coupons that match the given attributes

Gets a list of all the coupons with attributes matching the query criteria 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

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
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'body': null // Object | 
};
apiInstance.searchCouponsAdvanced(applicationId, campaignId, opts).then(function(data) {
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
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCouponsAdvancedApplicationWide"></a>
# **searchCouponsAdvancedApplicationWide**
> InlineResponse2004 searchCouponsAdvancedApplicationWide(applicationId, opts)

Get a list of the coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

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
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.
  'body': null // Object | 
};
apiInstance.searchCouponsAdvancedApplicationWide(applicationId, opts).then(function(data) {
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
 **body** | **Object**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAPIKey"></a>
# **updateAPIKey**
> InlineResponse2008Data updateAPIKey(apiKeyId, opts)

Update API key data

Change an existing API key.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var apiKeyId = 56; // Number | The identifier for the API key

var opts = { 
  'body': new TalononeApi.Body15() // Body15 | 
};
apiInstance.updateAPIKey(apiKeyId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | **Number**| The identifier for the API key | 
 **body** | [**Body15**](Body15.md)|  | [optional] 

### Return type

[**InlineResponse2008Data**](InlineResponse2008Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAccount"></a>
# **updateAccount**
> InlineResponse20029 updateAccount(accountId, opts)

Update Account

Update the details of your companies Talon.One account. The fields below are the only ones that accept updates via the API. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var accountId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body27() // Body27 | 
};
apiInstance.updateAccount(accountId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Number**|  | 
 **body** | [**Body27**](Body27.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApplication"></a>
# **updateApplication**
> InlineResponse200Data updateApplication(applicationId, opts)

Update Application data

Change the application specified by the ID.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body1() // Body1 | 
};
apiInstance.updateApplication(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**Body1**](Body1.md)|  | [optional] 

### Return type

[**InlineResponse200Data**](InlineResponse200Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAttribute"></a>
# **updateAttribute**
> InlineResponse20022 updateAttribute(attributeId, body)

Update a custom attribute

Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name &#x60;region&#x60;, and your integration is sending &#x60;attributes.region&#x60; with customer profile updates, changing the name to &#x60;locale&#x60; would cause the integration requests to begin failing.  If you **really** need to change the &#x60;type&#x60; or &#x60;name&#x60; property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var attributeId = 56; // Number | 

var body = new TalononeApi.Body19(); // Body19 | 

apiInstance.updateAttribute(attributeId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Number**|  | 
 **body** | [**Body19**](Body19.md)|  | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaign"></a>
# **updateCampaign**
> InlineResponse2001Data updateCampaign(applicationId, campaignId, opts)

Update a Campaign



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body4() // Body4 | 
};
apiInstance.updateCampaign(applicationId, campaignId, opts).then(function(data) {
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
 **body** | [**Body4**](Body4.md)|  | [optional] 

### Return type

[**InlineResponse2001Data**](InlineResponse2001Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignSet"></a>
# **updateCampaignSet**
> InlineResponse2002 updateCampaignSet(applicationId, opts)

Update a Campaign Set



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body3() // Body3 | 
};
apiInstance.updateCampaignSet(applicationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**Body3**](Body3.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCoupon"></a>
# **updateCoupon**
> InlineResponse2004Data updateCoupon(applicationId, campaignId, couponId, opts)

Update a Coupon



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var couponId = "couponId_example"; // String | The ID of the coupon code to update

var opts = { 
  'body': new TalononeApi.Body10() // Body10 | 
};
apiInstance.updateCoupon(applicationId, campaignId, couponId, opts).then(function(data) {
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
 **body** | [**Body10**](Body10.md)|  | [optional] 

### Return type

[**InlineResponse2004Data**](InlineResponse2004Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateManagerConfig"></a>
# **updateManagerConfig**
> InlineResponse20030 updateManagerConfig(opts)

Update Campaign Manager config

Updates your personal configuration of the Campaign Manager. As mentioned above, this configuration has no effect on the behaviour of the API or environment. 

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'body': new TalononeApi.Body29() // Body29 | 
};
apiInstance.updateManagerConfig(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body29**](Body29.md)|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> InlineResponse2009Data updateRole(roleId, opts)

Update role data

Change an existing role.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var roleId = "roleId_example"; // String | The identifier for this role.

var opts = { 
  'body': new TalononeApi.Body17() // Body17 | 
};
apiInstance.updateRole(roleId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| The identifier for this role. | 
 **body** | [**Body17**](Body17.md)|  | [optional] 

### Return type

[**InlineResponse2009Data**](InlineResponse2009Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleset"></a>
# **updateRuleset**
> InlineResponse2003Data updateRuleset(applicationId, campaignId, rulesetId, opts)

Update a Ruleset



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var applicationId = 56; // Number | 

var campaignId = 56; // Number | 

var rulesetId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body8() // Body8 | 
};
apiInstance.updateRuleset(applicationId, campaignId, rulesetId, opts).then(function(data) {
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
 **body** | [**Body8**](Body8.md)|  | [optional] 

### Return type

[**InlineResponse2003Data**](InlineResponse2003Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> InlineResponse20027Data updateUser(userId, opts)

Update User data



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var userId = 56; // Number | 

var opts = { 
  'body': new TalononeApi.Body23() // Body23 | 
};
apiInstance.updateUser(userId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **body** | [**Body23**](Body23.md)|  | [optional] 

### Return type

[**InlineResponse20027Data**](InlineResponse20027Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserLatestFeature"></a>
# **updateUserLatestFeature**
> updateUserLatestFeature(opts)

Updates the latest feature without the need of the user&#39;s password



### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var opts = { 
  'latestFeature': new TalononeApi.LatestFeature() // LatestFeature | 
};
apiInstance.updateUserLatestFeature(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latestFeature** | [**LatestFeature**](LatestFeature.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWebhook"></a>
# **updateWebhook**
> InlineResponse20023Data updateWebhook(webhookId, body)

Update Webhook

Updates an existing webhook.

### Example
```javascript
var TalononeApi = require('talonone_api');
var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: manager_auth
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

var apiInstance = new TalononeApi.ManagementApiApi();

var webhookId = 56; // Number | 

var body = new TalononeApi.Body21(); // Body21 | 

apiInstance.updateWebhook(webhookId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**|  | 
 **body** | [**Body21**](Body21.md)|  | 

### Return type

[**InlineResponse20023Data**](InlineResponse20023Data.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

