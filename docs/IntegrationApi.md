# TalonOne.IntegrationApi

All URIs are relative to *https://yourbaseurl.talon.one*

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
[**getLoyaltyBalances**](IntegrationApi.md#getLoyaltyBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/balances | Get customer&#39;s loyalty points
[**getLoyaltyCardBalances**](IntegrationApi.md#getLoyaltyCardBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/balances | Get card&#39;s point balances
[**getLoyaltyCardTransactions**](IntegrationApi.md#getLoyaltyCardTransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/transactions | List card&#39;s transactions
[**getLoyaltyProgramProfileTransactions**](IntegrationApi.md#getLoyaltyProgramProfileTransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/transactions | List customer&#39;s loyalty transactions
[**getReservedCustomers**](IntegrationApi.md#getReservedCustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | List customers that have this coupon reserved
[**linkLoyaltyCardToProfile**](IntegrationApi.md#linkLoyaltyCardToProfile) | **POST** /v2/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/link_profile | Link customer profile to card
[**reopenCustomerSession**](IntegrationApi.md#reopenCustomerSession) | **PUT** /v2/customer_sessions/{customerSessionId}/reopen | Reopen customer session
[**returnCartItems**](IntegrationApi.md#returnCartItems) | **POST** /v2/customer_sessions/{customerSessionId}/returns | Return cart items
[**syncCatalog**](IntegrationApi.md#syncCatalog) | **PUT** /v1/catalogs/{catalogId}/sync | Sync cart item catalog
[**trackEventV2**](IntegrationApi.md#trackEventV2) | **POST** /v2/events | Track event
[**updateAudienceCustomersAttributes**](IntegrationApi.md#updateAudienceCustomersAttributes) | **PUT** /v2/audience_customers/{audienceId}/attributes | Update profile attributes for all customers in audience
[**updateAudienceV2**](IntegrationApi.md#updateAudienceV2) | **PUT** /v2/audiences/{audienceId} | Update audience name
[**updateCustomerProfileAudiences**](IntegrationApi.md#updateCustomerProfileAudiences) | **POST** /v2/customer_audiences | Update multiple customer profiles&#39; audiences
[**updateCustomerProfileV2**](IntegrationApi.md#updateCustomerProfileV2) | **PUT** /v2/customer_profiles/{integrationId} | Update customer profile
[**updateCustomerProfilesV2**](IntegrationApi.md#updateCustomerProfilesV2) | **PUT** /v2/customer_profiles | Update multiple customer profiles
[**updateCustomerSessionV2**](IntegrationApi.md#updateCustomerSessionV2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update customer session



## createAudienceV2

> Audience createAudienceV2(body)

Create audience

Create an audience. The audience can be created directly from scratch or can come from third party platforms.  **Note:** Audiences can also be created from scratch via the Campaign Manager. See the [docs](https://docs.talon.one/docs/product/audiences/creating-audiences).  To create an audience from an existing audience from a [technology partner](https://docs.talon.one/docs/dev/technology-partners/overview): 1. Set the &#x60;integration&#x60; property to &#x60;mparticle&#x60;, &#x60;segment&#x60; etc., depending on a third-party platform. 1. Set &#x60;integrationId&#x60; to the ID of this audience in a third-party platform.  To create an audience from an existing audience in another platform: 1. Do not use the &#x60;integration&#x60; property. 1. Set &#x60;integrationId&#x60; to the ID of this audience in the 3rd-party platform.  To create an audience from scratch: 1. Only set the &#x60;name&#x60; property.  Once you create your first audience, audience-specific rule conditions are enabled in the Rule Builder. 

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
let body = new TalonOne.NewAudience(); // NewAudience | body
apiInstance.createAudienceV2(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewAudience**](NewAudience.md)| body | 

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

Create a coupon reservation for specified customer profiles on the specified coupon. You can also create a reservation via the Campaign Manager using the [Create coupon code reservation effect](https://docs.talon.one/docs/product/rules/effects/using-effects#reserving-a-coupon-code).  Reserving a coupon allows you to associate a coupon code to a given customer(s). You can then list the reserved coupons of a given customer with the [List customer data](https://docs.talon.one/integration-api#operation/getCustomerInventory) endpoint.  If a coupon gets created for a specific user, it will automatically appear in their coupons.  When a user redeems a coupon, a reservation is automatically created after the redemption and the used coupon will be returned in the [List customer data](https://docs.talon.one/integration-api#operation/getCustomerInventory) endpoint.  For example, you can use this endpoint and &#x60;List customer data&#x60; to create a _coupon wallet_ by reserving coupon codes for a customer, and then displaying their coupon wallet when they visit your store.  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Important&lt;/p&gt;    This endpoint creates a **soft** reservation. _Any_ customer   can use a reserved coupon code and proceed to checkout.    To create a hard reservation, you can:   - use the [Create coupons](https://docs.talon.one/management-api#operation/createCoupons) endpoint or,   - use the [Create coupons for multiple recipients](https://docs.talon.one/management-api#operation/createCouponsForMultipleRecipients)     endpoint setting the &#x60;recipientsIntegrationId&#x60; property or,   - create a coupon code with the **Reservation mandatory** option then use the [Create coupon code reservation effect](https://docs.talon.one/docs/product/rules/effects/using-effects#reserving-a-coupon-code). &lt;/div&gt;  To delete a reservation, use the [Delete reservation](https://docs.talon.one/integration-api#tag/Coupons/operation/deleteCouponReservation) endpoint. 

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
let couponValue = "couponValue_example"; // String | The code of the coupon.
let body = new TalonOne.CouponReservations(); // CouponReservations | body
apiInstance.createCouponReservation(couponValue, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The code of the coupon. | 
 **body** | [**CouponReservations**](CouponReservations.md)| body | 

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
let body = new TalonOne.NewReferral(); // NewReferral | body
apiInstance.createReferral(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewReferral**](NewReferral.md)| body | 

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
let body = new TalonOne.NewReferralsForMultipleAdvocates(); // NewReferralsForMultipleAdvocates | body
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles. 
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
 **body** | [**NewReferralsForMultipleAdvocates**](NewReferralsForMultipleAdvocates.md)| body | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [optional] [default to &#39;yes&#39;]

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
// Configure API key authorization: api_key_v1
let api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_v1.apiKeyPrefix = 'Token';

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

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAudienceV2

> deleteAudienceV2(audienceId)

Delete audience

Delete an audience created by a third-party integration.  **Warning:** This endpoint also removes any associations recorded between a customer profile and this audience.  **Note:** Audiences can also be deleted via the Campaign Manager. See the [docs](https://docs.talon.one/docs/product/audiences/managing-audiences#deleting-an-audience). 

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

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCouponReservation

> deleteCouponReservation(couponValue, body)

Delete coupon reservations

Remove all the coupon reservations from the provided customer profile integration IDs and the provided coupon code. 

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
let couponValue = "couponValue_example"; // String | The code of the coupon.
let body = new TalonOne.CouponReservations(); // CouponReservations | body
apiInstance.deleteCouponReservation(couponValue, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The code of the coupon. | 
 **body** | [**CouponReservations**](CouponReservations.md)| body | 

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
let integrationId = "integrationId_example"; // String | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application's customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
apiInstance.deleteCustomerData(integrationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | 

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

Return the customer inventory regarding entities referencing this customer profile&#39;s &#x60;integrationId&#x60;.  Typical entities returned are: customer profile information, referral codes, loyalty points, loyalty cards and reserved coupons. Reserved coupons also include redeemed coupons. 

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
let integrationId = "integrationId_example"; // String | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application's customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
let opts = {
  'profile': true, // Boolean | Set to `true` to include customer profile information in the response.
  'referrals': true, // Boolean | Set to `true` to include referral information in the response.
  'coupons': true, // Boolean | Set to `true` to include coupon information in the response.
  'loyalty': true, // Boolean | Set to `true` to include loyalty information in the response.
  'giveaways': true // Boolean | Set to `true` to include giveaways information in the response.
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
 **integrationId** | **String**| The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | 
 **profile** | **Boolean**| Set to &#x60;true&#x60; to include customer profile information in the response. | [optional] 
 **referrals** | **Boolean**| Set to &#x60;true&#x60; to include referral information in the response. | [optional] 
 **coupons** | **Boolean**| Set to &#x60;true&#x60; to include coupon information in the response. | [optional] 
 **loyalty** | **Boolean**| Set to &#x60;true&#x60; to include loyalty information in the response. | [optional] 
 **giveaways** | **Boolean**| Set to &#x60;true&#x60; to include giveaways information in the response. | [optional] 

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

Get the details of the given customer session.  You can get the same data via other endpoints that also apply changes, which can help you save requests and increase performance. See:  - [Update customer session](#tag/Customer-sessions/operation/updateCustomerSessionV2) - [Update customer profile](#tag/Customer-profiles/operation/updateCustomerProfileV2) 

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
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
apiInstance.getCustomerSession(customerSessionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | 

### Return type

[**IntegrationCustomerSessionResponse**](IntegrationCustomerSessionResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyBalances

> LoyaltyBalances getLoyaltyBalances(loyaltyProgramId, integrationId, opts)

Get customer&#39;s loyalty points

Retrieve loyalty ledger balances for the given Integration ID in the specified loyalty program. You can filter balances by date. If no filtering options are applied, you retrieve all loyalty balances on the current date for the given integration ID.  Loyalty balances are calculated when Talon.One receives your request using the points stored in our database, so retrieving a large number of balances at once can impact performance.  **Note:** For more information, see [our documentation on managing loyalty data](https://docs.talon.one/docs/product/loyalty-programs/managing-loyalty-data#obtaining-the-loyalty-balances-of-a-customer). 

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
let loyaltyProgramId = 56; // Number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
let integrationId = "integrationId_example"; // String | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
let opts = {
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | Used to return balances only for entries older than this timestamp. The expired, active, and pending points are relative to this timestamp.  **Note:** It must be an RFC3339 timestamp string. 
};
apiInstance.getLoyaltyBalances(loyaltyProgramId, integrationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyProgramId** | **Number**| Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | 
 **integrationId** | **String**| The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | 
 **endDate** | **Date**| Used to return balances only for entries older than this timestamp. The expired, active, and pending points are relative to this timestamp.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 

### Return type

[**LoyaltyBalances**](LoyaltyBalances.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyCardBalances

> LoyaltyBalances getLoyaltyCardBalances(loyaltyProgramId, loyaltyCardId, opts)

Get card&#39;s point balances

Retrieve loyalty balances for the given loyalty card in the specified loyalty program with filtering options applied. If no filtering options are applied, all loyalty balances for the given loyalty card are returned. 

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
let loyaltyProgramId = 56; // Number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
let loyaltyCardId = "loyaltyCardId_example"; // String | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
let opts = {
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | Used to return balances only for entries older than this timestamp. The expired, active, and pending points are relative to this timestamp.  **Note:** It must be an RFC3339 timestamp string. 
};
apiInstance.getLoyaltyCardBalances(loyaltyProgramId, loyaltyCardId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyProgramId** | **Number**| Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | 
 **loyaltyCardId** | **String**| Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | 
 **endDate** | **Date**| Used to return balances only for entries older than this timestamp. The expired, active, and pending points are relative to this timestamp.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 

### Return type

[**LoyaltyBalances**](LoyaltyBalances.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyCardTransactions

> InlineResponse2001 getLoyaltyCardTransactions(loyaltyProgramId, loyaltyCardId, opts)

List card&#39;s transactions

Retrieve loyalty transaction logs for the given loyalty card in the specified loyalty program with filtering options applied. If no filtering options are applied, the last 50 loyalty transactions for the given loyalty card are returned. 

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
let loyaltyProgramId = 56; // Number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
let loyaltyCardId = "loyaltyCardId_example"; // String | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
let opts = {
  'subledgerId': "subledgerId_example", // String | The ID of the subledger by which we filter the data.
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string. 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string. 
  'pageSize': 1000, // Number | The number of items in this response.
  'skip': 56 // Number | The number of items to skip when paging through large result sets.
};
apiInstance.getLoyaltyCardTransactions(loyaltyProgramId, loyaltyCardId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyProgramId** | **Number**| Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | 
 **loyaltyCardId** | **String**| Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | 
 **subledgerId** | **String**| The ID of the subledger by which we filter the data. | [optional] 
 **startDate** | **Date**| Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 
 **endDate** | **Date**| Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 
 **pageSize** | **Number**| The number of items in this response. | [optional] [default to 1000]
 **skip** | **Number**| The number of items to skip when paging through large result sets. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoyaltyProgramProfileTransactions

> InlineResponse2002 getLoyaltyProgramProfileTransactions(loyaltyProgramId, integrationId, opts)

List customer&#39;s loyalty transactions

Retrieve paginated results of loyalty transaction logs for the given Integration ID in the specified loyalty program.  You can filter transactions by date. If no filters are applied, the last 50 loyalty transactions for the given integration ID are returned.  **Note:** To retrieve all loyalty program transaction logs in a given loyalty program, use the [List loyalty program transactions](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyProgramTransactions) endpoint. 

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
let loyaltyProgramId = 56; // Number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
let integrationId = "integrationId_example"; // String | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
let opts = {
  'subledgerId': "subledgerId_example", // String | The ID of the subledger by which we filter the data.
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string. 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string. 
  'pageSize': 50, // Number | The number of items in this response.
  'skip': 56 // Number | The number of items to skip when paging through large result sets.
};
apiInstance.getLoyaltyProgramProfileTransactions(loyaltyProgramId, integrationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyProgramId** | **Number**| Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | 
 **integrationId** | **String**| The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | 
 **subledgerId** | **String**| The ID of the subledger by which we filter the data. | [optional] 
 **startDate** | **Date**| Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 
 **endDate** | **Date**| Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 
 **pageSize** | **Number**| The number of items in this response. | [optional] [default to 50]
 **skip** | **Number**| The number of items to skip when paging through large result sets. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReservedCustomers

> InlineResponse200 getReservedCustomers(couponValue)

List customers that have this coupon reserved

Return all customers that have this coupon marked as reserved.  Coupons are reserved in the following ways: - To create a soft reservation (any customer can use the coupon), use the [Create coupon reservation](#operation/createCouponReservation) endpoint. - To create a hard reservation (only the given customer can use the coupon), create a coupon in the Campaign Manager for a given &#x60;recipientIntegrationId&#x60; or use the [Create coupons](https://docs.talon.one/management-api#operation/createCoupons) or [Create coupons for multiple recipients](https://docs.talon.one/management-api#operation/createCouponsForMultipleRecipients) endpoints. 

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
let couponValue = "couponValue_example"; // String | The code of the coupon.
apiInstance.getReservedCustomers(couponValue).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponValue** | **String**| The code of the coupon. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkLoyaltyCardToProfile

> LoyaltyCard linkLoyaltyCardToProfile(loyaltyProgramId, loyaltyCardId, body)

Link customer profile to card

[Loyalty cards](https://docs.talon.one/docs/product/loyalty-programs/loyalty-cards/loyalty-card-overview) allow customers to collect and spend loyalty points within a [card-based loyalty program](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types). They are useful to gamify loyalty programs and can be used with or without customer profiles linked to them.  Link a customer profile to a given loyalty card for the card to be set as **Registered**. This affects how it can be used. See the [docs](https://docs.talon.one/docs/product/loyalty-programs/loyalty-cards/managing-loyalty-cards#linking-customer-profiles-to-a-loyalty-card).  **Note:** You can link as many customer profiles to a given loyalty card as the [**card user limit**](https://docs.talon.one/docs/product/loyalty-programs/creating-loyalty-programs#creating-card-based-loyalty-programs) allows. 

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
let loyaltyProgramId = 56; // Number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
let loyaltyCardId = "loyaltyCardId_example"; // String | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
let body = new TalonOne.LoyaltyCardRegistration(); // LoyaltyCardRegistration | body
apiInstance.linkLoyaltyCardToProfile(loyaltyProgramId, loyaltyCardId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltyProgramId** | **Number**| Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | 
 **loyaltyCardId** | **String**| Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | 
 **body** | [**LoyaltyCardRegistration**](LoyaltyCardRegistration.md)| body | 

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reopenCustomerSession

> ReopenSessionResponse reopenCustomerSession(customerSessionId)

Reopen customer session

Reopen a closed [customer session](https://docs.talon.one/docs/dev/concepts/entities#customer-session). For example, if a session has been completed but still needs to be edited, you can reopen it with this endpoint. A reopen session is treated like a standard open session.  When reopening a session: - The &#x60;talon_session_reopened&#x60; event is triggered. You can see it in the **Events** view in the Campaign Manager. - The session state is updated to &#x60;open&#x60;. - Modified budgets and triggered effects when the session was closed are rolled back except for the list below.  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Effects and budgets unimpacted by a session reopening&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;     &lt;p&gt;The following effects and budgets are left the way they were once the session was originally closed:&lt;/p&gt;     &lt;ul&gt;       &lt;li&gt;Add free item effect&lt;/li&gt;       &lt;li&gt;Any &lt;strong&gt;not pending&lt;/strong&gt; pending loyalty points.&lt;/li&gt;       &lt;li&gt;Award giveaway&lt;/li&gt;       &lt;li&gt;Coupon and referral creation&lt;/li&gt;       &lt;li&gt;Coupon reservation&lt;/li&gt;       &lt;li&gt;Custom effect&lt;/li&gt;       &lt;li&gt;Update attribute value&lt;/li&gt;       &lt;li&gt;Update cart item attribute value&lt;/li&gt;     &lt;/ul&gt;   &lt;/div&gt; &lt;p&gt;To see an example of roll back, see the &lt;a href&#x3D;\&quot;https://docs.talon.one/docs/dev/tutorials/rolling-back-effects\&quot;&gt;Cancelling a session with campaign budgets tutorial&lt;/a&gt;.&lt;/p&gt; &lt;/details&gt;  **Note:** If your order workflow requires you to create a new session instead of reopening a session, use the [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) endpoint to cancel a closed session and create a new one. 

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
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
apiInstance.reopenCustomerSession(customerSessionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | 

### Return type

[**ReopenSessionResponse**](ReopenSessionResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnCartItems

> IntegrationStateV2 returnCartItems(customerSessionId, body, opts)

Return cart items

Create a new return request for the specified cart items.  This endpoint automatically changes the session state from &#x60;closed&#x60; to &#x60;partially_returned&#x60;.  Its behavior depends on whether [cart item flattening](https://docs.talon.one/docs/product/campaigns/managing-general-settings#flattening) is enabled for the Application.  **Note:** This will roll back any effects associated with these cart items. For more information, see [our documentation on session states](https://docs.talon.one/docs/dev/concepts/entities#customer-session-states) and [this tutorial](https://docs.talon.one/docs/dev/tutorials/partially-returning-a-session). 

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
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
let body = new TalonOne.ReturnIntegrationRequest(); // ReturnIntegrationRequest | body
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
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | 
 **body** | [**ReturnIntegrationRequest**](ReturnIntegrationRequest.md)| body | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncCatalog

> Catalog syncCatalog(catalogId, body)

Sync cart item catalog

Perform one or more of the following sync actions on this cart item catalog, up to 1000 actions:  - Add an item to the catalog. - Edit the attributes of an item in the catalog. - Edit the attributes of more than one item in the catalog. - Remove an item from the catalog. - Remove more than one item from the catalog.  **Note:** For more information, see [our documentation on managing cart item catalogs](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs).  ### Filtering cart items  Use [cart item attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs#displaying-the-details-and-content-of-a-catalog) to filter items and select the ones you want to edit or delete when editing or deleting more than one item at a time.  The &#x60;filters&#x60; array contains an object with the following properties:  - &#x60;attr&#x60;: A [cart item attribute](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes)   connected to the catalog. It is applied to all items in the catalog. - &#x60;op&#x60;: The filtering operator indicating the relationship between the value of each   cart item in the catalog and the value of the &#x60;value&#x60; property for the attribute selected   in &#x60;attr&#x60;.    The value of &#x60;op&#x60; can be one of the following:    - &#x60;EQ&#x60;: Equal to &#x60;value&#x60;   - &#x60;LT&#x60;: Less than &#x60;value&#x60;   - &#x60;LE&#x60;: Less than or equal to &#x60;value&#x60;   - &#x60;GT&#x60;: Greater than &#x60;value&#x60;   - &#x60;GE&#x60;: Greater than or equal to &#x60;value&#x60;   - &#x60;IN&#x60;: One of the comma-separated values that &#x60;value&#x60; is set to.    **Note:** &#x60;GE&#x60;, &#x60;LE&#x60;, &#x60;GT&#x60;, &#x60;LT&#x60; are for numeric values only.  - &#x60;value&#x60;: The value of the attribute selected in &#x60;attr&#x60;.  ### Payload examples  Synchronization actions are sent as &#x60;PUT&#x60; requests. See the structure for each action:  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Adding an item to the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;Navy blue\&quot;,             \&quot;type\&quot;: \&quot;shoe\&quot;           },           \&quot;replaceIfExists\&quot;: true,           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;,           \&quot;price\&quot;: 100         },         \&quot;type\&quot;: \&quot;ADD\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Editing the attributes of an item in the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;age\&quot;: 11,             \&quot;origin\&quot;: \&quot;germany\&quot;           },           \&quot;createIfNotExists\&quot;: false,           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;         },         \&quot;type\&quot;: \&quot;PATCH\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Editing the attributes of several items at once&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;red\&quot;           },           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;color\&quot;,               \&quot;op\&quot;: \&quot;EQ\&quot;,               \&quot;value\&quot;: \&quot;blue\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;PATCH_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;    &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing an item from the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;         },         \&quot;type\&quot;: \&quot;REMOVE\&quot;       }     ]   }   &#x60;&#x60;&#x60;    &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing several items from the catalog at once&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;color\&quot;,               \&quot;op\&quot;: \&quot;EQ\&quot;,               \&quot;value\&quot;: \&quot;blue\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;REMOVE_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing shoes of sizes above 45 from the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;   &lt;p&gt;   Let&#39;s imagine that we have a shoe store and we have decided to stop selling   shoes larger than size 45. We can remove from the catalog all the shoes of sizes above 45   with a single action:&lt;/p&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;size\&quot;,               \&quot;op\&quot;: \&quot;GT\&quot;,               \&quot;value\&quot;: \&quot;45\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;REMOVE_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt; 

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
let catalogId = 56; // Number | The ID of the catalog. You can find the ID in the Campaign Manager in **Account** > **Tools** > **Cart item catalogs**.
let body = new TalonOne.CatalogSyncRequest(); // CatalogSyncRequest | body
apiInstance.syncCatalog(catalogId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| The ID of the catalog. You can find the ID in the Campaign Manager in **Account** &gt; **Tools** &gt; **Cart item catalogs**. | 
 **body** | [**CatalogSyncRequest**](CatalogSyncRequest.md)| body | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackEventV2

> IntegrationStateV2 trackEventV2(body, opts)

Track event

Triggers a custom event. You can build a condition around this event in your rules.  Talon.One offers a set of [built-in events](https://docs.talon.one/docs/dev/concepts/events). Ensure you do not create a custom event when you can use a built-in event.  For example, use this endpoint to trigger an event when a customer shares a link to a product. See the [tutorial](https://docs.talon.one/docs/product/tutorials/referrals/incentivizing-product-link-sharing).  **Important:** - &#x60;profileId&#x60; is required. An event is associated with a customer profile. - Before using this endpoint, create your event as a custom attribute of type &#x60;event&#x60;. See the [Developer docs](https://docs.talon.one/docs/dev/concepts/events#creating-a-custom-event). - We recommend sending requests sequentially. See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests).  When you successfully sent an event to Talon.One, you can list received events in the **Events** view in the Campaign Manager. 

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
let body = new TalonOne.IntegrationEventV2Request(); // IntegrationEventV2Request | body
let opts = {
  'silent': "'yes'", // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles. 
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
 **body** | [**IntegrationEventV2Request**](IntegrationEventV2Request.md)| body | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [optional] [default to &#39;yes&#39;]
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  | [optional] 

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
let body = null; // Object | body
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
 **body** | **Object**| body | 

### Return type

null (empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAudienceV2

> Audience updateAudienceV2(audienceId, body)

Update audience name

Update the name of the given audience created by a third-party integration. Sending a request to this endpoint does **not** trigger the rule engine.  To update the audience&#39;s members, use the [Update customer profile](#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint. 

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
let body = new TalonOne.UpdateAudience(); // UpdateAudience | body
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
 **body** | [**UpdateAudience**](UpdateAudience.md)| body | 

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
let body = new TalonOne.CustomerProfileAudienceRequest(); // CustomerProfileAudienceRequest | body
apiInstance.updateCustomerProfileAudiences(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProfileAudienceRequest**](CustomerProfileAudienceRequest.md)| body | 

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

Update or create a [Customer Profile](https://docs.talon.one/docs/dev/concepts/entities#customer-profile). This endpoint triggers the Rule Builder.  You can use this endpoint to: - Set attributes on the given customer profile. Ensure you create the attributes in the Campaign Manager, first. - Modify the audience the customer profile is a member of.  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Performance tips&lt;/p&gt;    - Updating a customer profile returns a response with the requested integration state.   - You can use the &#x60;responseContent&#x60; property to save yourself extra API calls. For example, you can get     the customer profile details directly without extra requests.   - We recommend sending requests sequentially.     See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests). &lt;/div&gt; 

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
let body = new TalonOne.CustomerProfileIntegrationRequestV2(); // CustomerProfileIntegrationRequestV2 | body
let opts = {
  'runRuleEngine': false, // Boolean | Indicates whether to run the Rule Engine.  If `true`, the response includes: - The effects generated by the triggered campaigns are returned in the `effects` property. - The created coupons and referral objects.  If `false`: - The rules are not executed and the `effects` property is always empty. - The response time improves. - You cannot use `responseContent` in the body. 
  'dry': true // Boolean | (Only works when `runRuleEngine=true`) Indicates whether to persist the changes. Changes are ignored when `dry=true`.  When set to `true`, you can use the `evaluableCampaignIds` body property to select specific campaigns to run. 
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
 **body** | [**CustomerProfileIntegrationRequestV2**](CustomerProfileIntegrationRequestV2.md)| body | 
 **runRuleEngine** | **Boolean**| Indicates whether to run the Rule Engine.  If &#x60;true&#x60;, the response includes: - The effects generated by the triggered campaigns are returned in the &#x60;effects&#x60; property. - The created coupons and referral objects.  If &#x60;false&#x60;: - The rules are not executed and the &#x60;effects&#x60; property is always empty. - The response time improves. - You cannot use &#x60;responseContent&#x60; in the body.  | [optional] [default to false]
 **dry** | **Boolean**| (Only works when &#x60;runRuleEngine&#x3D;true&#x60;) Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  When set to &#x60;true&#x60;, you can use the &#x60;evaluableCampaignIds&#x60; body property to select specific campaigns to run.  | [optional] 

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

Update (or create) up to 1000 [customer profiles](https://docs.talon.one/docs/dev/concepts/entities#customer-profile) in 1 request.  The &#x60;integrationId&#x60; must be any identifier that remains stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  A customer profile [can be linked to one or more sessions](https://docs.talon.one/integration-api#tag/Customer-sessions). 

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
let body = new TalonOne.MultipleCustomerProfileIntegrationRequest(); // MultipleCustomerProfileIntegrationRequest | body
let opts = {
  'silent': "'yes'" // String | Possible values: `yes` or `no`. - `yes`: Increases the perfomance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles. 
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
 **body** | [**MultipleCustomerProfileIntegrationRequest**](MultipleCustomerProfileIntegrationRequest.md)| body | 
 **silent** | **String**| Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the perfomance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [optional] [default to &#39;yes&#39;]

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

Update or create a [customer session](https://docs.talon.one/docs/dev/concepts/entities#customer-session). The endpoint responds with the potential promotion rule [effects](https://docs.talon.one/docs/dev/integration-api/api-effects) that match the current cart. For example, use this endpoint to share the contents of a customer&#39;s cart with Talon.One.  **Note:** The currency for the session and the cart items in the session is the currency set for the Application that owns this session.  ### Session management  To use this endpoint, start by learning about [customer sessions](https://docs.talon.one/docs/dev/concepts/entities#customer-session) and their states and refer to the &#x60;state&#x60; parameter documentation the request body schema docs below.  ### Sessions and customer profiles  - To link a session to a customer profile, set the &#x60;profileId&#x60; parameter in the request body to a customer profile&#39;s &#x60;integrationId&#x60;. - While you can create an anonymous session with &#x60;profileId&#x3D;\&quot;\&quot;&#x60;, we recommend you use a guest ID instead. - A profile can be linked to simultaneous sessions in different Applications. Either:   - Use unique session integration IDs or,   - Use the same session integration ID across all of the Applications.  **Note:** If the specified profile does not exist, an empty profile is **created automatically**.   You can update it with [Update customer profile](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfileV2).  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Performance tips&lt;/p&gt;    - Updating a customer session returns a response with the new integration state. Use the &#x60;responseContent&#x60; property to save yourself extra API calls.     For example, you can get the customer profile details directly without extra requests.   - We recommend sending requests sequentially. See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests). &lt;/div&gt;  For more information, see: - The introductory video in [Getting started](https://docs.talon.one/docs/dev/getting-started/overview). - The [integration tutorial](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one). 

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
let customerSessionId = "customerSessionId_example"; // String | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager's **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
let body = new TalonOne.IntegrationRequest(); // IntegrationRequest | body
let opts = {
  'dry': true // Boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.  When set to `true`, you can use the `evaluableCampaignIds` body property to select specific campaigns to run. 
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
 **customerSessionId** | **String**| The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | 
 **body** | [**IntegrationRequest**](IntegrationRequest.md)| body | 
 **dry** | **Boolean**| Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  When set to &#x60;true&#x60;, you can use the &#x60;evaluableCampaignIds&#x60; body property to select specific campaigns to run.  | [optional] 

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

