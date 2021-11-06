# TalonOne.ManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoyaltyPoints**](ManagementApi.md#addLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/add_points | Add points in loyalty program for given customer
[**copyCampaignToApplications**](ManagementApi.md#copyCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into every specified application
[**createAdditionalCost**](ManagementApi.md#createAdditionalCost) | **POST** /v1/additional_costs | Define a new additional cost
[**createAttribute**](ManagementApi.md#createAttribute) | **POST** /v1/attributes | Create custom attribute
[**createCampaign**](ManagementApi.md#createCampaign) | **POST** /v1/applications/{applicationId}/campaigns | Create campaign
[**createCoupons**](ManagementApi.md#createCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons
[**createCouponsForMultipleRecipients**](ManagementApi.md#createCouponsForMultipleRecipients) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_with_recipients | Create coupons for multiple recipients
[**createPasswordRecoveryEmail**](ManagementApi.md#createPasswordRecoveryEmail) | **POST** /v1/password_recovery_emails | Request a password reset
[**createRuleset**](ManagementApi.md#createRuleset) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | Create ruleset
[**createSession**](ManagementApi.md#createSession) | **POST** /v1/sessions | Create session
[**deleteCampaign**](ManagementApi.md#deleteCampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete campaign
[**deleteCoupon**](ManagementApi.md#deleteCoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete coupon
[**deleteCoupons**](ManagementApi.md#deleteCoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete coupons
[**deleteReferral**](ManagementApi.md#deleteReferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete referral
[**destroySession**](ManagementApi.md#destroySession) | **DELETE** /v1/sessions | Destroy session
[**exportCoupons**](ManagementApi.md#exportCoupons) | **GET** /v1/applications/{applicationId}/export_coupons | Export coupons to CSV file
[**exportCustomerSessions**](ManagementApi.md#exportCustomerSessions) | **GET** /v1/applications/{applicationId}/export_customer_sessions | Export customer sessions to CSV file
[**exportEffects**](ManagementApi.md#exportEffects) | **GET** /v1/applications/{applicationId}/export_effects | Export triggered effects to CSV file
[**exportLoyaltyBalance**](ManagementApi.md#exportLoyaltyBalance) | **GET** /v1/loyalty_programs/{programID}/export_customer_balance | Export customer loyalty balance to a CSV file
[**exportLoyaltyLedger**](ManagementApi.md#exportLoyaltyLedger) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID}/export_log | Export a customer&#39;s loyalty ledger log to CSV file
[**exportReferrals**](ManagementApi.md#exportReferrals) | **GET** /v1/applications/{applicationId}/export_referrals | Export referrals to CSV file
[**getAccessLogsWithoutTotalCount**](ManagementApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for Application
[**getAccount**](ManagementApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get account details
[**getAccountAnalytics**](ManagementApi.md#getAccountAnalytics) | **GET** /v1/accounts/{accountId}/analytics | Get account analytics
[**getAdditionalCost**](ManagementApi.md#getAdditionalCost) | **GET** /v1/additional_costs/{additionalCostId} | Get an additional cost
[**getAdditionalCosts**](ManagementApi.md#getAdditionalCosts) | **GET** /v1/additional_costs | List additional costs
[**getAllAccessLogs**](ManagementApi.md#getAllAccessLogs) | **GET** /v1/access_logs | List access logs
[**getAllRoles**](ManagementApi.md#getAllRoles) | **GET** /v1/roles | List roles
[**getApplication**](ManagementApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
[**getApplicationApiHealth**](ManagementApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get report of health of application API
[**getApplicationCustomer**](ManagementApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get application&#39;s customer
[**getApplicationCustomerFriends**](ManagementApi.md#getApplicationCustomerFriends) | **GET** /v1/applications/{applicationId}/profile/{integrationId}/friends | List friends referred by customer profile
[**getApplicationCustomers**](ManagementApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List application&#39;s customers
[**getApplicationCustomersByAttributes**](ManagementApi.md#getApplicationCustomersByAttributes) | **POST** /v1/applications/{applicationId}/customer_search | List application customers matching the given attributes
[**getApplicationEventTypes**](ManagementApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications event types
[**getApplicationEventsWithoutTotalCount**](ManagementApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications events
[**getApplicationSession**](ManagementApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application session
[**getApplicationSessions**](ManagementApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application sessions
[**getApplications**](ManagementApi.md#getApplications) | **GET** /v1/applications | List Applications
[**getAttribute**](ManagementApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get a custom attribute
[**getAttributes**](ManagementApi.md#getAttributes) | **GET** /v1/attributes | List custom attributes
[**getAudiences**](ManagementApi.md#getAudiences) | **GET** /v1/audiences | List audiences
[**getCampaign**](ManagementApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign
[**getCampaignAnalytics**](ManagementApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
[**getCampaignByAttributes**](ManagementApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | List campaigns that match the given attributes
[**getCampaigns**](ManagementApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns
[**getChanges**](ManagementApi.md#getChanges) | **GET** /v1/changes | Get audit log for an account
[**getCouponsByAttributes**](ManagementApi.md#getCouponsByAttributes) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search | List coupons that match the given attributes
[**getCouponsWithoutTotalCount**](ManagementApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons
[**getCustomerActivityReport**](ManagementApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get customer&#39;s activity report
[**getCustomerActivityReportsWithoutTotalCount**](ManagementApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
[**getCustomerAnalytics**](ManagementApi.md#getCustomerAnalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get customer&#39;s analytics report
[**getCustomerProfile**](ManagementApi.md#getCustomerProfile) | **GET** /v1/customers/{customerId} | Get customer profile
[**getCustomerProfiles**](ManagementApi.md#getCustomerProfiles) | **GET** /v1/customers/no_total | List customer profiles
[**getCustomersByAttributes**](ManagementApi.md#getCustomersByAttributes) | **POST** /v1/customer_search/no_total | List customer profiles matching the given attributes
[**getEventTypes**](ManagementApi.md#getEventTypes) | **GET** /v1/event_types | List Event Types
[**getExports**](ManagementApi.md#getExports) | **GET** /v1/exports | Get Exports
[**getLoyaltyPoints**](ManagementApi.md#getLoyaltyPoints) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID} | Get the Loyalty Ledger for this integrationID
[**getLoyaltyProgram**](ManagementApi.md#getLoyaltyProgram) | **GET** /v1/loyalty_programs/{programID} | Get loyalty program
[**getLoyaltyPrograms**](ManagementApi.md#getLoyaltyPrograms) | **GET** /v1/loyalty_programs | List loyalty programs
[**getLoyaltyStatistics**](ManagementApi.md#getLoyaltyStatistics) | **GET** /v1/loyalty_programs/{programID}/statistics | Get loyalty program statistics by loyalty program ID
[**getReferralsWithoutTotalCount**](ManagementApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List referrals
[**getRole**](ManagementApi.md#getRole) | **GET** /v1/roles/{roleId} | Get role
[**getRuleset**](ManagementApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get ruleset
[**getRulesets**](ManagementApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List campaign rulesets
[**getUser**](ManagementApi.md#getUser) | **GET** /v1/users/{userId} | Get a single user
[**getUsers**](ManagementApi.md#getUsers) | **GET** /v1/users | List users in account
[**getWebhook**](ManagementApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook
[**getWebhookActivationLogs**](ManagementApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List webhook activation log entries
[**getWebhookLogs**](ManagementApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List webhook log entries
[**getWebhooks**](ManagementApi.md#getWebhooks) | **GET** /v1/webhooks | List webhooks
[**importCollection**](ManagementApi.md#importCollection) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId}/import | Import collection via CSV file
[**importCoupons**](ManagementApi.md#importCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_coupons | Import coupons via CSV file
[**importLoyaltyPoints**](ManagementApi.md#importLoyaltyPoints) | **POST** /v1/loyalty_programs/{programID}/import_points | Import loyalty points via CSV file
[**importPoolGiveaways**](ManagementApi.md#importPoolGiveaways) | **POST** /v1/giveaways/pools/{poolId}/import | Import giveaway codes into a giveaway pool
[**importReferrals**](ManagementApi.md#importReferrals) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_referrals | Import referrals via CSV file
[**removeLoyaltyPoints**](ManagementApi.md#removeLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/deduct_points | Deduct points in loyalty program for given customer
[**resetPassword**](ManagementApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
[**searchCouponsAdvancedApplicationWideWithoutTotalCount**](ManagementApi.md#searchCouponsAdvancedApplicationWideWithoutTotalCount) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | List coupons that match the given attributes in all active campaigns of an application
[**searchCouponsAdvancedWithoutTotalCount**](ManagementApi.md#searchCouponsAdvancedWithoutTotalCount) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total | List coupons that match the given attributes
[**updateAdditionalCost**](ManagementApi.md#updateAdditionalCost) | **PUT** /v1/additional_costs/{additionalCostId} | Update an additional cost
[**updateAttribute**](ManagementApi.md#updateAttribute) | **PUT** /v1/attributes/{attributeId} | Update a custom attribute
[**updateCampaign**](ManagementApi.md#updateCampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update campaign
[**updateCoupon**](ManagementApi.md#updateCoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update coupon
[**updateCouponBatch**](ManagementApi.md#updateCouponBatch) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Update a batch of coupons
[**updateReferral**](ManagementApi.md#updateReferral) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Update referral
[**updateRuleset**](ManagementApi.md#updateRuleset) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Update ruleset



## addLoyaltyPoints

> addLoyaltyPoints(programID, integrationID, body)

Add points in loyalty program for given customer

Add points in the specified loyalty program for the given customer.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](/integration-api/#operation/updateCustomerSessionV2). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = "programID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
let body = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 
apiInstance.addLoyaltyPoints(programID, integrationID, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
- **Accept**: Not defined


## copyCampaignToApplications

> InlineResponse2002 copyCampaignToApplications(applicationId, campaignId, body)

Copy the campaign into every specified application

Copy the campaign into every specified application.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.CampaignCopy(); // CampaignCopy | 
apiInstance.copyCampaignToApplications(applicationId, campaignId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAdditionalCost

> AccountAdditionalCost createAdditionalCost(body)

Define a new additional cost

Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.NewAdditionalCost(); // NewAdditionalCost | 
apiInstance.createAdditionalCost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewAdditionalCost**](NewAdditionalCost.md)|  | 

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAttribute

> Attribute createAttribute(body)

Create custom attribute

Create a _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on.  These attributes can then be given values when creating/updating these objects, and these values can be used in your campaign rules. For example, you could define a &#x60;zipCode&#x60; field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.NewAttribute(); // NewAttribute | 
apiInstance.createAttribute(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewAttribute**](NewAttribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCampaign

> Campaign createCampaign(applicationId, body)

Create campaign

Create a campaign. A campaign is part of an Application and contains a set of promotion rules. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = new TalonOne.NewCampaign(); // NewCampaign | 
apiInstance.createCampaign(applicationId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## createCoupons

> InlineResponse2004 createCoupons(applicationId, campaignId, body, opts)

Create coupons

Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.NewCoupons(); // NewCoupons | 
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information. 
};
apiInstance.createCoupons(applicationId, campaignId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**NewCoupons**](NewCoupons.md)|  | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information.  | [optional] [default to &#39;yes&#39;]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCouponsForMultipleRecipients

> InlineResponse2004 createCouponsForMultipleRecipients(applicationId, campaignId, body, opts)

Create coupons for multiple recipients

Create coupons according to some pattern for up to 1000 recipients.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.NewCouponsForMultipleRecipients(); // NewCouponsForMultipleRecipients | 
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information. 
};
apiInstance.createCouponsForMultipleRecipients(applicationId, campaignId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | [**NewCouponsForMultipleRecipients**](NewCouponsForMultipleRecipients.md)|  | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information.  | [optional] [default to &#39;yes&#39;]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPasswordRecoveryEmail

> NewPasswordEmail createPasswordRecoveryEmail(body)

Request a password reset

Send an email with a password recovery link to the email address of an existing account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.NewPasswordEmail(); // NewPasswordEmail | 
apiInstance.createPasswordRecoveryEmail(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## createRuleset

> Ruleset createRuleset(applicationId, campaignId, body)

Create ruleset

Create a set of rules. A ruleset is a revision of all the rules of a campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.NewRuleset(); // NewRuleset | 
apiInstance.createRuleset(applicationId, campaignId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## createSession

> Session createSession(body)

Create session

Create a session to use the Management API endpoints. Use the value of the &#x60;token&#x60; property provided in the response as bearer token in other API calls.  A token is valid for 3 months. In accordance with best pratices, use your generated token for all your API requests. Do **not** regenerate a token for each request.  This endpoint has a rate limit of 3 to 6 requests per second per account, depending on your setup. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.LoginParams(); // LoginParams | 
apiInstance.createSession(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## deleteCampaign

> deleteCampaign(applicationId, campaignId)

Delete campaign

Delete the given campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
apiInstance.deleteCampaign(applicationId, campaignId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCoupon

> deleteCoupon(applicationId, campaignId, couponId)

Delete coupon

Delete the specified coupon.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let couponId = "couponId_example"; // String | The ID of the coupon code to delete
apiInstance.deleteCoupon(applicationId, campaignId, couponId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCoupons

> deleteCoupons(applicationId, campaignId, opts)

Delete coupons

Deletes all the coupons matching the specified criteria.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'startsAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'startsBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'expiresAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'expiresBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false // Boolean | Filter results to an exact case-insensitive matching against the coupon code
};
apiInstance.deleteCoupons(applicationId, campaignId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **startsAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **startsBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **expiresAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **expiresBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
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

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteReferral

> deleteReferral(applicationId, campaignId, referralId)

Delete referral

Delete the specified referral.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let referralId = "referralId_example"; // String | The ID of the referral code to delete
apiInstance.deleteReferral(applicationId, campaignId, referralId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroySession

> destroySession()

Destroy session

Destroys the session.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
apiInstance.destroySession().then(() => {
  console.log('API called successfully.');
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportCoupons

> String exportCoupons(applicationId, opts)

Export coupons to CSV file

Download a file containing the coupons that match the given properties.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'campaignId': 3.4, // Number | Filter results by campaign.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'dateFormat': "dateFormat_example", // String | Determines the format of dates in the export document.
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Capmaigns that are expired. - `archived`: Campaigns that are archived. 
};
apiInstance.exportCoupons(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**| Filter results by campaign. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 
 **campaignState** | **String**| Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Capmaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## exportCustomerSessions

> String exportCustomerSessions(applicationId, opts)

Export customer sessions to CSV file

Download a file containing the customer sessions that match the request.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string.
  'profileIntegrationId': "profileIntegrationId_example", // String | Only return sessions for the customer that matches this customer integration ID.
  'dateFormat': "dateFormat_example", // String | Determines the format of dates in the export document.
  'customerSessionState': "customerSessionState_example" // String | Filter results by state.
};
apiInstance.exportCustomerSessions(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. | [optional] 
 **profileIntegrationId** | **String**| Only return sessions for the customer that matches this customer integration ID. | [optional] 
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 
 **customerSessionState** | **String**| Filter results by state. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## exportEffects

> String exportEffects(applicationId, opts)

Export triggered effects to CSV file

Download a file containing the triggered effects that match the given attributes.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'campaignId': 3.4, // Number | Filter results by campaign.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'dateFormat': "dateFormat_example" // String | Determines the format of dates in the export document.
};
apiInstance.exportEffects(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**| Filter results by campaign. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## exportLoyaltyBalance

> String exportLoyaltyBalance(programID)

Export customer loyalty balance to a CSV file

Download a file with the balance of each customer in the loyalty program

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = "programID_example"; // String | 
apiInstance.exportLoyaltyBalance(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **String**|  | 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## exportLoyaltyLedger

> String exportLoyaltyLedger(rangeStart, rangeEnd, programID, integrationID, opts)

Export a customer&#39;s loyalty ledger log to CSV file

Download a file with a customer&#39;s ledger log in the loyalty program

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let programID = "programID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
let opts = {
  'dateFormat': "dateFormat_example" // String | Determines the format of dates in the export document.
};
apiInstance.exportLoyaltyLedger(rangeStart, rangeEnd, programID, integrationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **programID** | **String**|  | 
 **integrationID** | **String**|  | 
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## exportReferrals

> String exportReferrals(applicationId, opts)

Export referrals to CSV file

Download a file containing the referrals that match the given parameters.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'campaignId': 3.4, // Number | Filter results by campaign.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
  'usable': "usable_example", // String | If `true`, only referrals where `usageCounter < usageLimit` will be returned. If `false`, only referrals where `usageCounter >= usageLimit` will be returned. 
  'batchId': "batchId_example", // String | Filter results by batches of referrals
  'dateFormat': "dateFormat_example" // String | Determines the format of dates in the export document.
};
apiInstance.exportReferrals(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**| Filter results by campaign. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.  | [optional] 
 **usable** | **String**| If &#x60;true&#x60;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned. If &#x60;false&#x60;, only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60; will be returned.  | [optional] 
 **batchId** | **String**| Filter results by batches of referrals | [optional] 
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv


## getAccessLogsWithoutTotalCount

> InlineResponse2008 getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts)

Get access logs for Application

Retrieve the list of API calls to this Application matching the specified criteria. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let opts = {
  'path': "path_example", // String | Only return results where the request path matches the given regular expression.
  'method': "method_example", // String | Only return results where the request method matches the given regular expression.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **path** | **String**| Only return results where the request path matches the given regular expression. | [optional] 
 **method** | **String**| Only return results where the request method matches the given regular expression. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccount

> Account getAccount(accountId)

Get account details

Return the details of your companies Talon.One account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let accountId = 56; // Number | 
apiInstance.getAccount(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountAnalytics

> AccountAnalytics getAccountAnalytics(accountId)

Get account analytics

Return the analytics of your companies Talon.One account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let accountId = 56; // Number | 
apiInstance.getAccountAnalytics(accountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getAdditionalCost

> AccountAdditionalCost getAdditionalCost(additionalCostId)

Get an additional cost

Returns additional cost for the account by its id. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let additionalCostId = 56; // Number | 
apiInstance.getAdditionalCost(additionalCostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additionalCostId** | **Number**|  | 

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAdditionalCosts

> InlineResponse20021 getAdditionalCosts(opts)

List additional costs

Returns all the defined additional costs for the account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAdditionalCosts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAccessLogs

> InlineResponse2009 getAllAccessLogs(rangeStart, rangeEnd, opts)

List access logs

Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let opts = {
  'path': "path_example", // String | Only return results where the request path matches the given regular expression.
  'method': "method_example", // String | Only return results where the request method matches the given regular expression.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getAllAccessLogs(rangeStart, rangeEnd, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **path** | **String**| Only return results where the request path matches the given regular expression. | [optional] 
 **method** | **String**| Only return results where the request method matches the given regular expression. | [optional] 
 **status** | **String**| Filter results by HTTP status codes. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRoles

> InlineResponse20029 getAllRoles()

List roles

List all roles.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
apiInstance.getAllRoles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplication

> Application getApplication(applicationId)

Get Application

Get the application specified by the ID.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
apiInstance.getApplication(applicationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationApiHealth

> ApplicationApiHealth getApplicationApiHealth(applicationId)

Get report of health of application API

Display the health of the application and show the last time the Application was used. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
apiInstance.getApplicationApiHealth(applicationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCustomer

> ApplicationCustomer getApplicationCustomer(applicationId, customerId)

Get application&#39;s customer

Retrieve the customers of the specified application.  The &#x60;customerId&#x60; parameter is the value of the &#x60;id&#x60; property of a customer profile. Get it with the [List application&#39;s customers](#operation/getApplicationCustomers) endpoint. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let customerId = 56; // Number | 
apiInstance.getApplicationCustomer(applicationId, customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCustomerFriends

> InlineResponse20019 getApplicationCustomerFriends(applicationId, integrationId, opts)

List friends referred by customer profile

List the friends referred by the specified customer profile in this Application. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let integrationId = "integrationId_example"; // String | The Integration ID of the Advocate's Profile.
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, `hasMore` will be true whenever there is a next page. `totalResultSize` will always be zero. With this flag set to false, `hasMore` will always be set to false. `totalResultSize` will contain the total number of results for this query. 
};
apiInstance.getApplicationCustomerFriends(applicationId, integrationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **integrationId** | **String**| The Integration ID of the Advocate&#39;s Profile. | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, &#x60;hasMore&#x60; will be true whenever there is a next page. &#x60;totalResultSize&#x60; will always be zero. With this flag set to false, &#x60;hasMore&#x60; will always be set to false. &#x60;totalResultSize&#x60; will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCustomers

> InlineResponse20011 getApplicationCustomers(applicationId, opts)

List application&#39;s customers

List all the customers of the specified application.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'integrationId': "integrationId_example", // String | Filter results performing an exact matching against the profile integration identifier.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, `hasMore` will be true whenever there is a next page. `totalResultSize` will always be zero. With this flag set to false, `hasMore` will always be set to false. `totalResultSize` will contain the total number of results for this query. 
};
apiInstance.getApplicationCustomers(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **integrationId** | **String**| Filter results performing an exact matching against the profile integration identifier. | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, &#x60;hasMore&#x60; will be true whenever there is a next page. &#x60;totalResultSize&#x60; will always be zero. With this flag set to false, &#x60;hasMore&#x60; will always be set to false. &#x60;totalResultSize&#x60; will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCustomersByAttributes

> InlineResponse20012 getApplicationCustomersByAttributes(applicationId, body, opts)

List application customers matching the given attributes

Get a list of the application customers matching the provided criteria.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = new TalonOne.CustomerProfileSearchQuery(); // CustomerProfileSearchQuery | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, `hasMore` will be true whenever there is a next page. `totalResultSize` will always be zero. With this flag set to false, `hasMore` will always be set to false. `totalResultSize` will contain the total number of results for this query. 
};
apiInstance.getApplicationCustomersByAttributes(applicationId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | [**CustomerProfileSearchQuery**](CustomerProfileSearchQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, &#x60;hasMore&#x60; will be true whenever there is a next page. &#x60;totalResultSize&#x60; will always be zero. With this flag set to false, &#x60;hasMore&#x60; will always be set to false. &#x60;totalResultSize&#x60; will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApplicationEventTypes

> InlineResponse20017 getApplicationEventTypes(applicationId, opts)

List Applications event types

Get all of the distinct values of the Event &#x60;type&#x60; property for events recorded in the application.  See also: [Track an event](/integration-api/#operation/trackEvent) 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getApplicationEventTypes(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationEventsWithoutTotalCount

> InlineResponse20016 getApplicationEventsWithoutTotalCount(applicationId, opts)

List Applications events

Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'type': "type_example", // String | Comma-separated list of types by which to filter events. Must be exact match(es).
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created after this date. You can use any timezone. Talon.One will convert to UTC internally.
  'session': "session_example", // String | Session integration ID filter for events. Must be exact match.
  'profile': "profile_example", // String | Profile integration ID filter for events. Must be exact match.
  'customerName': "customerName_example", // String | Customer name filter for events. Will match substrings case-insensitively.
  'customerEmail': "customerEmail_example", // String | Customer e-mail address filter for events. Will match substrings case-insensitively.
  'couponCode': "couponCode_example", // String | Coupon code
  'referralCode': "referralCode_example", // String | Referral code
  'ruleQuery': "ruleQuery_example", // String | Rule name filter for events
  'campaignQuery': "campaignQuery_example" // String | Campaign name filter for events
};
apiInstance.getApplicationEventsWithoutTotalCount(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Only return events created after this date. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **session** | **String**| Session integration ID filter for events. Must be exact match. | [optional] 
 **profile** | **String**| Profile integration ID filter for events. Must be exact match. | [optional] 
 **customerName** | **String**| Customer name filter for events. Will match substrings case-insensitively. | [optional] 
 **customerEmail** | **String**| Customer e-mail address filter for events. Will match substrings case-insensitively. | [optional] 
 **couponCode** | **String**| Coupon code | [optional] 
 **referralCode** | **String**| Referral code | [optional] 
 **ruleQuery** | **String**| Rule name filter for events | [optional] 
 **campaignQuery** | **String**| Campaign name filter for events | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationSession

> ApplicationSession getApplicationSession(applicationId, sessionId)

Get Application session

Get the details of the given session. You can list the sessions with the [List application sessions](#operation/getApplicationSessions) endpoint. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let sessionId = 56; // Number | 
apiInstance.getApplicationSession(applicationId, sessionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationSessions

> InlineResponse20015 getApplicationSessions(applicationId, opts)

List Application sessions

List all the sessions of the specified Application. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'profile': "profile_example", // String | Profile integration ID filter for sessions. Must be exact match.
  'state': "state_example", // String | Filter by sessions with this state. Must be exact match.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created after this date. You can use any timezone. Talon.One will convert to UTC internally.
  'coupon': "coupon_example", // String | Filter by sessions with this coupon. Must be exact match.
  'referral': "referral_example", // String | Filter by sessions with this referral. Must be exact match.
  'integrationId': "integrationId_example" // String | Filter by sessions with this integrationId. Must be exact match.
};
apiInstance.getApplicationSessions(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Only return events created after this date. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **coupon** | **String**| Filter by sessions with this coupon. Must be exact match. | [optional] 
 **referral** | **String**| Filter by sessions with this referral. Must be exact match. | [optional] 
 **integrationId** | **String**| Filter by sessions with this integrationId. Must be exact match. | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplications

> InlineResponse2001 getApplications(opts)

List Applications

List all application in the current account.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getApplications(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttribute

> Attribute getAttribute(attributeId)

Get a custom attribute

Returns custom attribute for the account by its id. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let attributeId = 56; // Number | 
apiInstance.getAttribute(attributeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributes

> InlineResponse20020 getAttributes(opts)

List custom attributes

Returns all the defined custom attributes for the account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'entity': "entity_example" // String | Returned attributes will be filtered by supplied entity
};
apiInstance.getAttributes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **entity** | **String**| Returned attributes will be filtered by supplied entity | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAudiences

> InlineResponse20018 getAudiences(opts)

List audiences

Get All audiences created in the account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, `hasMore` will be true whenever there is a next page. `totalResultSize` will always be zero. With this flag set to false, `hasMore` will always be set to false. `totalResultSize` will contain the total number of results for this query. 
};
apiInstance.getAudiences(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, &#x60;hasMore&#x60; will be true whenever there is a next page. &#x60;totalResultSize&#x60; will always be zero. With this flag set to false, &#x60;hasMore&#x60; will always be set to false. &#x60;totalResultSize&#x60; will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaign

> Campaign getCampaign(applicationId, campaignId)

Get campaign

Retrieve the given campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
apiInstance.getCampaign(applicationId, campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignAnalytics

> InlineResponse20010 getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts)

Get analytics of campaigns

Retrieve statistical data about the performance of the given campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let opts = {
  'granularity': "granularity_example" // String | The time interval between the results in the returned time-series.
};
apiInstance.getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignByAttributes

> InlineResponse2002 getCampaignByAttributes(applicationId, body, opts)

List campaigns that match the given attributes

Get a list of all the campaigns that match a set of attributes. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = new TalonOne.CampaignSearch(); // CampaignSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Capmaigns that are expired. - `archived`: Campaigns that are archived. 
};
apiInstance.getCampaignByAttributes(applicationId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **campaignState** | **String**| Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Capmaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCampaigns

> InlineResponse2002 getCampaigns(applicationId, opts)

List campaigns

List the campaigns of the specified application that match your filter criteria. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Capmaigns that are expired. - `archived`: Campaigns that are archived. 
  'name': "name_example", // String | Filter results performing case-insensitive matching against the name of the campaign.
  'tags': "tags_example", // String | Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'campaignGroupId': 56, // Number | Filter results to campaigns owned by the specified campaign group ID.
  'templateId': 56 // Number | The ID of the Campaign Template this Campaign was created from.
};
apiInstance.getCampaigns(applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **campaignState** | **String**| Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Capmaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [optional] 
 **name** | **String**| Filter results performing case-insensitive matching against the name of the campaign. | [optional] 
 **tags** | **String**| Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \&quot;name\&quot; query parameter, a logical OR will be performed to search both tags and name for the provided values  | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **campaignGroupId** | **Number**| Filter results to campaigns owned by the specified campaign group ID. | [optional] 
 **templateId** | **Number**| The ID of the Campaign Template this Campaign was created from. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChanges

> InlineResponse20027 getChanges(opts)

Get audit log for an account

Get list of changes caused by API calls for an account. Only accessible for admins.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'applicationId': 56, // Number | 
  'entityPath': "entityPath_example", // String | Filter results on a case insensitive matching of the url path of the entity
  'userId': 56, // Number | 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'withTotalResultSize': true, // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, `hasMore` will be true whenever there is a next page. `totalResultSize` will always be zero. With this flag set to false, `hasMore` will always be set to false. `totalResultSize` will contain the total number of results for this query. 
  'includeOld': true // Boolean | When this flag is set to false, the state without the change will not be returned. The default value is true.
};
apiInstance.getChanges(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **applicationId** | **Number**|  | [optional] 
 **entityPath** | **String**| Filter results on a case insensitive matching of the url path of the entity | [optional] 
 **userId** | **Number**|  | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, &#x60;hasMore&#x60; will be true whenever there is a next page. &#x60;totalResultSize&#x60; will always be zero. With this flag set to false, &#x60;hasMore&#x60; will always be set to false. &#x60;totalResultSize&#x60; will contain the total number of results for this query.  | [optional] 
 **includeOld** | **Boolean**| When this flag is set to false, the state without the change will not be returned. The default value is true. | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCouponsByAttributes

> InlineResponse2004 getCouponsByAttributes(applicationId, campaignId, body, opts)

List coupons that match the given attributes

Get a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.CouponSearch(); // CouponSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example" // String | Filter results by batches of coupons
};
apiInstance.getCouponsByAttributes(applicationId, campaignId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **batchId** | **String**| Filter results by batches of coupons | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCouponsWithoutTotalCount

> InlineResponse2005 getCouponsWithoutTotalCount(applicationId, campaignId, opts)

List coupons

List all the coupons matching the specified criteria. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false // Boolean | Filter results to an exact case-insensitive matching against the coupon code
};
apiInstance.getCouponsWithoutTotalCount(applicationId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerActivityReport

> CustomerActivityReport getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts)

Get customer&#39;s activity report

Fetch the summary report of a given customer in the given application, in a time range.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let applicationId = 56; // Number | 
let customerId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerActivityReportsWithoutTotalCount

> InlineResponse20014 getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'name': "name_example", // String | Only return reports matching the customer name
  'integrationId': "integrationId_example", // String | Only return reports matching the integrationId
  'campaignName': "campaignName_example", // String | Only return reports matching the campaignName
  'advocateName': "advocateName_example" // String | Only return reports matching the current customer referrer name
};
apiInstance.getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerAnalytics

> CustomerAnalytics getCustomerAnalytics(applicationId, customerId, opts)

Get customer&#39;s analytics report

Fetch analytics for a given customer in the given application.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let customerId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getCustomerAnalytics(applicationId, customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerProfile

> CustomerProfile getCustomerProfile(customerId)

Get customer profile

Return the details of the specified customer profile.  **Performance tip:** You can retrieve the same information via the Integration API, which can save you extra API requests. Consider these options: - Request the customer profile to be part of the response content using   [Update Customer Session](/integration-api/operation#updateCustomerSessionV2). - Send an empty update with the [Update Customer Profile](/integration-api/#operation/updateCustomerProfileV2) endpoint with &#x60;runRuleEngine&#x3D;false&#x60;. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let customerId = 56; // Number | 
apiInstance.getCustomerProfile(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

[**CustomerProfile**](CustomerProfile.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerProfiles

> InlineResponse20013 getCustomerProfiles(opts)

List customer profiles

List all customer profiles.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomerProfiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomersByAttributes

> InlineResponse20013 getCustomersByAttributes(body, opts)

List customer profiles matching the given attributes

Get a list of the customer profiles matching the provided criteria.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.CustomerProfileSearchQuery(); // CustomerProfileSearchQuery | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomersByAttributes(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProfileSearchQuery**](CustomerProfileSearchQuery.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventTypes

> InlineResponse20025 getEventTypes(opts)

List Event Types

Fetch all event type definitions for your account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'name': "name_example", // String | Filter results to event types with the given name. This parameter implies `includeOldVersions`.
  'includeOldVersions': false, // Boolean | Include all versions of every event type.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getEventTypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExports

> InlineResponse20028 getExports(opts)

Get Exports

List all past exports 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'applicationId': 56, // Number | 
  'campaignId': 56, // Number | 
  'entity': "entity_example" // String | The name of the entity type that was exported.
};
apiInstance.getExports(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyPoints

> LoyaltyLedger getLoyaltyPoints(programID, integrationID)

Get the Loyalty Ledger for this integrationID

Get the loyalty ledger for this profile integration ID.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](/integration-api/#operation/updateCustomerSessionV2). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = "programID_example"; // String | The identifier for the application, must be unique within the account.
let integrationID = "integrationID_example"; // String | The identifier for the application, must be unique within the account.
apiInstance.getLoyaltyPoints(programID, integrationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyProgram

> LoyaltyProgram getLoyaltyProgram(programID)

Get loyalty program

Get the specified [loyalty program](https://www.talon.one/glossary/loyalty). To list all loyalty programs, use [List loyalty programs](#operation/getLoyaltyPrograms). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | 
apiInstance.getLoyaltyProgram(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**|  | 

### Return type

[**LoyaltyProgram**](LoyaltyProgram.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyPrograms

> InlineResponse2007 getLoyaltyPrograms()

List loyalty programs

List the loyalty programs of the account.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
apiInstance.getLoyaltyPrograms().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyStatistics

> LoyaltyStatistics getLoyaltyStatistics(programID)

Get loyalty program statistics by loyalty program ID

Retrieve the statistics of the specified loyalty program such as the total active points, pending points, spent points and expired points. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | 
apiInstance.getLoyaltyStatistics(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**|  | 

### Return type

[**LoyaltyStatistics**](LoyaltyStatistics.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReferralsWithoutTotalCount

> InlineResponse2006 getReferralsWithoutTotalCount(applicationId, campaignId, opts)

List referrals

List all referrals of the specified campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'code': "code_example", // String | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
  'advocate': "advocate_example" // String | Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
};
apiInstance.getReferralsWithoutTotalCount(applicationId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **advocate** | **String**| Filter results by match with a profile id specified in the referral&#39;s AdvocateProfileIntegrationId field | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRole

> Role getRole(roleId)

Get role

Get the details of the specified role. To see all the roles, use [List roles](#operation/getAllRoles). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let roleId = 56; // Number | 
apiInstance.getRole(roleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleset

> Ruleset getRuleset(applicationId, campaignId, rulesetId)

Get ruleset

Retrieve the specified ruleset.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let rulesetId = 56; // Number | 
apiInstance.getRuleset(applicationId, campaignId, rulesetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getRulesets

> InlineResponse2003 getRulesets(applicationId, campaignId, opts)

List campaign rulesets

List all rulesets of this campaign. A ruleset is a revision of the rules of a campaign. **Important:** The response also includes deleted rules. You should only consider the latest revision of the returned rulesets. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getRulesets(applicationId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(userId)

Get a single user

Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let userId = 56; // Number | 
apiInstance.getUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> InlineResponse20026 getUsers(opts)

List users in account

Retrieve all users in your account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
};
apiInstance.getUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> Webhook getWebhook(webhookId)

Get Webhook

Returns an webhook by its id.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let webhookId = 56; // Number | 
apiInstance.getWebhook(webhookId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookActivationLogs

> InlineResponse20023 getWebhookActivationLogs(opts)

List webhook activation log entries

Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'integrationRequestUuid': "integrationRequestUuid_example", // String | Filter results by integration request UUID.
  'webhookId': 3.4, // Number | Filter results by Webhook.
  'applicationId': 3.4, // Number | 
  'campaignId': 3.4, // Number | Filter results by campaign.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally.
};
apiInstance.getWebhookActivationLogs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Only return events created before this date. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookLogs

> InlineResponse20024 getWebhookLogs(opts)

List webhook log entries

Retrieve all webhook log entries.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'webhookId': 3.4, // Number | Filter results by Webhook.
  'applicationId': 3.4, // Number | 
  'campaignId': 3.4, // Number | Filter results by campaign.
  'requestUuid': "requestUuid_example", // String | Filter results by request UUID.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally.
};
apiInstance.getWebhookLogs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **createdBefore** | **Date**| Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> InlineResponse20022 getWebhooks(opts)

List webhooks

List all webhooks.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getWebhooks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importCollection

> ModelImport importCollection(applicationId, campaignId, collectionId, opts)

Import collection via CSV file

Upload a CSV file containing the collection of string values that should be attached as payload for collection. The file should be sent as multipart data.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let collectionId = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the data that should be imported.
};
apiInstance.importCollection(applicationId, campaignId, collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **collectionId** | **Number**|  | 
 **upFile** | **String**| The file with the information about the data that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importCoupons

> ModelImport importCoupons(applicationId, campaignId, opts)

Import coupons via CSV file

Upload a CSV file containing the coupons that should be created. The file should be sent as multipart data.  The CSV file can contain the following columns:  - &#x60;value&#x60; (required): The coupon code. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;limitval&#x60;: The maximum amount of redemptions of this code. Defaults to &#x60;1&#x60; when not provided. - &#x60;attributes&#x60;: A json object describing _custom_ referral attribute names and their values. Double the double-quotes in the object.   For example, if you created a custom attribute called &#x60;category&#x60;, set it with &#x60;\&quot;{\&quot;\&quot;category\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot;&#x60;.  You can use thhe timezone of your choice. It is converted to UTC internally by Talon.One.  Example:  &#x60;&#x60;&#x60; \&quot;value\&quot;,\&quot;expirydate\&quot;,\&quot;startdate\&quot;,\&quot;recipientintegrationid\&quot;,\&quot;limitval\&quot;,\&quot;attributes\&quot; COUP1,2018-07-01T04:00:00Z,2018-05-01T04:00:00Z,cust123,1,\&quot;{\&quot;\&quot;Category\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot; &#x60;&#x60;&#x60;  Once imported, you can find the &#x60;batchId&#x60; in the Campaign Manager or by using [List coupons](#operation/getReservedCustomers). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the data that should be imported.
};
apiInstance.importCoupons(applicationId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **upFile** | **String**| The file with the information about the data that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importLoyaltyPoints

> ModelImport importLoyaltyPoints(programID, opts)

Import loyalty points via CSV file

Upload a CSV file containing the [loyalty](https://www.talon.one/pillar-pages/loyalty) points that should be created. The file should be sent as multipart data.  **Important**: Importing points does **not** overwrite existing points for any customer.  The CSV file can contain the following columns:  - &#x60;customerprofileid&#x60;: The integration ID of the customer profile that should receive the loyalty points. - &#x60;amount&#x60;: The amount of points to award to the customer profile. - &#x60;startdate&#x60;: The earliest date when the points can be redeemed. On this date and until the expiry date, the points are &#x60;active&#x60;. - &#x60;expirydate&#x60;: The latest date when the points can be redeemed. After this date, the points are &#x60;expired&#x60;. - &#x60;subledgerid&#x60; (optional): The ID of the subledger that should received the points. - &#x60;reason&#x60; (optional): A reason why these points were awarded.  You can use the timezone of your choice. It is converted to UTC internally by Talon.One.  Example:  &#x60;&#x60;&#x60;csv customerprofileid,amount,startdate,expirydate,subledgerid,reason URNGV8294NV,100,2009-11-10T23:00:00Z,2009-11-11T23:00:00Z,subledger1,appeasement &#x60;&#x60;&#x60; 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the data that should be imported.
};
apiInstance.importLoyaltyPoints(programID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**|  | 
 **upFile** | **String**| The file with the information about the data that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importPoolGiveaways

> ModelImport importPoolGiveaways(poolId, opts)

Import giveaway codes into a giveaway pool

Upload a CSV file containing the giveaway codes that should be created. Send the file as multipart data.  The CSV file can contain the following columns: - &#x60;code&#x60; (required): the code of your giveaway, for instance, a gift card redemption code. - &#x60;startdate&#x60;:  the start date in RFC3339 of the code redemption period. - &#x60;enddate&#x60;: the last date in RFC3339 of the code redemption period. - &#x60;attributes&#x60;: A json object describing _custom_ giveaway attribute names and their values. Double the double-quotes in the object.   For example, if you created a custom attribute called &#x60;provider&#x60;, set it with &#x60;\&quot;{\&quot;\&quot;provider\&quot;\&quot;: \&quot;\&quot;myPartnerCompany\&quot;\&quot;}\&quot;&#x60;.  The &#x60;startdate&#x60; and &#x60;enddate&#x60; have nothing to do with the _validity_ of the codes. They are only used by the Rule Engine to award the codes or not. You can use the timezone of your choice. It is converted to UTC internally by Talon.One. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let poolId = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the data that should be imported.
};
apiInstance.importPoolGiveaways(poolId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **Number**|  | 
 **upFile** | **String**| The file with the information about the data that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importReferrals

> ModelImport importReferrals(applicationId, campaignId, opts)

Import referrals via CSV file

Upload a CSV file containing the referrals that should be created. The file should be sent as multipart data.  The CSV file can contain the following columns:  - &#x60;code&#x60; (required): The referral code. - &#x60;advocateprofileintegrationid&#x60; (required): The profile ID of the advocate. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;limitval&#x60;: The maximum amount of redemptions of this code. Unlimited (0) when blank. - &#x60;attributes&#x60;: A json object describing _custom_ referral attribute names and their values. Double the double-quotes in the object.   For example, if you created a custom attribute called &#x60;category&#x60;, set it with &#x60;\&quot;{\&quot;\&quot;category\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot;&#x60;.  You can use the timezone of your choice. It is converted to UTC internally by Talon.One. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the data that should be imported.
};
apiInstance.importReferrals(applicationId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **upFile** | **String**| The file with the information about the data that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## removeLoyaltyPoints

> removeLoyaltyPoints(programID, integrationID, body)

Deduct points in loyalty program for given customer

Remove points from the specified loyalty program and specified customer profile.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](/integration-api/#operation/updateCustomerSessionV2). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let programID = "programID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
let body = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 
apiInstance.removeLoyaltyPoints(programID, integrationID, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
- **Accept**: Not defined


## resetPassword

> NewPassword resetPassword(body)

Reset password

Consumes the supplied password reset token and updates the password for the associated account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let body = new TalonOne.NewPassword(); // NewPassword | 
apiInstance.resetPassword(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## searchCouponsAdvancedApplicationWideWithoutTotalCount

> InlineResponse2005 searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts)

List coupons that match the given attributes in all active campaigns of an application

Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Capmaigns that are expired. - `archived`: Campaigns that are archived. 
};
apiInstance.searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **body** | **Object**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Capmaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchCouponsAdvancedWithoutTotalCount

> InlineResponse2005 searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts)

List coupons that match the given attributes

Gets a list of all the coupons with attributes matching the query criteria 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'batchId': "batchId_example" // String | Filter results by batches of coupons
};
apiInstance.searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **body** | **Object**|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**| The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with &#x60;-&#x60; to sort in descending order. | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
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


## updateAdditionalCost

> AccountAdditionalCost updateAdditionalCost(additionalCostId, body)

Update an additional cost

Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let additionalCostId = 56; // Number | 
let body = new TalonOne.NewAdditionalCost(); // NewAdditionalCost | 
apiInstance.updateAdditionalCost(additionalCostId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additionalCostId** | **Number**|  | 
 **body** | [**NewAdditionalCost**](NewAdditionalCost.md)|  | 

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAttribute

> Attribute updateAttribute(attributeId, body)

Update a custom attribute

Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name &#x60;region&#x60;, and your integration is sending &#x60;attributes.region&#x60; with customer profile updates, changing the name to &#x60;locale&#x60; would cause the integration requests to begin failing.  If you **really** need to change the &#x60;type&#x60; or &#x60;name&#x60; property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let attributeId = 56; // Number | 
let body = new TalonOne.NewAttribute(); // NewAttribute | 
apiInstance.updateAttribute(attributeId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Number**|  | 
 **body** | [**NewAttribute**](NewAttribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCampaign

> Campaign updateCampaign(applicationId, campaignId, body)

Update campaign

Update the given campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.UpdateCampaign(); // UpdateCampaign | 
apiInstance.updateCampaign(applicationId, campaignId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## updateCoupon

> Coupon updateCoupon(applicationId, campaignId, couponId, body)

Update coupon

Update the specified coupon.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let couponId = "couponId_example"; // String | The ID of the coupon code to update
let body = new TalonOne.UpdateCoupon(); // UpdateCoupon | 
apiInstance.updateCoupon(applicationId, campaignId, couponId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## updateCouponBatch

> updateCouponBatch(applicationId, campaignId, body)

Update a batch of coupons

Update a batch of coupons. You can find the &#x60;batchId&#x60; in the **Coupons** view of your Application in the Campaign Manager or by using [List coupons](#operation/getCouponsWithoutTotalCount).  To update a specific coupon, use [Update coupon](#operation/updateCoupon). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = new TalonOne.UpdateCouponBatch(); // UpdateCouponBatch | 
apiInstance.updateCouponBatch(applicationId, campaignId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
- **Accept**: Not defined


## updateReferral

> Referral updateReferral(applicationId, campaignId, referralId, body)

Update referral

Update the specified referral.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let referralId = "referralId_example"; // String | The ID of the referral code to delete
let body = new TalonOne.UpdateReferral(); // UpdateReferral | 
apiInstance.updateReferral(applicationId, campaignId, referralId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignId** | **Number**|  | 
 **referralId** | **String**| The ID of the referral code to delete | 
 **body** | [**UpdateReferral**](UpdateReferral.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRuleset

> Ruleset updateRuleset(applicationId, campaignId, rulesetId, body)

Update ruleset

Update a ruleset.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let rulesetId = 56; // Number | 
let body = new TalonOne.NewRuleset(); // NewRuleset | 
apiInstance.updateRuleset(applicationId, campaignId, rulesetId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

