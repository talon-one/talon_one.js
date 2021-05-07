# TalonOne.IntegrationApi

All URIs are relative to *http://your_domain.your_region.talon.one*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCouponReservation**](IntegrationApi.md#createCouponReservation) | **POST** /v1/coupon_reservations/{couponValue} | Create a new coupon reservation
[**createReferral**](IntegrationApi.md#createReferral) | **POST** /v1/referrals | Create a referral code for an advocate
[**createReferralsForMultipleAdvocates**](IntegrationApi.md#createReferralsForMultipleAdvocates) | **POST** /v1/referrals_for_multiple_advocates | Create referral codes for multiple advocates
[**deleteCouponReservation**](IntegrationApi.md#deleteCouponReservation) | **DELETE** /v1/coupon_reservations/{couponValue} | Delete coupon reservations
[**deleteCustomerData**](IntegrationApi.md#deleteCustomerData) | **DELETE** /v1/customer_data/{integrationId} | Delete the personal data of a customer
[**getCustomerInventory**](IntegrationApi.md#getCustomerInventory) | **GET** /v1/customer_profiles/{integrationId}/inventory | Get an inventory of all data associated with a specific customer profile
[**getReservedCustomers**](IntegrationApi.md#getReservedCustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | Get the users that have this coupon reserved
[**trackEvent**](IntegrationApi.md#trackEvent) | **POST** /v1/events | Track an Event
[**updateCustomerProfile**](IntegrationApi.md#updateCustomerProfile) | **PUT** /v1/customer_profiles/{integrationId} | Update a Customer Profile V1
[**updateCustomerProfileAudiences**](IntegrationApi.md#updateCustomerProfileAudiences) | **POST** /v2/customer_audiences | Update a Customer Profile Audiences
[**updateCustomerProfileV2**](IntegrationApi.md#updateCustomerProfileV2) | **PUT** /v2/customer_profiles/{integrationId} | Update a Customer Profile
[**updateCustomerProfilesV2**](IntegrationApi.md#updateCustomerProfilesV2) | **PUT** /v2/customer_profiles | Update multiple Customer Profiles
[**updateCustomerSession**](IntegrationApi.md#updateCustomerSession) | **PUT** /v1/customer_sessions/{customerSessionId} | Update a Customer Session V1
[**updateCustomerSessionV2**](IntegrationApi.md#updateCustomerSessionV2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update a Customer Session



## createCouponReservation

> Coupon createCouponReservation(couponValue, couponReservations)

Create a new coupon reservation

Creates a coupon reservation for all passed customer profiles on this couponID 

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
let couponReservations = new TalonOne.CouponReservations(); // CouponReservations | 
apiInstance.createCouponReservation(couponValue, couponReservations).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The value of a coupon | 
 **couponReservations** | [**CouponReservations**](CouponReservations.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReferral

> Referral createReferral(newReferral)

Create a referral code for an advocate

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
let newReferral = new TalonOne.NewReferral(); // NewReferral | 
apiInstance.createReferral(newReferral).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newReferral** | [**NewReferral**](NewReferral.md)|  | 

### Return type

[**Referral**](Referral.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReferralsForMultipleAdvocates

> InlineResponse201 createReferralsForMultipleAdvocates(newReferralsForMultipleAdvocates, opts)

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
let newReferralsForMultipleAdvocates = new TalonOne.NewReferralsForMultipleAdvocates(); // NewReferralsForMultipleAdvocates | 
let opts = {
  'silent': "silent_example" // String | If set to `yes`, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000).
};
apiInstance.createReferralsForMultipleAdvocates(newReferralsForMultipleAdvocates, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newReferralsForMultipleAdvocates** | [**NewReferralsForMultipleAdvocates**](NewReferralsForMultipleAdvocates.md)|  | 
 **silent** | **String**| If set to &#x60;yes&#x60;, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000). | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCouponReservation

> deleteCouponReservation(couponValue, couponReservations)

Delete coupon reservations

Removes all passed customer profiles reservation from this coupon 

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
let couponReservations = new TalonOne.CouponReservations(); // CouponReservations | 
apiInstance.deleteCouponReservation(couponValue, couponReservations).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The value of a coupon | 
 **couponReservations** | [**CouponReservations**](CouponReservations.md)|  | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteCustomerData

> deleteCustomerData(integrationId)

Delete the personal data of a customer

Delete all attributes on the customer profile and on entities that reference that customer profile. 

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
let integrationId = "integrationId_example"; // String | The custom identifier for this profile, must be unique within the account.
apiInstance.deleteCustomerData(integrationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The custom identifier for this profile, must be unique within the account. | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomerInventory

> CustomerInventory getCustomerInventory(integrationId, opts)

Get an inventory of all data associated with a specific customer profile

Get information regarding entities referencing this customer profile&#39;s integrationId. Currently we support customer profile information, referral codes and reserved coupons. In the future, this will be expanded with loyalty points.

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
let integrationId = "integrationId_example"; // String | The custom identifier for this profile, must be unique within the account.
let opts = {
  'profile': true, // Boolean | optional flag to decide if you would like customer profile information in the response
  'referrals': true, // Boolean | optional flag to decide if you would like referral information in the response
  'coupons': true, // Boolean | optional flag to decide if you would like coupon information in the response
  'loyalty': true, // Boolean | optional flag to decide if you would like loyalty information in the response
  'giveaways': true // Boolean | optional flag to decide if you would like giveaways information in the response
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
 **integrationId** | **String**| The custom identifier for this profile, must be unique within the account. | 
 **profile** | **Boolean**| optional flag to decide if you would like customer profile information in the response | [optional] 
 **referrals** | **Boolean**| optional flag to decide if you would like referral information in the response | [optional] 
 **coupons** | **Boolean**| optional flag to decide if you would like coupon information in the response | [optional] 
 **loyalty** | **Boolean**| optional flag to decide if you would like loyalty information in the response | [optional] 
 **giveaways** | **Boolean**| optional flag to decide if you would like giveaways information in the response | [optional] 

### Return type

[**CustomerInventory**](CustomerInventory.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReservedCustomers

> InlineResponse200 getReservedCustomers(couponValue)

Get the users that have this coupon reserved

Returns all users that have this coupon marked as reserved 

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


## trackEvent

> IntegrationState trackEvent(newEvent, opts)

Track an Event

Records an arbitrary event in a customer session. For example, an integration might record an event when a user updates their payment information.  The &#x60;sessionId&#x60; body parameter is required, an event is always part of a session. Much like updating a customer session, if either the profile or the session do not exist, a new empty one will be created. Note that if the specified session already exists, it must belong to the same &#x60;profileId&#x60; or an error will be returned.  As with customer sessions, you can use an empty string for &#x60;profileId&#x60; to indicate that this is an anonymous session.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place. 

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
let newEvent = new TalonOne.NewEvent(); // NewEvent | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.trackEvent(newEvent, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newEvent** | [**NewEvent**](NewEvent.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationState**](IntegrationState.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfile

> IntegrationState updateCustomerProfile(integrationId, newCustomerProfile, opts)

Update a Customer Profile V1

⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, migrate to [API V2.0](/Getting-Started/APIV2).  Update (or create) a [Customer Profile](https://developers.talon.one/Getting-Started/entities#/customer-profile). This profile information can then be matched and/or updated by campaign [Rules][].  The &#x60;integrationId&#x60; may be any identifier that will remain stable for the customer. For example, you might use a database ID, an email, or a phone number as the &#x60;integrationId&#x60;. It is vital that this ID **not** change over time, so **don&#39;t** use any identifier that the customer can update themselves. E.g. if your application allows a customer to update their e-mail address, you should instead use a database ID.  Updating a customer profile will return a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  [Customer Profile]: /Getting-Started/entities#/customer-profile [Rules]: /Getting-Started/entities#/campaigns-rulesets-and-coupons 

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
let integrationId = "integrationId_example"; // String | The custom identifier for this profile, must be unique within the account.
let newCustomerProfile = new TalonOne.NewCustomerProfile(); // NewCustomerProfile | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.updateCustomerProfile(integrationId, newCustomerProfile, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The custom identifier for this profile, must be unique within the account. | 
 **newCustomerProfile** | [**NewCustomerProfile**](NewCustomerProfile.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationState**](IntegrationState.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfileAudiences

> updateCustomerProfileAudiences(customerProfileAudienceRequest)

Update a Customer Profile Audiences

Update one ore multiple Customer Profiles with the specified Audiences 

### Example

```javascript
import TalonOne from 'talon_one';
let defaultClient = TalonOne.ApiClient.instance;
// Configure Bearer access token for authorization: manager_auth
let manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TalonOne.IntegrationApi();
let customerProfileAudienceRequest = new TalonOne.CustomerProfileAudienceRequest(); // CustomerProfileAudienceRequest | 
apiInstance.updateCustomerProfileAudiences(customerProfileAudienceRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerProfileAudienceRequest** | [**CustomerProfileAudienceRequest**](CustomerProfileAudienceRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[manager_auth](../README.md#manager_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateCustomerProfileV2

> IntegrationStateV2 updateCustomerProfileV2(integrationId, customerProfileIntegrationRequestV2, opts)

Update a Customer Profile

Update (or create) a [Customer Profile](https://developers.talon.one/Getting-Started/entities#/customer-profile).  The &#x60;integrationId&#x60; must be any identifier that remains stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Updating a customer profile returns a response with the requested integration state. If &#x60;runRuleEngine&#x60; is set to &#x60;true&#x60;, the response includes:  - The effects generated by the triggered campaigns. - The created coupons and referral objects. - Any entity that was requested in the &#x60;responseContent&#x60; request parameter. 

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
let integrationId = "integrationId_example"; // String | The custom identifier for this profile. Must be unique within the account.
let customerProfileIntegrationRequestV2 = new TalonOne.CustomerProfileIntegrationRequestV2(); // CustomerProfileIntegrationRequestV2 | 
let opts = {
  'runRuleEngine': false, // Boolean | Indicates whether to run the rule engine.
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`. Only used when `runRuleEngine` is set to `true`. 
};
apiInstance.updateCustomerProfileV2(integrationId, customerProfileIntegrationRequestV2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The custom identifier for this profile. Must be unique within the account. | 
 **customerProfileIntegrationRequestV2** | [**CustomerProfileIntegrationRequestV2**](CustomerProfileIntegrationRequestV2.md)|  | 
 **runRuleEngine** | **Boolean**| Indicates whether to run the rule engine. | [optional] [default to false]
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. Only used when &#x60;runRuleEngine&#x60; is set to &#x60;true&#x60;.  | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerProfilesV2

> MultipleCustomerProfileIntegrationResponseV2 updateCustomerProfilesV2(multipleCustomerProfileIntegrationRequest, opts)

Update multiple Customer Profiles

Update (or create) up to 1000 [Customer Profiles](https://developers.talon.one/Getting-Started/entities#/customer-profile) in 1 request.  The &#x60;integrationId&#x60; must be any identifier that remains stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  A customer profile [can be linked to one or more sessions](https://developers.talon.one/Integration-API/API-Reference#updateCustomerSessionV2). 

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
let multipleCustomerProfileIntegrationRequest = new TalonOne.MultipleCustomerProfileIntegrationRequest(); // MultipleCustomerProfileIntegrationRequest | 
let opts = {
  'silent': "silent_example" // String | If set to `yes`, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000).
};
apiInstance.updateCustomerProfilesV2(multipleCustomerProfileIntegrationRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipleCustomerProfileIntegrationRequest** | [**MultipleCustomerProfileIntegrationRequest**](MultipleCustomerProfileIntegrationRequest.md)|  | 
 **silent** | **String**| If set to &#x60;yes&#x60;, response will be an empty 204, otherwise a list of integration states will be generated (up to 1000). | [optional] 

### Return type

[**MultipleCustomerProfileIntegrationResponseV2**](MultipleCustomerProfileIntegrationResponseV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerSession

> IntegrationState updateCustomerSession(customerSessionId, newCustomerSession, opts)

Update a Customer Session V1

⚠️ Deprecation Notice: Support for requests to this endpoint will end on 15.07.2021. We will not remove the endpoint, and it will still be accessible for you to use. For new features support, migrate to [API V2.0](https://developers.talon.one/Getting-Started/APIV2).  Update (or create) a [Customer Session](https://developers.talon.one/Getting-Started/entities#/customer-session). For example, use this endpoint to represent which items are in the customer&#39;s cart.  The Talon.One platform supports multiple simultaneous sessions for the same profile. If you have multiple ways of accessing the same application you can either:  - Track multiple independent sessions or, - Use the same session across all of them.  You should share sessions when application access points share other state, such as the user&#39;s cart. If two points of access to the application have independent states, for example a user can have different items in their cart across the two) they should use independent customer session ID&#39;s.  To link a session to a customer profile, set the &#x60;profileId&#x60; parameter in the request body to a customer profile&#39;s &#x60;integrationId&#x60;. To track an anonymous session use the empty string (&#x60;\&quot;\&quot;&#x60;) as the &#x60;profileId&#x60;. **Note:** You do **not** have to create a customer profile first. If the specified profile does not exist, an empty profile is created automatically.  Updating a customer profile returns a response with the full integration state. This includes the current state of the customer profile, the customer session, the event that was recorded, and an array of effects that took place.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated. 

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
let customerSessionId = "customerSessionId_example"; // String | The custom identifier for this session, must be unique within the account.
let newCustomerSession = new TalonOne.NewCustomerSession(); // NewCustomerSession | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.updateCustomerSession(customerSessionId, newCustomerSession, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The custom identifier for this session, must be unique within the account. | 
 **newCustomerSession** | [**NewCustomerSession**](NewCustomerSession.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationState**](IntegrationState.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomerSessionV2

> IntegrationStateV2 updateCustomerSessionV2(customerSessionId, integrationRequest, opts)

Update a Customer Session

Update (or create) a [Customer Session](https://developers.talon.one/Getting-Started/entities#/customer-session). For example, use this endpoint to represent which items are in the customer&#39;s cart.  The Talon.One platform supports multiple simultaneous sessions for the same profile. If you have multiple ways of accessing the same application you can either:  - Track multiple independent sessions or, - Use the same session across all of them.  You should share sessions when application access points share other state, such as the user&#39;s cart. If two points of access to the application have independent states, for example a user can have different items in their cart across the two) they should use independent customer session ID&#39;s.  To link a session to a customer profile, set the &#x60;profileId&#x60; parameter in the request body to a customer profile&#39;s &#x60;integrationId&#x60;. To track an anonymous session use the empty string (&#x60;\&quot;\&quot;&#x60;) as the &#x60;profileId&#x60;. **Note:** You do **not** have to create a customer profile first. If the specified profile does not exist, an empty profile is created automatically.  Updating a customer session returns a response with the requested integration state. If &#x60;runRuleEngine&#x60; is set to &#x60;true&#x60;, the response includes:  - The effects generated by the triggered campaigns. - The created coupons and referral objects. - Any entity that was requested in the &#x60;responseContent&#x60; request parameter.  The currency for the session and the cart items in the session is the same as that of the application with which the session is associated. 

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
let customerSessionId = "customerSessionId_example"; // String | The custom identifier for this session, must be unique within the account.
let integrationRequest = new TalonOne.IntegrationRequest(); // IntegrationRequest | 
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.
};
apiInstance.updateCustomerSessionV2(customerSessionId, integrationRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The custom identifier for this session, must be unique within the account. | 
 **integrationRequest** | [**IntegrationRequest**](IntegrationRequest.md)|  | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;. | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

