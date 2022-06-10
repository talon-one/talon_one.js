# TalonOne.IntegrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAudienceV2**](IntegrationApi.md#createAudienceV2) | **POST** /v2/audiences | Create audience
[**createCouponReservation**](IntegrationApi.md#createCouponReservation) | **POST** /v1/coupon_reservations/{couponValue} | Create coupon reservation
[**createReferral**](IntegrationApi.md#createReferral) | **POST** /v1/referrals | Create referral code for an advocate
[**createReferralsForMultipleAdvocates**](IntegrationApi.md#createReferralsForMultipleAdvocates) | **POST** /v1/referrals_for_multiple_advocates | Create referral codes for multiple advocates
[**deleteAudienceMembershipsV2**](IntegrationApi.md#deleteAudienceMembershipsV2) | **DELETE** /v2/audiences/{audienceId}/memberships | Delete audience memberships
[**deleteAudienceV2**](IntegrationApi.md#deleteAudienceV2) | **DELETE** /v2/audiences/{audienceId} | Delete audience
[**deleteCouponReservation**](IntegrationApi.md#deleteCouponReservation) | **DELETE** /v1/coupon_reservations/{couponValue} | Delete coupon reservations
[**deleteCustomerData**](IntegrationApi.md#deleteCustomerData) | **DELETE** /v1/customer_data/{integrationId} | Delete customer&#39;s personal data
[**getCustomerInventory**](IntegrationApi.md#getCustomerInventory) | **GET** /v1/customer_profiles/{integrationId}/inventory | List customer data
[**getCustomerSession**](IntegrationApi.md#getCustomerSession) | **GET** /v2/customer_sessions/{customerSessionId} | Get customer session
[**getReservedCustomers**](IntegrationApi.md#getReservedCustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | List customers that have this coupon reserved
[**returnCartItems**](IntegrationApi.md#returnCartItems) | **POST** /v2/customer_sessions/{customerSessionId}/returns | Return cart items
[**trackEvent**](IntegrationApi.md#trackEvent) | **POST** /v1/events | Track event
[**trackEventV2**](IntegrationApi.md#trackEventV2) | **POST** /v2/events | Track event V2
[**updateAudienceCustomersAttributes**](IntegrationApi.md#updateAudienceCustomersAttributes) | **PUT** /v2/audience_customers/{audienceId}/attributes | Update profile attributes for all customers in audience
[**updateAudienceV2**](IntegrationApi.md#updateAudienceV2) | **PUT** /v2/audiences/{audienceId} | Update audience
[**updateCustomerProfileAudiences**](IntegrationApi.md#updateCustomerProfileAudiences) | **POST** /v2/customer_audiences | Update multiple customer profiles&#39; audiences
[**updateCustomerProfileV2**](IntegrationApi.md#updateCustomerProfileV2) | **PUT** /v2/customer_profiles/{integrationId} | Update customer profile
[**updateCustomerProfilesV2**](IntegrationApi.md#updateCustomerProfilesV2) | **PUT** /v2/customer_profiles | Update multiple customer profiles
[**updateCustomerSessionV2**](IntegrationApi.md#updateCustomerSessionV2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update customer session



## createAudienceV2

> Audience createAudienceV2(body)

Create audience

Create an audience. The audience can be created directly from scratch or can come from third party platforms.  To create an audience from an existing audience in mParticle or Segment: 1. Set the &#x60;integration&#x60; property to &#x60;mparticle&#x60; or &#x60;segment&#x60; depending on a third-party platform. 1. Set &#x60;integrationId&#x60; to the ID of this audience in a third-party platform.  To create an audience from an existing audience in another platform than mParticle: 1. Do not use the &#x60;integration&#x60; property. 1. Set &#x60;integrationId&#x60; to the ID of this audience in the 3rd-party platform.  To create an audience from scratch: 1. Only set the &#x60;name&#x60; property.  Once you create your first audience, audience-specific rule conditions are enabled in the Rule Builder. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.NewAudience(); // NewAudience | 
apiInstance.createAudienceV2(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewAudience**](NewAudience.md)|  | 

### Return type

[**Audience**](Audience.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCouponReservation

> Coupon createCouponReservation(couponValue, body)

Create coupon reservation

Create a coupon reservation for specified customer profiles on the specified coupon.  Reserving a coupon allows you to associate a coupon code to a given customer(s). You can then list the reserved coupons of a given customer with the [List customer data endpoint](/integration-api/#operation/getCustomerInventory).  If a coupon gets created for a specific user, it will automatically show up in their coupons.  When a user redeems a coupon, a reservation is automatically created after the redemption and the used coupon will be returned in the [List customer data endpoint](/integration-api/#operation/getCustomerInventory).  **Important:** - This endpoint creates a **soft** reservation. _Any_ customer   can use a reserved coupon code and proceed to checkout. - To create a hard reservation, use the   [Create coupons](/management-api/#operation/createCoupons) or   [Create coupons for multiple recipients](/management-api/#operation/createCouponsForMultipleRecipients) endpoints   setting the &#x60;recipientsIntegrationId&#x60; property.  For example, you can use this endpoint and &#x60;List customer data&#x60; to create a \&quot;coupon wallet\&quot; by reserving coupon codes for a customer, and then displaying their \&quot;coupon wallet\&quot; when they visit your store. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let couponValue = "couponValue_example"; // String | The value of a coupon
let body = new TalonOne.CouponReservations(); // CouponReservations | 
apiInstance.createCouponReservation(couponValue, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The value of a coupon | 
 **body** | [**CouponReservations**](CouponReservations.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReferral

> Referral createReferral(body)

Create referral code for an advocate

Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the &#x60;campaignId&#x60; parameter, and will be associated with the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate&#39;s profile. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.NewReferral(); // NewReferral | 
apiInstance.createReferral(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewReferral**](NewReferral.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReferralsForMultipleAdvocates

> InlineResponse201 createReferralsForMultipleAdvocates(body, opts)

Create referral codes for multiple advocates

Creates unique referral codes for multiple advocates. The code will be valid for the referral campaign for which it is created, indicated in the &#x60;campaignId&#x60; parameter, and one referral code will be associated with one advocate using the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate&#39;s profile. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.NewReferralsForMultipleAdvocates(); // NewReferralsForMultipleAdvocates | 
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information. 
};
apiInstance.createReferralsForMultipleAdvocates(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewReferralsForMultipleAdvocates**](NewReferralsForMultipleAdvocates.md)|  | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information.  | [optional] [default to &#39;yes&#39;]

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAudienceMembershipsV2

> deleteAudienceMembershipsV2(audienceId)

Delete audience memberships

Remove all members from this audience. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let audienceId = 56; // Number | The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
apiInstance.deleteAudienceMembershipsV2(audienceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audienceId** | **Number**| The ID of the audience. You get it via the &#x60;id&#x60; property when [creating an audience](#operation/createAudienceV2). | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAudienceV2

> deleteAudienceV2(audienceId)

Delete audience

Delete an audience created by a third-party integration.  **Warning:** This endpoint also removes any associations recorded between a customer profile and this audience. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//manager_auth.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let audienceId = 56; // Number | The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
apiInstance.deleteAudienceV2(audienceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audienceId** | **Number**| The ID of the audience. You get it via the &#x60;id&#x60; property when [creating an audience](#operation/createAudienceV2). | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCouponReservation

> deleteCouponReservation(couponValue, body)

Delete coupon reservations

Remove all passed customer profiles reservation from this coupon. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let couponValue = "couponValue_example"; // String | The value of a coupon
let body = new TalonOne.CouponReservations(); // CouponReservations | 
apiInstance.deleteCouponReservation(couponValue, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The value of a coupon | 
 **body** | [**CouponReservations**](CouponReservations.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomerData

> deleteCustomerData(integrationId)

Delete customer&#39;s personal data

Delete all attributes on the customer profile and on entities that reference this customer profile.  **Important:** To preserve performance, we recommend avoiding deleting customer data during peak-traffic hours. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let integrationId = "integrationId_example"; // String | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration Id with the [Update customer session endpoint](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2). - The Management API with the [List application's customers endpoint](https://docs.talon.one/management-api/#operation/getApplicationCustomers). 
apiInstance.deleteCustomerData(integrationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration Id with the [Update customer session endpoint](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2). - The Management API with the [List application&#39;s customers endpoint](https://docs.talon.one/management-api/#operation/getApplicationCustomers).  | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerInventory

> CustomerInventory getCustomerInventory(integrationId, opts)

List customer data

Return the customer inventory regarding entities referencing this customer profile&#39;s &#x60;integrationId&#x60;.  Typical entities returned are: customer profile information, referral codes, loyalty points and reserved coupons. Reserved coupons also include redeemed coupons.  You can also use this endpoint to get the projected loyalty balances in order to notify your customers about points that are about to expire, or to remind them how many points they have. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let integrationId = "integrationId_example"; // String | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration Id with the [Update customer session endpoint](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2). - The Management API with the [List application's customers endpoint](https://docs.talon.one/management-api/#operation/getApplicationCustomers). 
let opts = {
  'profile': true, // Boolean | Set to `true` to include customer profile information in the response.
  'referrals': true, // Boolean | Set to `true` to include referral information in the response.
  'coupons': true, // Boolean | Set to `true` to include coupon information in the response.
  'loyalty': true, // Boolean | Set to `true` to include loyalty information in the response.
  'giveaways': true, // Boolean | Set to `true` to include giveaways information in the response.
  'loyaltyProjectionEndDate': new Date("2013-10-20T19:20:30+01:00") // Date | Set an end date to query the projected loyalty balances. You can project results up to 31 days from today.
};
apiInstance.getCustomerInventory(integrationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration Id with the [Update customer session endpoint](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2). - The Management API with the [List application&#39;s customers endpoint](https://docs.talon.one/management-api/#operation/getApplicationCustomers).  | 
 **profile** | **Boolean**| Set to &#x60;true&#x60; to include customer profile information in the response. | [optional] 
 **referrals** | **Boolean**| Set to &#x60;true&#x60; to include referral information in the response. | [optional] 
 **coupons** | **Boolean**| Set to &#x60;true&#x60; to include coupon information in the response. | [optional] 
 **loyalty** | **Boolean**| Set to &#x60;true&#x60; to include loyalty information in the response. | [optional] 
 **giveaways** | **Boolean**| Set to &#x60;true&#x60; to include giveaways information in the response. | [optional] 
 **loyaltyProjectionEndDate** | **Date**| Set an end date to query the projected loyalty balances. You can project results up to 31 days from today. | [optional] 

### Return type

[**CustomerInventory**](CustomerInventory.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerSession

> IntegrationCustomerSessionResponse getCustomerSession(customerSessionId)

Get customer session

Get customer session data. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions). 
apiInstance.getCustomerSession(customerSessionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions).  | 

### Return type

[**IntegrationCustomerSessionResponse**](IntegrationCustomerSessionResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReservedCustomers

> InlineResponse200 getReservedCustomers(couponValue)

List customers that have this coupon reserved

Return all customers that have this coupon marked as reserved.  Coupons are reserved in the following ways: - To create a soft reservation (any customer can use the coupon), use the [Create coupon reservation](#operation/createCouponReservation) endpoint. - To create a hard reservation (only the given customer can use the coupon), create a coupon in the Campaign Manager for a given &#x60;recipientIntegrationId&#x60; or use the [Create coupons](/management-api/#operation/createCoupons) or [Create coupons for multiple recipients](/management-api/#operation/createCouponsForMultipleRecipients) endpoints. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let couponValue = "couponValue_example"; // String | The value of a coupon
apiInstance.getReservedCustomers(couponValue).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The value of a coupon | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnCartItems

> IntegrationStateV2 returnCartItems(customerSessionId, body, opts)

Return cart items

Create a new return request for the specified cart items.  This endpoint automatically changes the session state from &#x60;closed&#x60; to &#x60;partially returned&#x60;.  Its behavior depends on whether [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#flattened-cart-items) is enabled for the campaign.  **Note:** This will roll back any effects associated with these cart items. For more information, see [our documentation on session states](https://docs.talon.one/docs/dev/concepts/entities#customer-session-states) and [this tutorial](https://docs.talon.one/docs/dev/tutorials/partially-returning-a-session). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions). 
let body = new TalonOne.ReturnIntegrationRequest(); // ReturnIntegrationRequest | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.returnCartItems(customerSessionId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions).  | 
 **body** | [**ReturnIntegrationRequest**](ReturnIntegrationRequest.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackEvent

> IntegrationState trackEvent(body, opts)

Track event

**Important:** This endpoint is **DEPRECATED**. Use [Track Event V2](https://docs.talon.one/integration-api/#tag/Events/operation/trackEventV2) instead.  &gt; Triggers a custom event in a customer session. You can then check this event in your rules. **Important:** Talon.One offers a set of [built-in events](/docs/dev/concepts/events), ensure you do not create a custom event when you can use a built-in event. &gt; For example, use this endpoint to trigger an event when a user updates their payment information.  &gt; Before using this endpoint, create your event as a custom attribute of type &#x60;event&#x60;.  See the [Developer docs](/docs/dev/concepts/events/#creating-a-custom-event).  &gt; An event is always part of a session. If either the profile or the session does not exist, a new empty profile/session is created. If the specified session already exists, it must belong to the same &#x60;profileId&#x60; or an error will be returned. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.NewEvent(); // NewEvent | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.trackEvent(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewEvent**](NewEvent.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationState**](IntegrationState.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackEventV2

> IntegrationStateV2 trackEventV2(body, opts)

Track event V2

Triggers a custom event. You can then check this event in your rules.  **Important:** Talon.One offers a set of [built-in events](/docs/dev/concepts/events), ensure you do not create a custom event when you can use a built-in event.  For example, use this endpoint to trigger an event when a user updates their payment information.  Before using this endpoint, create your event as a custom attribute of type &#x60;event&#x60;. See the [Developer docs](/docs/dev/concepts/events/#creating-a-custom-event).  **Important:** &#x60;profileId&#x60; is required. An event V2 is associated with a customer profile. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.IntegrationEventV2Request(); // IntegrationEventV2Request | 
let opts = {
  'silent': "'yes'", // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information. 
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.trackEventV2(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IntegrationEventV2Request**](IntegrationEventV2Request.md)|  | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information.  | [optional] [default to &#39;yes&#39;]
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAudienceCustomersAttributes

> updateAudienceCustomersAttributes(audienceId, body)

Update profile attributes for all customers in audience

Update the specified profile attributes to the provided values for all customers in the specified audience. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let audienceId = 56; // Number | The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
let body = null; // Object | 
apiInstance.updateAudienceCustomersAttributes(audienceId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audienceId** | **Number**| The ID of the audience. You get it via the &#x60;id&#x60; property when [creating an audience](#operation/createAudienceV2). | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAudienceV2

> Audience updateAudienceV2(audienceId, body)

Update audience

Update an Audience created by a third-party integration. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let audienceId = 56; // Number | The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
let body = new TalonOne.UpdateAudience(); // UpdateAudience | 
apiInstance.updateAudienceV2(audienceId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audienceId** | **Number**| The ID of the audience. You get it via the &#x60;id&#x60; property when [creating an audience](#operation/createAudienceV2). | 
 **body** | [**UpdateAudience**](UpdateAudience.md)|  | 

### Return type

[**Audience**](Audience.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfileAudiences

> updateCustomerProfileAudiences(body)

Update multiple customer profiles&#39; audiences

Update the specified customer profiles with the specified audiences. Use this endpoint when customers join or leave audiences.  The limit of customer profiles per request is 1000. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.CustomerProfileAudienceRequest(); // CustomerProfileAudienceRequest | 
apiInstance.updateCustomerProfileAudiences(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProfileAudienceRequest**](CustomerProfileAudienceRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfileV2

> IntegrationStateV2 updateCustomerProfileV2(integrationId, body, opts)

Update customer profile

Update (or create) a [Customer Profile](/docs/dev/concepts/entities#customer-profile).  **Performance tips**  Updating a customer profile returns a response with the requested integration state.  You can use the &#x60;responseContent&#x60; property to save yourself extra API calls. For example, you can get the customer profile details directly without extra requests.  You can also set &#x60;runRuleEngine&#x60; to &#x60;false&#x60; to prevent unwanted rule executions. This allows you to improve response times.  If &#x60;runRuleEngine&#x60; is set to &#x60;true&#x60;, the response includes:  - The effects generated by the triggered campaigns. - The created coupons and referral objects. 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let integrationId = "integrationId_example"; // String | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
let body = new TalonOne.CustomerProfileIntegrationRequestV2(); // CustomerProfileIntegrationRequestV2 | 
let opts = {
  'runRuleEngine': false, // Boolean | Indicates whether to run the rule engine. Setting this property to `false` improves response times.
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`. Only used when `runRuleEngine` is set to `true`. 
};
apiInstance.updateCustomerProfileV2(integrationId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | 
 **body** | [**CustomerProfileIntegrationRequestV2**](CustomerProfileIntegrationRequestV2.md)|  | 
 **runRuleEngine** | **Boolean**| Indicates whether to run the rule engine. Setting this property to &#x60;false&#x60; improves response times. | [optional] [default to false]
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. Only used when &#x60;runRuleEngine&#x60; is set to &#x60;true&#x60;.  | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfilesV2

> MultipleCustomerProfileIntegrationResponseV2 updateCustomerProfilesV2(body, opts)

Update multiple customer profiles

Update (or create) up to 1000 [customer profiles](/docs/dev/concepts/entities#customer-profile) in 1 request.  The &#x60;integrationId&#x60; must be any identifier that remains stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  A customer profile [can be linked to one or more sessions](/integration-api/#tag/Customer-sessions). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let body = new TalonOne.MultipleCustomerProfileIntegrationRequest(); // MultipleCustomerProfileIntegrationRequest | 
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information. 
};
apiInstance.updateCustomerProfilesV2(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MultipleCustomerProfileIntegrationRequest**](MultipleCustomerProfileIntegrationRequest.md)|  | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains essential data such as the updated customer profiles and session-related information.  | [optional] [default to &#39;yes&#39;]

### Return type

[**MultipleCustomerProfileIntegrationResponseV2**](MultipleCustomerProfileIntegrationResponseV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerSessionV2

> IntegrationStateV2 updateCustomerSessionV2(customerSessionId, body, opts)

Update customer session

Update or create a [customer session](/docs/dev/concepts/entities#customer-session). For example, use this endpoint to share the content of a customer&#39;s cart with Talon.One and to check which promotion rules apply.  **Note:** The currency for the session and the cart items in the session is the same as the Application that owns this session.  **Session management**  The Talon.One platform supports multiple simultaneous sessions for the same profile. If you have multiple ways of accessing the same Application you can either:  - Track multiple independent sessions or, - Use the same session across all of them.  You should share sessions when application access points share other state, such as the user&#39;s cart. If two points of access to the application have independent states, for example a user can have different items in their cart across the two) they should use independent customer session ID&#39;s.  See more information and tips about session management in the [documentation](/docs/dev/concepts/entities#customer-session).  **Sessions and customer profiles**  - To link a session to a customer profile, set the &#x60;profileId&#x60; parameter in the request body to a customer profile&#39;s &#x60;integrationId&#x60;. - While you can create an anonymous session with &#x60;profileId&#x3D;\&quot;\&quot;&#x60;, we recommend you use a guest ID instead.  **Note:** You do **not** have to create a customer profile first. If the specified profile does not exist, an empty profile is created automatically.  **Performance tips**  Updating a customer session returns a response with the requested integration state.  You can use the &#x60;responseContent&#x60; property to save yourself extra API calls. For example, you can get the customer profile details directly without extra requests.  For more information, see the [integration tutorial](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one). 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

let apiInstance = new TalonOne.IntegrationApi();
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions). 
let body = new TalonOne.IntegrationRequest(); // IntegrationRequest | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.updateCustomerSessionV2(customerSessionId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session endpoint](https://docs.talon.one/management-api/#operation/getApplicationSessions).  | 
 **body** | [**IntegrationRequest**](IntegrationRequest.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

