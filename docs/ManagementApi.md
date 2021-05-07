# TalonOne.ManagementApi

All URIs are relative to *http://your_domain.your_region.talon.one*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoyaltyPoints**](ManagementApi.md#addLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/add_points | Add points in a loyalty program for the specified customer
[**copyCampaignToApplications**](ManagementApi.md#copyCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into every specified application
[**createAdditionalCost**](ManagementApi.md#createAdditionalCost) | **POST** /v1/additional_costs | Define a new additional cost
[**createAttribute**](ManagementApi.md#createAttribute) | **POST** /v1/attributes | Define a new custom attribute
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
[**deleteRuleset**](ManagementApi.md#deleteRuleset) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Delete ruleset
[**exportCoupons**](ManagementApi.md#exportCoupons) | **GET** /v1/applications/{applicationId}/export_coupons | Export coupons to a CSV file
[**exportCustomerSessions**](ManagementApi.md#exportCustomerSessions) | **GET** /v1/applications/{applicationId}/export_customer_sessions | Export Customer Sessions to a CSV file
[**exportEffects**](ManagementApi.md#exportEffects) | **GET** /v1/applications/{applicationId}/export_effects | Export triggered Effects to a CSV file
[**exportLoyaltyBalance**](ManagementApi.md#exportLoyaltyBalance) | **GET** /v1/loyalty_programs/{programID}/export_customer_balance | Export customer loyalty balance to a CSV file
[**exportLoyaltyLedger**](ManagementApi.md#exportLoyaltyLedger) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID}/export_log | Export a customer&#39;s loyalty ledger log to a CSV file
[**getAccessLogs**](ManagementApi.md#getAccessLogs) | **GET** /v1/applications/{applicationId}/access_logs | Get access logs for application (with total count)
[**getAccessLogsWithoutTotalCount**](ManagementApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for application
[**getAccount**](ManagementApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get Account Details
[**getAccountAnalytics**](ManagementApi.md#getAccountAnalytics) | **GET** /v1/accounts/{accountId}/analytics | Get Account Analytics
[**getAdditionalCost**](ManagementApi.md#getAdditionalCost) | **GET** /v1/additional_costs/{additionalCostId} | Get an additional cost
[**getAdditionalCosts**](ManagementApi.md#getAdditionalCosts) | **GET** /v1/additional_costs | List additional costs
[**getAllAccessLogs**](ManagementApi.md#getAllAccessLogs) | **GET** /v1/access_logs | List access logs
[**getAllRoles**](ManagementApi.md#getAllRoles) | **GET** /v1/roles | List roles
[**getApplication**](ManagementApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
[**getApplicationApiHealth**](ManagementApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get report of health of application API
[**getApplicationCustomer**](ManagementApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get Application Customer
[**getApplicationCustomers**](ManagementApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List Application Customers
[**getApplicationCustomersByAttributes**](ManagementApi.md#getApplicationCustomersByAttributes) | **POST** /v1/application_customer_search | Get a list of the customer profiles that match the given attributes (with total count)
[**getApplicationEventTypes**](ManagementApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications Event Types
[**getApplicationEvents**](ManagementApi.md#getApplicationEvents) | **GET** /v1/applications/{applicationId}/events | List Applications Events (with total count)
[**getApplicationEventsWithoutTotalCount**](ManagementApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications Events
[**getApplicationSession**](ManagementApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application Session
[**getApplicationSessions**](ManagementApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application Sessions
[**getApplications**](ManagementApi.md#getApplications) | **GET** /v1/applications | List Applications
[**getAttribute**](ManagementApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get a custom attribute
[**getAttributes**](ManagementApi.md#getAttributes) | **GET** /v1/attributes | List custom attributes
[**getAudiences**](ManagementApi.md#getAudiences) | **GET** /v1/audiences | List audiences
[**getCampaign**](ManagementApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign
[**getCampaignAnalytics**](ManagementApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
[**getCampaignByAttributes**](ManagementApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | List campaigns that match the given attributes
[**getCampaigns**](ManagementApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns
[**getChanges**](ManagementApi.md#getChanges) | **GET** /v1/changes | Get audit log for an account
[**getCoupons**](ManagementApi.md#getCoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | List coupons (with total count)
[**getCouponsByAttributes**](ManagementApi.md#getCouponsByAttributes) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search | List coupons that match the given attributes
[**getCouponsByAttributesApplicationWide**](ManagementApi.md#getCouponsByAttributesApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search | List coupons that match the given attributes in all active campaigns of an application (with total count)
[**getCouponsWithoutTotalCount**](ManagementApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons
[**getCustomerActivityReport**](ManagementApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get Activity Report for Single Customer
[**getCustomerActivityReports**](ManagementApi.md#getCustomerActivityReports) | **GET** /v1/applications/{applicationId}/customer_activity_reports | Get Activity Reports for Application Customers (with total count)
[**getCustomerActivityReportsWithoutTotalCount**](ManagementApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
[**getCustomerAnalytics**](ManagementApi.md#getCustomerAnalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get Analytics Report for a Customer
[**getCustomerProfile**](ManagementApi.md#getCustomerProfile) | **GET** /v1/customers/{customerId} | Get Customer Profile
[**getCustomerProfiles**](ManagementApi.md#getCustomerProfiles) | **GET** /v1/customers/no_total | List Customer Profiles
[**getCustomersByAttributes**](ManagementApi.md#getCustomersByAttributes) | **POST** /v1/customer_search/no_total | List customer profiles that match the given attributes
[**getEventTypes**](ManagementApi.md#getEventTypes) | **GET** /v1/event_types | List event types
[**getExports**](ManagementApi.md#getExports) | **GET** /v1/exports | Get exports
[**getLoyaltyPoints**](ManagementApi.md#getLoyaltyPoints) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID} | Get integration&#39;s Loyalty Ledger
[**getLoyaltyProgram**](ManagementApi.md#getLoyaltyProgram) | **GET** /v1/loyalty_programs/{programID} | Get a loyalty program
[**getLoyaltyPrograms**](ManagementApi.md#getLoyaltyPrograms) | **GET** /v1/loyalty_programs | List loyalty programs
[**getLoyaltyStatistics**](ManagementApi.md#getLoyaltyStatistics) | **GET** /v1/loyalty_programs/{programID}/statistics | Get loyalty program statistics by loyalty program ID
[**getReferrals**](ManagementApi.md#getReferrals) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals | List referrals (with total count)
[**getReferralsWithoutTotalCount**](ManagementApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List referrals
[**getRole**](ManagementApi.md#getRole) | **GET** /v1/roles/{roleId} | Get information for the specified role
[**getRuleset**](ManagementApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get ruleset
[**getRulesets**](ManagementApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List rulesets
[**getUser**](ManagementApi.md#getUser) | **GET** /v1/users/{userId} | Get a single User
[**getUsers**](ManagementApi.md#getUsers) | **GET** /v1/users | List users
[**getWebhook**](ManagementApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook
[**getWebhookActivationLogs**](ManagementApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List Webhook activation Log Entries
[**getWebhookLogs**](ManagementApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List Webhook Log Entries
[**getWebhooks**](ManagementApi.md#getWebhooks) | **GET** /v1/webhooks | List Webhooks
[**importCoupons**](ManagementApi.md#importCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_coupons | Import coupons via CSV file
[**importLoyaltyPoints**](ManagementApi.md#importLoyaltyPoints) | **POST** /v1/loyalty_programs/{programID}/import_points | Import loyalty points via CSV file
[**importPoolGiveaways**](ManagementApi.md#importPoolGiveaways) | **POST** /v1/giveaways/pools/{poolId}/import | Import giveaways codes into a giveaways pool
[**importReferrals**](ManagementApi.md#importReferrals) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_referrals | Import referrals via CSV file
[**removeLoyaltyPoints**](ManagementApi.md#removeLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/deduct_points | Deduct points in a loyalty program for the specified customer
[**resetPassword**](ManagementApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
[**searchCouponsAdvanced**](ManagementApi.md#searchCouponsAdvanced) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced | List coupons that match the given attributes (with total count)
[**searchCouponsAdvancedApplicationWide**](ManagementApi.md#searchCouponsAdvancedApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search_advanced | List coupons that match the given attributes in all active campaigns of an application (with total count)
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

> addLoyaltyPoints(programID, integrationID, loyaltyPoints)

Add points in a loyalty program for the specified customer

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
let integrationID = "integrationID_example"; // String | 
let loyaltyPoints = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 
apiInstance.addLoyaltyPoints(programID, integrationID, loyaltyPoints).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 
 **integrationID** | **String**|  | 
 **loyaltyPoints** | [**LoyaltyPoints**](LoyaltyPoints.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## copyCampaignToApplications

> InlineResponse2002 copyCampaignToApplications(applicationId, campaignId, campaignCopy)

Copy the campaign into every specified application

Copy the campaign into every specified application.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let campaignCopy = new TalonOne.CampaignCopy(); // CampaignCopy | 
apiInstance.copyCampaignToApplications(applicationId, campaignId, campaignCopy).then((data) => {
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
 **campaignCopy** | [**CampaignCopy**](CampaignCopy.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAdditionalCost

> AccountAdditionalCost createAdditionalCost(newAdditionalCost)

Define a new additional cost

Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let newAdditionalCost = new TalonOne.NewAdditionalCost(); // NewAdditionalCost | 
apiInstance.createAdditionalCost(newAdditionalCost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newAdditionalCost** | [**NewAdditionalCost**](NewAdditionalCost.md)|  | 

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAttribute

> Attribute createAttribute(newAttribute)

Define a new custom attribute

Defines a new _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on. These attributes can then be given values when creating / updating these objects, and these values can be used in your campaign rules. For example, you could define a &#x60;zipCode&#x60; field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let newAttribute = new TalonOne.NewAttribute(); // NewAttribute | 
apiInstance.createAttribute(newAttribute).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newAttribute** | [**NewAttribute**](NewAttribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCampaign

> Campaign createCampaign(applicationId, newCampaign)

Create campaign

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let newCampaign = new TalonOne.NewCampaign(); // NewCampaign | 
apiInstance.createCampaign(applicationId, newCampaign).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **newCampaign** | [**NewCampaign**](NewCampaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCoupons

> InlineResponse2004 createCoupons(applicationId, campaignId, newCoupons, opts)

Create coupons

Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let newCoupons = new TalonOne.NewCoupons(); // NewCoupons | 
let opts = {
  'silent': "silent_example" // String | If set to `yes`, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000).
};
apiInstance.createCoupons(applicationId, campaignId, newCoupons, opts).then((data) => {
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
 **newCoupons** | [**NewCoupons**](NewCoupons.md)|  | 
 **silent** | **String**| If set to &#x60;yes&#x60;, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000). | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCouponsForMultipleRecipients

> InlineResponse2004 createCouponsForMultipleRecipients(applicationId, campaignId, newCouponsForMultipleRecipients, opts)

Create coupons for multiple recipients

Create coupons according to the specified pattern for up to 1000 recipients.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let newCouponsForMultipleRecipients = new TalonOne.NewCouponsForMultipleRecipients(); // NewCouponsForMultipleRecipients | 
let opts = {
  'silent': "silent_example" // String | If set to `yes`, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000).
};
apiInstance.createCouponsForMultipleRecipients(applicationId, campaignId, newCouponsForMultipleRecipients, opts).then((data) => {
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
 **newCouponsForMultipleRecipients** | [**NewCouponsForMultipleRecipients**](NewCouponsForMultipleRecipients.md)|  | 
 **silent** | **String**| If set to &#x60;yes&#x60;, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000). | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPasswordRecoveryEmail

> NewPasswordEmail createPasswordRecoveryEmail(newPasswordEmail)

Request a password reset

Sends an email with a password recovery link to the email of an existing account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let newPasswordEmail = new TalonOne.NewPasswordEmail(); // NewPasswordEmail | 
apiInstance.createPasswordRecoveryEmail(newPasswordEmail).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPasswordEmail** | [**NewPasswordEmail**](NewPasswordEmail.md)|  | 

### Return type

[**NewPasswordEmail**](NewPasswordEmail.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRuleset

> Ruleset createRuleset(applicationId, campaignId, newRuleset)

Create ruleset

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let newRuleset = new TalonOne.NewRuleset(); // NewRuleset | 
apiInstance.createRuleset(applicationId, campaignId, newRuleset).then((data) => {
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
 **newRuleset** | [**NewRuleset**](NewRuleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSession

> Session createSession(loginParams)

Create session

Create a session to use the other Management API endpoints. Use the &#x60;token&#x60; property of the response as bearer token.

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let loginParams = new TalonOne.LoginParams(); // LoginParams | 
apiInstance.createSession(loginParams).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginParams** | [**LoginParams**](LoginParams.md)|  | 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaign

> deleteCampaign(applicationId, campaignId)

Delete campaign

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

### Example

```javascript
import TalonOne from 'talon_one';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCoupons

> deleteCoupons(applicationId, campaignId, opts)

Delete coupons

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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


## deleteRuleset

> deleteRuleset(applicationId, campaignId, rulesetId)

Delete ruleset

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let rulesetId = 56; // Number | 
apiInstance.deleteRuleset(applicationId, campaignId, rulesetId).then(() => {
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
 **rulesetId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportCoupons

> String exportCoupons(applicationId, opts)

Export coupons to a CSV file

Download a file with the coupons that match the given attributes.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'campaignId': 3.4, // Number | Filter results by campaign.
  'sort': "sort_example", // String | 
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
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
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
 **sort** | **String**|  | [optional] 
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
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## exportCustomerSessions

> String exportCustomerSessions(applicationId, opts)

Export Customer Sessions to a CSV file

Download a file with the customer sessions that match the request.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
- **Accept**: text/csv


## exportEffects

> String exportEffects(applicationId, opts)

Export triggered Effects to a CSV file

Download a file with the triggered effects that match the given attributes.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
- **Accept**: text/csv


## exportLoyaltyBalance

> String exportLoyaltyBalance(programID)

Export customer loyalty balance to a CSV file

Download a file with the balance of each customer in the loyalty program

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
apiInstance.exportLoyaltyBalance(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## exportLoyaltyLedger

> String exportLoyaltyLedger(programID, integrationID, rangeStart, rangeEnd, opts)

Export a customer&#39;s loyalty ledger log to a CSV file

Download a file with a customer&#39;s ledger log in the loyalty program

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
let integrationID = "integrationID_example"; // String | 
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let opts = {
  'dateFormat': "dateFormat_example" // String | Determines the format of dates in the export document.
};
apiInstance.exportLoyaltyLedger(programID, integrationID, rangeStart, rangeEnd, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 
 **integrationID** | **String**|  | 
 **rangeStart** | **Date**| Only return results from after this timestamp, must be an RFC3339 timestamp string | 
 **rangeEnd** | **Date**| Only return results from before this timestamp, must be an RFC3339 timestamp string | 
 **dateFormat** | **String**| Determines the format of dates in the export document. | [optional] 

### Return type

**String**

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## getAccessLogs

> InlineResponse2008 getAccessLogs(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application (with total count)

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
  'sort': "sort_example" // String | 
};
apiInstance.getAccessLogs(applicationId, rangeStart, rangeEnd, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccessLogsWithoutTotalCount

> InlineResponse2009 getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts)

Get access logs for application

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccount

> Account getAccount(accountId)

Get Account Details

Return the details of your companies Talon.One account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

Get Account Analytics

Return the analytics of your companies Talon.One account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAccessLogs

> InlineResponse2008 getAllAccessLogs(rangeStart, rangeEnd, opts)

List access logs

Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let opts = {
  'path': "path_example", // String | Only return results where the request path matches the given regular expression.
  'method': "method_example", // String | Only return results where the request method matches the given regular expression.
  'status': "status_example", // String | Filter results by HTTP status codes.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRoles

> InlineResponse20029 getAllRoles()

List roles

### Example

```javascript
import TalonOne from 'talon_one';

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

No authorization required

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

Get Application Customer

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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


## getApplicationCustomers

> InlineResponse20011 getApplicationCustomers(applicationId, opts)

List Application Customers

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'integrationId': "integrationId_example", // String | Filter results performing an exact matching against the profile integration identifier.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query. 
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
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationCustomersByAttributes

> InlineResponse20012 getApplicationCustomersByAttributes(applicationCustomerSearch)

Get a list of the customer profiles that match the given attributes (with total count)

Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#/customerProfile 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationCustomerSearch = new TalonOne.ApplicationCustomerSearch(); // ApplicationCustomerSearch | 
apiInstance.getApplicationCustomersByAttributes(applicationCustomerSearch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationCustomerSearch** | [**ApplicationCustomerSearch**](ApplicationCustomerSearch.md)|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApplicationEventTypes

> InlineResponse20018 getApplicationEventTypes(applicationId, opts)

List Applications Event Types

Get all of the distinct values of the Event &#x60;type&#x60; property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent) 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationEvents

> InlineResponse20016 getApplicationEvents(applicationId, opts)

List Applications Events (with total count)

Lists all events recorded for an application. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
apiInstance.getApplicationEvents(applicationId, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
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


## getApplicationEventsWithoutTotalCount

> InlineResponse20017 getApplicationEventsWithoutTotalCount(applicationId, opts)

List Applications Events

Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationSession

> ApplicationSession getApplicationSession(applicationId, sessionId)

Get Application Session

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

List Application Sessions

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'entity': "entity_example" // String | 
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
 **sort** | **String**|  | [optional] 
 **entity** | **String**|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAudiences

> InlineResponse20019 getAudiences(opts)

List audiences

Get All audiences created in the account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'withTotalResultSize': true // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query. 
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
 **sort** | **String**|  | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaign

> Campaign getCampaign(applicationId, campaignId)

Get campaign

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

> InlineResponse2002 getCampaignByAttributes(applicationId, campaignSearch, opts)

List campaigns that match the given attributes

Gets a list of all the campaigns that exactly match a set of attributes. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignSearch = new TalonOne.CampaignSearch(); // CampaignSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.getCampaignByAttributes(applicationId, campaignSearch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **campaignSearch** | [**CampaignSearch**](CampaignSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**|  | [optional] 
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'campaignState': "campaignState_example", // String | Filter results by the state of the campaign.
  'name': "name_example", // String | Filter results performing case-insensitive matching against the name of the campaign.
  'tags': "tags_example", // String | Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'campaignGroupId': 56 // Number | Filter results to campaigns owned by the specified campaign group ID.
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
 **sort** | **String**|  | [optional] 
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 
 **name** | **String**| Filter results performing case-insensitive matching against the name of the campaign. | [optional] 
 **tags** | **String**| Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \&quot;name\&quot; query parameter, a logical OR will be performed to search both tags and name for the provided values  | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **campaignGroupId** | **Number**| Filter results to campaigns owned by the specified campaign group ID. | [optional] 

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'applicationId': 56, // Number | 
  'entityPath': "entityPath_example", // String | Filter results on a case insensitive matching of the url path of the entity
  'userId': 56, // Number | 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'withTotalResultSize': true, // Boolean | When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query. 
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
 **sort** | **String**|  | [optional] 
 **applicationId** | **Number**|  | [optional] 
 **entityPath** | **String**| Filter results on a case insensitive matching of the url path of the entity | [optional] 
 **userId** | **Number**|  | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **withTotalResultSize** | **Boolean**| When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query.  | [optional] 
 **includeOld** | **Boolean**| When this flag is set to false, the state without the change will not be returned. The default value is true. | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCoupons

> InlineResponse2004 getCoupons(applicationId, campaignId, opts)

List coupons (with total count)

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
apiInstance.getCoupons(applicationId, campaignId, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCouponsByAttributes

> InlineResponse2004 getCouponsByAttributes(applicationId, campaignId, couponSearch, opts)

List coupons that match the given attributes

Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let couponSearch = new TalonOne.CouponSearch(); // CouponSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
apiInstance.getCouponsByAttributes(applicationId, campaignId, couponSearch, opts).then((data) => {
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
 **couponSearch** | [**CouponSearch**](CouponSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**|  | [optional] 
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


## getCouponsByAttributesApplicationWide

> InlineResponse2004 getCouponsByAttributesApplicationWide(applicationId, couponSearch, opts)

List coupons that match the given attributes in all active campaigns of an application (with total count)

Gets a list of all the coupons with attributes matching the query criteria Application wide 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let couponSearch = new TalonOne.CouponSearch(); // CouponSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.getCouponsByAttributesApplicationWide(applicationId, couponSearch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **Number**|  | 
 **couponSearch** | [**CouponSearch**](CouponSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 
 **sort** | **String**|  | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

Get Activity Report for Single Customer

Fetch summary report for single application customer based on a time range

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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


## getCustomerActivityReports

> InlineResponse20013 getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts)

Get Activity Reports for Application Customers (with total count)

Fetch summary reports for all application customers based on a time range

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'name': "name_example", // String | Only return reports matching the customer name
  'integrationId': "integrationId_example", // String | Only return reports matching the integrationId
  'campaignName': "campaignName_example", // String | Only return reports matching the campaignName
  'advocateName': "advocateName_example" // String | Only return reports matching the current customer referrer name
};
apiInstance.getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
 **name** | **String**| Only return reports matching the customer name | [optional] 
 **integrationId** | **String**| Only return reports matching the integrationId | [optional] 
 **campaignName** | **String**| Only return reports matching the campaignName | [optional] 
 **advocateName** | **String**| Only return reports matching the current customer referrer name | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let rangeStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from after this timestamp, must be an RFC3339 timestamp string
let rangeEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | Only return results from before this timestamp, must be an RFC3339 timestamp string
let applicationId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

Get Analytics Report for a Customer

Fetch analytics for single application customer

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let customerId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**CustomerAnalytics**](CustomerAnalytics.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerProfile

> ApplicationCustomer getCustomerProfile(customerId)

Get Customer Profile

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

[**ApplicationCustomer**](ApplicationCustomer.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerProfiles

> InlineResponse20012 getCustomerProfiles(opts)

List Customer Profiles

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomersByAttributes

> InlineResponse20012 getCustomersByAttributes(applicationCustomerSearch, opts)

List customer profiles that match the given attributes

Get a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#/customerProfile 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationCustomerSearch = new TalonOne.ApplicationCustomerSearch(); // ApplicationCustomerSearch | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56 // Number | Skips the given number of items when paging through large result sets.
};
apiInstance.getCustomersByAttributes(applicationCustomerSearch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationCustomerSearch** | [**ApplicationCustomerSearch**](ApplicationCustomerSearch.md)|  | 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventTypes

> InlineResponse20025 getEventTypes(opts)

List event types

Fetch all event type definitions for your account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'name': "name_example", // String | Filter results to event types with the given name. This parameter implies `includeOldVersions`.
  'includeOldVersions': false, // Boolean | Include all versions of every event type.
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExports

> InlineResponse20028 getExports(opts)

Get exports

Get a list of all past exports 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

Get integration&#39;s Loyalty Ledger

Get the Loyalty Ledger for this profile integration ID.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
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
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 
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

Get a loyalty program

Get a loyalty program.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
apiInstance.getLoyaltyProgram(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 

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

List all the loyalty programs.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
apiInstance.getLoyaltyStatistics(programID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 

### Return type

[**LoyaltyStatistics**](LoyaltyStatistics.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReferrals

> InlineResponse201 getReferrals(applicationId, campaignId, opts)

List referrals (with total count)

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'code': "code_example", // String | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
  'advocate': "advocate_example" // String | Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
};
apiInstance.getReferrals(applicationId, campaignId, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
 **code** | **String**| Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **advocate** | **String**| Filter results by match with a profile id specified in the referral&#39;s AdvocateProfileIntegrationId field | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReferralsWithoutTotalCount

> InlineResponse2006 getReferralsWithoutTotalCount(applicationId, campaignId, opts)

List referrals

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

Get information for the specified role

### Example

```javascript
import TalonOne from 'talon_one';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleset

> Ruleset getRuleset(applicationId, campaignId, rulesetId)

Get ruleset

Retrieve the details of a ruleset.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

List rulesets

List all rulesets in the given campaign.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(userId)

Get a single User

Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

List users

Retrieve all users in your account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example" // String | 
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
 **sort** | **String**|  | [optional] 

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
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

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

List Webhook activation Log Entries

Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

List Webhook Log Entries

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

List Webhooks

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let opts = {
  'applicationIds': "applicationIds_example", // String | Filter by one or more application ids separated by comma
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
 **pageSize** | **Number**| The number of items to include in this response. When omitted, the maximum value of 1000 will be used. | [optional] 
 **skip** | **Number**| Skips the given number of items when paging through large result sets. | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importCoupons

> ModelImport importCoupons(applicationId, campaignId, opts)

Import coupons via CSV file

Upload a CSV file containing the coupons that should be created. The file should be sent as multipart data.

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'upfile': "upfile_example" // String | The file with the information about the loyalty points that should be imported.
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
 **upfile** | **String**| The file with the information about the loyalty points that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importLoyaltyPoints

> ModelImport importLoyaltyPoints(programID, opts)

Import loyalty points via CSV file

Upload a CSV file containing the loyalty points that should be created. The file should be sent as multipart data.

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the loyalty points that should be imported.
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
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 
 **upFile** | **String**| The file with the information about the loyalty points that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importPoolGiveaways

> ModelImport importPoolGiveaways(poolId, opts)

Import giveaways codes into a giveaways pool

Upload a CSV file containing the giveaways codes that should be created. Send the file as multipart data.  The CSV file can contain the following columns: - &#x60;code&#x60; (required): the code of your giveaway, for instance, a gift card redemption code. - &#x60;startdate&#x60;:  the start date in RFC3339 of the code redemption period. - &#x60;enddate&#x60;: the last date in RFC3339 of the code redemption period. - &#x60;attributes&#x60;: A json object describing _custom_ giveaways attribute names and their values. Double the double-quotes in the object.   For example, if you created a custom attribute called &#x60;provider&#x60;, set it with &#x60;\&quot;{\&quot;\&quot;provider\&quot;\&quot;: \&quot;\&quot;myPartnerCompany\&quot;\&quot;}\&quot;&#x60;.  The &#x60;startdate&#x60; and &#x60;enddate&#x60; have nothing to do with the _validity_ of the codes. They are only used by the Rule Engine to award the codes or not. You can use the timezone of your choice. It is converted to UTC internally by Talon.One. 

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let poolId = 56; // Number | 
let opts = {
  'upfile': "upfile_example" // String | The file with the information about the loyalty points that should be imported.
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
 **upfile** | **String**| The file with the information about the loyalty points that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## importReferrals

> ModelImport importReferrals(applicationId, campaignId, opts)

Import referrals via CSV file

Upload a CSV file containing the referrals that should be created. The file should be sent as multipart data.  The CSV file can contain the following colums:  - &#x60;code&#x60; (required): the referral code. - &#x60;advocateprofileintegrationid&#x60; (required): The profile ID of the advocate. - &#x60;startdate&#x60;: the start date in RFC3339 of the code redemption period. - &#x60;expirydate&#x60;: the end date in RFC3339 of the code redemption period. - &#x60;limitval&#x60;: The maximum amount of redemptions of this code. Unlimited (0) when blank. - &#x60;attributes&#x60;: A json object describing _custom_ referral attribute names and their values. Double the double-quotes in the object.   For example, if you created a custom attribute called &#x60;category&#x60;, set it with &#x60;\&quot;{\&quot;\&quot;category\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot;&#x60;.  You can use the timezone of your choice. It is converted to UTC internally by Talon.One. 

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let opts = {
  'upFile': "upFile_example" // String | The file with the information about the loyalty points that should be imported.
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
 **upFile** | **String**| The file with the information about the loyalty points that should be imported. | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## removeLoyaltyPoints

> removeLoyaltyPoints(programID, integrationID, loyaltyPoints)

Deduct points in a loyalty program for the specified customer

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let programID = 56; // Number | The identifier for the loyalty program, must be unique within the account.
let integrationID = "integrationID_example"; // String | 
let loyaltyPoints = new TalonOne.LoyaltyPoints(); // LoyaltyPoints | 
apiInstance.removeLoyaltyPoints(programID, integrationID, loyaltyPoints).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programID** | **Number**| The identifier for the loyalty program, must be unique within the account. | 
 **integrationID** | **String**|  | 
 **loyaltyPoints** | [**LoyaltyPoints**](LoyaltyPoints.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## resetPassword

> NewPassword resetPassword(newPassword)

Reset password

Consumes the supplied password reset token and updates the password for the associated account. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let newPassword = new TalonOne.NewPassword(); // NewPassword | 
apiInstance.resetPassword(newPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPassword** | [**NewPassword**](NewPassword.md)|  | 

### Return type

[**NewPassword**](NewPassword.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchCouponsAdvanced

> InlineResponse2004 searchCouponsAdvanced(applicationId, campaignId, body, opts)

List coupons that match the given attributes (with total count)

Gets a list of all the coupons with attributes matching the query criteria 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
apiInstance.searchCouponsAdvanced(applicationId, campaignId, body, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
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


## searchCouponsAdvancedApplicationWide

> InlineResponse2004 searchCouponsAdvancedApplicationWide(applicationId, body, opts)

List coupons that match the given attributes in all active campaigns of an application (with total count)

Get a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
};
apiInstance.searchCouponsAdvancedApplicationWide(applicationId, body, opts).then((data) => {
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
 **sort** | **String**|  | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **valid** | **String**| Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future.  | [optional] 
 **usable** | **String**| Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [optional] 
 **referralId** | **Number**| Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code. | [optional] 
 **recipientIntegrationId** | **String**| Filter results by match with a profile id specified in the coupon&#39;s RecipientIntegrationId field | [optional] 
 **batchId** | **String**| Filter results by batches of coupons | [optional] 
 **exactMatch** | **Boolean**| Filter results to an exact case-insensitive matching against the coupon code | [optional] [default to false]
 **campaignState** | **String**| Filter results by the state of the campaign. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchCouponsAdvancedApplicationWideWithoutTotalCount

> InlineResponse2005 searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts)

List coupons that match the given attributes in all active campaigns of an application

List of all the coupons with attributes matching the query criteria in all active campaigns of an application. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
  'value': "value_example", // String | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally.
  'valid': "valid_example", // String | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
  'usable': "usable_example", // String | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
  'referralId': 56, // Number | Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
  'recipientIntegrationId': "recipientIntegrationId_example", // String | Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
  'batchId': "batchId_example", // String | Filter results by batches of coupons
  'exactMatch': false, // Boolean | Filter results to an exact case-insensitive matching against the coupon code
  'campaignState': "campaignState_example" // String | Filter results by the state of the campaign.
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
 **sort** | **String**|  | [optional] 
 **value** | **String**| Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [optional] 
 **createdBefore** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
 **createdAfter** | **Date**| Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any timezone. Talon.One will convert to UTC internally. | [optional] 
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


## searchCouponsAdvancedWithoutTotalCount

> InlineResponse2005 searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts)

List coupons that match the given attributes

List of all the coupons with attributes matching the query criteria. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let body = null; // Object | 
let opts = {
  'pageSize': 56, // Number | The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
  'skip': 56, // Number | Skips the given number of items when paging through large result sets.
  'sort': "sort_example", // String | 
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
 **sort** | **String**|  | [optional] 
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

> AccountAdditionalCost updateAdditionalCost(additionalCostId, newAdditionalCost)

Update an additional cost

Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let additionalCostId = 56; // Number | 
let newAdditionalCost = new TalonOne.NewAdditionalCost(); // NewAdditionalCost | 
apiInstance.updateAdditionalCost(additionalCostId, newAdditionalCost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additionalCostId** | **Number**|  | 
 **newAdditionalCost** | [**NewAdditionalCost**](NewAdditionalCost.md)|  | 

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAttribute

> Attribute updateAttribute(attributeId, newAttribute)

Update a custom attribute

Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name &#x60;region&#x60;, and your integration is sending &#x60;attributes.region&#x60; with customer profile updates, changing the name to &#x60;locale&#x60; would cause the integration requests to begin failing.  If you **really** need to change the &#x60;type&#x60; or &#x60;name&#x60; property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let attributeId = 56; // Number | 
let newAttribute = new TalonOne.NewAttribute(); // NewAttribute | 
apiInstance.updateAttribute(attributeId, newAttribute).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | **Number**|  | 
 **newAttribute** | [**NewAttribute**](NewAttribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCampaign

> Campaign updateCampaign(applicationId, campaignId, updateCampaign)

Update campaign

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let updateCampaign = new TalonOne.UpdateCampaign(); // UpdateCampaign | 
apiInstance.updateCampaign(applicationId, campaignId, updateCampaign).then((data) => {
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
 **updateCampaign** | [**UpdateCampaign**](UpdateCampaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCoupon

> Coupon updateCoupon(applicationId, campaignId, couponId, updateCoupon)

Update coupon

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let couponId = "couponId_example"; // String | The ID of the coupon code to update
let updateCoupon = new TalonOne.UpdateCoupon(); // UpdateCoupon | 
apiInstance.updateCoupon(applicationId, campaignId, couponId, updateCoupon).then((data) => {
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
 **updateCoupon** | [**UpdateCoupon**](UpdateCoupon.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCouponBatch

> updateCouponBatch(applicationId, campaignId, updateCouponBatch)

Update a batch of coupons

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let updateCouponBatch = new TalonOne.UpdateCouponBatch(); // UpdateCouponBatch | 
apiInstance.updateCouponBatch(applicationId, campaignId, updateCouponBatch).then(() => {
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
 **updateCouponBatch** | [**UpdateCouponBatch**](UpdateCouponBatch.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateReferral

> Referral updateReferral(applicationId, campaignId, referralId, updateReferral)

Update referral

### Example

```javascript
import TalonOne from 'talon_one';

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let referralId = "referralId_example"; // String | The ID of the referral code to delete
let updateReferral = new TalonOne.UpdateReferral(); // UpdateReferral | 
apiInstance.updateReferral(applicationId, campaignId, referralId, updateReferral).then((data) => {
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
 **updateReferral** | [**UpdateReferral**](UpdateReferral.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRuleset

> Ruleset updateRuleset(applicationId, campaignId, rulesetId, newRuleset)

Update ruleset

Update the specified ruleset.

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.ManagementApi();
let applicationId = 56; // Number | 
let campaignId = 56; // Number | 
let rulesetId = 56; // Number | 
let newRuleset = new TalonOne.NewRuleset(); // NewRuleset | 
apiInstance.updateRuleset(applicationId, campaignId, rulesetId, newRuleset).then((data) => {
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
 **newRuleset** | [**NewRuleset**](NewRuleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

