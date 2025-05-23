# Talon.One JavaScript SDK

This SDK supports all of the operations of Talon.One's Integration API and Management API.

## Installation

Install via [npm](https://www.npmjs.com/package/talon_one):

```shell
npm install talon_one
```

### Webpack configuration

If you are using webpack, you may encounter the following error: `Module not found: Error:
Cannot resolve module`. In this case, try disabling the AMD loader by adding the following section
to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Determining the base URL of the endpoints

The API is available at the same hostname as your Campaign Manager deployment.
For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one`,
the URL for the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint
is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}`.

## Getting started

### Integration API

The following code shows an example of using the Integration API:

```javascript
const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://yourbaseurl.talon.one"; // No trailing slash!

// Configure API key authorization: api_key_v1
const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey =
  "dbc644d33aa74d582bd9479c59e16f970fe13bf34a208c39d6c7fa7586968468";
api_key_v1.apiKeyPrefix = "ApiKey-v1";

// Integration API example to send a session update
const integrationApi = new TalonOne.IntegrationApi();

// Initializing a customer session object
const customerSession = TalonOne.NewCustomerSessionV2.constructFromObject({
  profileId: 'example_prof_id',
  cartItems: [
    {
      name: 'Döner King',
      sku: 'kd-100',
      quantity: 1,
      price: 2.00,
      category: 'pizzas'
    },
    {
      name: 'Spezi 500ml',
      sku: 'sp-50',
      quantity: 1,
      price: 2,
      category: 'beverages'
    },
    {
      name: 'Queen Döner',
      sku: 'qd-100',
      quantity: 1,
      price: 2.50,
      category: 'pizzas'
    },
    {
      name: 'Club Mate 330ml',
      sku: 'cm-33',
      quantity: 1,
      price: 1.80,
      category: 'beverages'
    }
  ],
  couponCodes: [
    'Cool-Summer!'
  ]
});

//Initializing an integration request wrapping the customer session
const integrationRequest = new TalonOne.IntegrationRequest(customerSession);

// Optional list of requested information to be present on the response.
// See src/model/IntegrationRequest#ResponseContentEnum for full list of supported values
// integrationRequest.responseContent = [
//   TalonOne.IntegrationRequest.ResponseContentEnum.customerSession,
//   TalonOne.IntegrationRequest.ResponseContentEnum.customerProfile
// ]

integrationApi
  .updateCustomerSessionV2("example_integration_v2_id", integrationRequest)
  .then(
    data => {
      console.log(JSON.stringify(data, null, 2));

      // Parsing the returned effects list, please consult https://developers.talon.one/Integration-API/handling-effects-v2 for the full list of effects and their corresponding properties
      data.effects.forEach(effect => {
        switch(effect.effectType) {
          case 'setDiscount':
            // Initiating right props instance according to the effect type
            const setDiscountProps = TalonOne.SetDiscountEffectProps.constructFromObject(effect.props)
            // Initiating the right props class is not a necessity, it is only a suggestion here that could help in case of unexpected returned values from the API

            // Access the specific effect's properties
            console.log(`Set a discount '${setDiscountProps.name}' of ${setDiscountProps.value}`)
            break
          case 'acceptCoupon':
            // Work with AcceptCouponEffectProps' properties
            // ...
          default:
            throw new Error(`Unhandled effect type from Talon.One integration: ${effect.effectType}`)
        }
      })
    },
    err => {
      console.error(err);
    }
  );
```

### Management API

The following code shows an example of using the Management API:

```javascript
const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://yourbaseurl.talon.one"; // No trailing slash!

// Configure API key authorization: management_key
const management_key = defaultClient.authentications["management_key"];
management_key.apiKey =
  "2f0dce055da01ae595005d7d79154bae7448d319d5fc7c5b2951fadd6ba1ea07";
management_key.apiKeyPrefix = "ManagementKey-v1";

// Management API example to load application with id 7
const managementApi = new TalonOne.ManagementApi();

// Calling `getApplication` function with the desired id (7)
managementApi.getApplication(7).then(
  function(data) {
    console.log(
      "API called successfully. Returned data:\n" + JSON.stringify(data)
    );
  },
  function(error) {
    console.error("Error while fetching the application:\n" + error);
  }
);
```

## Documentation for API endpoints

All URLs are relative to `https://yourbaseurl.talon.one`.

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TalonOne.IntegrationApi* | [**createAudienceV2**](docs/IntegrationApi.md#createAudienceV2) | **POST** /v2/audiences | Create audience
*TalonOne.IntegrationApi* | [**createCouponReservation**](docs/IntegrationApi.md#createCouponReservation) | **POST** /v1/coupon_reservations/{couponValue} | Create coupon reservation
*TalonOne.IntegrationApi* | [**createReferral**](docs/IntegrationApi.md#createReferral) | **POST** /v1/referrals | Create referral code for an advocate
*TalonOne.IntegrationApi* | [**createReferralsForMultipleAdvocates**](docs/IntegrationApi.md#createReferralsForMultipleAdvocates) | **POST** /v1/referrals_for_multiple_advocates | Create referral codes for multiple advocates
*TalonOne.IntegrationApi* | [**deleteAudienceMembershipsV2**](docs/IntegrationApi.md#deleteAudienceMembershipsV2) | **DELETE** /v2/audiences/{audienceId}/memberships | Delete audience memberships
*TalonOne.IntegrationApi* | [**deleteAudienceV2**](docs/IntegrationApi.md#deleteAudienceV2) | **DELETE** /v2/audiences/{audienceId} | Delete audience
*TalonOne.IntegrationApi* | [**deleteCouponReservation**](docs/IntegrationApi.md#deleteCouponReservation) | **DELETE** /v1/coupon_reservations/{couponValue} | Delete coupon reservations
*TalonOne.IntegrationApi* | [**deleteCustomerData**](docs/IntegrationApi.md#deleteCustomerData) | **DELETE** /v1/customer_data/{integrationId} | Delete customer&#39;s personal data
*TalonOne.IntegrationApi* | [**generateLoyaltyCard**](docs/IntegrationApi.md#generateLoyaltyCard) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/cards | Generate loyalty card
*TalonOne.IntegrationApi* | [**getCustomerAchievementHistory**](docs/IntegrationApi.md#getCustomerAchievementHistory) | **GET** /v1/customer_profiles/{integrationId}/achievements/{achievementId} | List customer&#39;s achievement history
*TalonOne.IntegrationApi* | [**getCustomerAchievements**](docs/IntegrationApi.md#getCustomerAchievements) | **GET** /v1/customer_profiles/{integrationId}/achievements | List customer&#39;s available achievements
*TalonOne.IntegrationApi* | [**getCustomerInventory**](docs/IntegrationApi.md#getCustomerInventory) | **GET** /v1/customer_profiles/{integrationId}/inventory | List customer data
*TalonOne.IntegrationApi* | [**getCustomerSession**](docs/IntegrationApi.md#getCustomerSession) | **GET** /v2/customer_sessions/{customerSessionId} | Get customer session
*TalonOne.IntegrationApi* | [**getLoyaltyBalances**](docs/IntegrationApi.md#getLoyaltyBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/balances | Get customer&#39;s loyalty balances
*TalonOne.IntegrationApi* | [**getLoyaltyCardBalances**](docs/IntegrationApi.md#getLoyaltyCardBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/balances | Get card&#39;s point balances
*TalonOne.IntegrationApi* | [**getLoyaltyCardPoints**](docs/IntegrationApi.md#getLoyaltyCardPoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/points | List card&#39;s unused loyalty points
*TalonOne.IntegrationApi* | [**getLoyaltyCardTransactions**](docs/IntegrationApi.md#getLoyaltyCardTransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/transactions | List card&#39;s transactions
*TalonOne.IntegrationApi* | [**getLoyaltyProgramProfilePoints**](docs/IntegrationApi.md#getLoyaltyProgramProfilePoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/points | List customer&#39;s unused loyalty points
*TalonOne.IntegrationApi* | [**getLoyaltyProgramProfileTransactions**](docs/IntegrationApi.md#getLoyaltyProgramProfileTransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/transactions | List customer&#39;s loyalty transactions
*TalonOne.IntegrationApi* | [**getReservedCustomers**](docs/IntegrationApi.md#getReservedCustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | List customers that have this coupon reserved
*TalonOne.IntegrationApi* | [**linkLoyaltyCardToProfile**](docs/IntegrationApi.md#linkLoyaltyCardToProfile) | **POST** /v2/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/link_profile | Link customer profile to card
*TalonOne.IntegrationApi* | [**reopenCustomerSession**](docs/IntegrationApi.md#reopenCustomerSession) | **PUT** /v2/customer_sessions/{customerSessionId}/reopen | Reopen customer session
*TalonOne.IntegrationApi* | [**returnCartItems**](docs/IntegrationApi.md#returnCartItems) | **POST** /v2/customer_sessions/{customerSessionId}/returns | Return cart items
*TalonOne.IntegrationApi* | [**syncCatalog**](docs/IntegrationApi.md#syncCatalog) | **PUT** /v1/catalogs/{catalogId}/sync | Sync cart item catalog
*TalonOne.IntegrationApi* | [**trackEventV2**](docs/IntegrationApi.md#trackEventV2) | **POST** /v2/events | Track event
*TalonOne.IntegrationApi* | [**updateAudienceCustomersAttributes**](docs/IntegrationApi.md#updateAudienceCustomersAttributes) | **PUT** /v2/audience_customers/{audienceId}/attributes | Update profile attributes for all customers in audience
*TalonOne.IntegrationApi* | [**updateAudienceV2**](docs/IntegrationApi.md#updateAudienceV2) | **PUT** /v2/audiences/{audienceId} | Update audience name
*TalonOne.IntegrationApi* | [**updateCustomerProfileAudiences**](docs/IntegrationApi.md#updateCustomerProfileAudiences) | **POST** /v2/customer_audiences | Update multiple customer profiles&#39; audiences
*TalonOne.IntegrationApi* | [**updateCustomerProfileV2**](docs/IntegrationApi.md#updateCustomerProfileV2) | **PUT** /v2/customer_profiles/{integrationId} | Update customer profile
*TalonOne.IntegrationApi* | [**updateCustomerProfilesV2**](docs/IntegrationApi.md#updateCustomerProfilesV2) | **PUT** /v2/customer_profiles | Update multiple customer profiles
*TalonOne.IntegrationApi* | [**updateCustomerSessionV2**](docs/IntegrationApi.md#updateCustomerSessionV2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update customer session
*TalonOne.ManagementApi* | [**activateUserByEmail**](docs/ManagementApi.md#activateUserByEmail) | **POST** /v1/users/activate | Enable user by email address
*TalonOne.ManagementApi* | [**addLoyaltyCardPoints**](docs/ManagementApi.md#addLoyaltyCardPoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/add_points | Add points to card
*TalonOne.ManagementApi* | [**addLoyaltyPoints**](docs/ManagementApi.md#addLoyaltyPoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/add_points | Add points to customer profile
*TalonOne.ManagementApi* | [**copyCampaignToApplications**](docs/ManagementApi.md#copyCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into the specified Application
*TalonOne.ManagementApi* | [**createAccountCollection**](docs/ManagementApi.md#createAccountCollection) | **POST** /v1/collections | Create account-level collection
*TalonOne.ManagementApi* | [**createAchievement**](docs/ManagementApi.md#createAchievement) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements | Create achievement
*TalonOne.ManagementApi* | [**createAdditionalCost**](docs/ManagementApi.md#createAdditionalCost) | **POST** /v1/additional_costs | Create additional cost
*TalonOne.ManagementApi* | [**createAttribute**](docs/ManagementApi.md#createAttribute) | **POST** /v1/attributes | Create custom attribute
*TalonOne.ManagementApi* | [**createBatchLoyaltyCards**](docs/ManagementApi.md#createBatchLoyaltyCards) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/cards/batch | Create loyalty cards
*TalonOne.ManagementApi* | [**createCampaignFromTemplate**](docs/ManagementApi.md#createCampaignFromTemplate) | **POST** /v1/applications/{applicationId}/create_campaign_from_template | Create campaign from campaign template
*TalonOne.ManagementApi* | [**createCollection**](docs/ManagementApi.md#createCollection) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/collections | Create campaign-level collection
*TalonOne.ManagementApi* | [**createCoupons**](docs/ManagementApi.md#createCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons
*TalonOne.ManagementApi* | [**createCouponsAsync**](docs/ManagementApi.md#createCouponsAsync) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_async | Create coupons asynchronously
*TalonOne.ManagementApi* | [**createCouponsDeletionJob**](docs/ManagementApi.md#createCouponsDeletionJob) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_deletion_jobs | Creates a coupon deletion job
*TalonOne.ManagementApi* | [**createCouponsForMultipleRecipients**](docs/ManagementApi.md#createCouponsForMultipleRecipients) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_with_recipients | Create coupons for multiple recipients
*TalonOne.ManagementApi* | [**createInviteEmail**](docs/ManagementApi.md#createInviteEmail) | **POST** /v1/invite_emails | Resend invitation email
*TalonOne.ManagementApi* | [**createInviteV2**](docs/ManagementApi.md#createInviteV2) | **POST** /v2/invites | Invite user
*TalonOne.ManagementApi* | [**createPasswordRecoveryEmail**](docs/ManagementApi.md#createPasswordRecoveryEmail) | **POST** /v1/password_recovery_emails | Request a password reset
*TalonOne.ManagementApi* | [**createSession**](docs/ManagementApi.md#createSession) | **POST** /v1/sessions | Create session
*TalonOne.ManagementApi* | [**createStore**](docs/ManagementApi.md#createStore) | **POST** /v1/applications/{applicationId}/stores | Create store
*TalonOne.ManagementApi* | [**deactivateUserByEmail**](docs/ManagementApi.md#deactivateUserByEmail) | **POST** /v1/users/deactivate | Disable user by email address
*TalonOne.ManagementApi* | [**deductLoyaltyCardPoints**](docs/ManagementApi.md#deductLoyaltyCardPoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/deduct_points | Deduct points from card
*TalonOne.ManagementApi* | [**deleteAccountCollection**](docs/ManagementApi.md#deleteAccountCollection) | **DELETE** /v1/collections/{collectionId} | Delete account-level collection
*TalonOne.ManagementApi* | [**deleteAchievement**](docs/ManagementApi.md#deleteAchievement) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Delete achievement
*TalonOne.ManagementApi* | [**deleteCampaign**](docs/ManagementApi.md#deleteCampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete campaign
*TalonOne.ManagementApi* | [**deleteCollection**](docs/ManagementApi.md#deleteCollection) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Delete campaign-level collection
*TalonOne.ManagementApi* | [**deleteCoupon**](docs/ManagementApi.md#deleteCoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete coupon
*TalonOne.ManagementApi* | [**deleteCoupons**](docs/ManagementApi.md#deleteCoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete coupons
*TalonOne.ManagementApi* | [**deleteLoyaltyCard**](docs/ManagementApi.md#deleteLoyaltyCard) | **DELETE** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Delete loyalty card
*TalonOne.ManagementApi* | [**deleteReferral**](docs/ManagementApi.md#deleteReferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete referral
*TalonOne.ManagementApi* | [**deleteStore**](docs/ManagementApi.md#deleteStore) | **DELETE** /v1/applications/{applicationId}/stores/{storeId} | Delete store
*TalonOne.ManagementApi* | [**deleteUser**](docs/ManagementApi.md#deleteUser) | **DELETE** /v1/users/{userId} | Delete user
*TalonOne.ManagementApi* | [**deleteUserByEmail**](docs/ManagementApi.md#deleteUserByEmail) | **POST** /v1/users/delete | Delete user by email address
*TalonOne.ManagementApi* | [**destroySession**](docs/ManagementApi.md#destroySession) | **DELETE** /v1/sessions | Destroy session
*TalonOne.ManagementApi* | [**disconnectCampaignStores**](docs/ManagementApi.md#disconnectCampaignStores) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/stores | Disconnect stores
*TalonOne.ManagementApi* | [**exportAccountCollectionItems**](docs/ManagementApi.md#exportAccountCollectionItems) | **GET** /v1/collections/{collectionId}/export | Export account-level collection&#39;s items
*TalonOne.ManagementApi* | [**exportAchievements**](docs/ManagementApi.md#exportAchievements) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId}/export | Export achievement customer data
*TalonOne.ManagementApi* | [**exportAudiencesMemberships**](docs/ManagementApi.md#exportAudiencesMemberships) | **GET** /v1/audiences/{audienceId}/memberships/export | Export audience members
*TalonOne.ManagementApi* | [**exportCampaignStores**](docs/ManagementApi.md#exportCampaignStores) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/export | Export stores
*TalonOne.ManagementApi* | [**exportCollectionItems**](docs/ManagementApi.md#exportCollectionItems) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId}/export | Export campaign-level collection&#39;s items
*TalonOne.ManagementApi* | [**exportCoupons**](docs/ManagementApi.md#exportCoupons) | **GET** /v1/applications/{applicationId}/export_coupons | Export coupons
*TalonOne.ManagementApi* | [**exportCustomerSessions**](docs/ManagementApi.md#exportCustomerSessions) | **GET** /v1/applications/{applicationId}/export_customer_sessions | Export customer sessions
*TalonOne.ManagementApi* | [**exportCustomersTiers**](docs/ManagementApi.md#exportCustomersTiers) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customers_tiers | Export customers&#39; tier data
*TalonOne.ManagementApi* | [**exportEffects**](docs/ManagementApi.md#exportEffects) | **GET** /v1/applications/{applicationId}/export_effects | Export triggered effects
*TalonOne.ManagementApi* | [**exportLoyaltyBalance**](docs/ManagementApi.md#exportLoyaltyBalance) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customer_balance | Export customer loyalty balance to CSV
*TalonOne.ManagementApi* | [**exportLoyaltyBalances**](docs/ManagementApi.md#exportLoyaltyBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customer_balances | Export customer loyalty balances
*TalonOne.ManagementApi* | [**exportLoyaltyCardBalances**](docs/ManagementApi.md#exportLoyaltyCardBalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_card_balances | Export all card transaction logs
*TalonOne.ManagementApi* | [**exportLoyaltyCardLedger**](docs/ManagementApi.md#exportLoyaltyCardLedger) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/export_log | Export card&#39;s ledger log
*TalonOne.ManagementApi* | [**exportLoyaltyCards**](docs/ManagementApi.md#exportLoyaltyCards) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/export | Export loyalty cards
*TalonOne.ManagementApi* | [**exportLoyaltyLedger**](docs/ManagementApi.md#exportLoyaltyLedger) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/export_log | Export customer&#39;s transaction logs
*TalonOne.ManagementApi* | [**exportPoolGiveaways**](docs/ManagementApi.md#exportPoolGiveaways) | **GET** /v1/giveaways/pools/{poolId}/export | Export giveaway codes of a giveaway pool
*TalonOne.ManagementApi* | [**exportReferrals**](docs/ManagementApi.md#exportReferrals) | **GET** /v1/applications/{applicationId}/export_referrals | Export referrals
*TalonOne.ManagementApi* | [**getAccessLogsWithoutTotalCount**](docs/ManagementApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for Application
*TalonOne.ManagementApi* | [**getAccount**](docs/ManagementApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get account details
*TalonOne.ManagementApi* | [**getAccountAnalytics**](docs/ManagementApi.md#getAccountAnalytics) | **GET** /v1/accounts/{accountId}/analytics | Get account analytics
*TalonOne.ManagementApi* | [**getAccountCollection**](docs/ManagementApi.md#getAccountCollection) | **GET** /v1/collections/{collectionId} | Get account-level collection
*TalonOne.ManagementApi* | [**getAchievement**](docs/ManagementApi.md#getAchievement) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Get achievement
*TalonOne.ManagementApi* | [**getAdditionalCost**](docs/ManagementApi.md#getAdditionalCost) | **GET** /v1/additional_costs/{additionalCostId} | Get additional cost
*TalonOne.ManagementApi* | [**getAdditionalCosts**](docs/ManagementApi.md#getAdditionalCosts) | **GET** /v1/additional_costs | List additional costs
*TalonOne.ManagementApi* | [**getApplication**](docs/ManagementApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
*TalonOne.ManagementApi* | [**getApplicationApiHealth**](docs/ManagementApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get Application health
*TalonOne.ManagementApi* | [**getApplicationCustomer**](docs/ManagementApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get application&#39;s customer
*TalonOne.ManagementApi* | [**getApplicationCustomerFriends**](docs/ManagementApi.md#getApplicationCustomerFriends) | **GET** /v1/applications/{applicationId}/profile/{integrationId}/friends | List friends referred by customer profile
*TalonOne.ManagementApi* | [**getApplicationCustomers**](docs/ManagementApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List application&#39;s customers
*TalonOne.ManagementApi* | [**getApplicationCustomersByAttributes**](docs/ManagementApi.md#getApplicationCustomersByAttributes) | **POST** /v1/applications/{applicationId}/customer_search | List application customers matching the given attributes
*TalonOne.ManagementApi* | [**getApplicationEventTypes**](docs/ManagementApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications event types
*TalonOne.ManagementApi* | [**getApplicationEventsWithoutTotalCount**](docs/ManagementApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications events
*TalonOne.ManagementApi* | [**getApplicationSession**](docs/ManagementApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application session
*TalonOne.ManagementApi* | [**getApplicationSessions**](docs/ManagementApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application sessions
*TalonOne.ManagementApi* | [**getApplications**](docs/ManagementApi.md#getApplications) | **GET** /v1/applications | List Applications
*TalonOne.ManagementApi* | [**getAttribute**](docs/ManagementApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get custom attribute
*TalonOne.ManagementApi* | [**getAttributes**](docs/ManagementApi.md#getAttributes) | **GET** /v1/attributes | List custom attributes
*TalonOne.ManagementApi* | [**getAudienceMemberships**](docs/ManagementApi.md#getAudienceMemberships) | **GET** /v1/audiences/{audienceId}/memberships | List audience members
*TalonOne.ManagementApi* | [**getAudiences**](docs/ManagementApi.md#getAudiences) | **GET** /v1/audiences | List audiences
*TalonOne.ManagementApi* | [**getAudiencesAnalytics**](docs/ManagementApi.md#getAudiencesAnalytics) | **GET** /v1/audiences/analytics | List audience analytics
*TalonOne.ManagementApi* | [**getCampaign**](docs/ManagementApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign
*TalonOne.ManagementApi* | [**getCampaignAnalytics**](docs/ManagementApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
*TalonOne.ManagementApi* | [**getCampaignByAttributes**](docs/ManagementApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | List campaigns that match the given attributes
*TalonOne.ManagementApi* | [**getCampaignGroup**](docs/ManagementApi.md#getCampaignGroup) | **GET** /v1/campaign_groups/{campaignGroupId} | Get campaign access group
*TalonOne.ManagementApi* | [**getCampaignGroups**](docs/ManagementApi.md#getCampaignGroups) | **GET** /v1/campaign_groups | List campaign access groups
*TalonOne.ManagementApi* | [**getCampaignTemplates**](docs/ManagementApi.md#getCampaignTemplates) | **GET** /v1/campaign_templates | List campaign templates
*TalonOne.ManagementApi* | [**getCampaigns**](docs/ManagementApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns
*TalonOne.ManagementApi* | [**getChanges**](docs/ManagementApi.md#getChanges) | **GET** /v1/changes | Get audit logs for an account
*TalonOne.ManagementApi* | [**getCollection**](docs/ManagementApi.md#getCollection) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Get campaign-level collection
*TalonOne.ManagementApi* | [**getCollectionItems**](docs/ManagementApi.md#getCollectionItems) | **GET** /v1/collections/{collectionId}/items | Get collection items
*TalonOne.ManagementApi* | [**getCouponsWithoutTotalCount**](docs/ManagementApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons
*TalonOne.ManagementApi* | [**getCustomerActivityReport**](docs/ManagementApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get customer&#39;s activity report
*TalonOne.ManagementApi* | [**getCustomerActivityReportsWithoutTotalCount**](docs/ManagementApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
*TalonOne.ManagementApi* | [**getCustomerAnalytics**](docs/ManagementApi.md#getCustomerAnalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get customer&#39;s analytics report
*TalonOne.ManagementApi* | [**getCustomerProfile**](docs/ManagementApi.md#getCustomerProfile) | **GET** /v1/customers/{customerId} | Get customer profile
*TalonOne.ManagementApi* | [**getCustomerProfileAchievementProgress**](docs/ManagementApi.md#getCustomerProfileAchievementProgress) | **GET** /v1/applications/{applicationId}/achievement_progress/{integrationId} | List customer achievements
*TalonOne.ManagementApi* | [**getCustomerProfiles**](docs/ManagementApi.md#getCustomerProfiles) | **GET** /v1/customers/no_total | List customer profiles
*TalonOne.ManagementApi* | [**getCustomersByAttributes**](docs/ManagementApi.md#getCustomersByAttributes) | **POST** /v1/customer_search/no_total | List customer profiles matching the given attributes
*TalonOne.ManagementApi* | [**getDashboardStatistics**](docs/ManagementApi.md#getDashboardStatistics) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/dashboard | Get statistics for loyalty dashboard
*TalonOne.ManagementApi* | [**getEventTypes**](docs/ManagementApi.md#getEventTypes) | **GET** /v1/event_types | List event types
*TalonOne.ManagementApi* | [**getExports**](docs/ManagementApi.md#getExports) | **GET** /v1/exports | Get exports
*TalonOne.ManagementApi* | [**getLoyaltyCard**](docs/ManagementApi.md#getLoyaltyCard) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Get loyalty card
*TalonOne.ManagementApi* | [**getLoyaltyCardTransactionLogs**](docs/ManagementApi.md#getLoyaltyCardTransactionLogs) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/logs | List card&#39;s transactions
*TalonOne.ManagementApi* | [**getLoyaltyCards**](docs/ManagementApi.md#getLoyaltyCards) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards | List loyalty cards
*TalonOne.ManagementApi* | [**getLoyaltyPoints**](docs/ManagementApi.md#getLoyaltyPoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId} | Get customer&#39;s full loyalty ledger
*TalonOne.ManagementApi* | [**getLoyaltyProgram**](docs/ManagementApi.md#getLoyaltyProgram) | **GET** /v1/loyalty_programs/{loyaltyProgramId} | Get loyalty program
*TalonOne.ManagementApi* | [**getLoyaltyProgramTransactions**](docs/ManagementApi.md#getLoyaltyProgramTransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/transactions | List loyalty program transactions
*TalonOne.ManagementApi* | [**getLoyaltyPrograms**](docs/ManagementApi.md#getLoyaltyPrograms) | **GET** /v1/loyalty_programs | List loyalty programs
*TalonOne.ManagementApi* | [**getLoyaltyStatistics**](docs/ManagementApi.md#getLoyaltyStatistics) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/statistics | Get loyalty program statistics
*TalonOne.ManagementApi* | [**getMessageLogs**](docs/ManagementApi.md#getMessageLogs) | **GET** /v1/message_logs | List message log entries
*TalonOne.ManagementApi* | [**getReferralsWithoutTotalCount**](docs/ManagementApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List referrals
*TalonOne.ManagementApi* | [**getRoleV2**](docs/ManagementApi.md#getRoleV2) | **GET** /v2/roles/{roleId} | Get role
*TalonOne.ManagementApi* | [**getRuleset**](docs/ManagementApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get ruleset
*TalonOne.ManagementApi* | [**getRulesets**](docs/ManagementApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List campaign rulesets
*TalonOne.ManagementApi* | [**getStore**](docs/ManagementApi.md#getStore) | **GET** /v1/applications/{applicationId}/stores/{storeId} | Get store
*TalonOne.ManagementApi* | [**getUser**](docs/ManagementApi.md#getUser) | **GET** /v1/users/{userId} | Get user
*TalonOne.ManagementApi* | [**getUsers**](docs/ManagementApi.md#getUsers) | **GET** /v1/users | List users in account
*TalonOne.ManagementApi* | [**getWebhook**](docs/ManagementApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get webhook
*TalonOne.ManagementApi* | [**getWebhookActivationLogs**](docs/ManagementApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List webhook activation log entries
*TalonOne.ManagementApi* | [**getWebhookLogs**](docs/ManagementApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List webhook log entries
*TalonOne.ManagementApi* | [**getWebhooks**](docs/ManagementApi.md#getWebhooks) | **GET** /v1/webhooks | List webhooks
*TalonOne.ManagementApi* | [**importAccountCollection**](docs/ManagementApi.md#importAccountCollection) | **POST** /v1/collections/{collectionId}/import | Import data into existing account-level collection
*TalonOne.ManagementApi* | [**importAllowedList**](docs/ManagementApi.md#importAllowedList) | **POST** /v1/attributes/{attributeId}/allowed_list/import | Import allowed values for attribute
*TalonOne.ManagementApi* | [**importAudiencesMemberships**](docs/ManagementApi.md#importAudiencesMemberships) | **POST** /v1/audiences/{audienceId}/memberships/import | Import audience members
*TalonOne.ManagementApi* | [**importCampaignStores**](docs/ManagementApi.md#importCampaignStores) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/import | Import stores
*TalonOne.ManagementApi* | [**importCollection**](docs/ManagementApi.md#importCollection) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId}/import | Import data into existing campaign-level collection
*TalonOne.ManagementApi* | [**importCoupons**](docs/ManagementApi.md#importCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_coupons | Import coupons
*TalonOne.ManagementApi* | [**importLoyaltyCards**](docs/ManagementApi.md#importLoyaltyCards) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_cards | Import loyalty cards
*TalonOne.ManagementApi* | [**importLoyaltyCustomersTiers**](docs/ManagementApi.md#importLoyaltyCustomersTiers) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_customers_tiers | Import customers into loyalty tiers
*TalonOne.ManagementApi* | [**importLoyaltyPoints**](docs/ManagementApi.md#importLoyaltyPoints) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_points | Import loyalty points
*TalonOne.ManagementApi* | [**importPoolGiveaways**](docs/ManagementApi.md#importPoolGiveaways) | **POST** /v1/giveaways/pools/{poolId}/import | Import giveaway codes into a giveaway pool
*TalonOne.ManagementApi* | [**importReferrals**](docs/ManagementApi.md#importReferrals) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_referrals | Import referrals
*TalonOne.ManagementApi* | [**inviteUserExternal**](docs/ManagementApi.md#inviteUserExternal) | **POST** /v1/users/invite | Invite user from identity provider
*TalonOne.ManagementApi* | [**listAccountCollections**](docs/ManagementApi.md#listAccountCollections) | **GET** /v1/collections | List collections in account
*TalonOne.ManagementApi* | [**listAchievements**](docs/ManagementApi.md#listAchievements) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements | List achievements
*TalonOne.ManagementApi* | [**listAllRolesV2**](docs/ManagementApi.md#listAllRolesV2) | **GET** /v2/roles | List roles
*TalonOne.ManagementApi* | [**listCatalogItems**](docs/ManagementApi.md#listCatalogItems) | **GET** /v1/catalogs/{catalogId}/items | List items in a catalog
*TalonOne.ManagementApi* | [**listCollections**](docs/ManagementApi.md#listCollections) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections | List collections in campaign
*TalonOne.ManagementApi* | [**listCollectionsInApplication**](docs/ManagementApi.md#listCollectionsInApplication) | **GET** /v1/applications/{applicationId}/collections | List collections in Application
*TalonOne.ManagementApi* | [**listStores**](docs/ManagementApi.md#listStores) | **GET** /v1/applications/{applicationId}/stores | List stores
*TalonOne.ManagementApi* | [**oktaEventHandlerChallenge**](docs/ManagementApi.md#oktaEventHandlerChallenge) | **GET** /v1/provisioning/okta | Validate Okta API ownership
*TalonOne.ManagementApi* | [**removeLoyaltyPoints**](docs/ManagementApi.md#removeLoyaltyPoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/deduct_points | Deduct points from customer profile
*TalonOne.ManagementApi* | [**resetPassword**](docs/ManagementApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
*TalonOne.ManagementApi* | [**scimCreateUser**](docs/ManagementApi.md#scimCreateUser) | **POST** /v1/provisioning/scim/Users | Create SCIM user
*TalonOne.ManagementApi* | [**scimDeleteUser**](docs/ManagementApi.md#scimDeleteUser) | **DELETE** /v1/provisioning/scim/Users/{userId} | Delete SCIM user
*TalonOne.ManagementApi* | [**scimGetResourceTypes**](docs/ManagementApi.md#scimGetResourceTypes) | **GET** /v1/provisioning/scim/ResourceTypes | List supported SCIM resource types
*TalonOne.ManagementApi* | [**scimGetSchemas**](docs/ManagementApi.md#scimGetSchemas) | **GET** /v1/provisioning/scim/Schemas | List supported SCIM schemas
*TalonOne.ManagementApi* | [**scimGetServiceProviderConfig**](docs/ManagementApi.md#scimGetServiceProviderConfig) | **GET** /v1/provisioning/scim/ServiceProviderConfig | Get SCIM service provider configuration
*TalonOne.ManagementApi* | [**scimGetUser**](docs/ManagementApi.md#scimGetUser) | **GET** /v1/provisioning/scim/Users/{userId} | Get SCIM user
*TalonOne.ManagementApi* | [**scimGetUsers**](docs/ManagementApi.md#scimGetUsers) | **GET** /v1/provisioning/scim/Users | List SCIM users
*TalonOne.ManagementApi* | [**scimPatchUser**](docs/ManagementApi.md#scimPatchUser) | **PATCH** /v1/provisioning/scim/Users/{userId} | Update SCIM user attributes
*TalonOne.ManagementApi* | [**scimReplaceUserAttributes**](docs/ManagementApi.md#scimReplaceUserAttributes) | **PUT** /v1/provisioning/scim/Users/{userId} | Update SCIM user
*TalonOne.ManagementApi* | [**searchCouponsAdvancedApplicationWideWithoutTotalCount**](docs/ManagementApi.md#searchCouponsAdvancedApplicationWideWithoutTotalCount) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | List coupons that match the given attributes (without total count)
*TalonOne.ManagementApi* | [**searchCouponsAdvancedWithoutTotalCount**](docs/ManagementApi.md#searchCouponsAdvancedWithoutTotalCount) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total | List coupons that match the given attributes in campaign (without total count)
*TalonOne.ManagementApi* | [**transferLoyaltyCard**](docs/ManagementApi.md#transferLoyaltyCard) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/transfer | Transfer card data
*TalonOne.ManagementApi* | [**updateAccountCollection**](docs/ManagementApi.md#updateAccountCollection) | **PUT** /v1/collections/{collectionId} | Update account-level collection
*TalonOne.ManagementApi* | [**updateAchievement**](docs/ManagementApi.md#updateAchievement) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Update achievement
*TalonOne.ManagementApi* | [**updateAdditionalCost**](docs/ManagementApi.md#updateAdditionalCost) | **PUT** /v1/additional_costs/{additionalCostId} | Update additional cost
*TalonOne.ManagementApi* | [**updateAttribute**](docs/ManagementApi.md#updateAttribute) | **PUT** /v1/attributes/{attributeId} | Update custom attribute
*TalonOne.ManagementApi* | [**updateCampaign**](docs/ManagementApi.md#updateCampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update campaign
*TalonOne.ManagementApi* | [**updateCollection**](docs/ManagementApi.md#updateCollection) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Update campaign-level collection&#39;s description
*TalonOne.ManagementApi* | [**updateCoupon**](docs/ManagementApi.md#updateCoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update coupon
*TalonOne.ManagementApi* | [**updateCouponBatch**](docs/ManagementApi.md#updateCouponBatch) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Update coupons
*TalonOne.ManagementApi* | [**updateLoyaltyCard**](docs/ManagementApi.md#updateLoyaltyCard) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Update loyalty card status
*TalonOne.ManagementApi* | [**updateReferral**](docs/ManagementApi.md#updateReferral) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Update referral
*TalonOne.ManagementApi* | [**updateRoleV2**](docs/ManagementApi.md#updateRoleV2) | **PUT** /v2/roles/{roleId} | Update role
*TalonOne.ManagementApi* | [**updateStore**](docs/ManagementApi.md#updateStore) | **PUT** /v1/applications/{applicationId}/stores/{storeId} | Update store
*TalonOne.ManagementApi* | [**updateUser**](docs/ManagementApi.md#updateUser) | **PUT** /v1/users/{userId} | Update user

## Documentation for models

- [TalonOne.APIError](docs/APIError.md)
- [TalonOne.AcceptCouponEffectProps](docs/AcceptCouponEffectProps.md)
- [TalonOne.AcceptReferralEffectProps](docs/AcceptReferralEffectProps.md)
- [TalonOne.AccessLogEntry](docs/AccessLogEntry.md)
- [TalonOne.Account](docs/Account.md)
- [TalonOne.AccountAdditionalCost](docs/AccountAdditionalCost.md)
- [TalonOne.AccountAnalytics](docs/AccountAnalytics.md)
- [TalonOne.AccountDashboardStatistic](docs/AccountDashboardStatistic.md)
- [TalonOne.AccountDashboardStatisticCampaigns](docs/AccountDashboardStatisticCampaigns.md)
- [TalonOne.AccountDashboardStatisticDiscount](docs/AccountDashboardStatisticDiscount.md)
- [TalonOne.AccountDashboardStatisticLoyaltyPoints](docs/AccountDashboardStatisticLoyaltyPoints.md)
- [TalonOne.AccountDashboardStatisticReferrals](docs/AccountDashboardStatisticReferrals.md)
- [TalonOne.AccountDashboardStatisticRevenue](docs/AccountDashboardStatisticRevenue.md)
- [TalonOne.AccountEntity](docs/AccountEntity.md)
- [TalonOne.AccountLimits](docs/AccountLimits.md)
- [TalonOne.Achievement](docs/Achievement.md)
- [TalonOne.AchievementAdditionalProperties](docs/AchievementAdditionalProperties.md)
- [TalonOne.AchievementBase](docs/AchievementBase.md)
- [TalonOne.AchievementProgress](docs/AchievementProgress.md)
- [TalonOne.AchievementProgressWithDefinition](docs/AchievementProgressWithDefinition.md)
- [TalonOne.AchievementStatusEntry](docs/AchievementStatusEntry.md)
- [TalonOne.AddFreeItemEffectProps](docs/AddFreeItemEffectProps.md)
- [TalonOne.AddItemCatalogAction](docs/AddItemCatalogAction.md)
- [TalonOne.AddLoyaltyPoints](docs/AddLoyaltyPoints.md)
- [TalonOne.AddLoyaltyPointsEffectProps](docs/AddLoyaltyPointsEffectProps.md)
- [TalonOne.AddToAudienceEffectProps](docs/AddToAudienceEffectProps.md)
- [TalonOne.AddedDeductedPointsNotificationPolicy](docs/AddedDeductedPointsNotificationPolicy.md)
- [TalonOne.AdditionalCampaignProperties](docs/AdditionalCampaignProperties.md)
- [TalonOne.AdditionalCost](docs/AdditionalCost.md)
- [TalonOne.AnalyticsDataPoint](docs/AnalyticsDataPoint.md)
- [TalonOne.AnalyticsDataPointWithTrend](docs/AnalyticsDataPointWithTrend.md)
- [TalonOne.AnalyticsDataPointWithTrendAndInfluencedRate](docs/AnalyticsDataPointWithTrendAndInfluencedRate.md)
- [TalonOne.AnalyticsDataPointWithTrendAndUplift](docs/AnalyticsDataPointWithTrendAndUplift.md)
- [TalonOne.AnalyticsProduct](docs/AnalyticsProduct.md)
- [TalonOne.AnalyticsSKU](docs/AnalyticsSKU.md)
- [TalonOne.Application](docs/Application.md)
- [TalonOne.ApplicationAPIKey](docs/ApplicationAPIKey.md)
- [TalonOne.ApplicationAnalyticsDataPoint](docs/ApplicationAnalyticsDataPoint.md)
- [TalonOne.ApplicationApiHealth](docs/ApplicationApiHealth.md)
- [TalonOne.ApplicationCIF](docs/ApplicationCIF.md)
- [TalonOne.ApplicationCIFExpression](docs/ApplicationCIFExpression.md)
- [TalonOne.ApplicationCIFReferences](docs/ApplicationCIFReferences.md)
- [TalonOne.ApplicationCampaignAnalytics](docs/ApplicationCampaignAnalytics.md)
- [TalonOne.ApplicationCampaignStats](docs/ApplicationCampaignStats.md)
- [TalonOne.ApplicationCustomer](docs/ApplicationCustomer.md)
- [TalonOne.ApplicationCustomerEntity](docs/ApplicationCustomerEntity.md)
- [TalonOne.ApplicationEntity](docs/ApplicationEntity.md)
- [TalonOne.ApplicationEvent](docs/ApplicationEvent.md)
- [TalonOne.ApplicationNotification](docs/ApplicationNotification.md)
- [TalonOne.ApplicationReferee](docs/ApplicationReferee.md)
- [TalonOne.ApplicationSession](docs/ApplicationSession.md)
- [TalonOne.ApplicationSessionEntity](docs/ApplicationSessionEntity.md)
- [TalonOne.ApplicationStoreEntity](docs/ApplicationStoreEntity.md)
- [TalonOne.AsyncCouponCreationResponse](docs/AsyncCouponCreationResponse.md)
- [TalonOne.AsyncCouponDeletionJobResponse](docs/AsyncCouponDeletionJobResponse.md)
- [TalonOne.Attribute](docs/Attribute.md)
- [TalonOne.AttributesMandatory](docs/AttributesMandatory.md)
- [TalonOne.AttributesSettings](docs/AttributesSettings.md)
- [TalonOne.Audience](docs/Audience.md)
- [TalonOne.AudienceAnalytics](docs/AudienceAnalytics.md)
- [TalonOne.AudienceCustomer](docs/AudienceCustomer.md)
- [TalonOne.AudienceIntegrationID](docs/AudienceIntegrationID.md)
- [TalonOne.AudienceMembership](docs/AudienceMembership.md)
- [TalonOne.AwardGiveawayEffectProps](docs/AwardGiveawayEffectProps.md)
- [TalonOne.BaseCampaign](docs/BaseCampaign.md)
- [TalonOne.BaseLoyaltyProgram](docs/BaseLoyaltyProgram.md)
- [TalonOne.BaseNotification](docs/BaseNotification.md)
- [TalonOne.BaseNotificationEntity](docs/BaseNotificationEntity.md)
- [TalonOne.BaseNotificationWebhook](docs/BaseNotificationWebhook.md)
- [TalonOne.BaseNotifications](docs/BaseNotifications.md)
- [TalonOne.BaseSamlConnection](docs/BaseSamlConnection.md)
- [TalonOne.Binding](docs/Binding.md)
- [TalonOne.BulkApplicationNotification](docs/BulkApplicationNotification.md)
- [TalonOne.BulkCampaignNotification](docs/BulkCampaignNotification.md)
- [TalonOne.BulkOperationOnCampaigns](docs/BulkOperationOnCampaigns.md)
- [TalonOne.Campaign](docs/Campaign.md)
- [TalonOne.CampaignActivationRequest](docs/CampaignActivationRequest.md)
- [TalonOne.CampaignAnalytics](docs/CampaignAnalytics.md)
- [TalonOne.CampaignBudget](docs/CampaignBudget.md)
- [TalonOne.CampaignCollection](docs/CampaignCollection.md)
- [TalonOne.CampaignCollectionEditedNotification](docs/CampaignCollectionEditedNotification.md)
- [TalonOne.CampaignCollectionWithoutPayload](docs/CampaignCollectionWithoutPayload.md)
- [TalonOne.CampaignCopy](docs/CampaignCopy.md)
- [TalonOne.CampaignCreatedNotification](docs/CampaignCreatedNotification.md)
- [TalonOne.CampaignDeletedNotification](docs/CampaignDeletedNotification.md)
- [TalonOne.CampaignDetail](docs/CampaignDetail.md)
- [TalonOne.CampaignEditedNotification](docs/CampaignEditedNotification.md)
- [TalonOne.CampaignEntity](docs/CampaignEntity.md)
- [TalonOne.CampaignEvaluationGroup](docs/CampaignEvaluationGroup.md)
- [TalonOne.CampaignEvaluationPosition](docs/CampaignEvaluationPosition.md)
- [TalonOne.CampaignEvaluationTreeChangedNotification](docs/CampaignEvaluationTreeChangedNotification.md)
- [TalonOne.CampaignGroup](docs/CampaignGroup.md)
- [TalonOne.CampaignGroupEntity](docs/CampaignGroupEntity.md)
- [TalonOne.CampaignNotification](docs/CampaignNotification.md)
- [TalonOne.CampaignNotificationPolicy](docs/CampaignNotificationPolicy.md)
- [TalonOne.CampaignRulesetChangedNotification](docs/CampaignRulesetChangedNotification.md)
- [TalonOne.CampaignSearch](docs/CampaignSearch.md)
- [TalonOne.CampaignSet](docs/CampaignSet.md)
- [TalonOne.CampaignSetBranchNode](docs/CampaignSetBranchNode.md)
- [TalonOne.CampaignSetLeafNode](docs/CampaignSetLeafNode.md)
- [TalonOne.CampaignSetNode](docs/CampaignSetNode.md)
- [TalonOne.CampaignStateChangedNotification](docs/CampaignStateChangedNotification.md)
- [TalonOne.CampaignStoreBudget](docs/CampaignStoreBudget.md)
- [TalonOne.CampaignStoreBudgetLimitConfig](docs/CampaignStoreBudgetLimitConfig.md)
- [TalonOne.CampaignTemplate](docs/CampaignTemplate.md)
- [TalonOne.CampaignTemplateCollection](docs/CampaignTemplateCollection.md)
- [TalonOne.CampaignTemplateCouponReservationSettings](docs/CampaignTemplateCouponReservationSettings.md)
- [TalonOne.CampaignTemplateParams](docs/CampaignTemplateParams.md)
- [TalonOne.CampaignVersions](docs/CampaignVersions.md)
- [TalonOne.CardAddedDeductedPointsNotificationPolicy](docs/CardAddedDeductedPointsNotificationPolicy.md)
- [TalonOne.CardExpiringPointsNotificationPolicy](docs/CardExpiringPointsNotificationPolicy.md)
- [TalonOne.CardExpiringPointsNotificationTrigger](docs/CardExpiringPointsNotificationTrigger.md)
- [TalonOne.CardLedgerPointsEntryIntegrationAPI](docs/CardLedgerPointsEntryIntegrationAPI.md)
- [TalonOne.CardLedgerTransactionLogEntry](docs/CardLedgerTransactionLogEntry.md)
- [TalonOne.CardLedgerTransactionLogEntryIntegrationAPI](docs/CardLedgerTransactionLogEntryIntegrationAPI.md)
- [TalonOne.CartItem](docs/CartItem.md)
- [TalonOne.Catalog](docs/Catalog.md)
- [TalonOne.CatalogAction](docs/CatalogAction.md)
- [TalonOne.CatalogActionFilter](docs/CatalogActionFilter.md)
- [TalonOne.CatalogItem](docs/CatalogItem.md)
- [TalonOne.CatalogSyncRequest](docs/CatalogSyncRequest.md)
- [TalonOne.CatalogsStrikethroughNotificationPolicy](docs/CatalogsStrikethroughNotificationPolicy.md)
- [TalonOne.Change](docs/Change.md)
- [TalonOne.ChangeLoyaltyTierLevelEffectProps](docs/ChangeLoyaltyTierLevelEffectProps.md)
- [TalonOne.ChangeProfilePassword](docs/ChangeProfilePassword.md)
- [TalonOne.CodeGeneratorSettings](docs/CodeGeneratorSettings.md)
- [TalonOne.Collection](docs/Collection.md)
- [TalonOne.CollectionItem](docs/CollectionItem.md)
- [TalonOne.CollectionWithoutPayload](docs/CollectionWithoutPayload.md)
- [TalonOne.Coupon](docs/Coupon.md)
- [TalonOne.CouponConstraints](docs/CouponConstraints.md)
- [TalonOne.CouponCreatedEffectProps](docs/CouponCreatedEffectProps.md)
- [TalonOne.CouponCreationJob](docs/CouponCreationJob.md)
- [TalonOne.CouponDeletionFilters](docs/CouponDeletionFilters.md)
- [TalonOne.CouponDeletionJob](docs/CouponDeletionJob.md)
- [TalonOne.CouponLimitConfigs](docs/CouponLimitConfigs.md)
- [TalonOne.CouponRejectionReason](docs/CouponRejectionReason.md)
- [TalonOne.CouponReservations](docs/CouponReservations.md)
- [TalonOne.CouponSearch](docs/CouponSearch.md)
- [TalonOne.CouponValue](docs/CouponValue.md)
- [TalonOne.CouponsNotificationPolicy](docs/CouponsNotificationPolicy.md)
- [TalonOne.CreateAchievement](docs/CreateAchievement.md)
- [TalonOne.CreateApplicationAPIKey](docs/CreateApplicationAPIKey.md)
- [TalonOne.CreateManagementKey](docs/CreateManagementKey.md)
- [TalonOne.CreateTemplateCampaign](docs/CreateTemplateCampaign.md)
- [TalonOne.CreateTemplateCampaignResponse](docs/CreateTemplateCampaignResponse.md)
- [TalonOne.CustomEffect](docs/CustomEffect.md)
- [TalonOne.CustomEffectProps](docs/CustomEffectProps.md)
- [TalonOne.CustomerActivityReport](docs/CustomerActivityReport.md)
- [TalonOne.CustomerAnalytics](docs/CustomerAnalytics.md)
- [TalonOne.CustomerInventory](docs/CustomerInventory.md)
- [TalonOne.CustomerProfile](docs/CustomerProfile.md)
- [TalonOne.CustomerProfileAudienceRequest](docs/CustomerProfileAudienceRequest.md)
- [TalonOne.CustomerProfileAudienceRequestItem](docs/CustomerProfileAudienceRequestItem.md)
- [TalonOne.CustomerProfileIntegrationRequestV2](docs/CustomerProfileIntegrationRequestV2.md)
- [TalonOne.CustomerProfileIntegrationResponseV2](docs/CustomerProfileIntegrationResponseV2.md)
- [TalonOne.CustomerProfileSearchQuery](docs/CustomerProfileSearchQuery.md)
- [TalonOne.CustomerProfileUpdateV2Response](docs/CustomerProfileUpdateV2Response.md)
- [TalonOne.CustomerSession](docs/CustomerSession.md)
- [TalonOne.CustomerSessionV2](docs/CustomerSessionV2.md)
- [TalonOne.DeductLoyaltyPoints](docs/DeductLoyaltyPoints.md)
- [TalonOne.DeductLoyaltyPointsEffectProps](docs/DeductLoyaltyPointsEffectProps.md)
- [TalonOne.DeleteUserRequest](docs/DeleteUserRequest.md)
- [TalonOne.Effect](docs/Effect.md)
- [TalonOne.EffectEntity](docs/EffectEntity.md)
- [TalonOne.EmailEntity](docs/EmailEntity.md)
- [TalonOne.Endpoint](docs/Endpoint.md)
- [TalonOne.Entity](docs/Entity.md)
- [TalonOne.EntityWithTalangVisibleID](docs/EntityWithTalangVisibleID.md)
- [TalonOne.Environment](docs/Environment.md)
- [TalonOne.ErrorEffectProps](docs/ErrorEffectProps.md)
- [TalonOne.ErrorResponse](docs/ErrorResponse.md)
- [TalonOne.ErrorResponseWithStatus](docs/ErrorResponseWithStatus.md)
- [TalonOne.ErrorSource](docs/ErrorSource.md)
- [TalonOne.EvaluableCampaignIds](docs/EvaluableCampaignIds.md)
- [TalonOne.Event](docs/Event.md)
- [TalonOne.EventType](docs/EventType.md)
- [TalonOne.EventV2](docs/EventV2.md)
- [TalonOne.ExpiringCouponsNotificationPolicy](docs/ExpiringCouponsNotificationPolicy.md)
- [TalonOne.ExpiringCouponsNotificationTrigger](docs/ExpiringCouponsNotificationTrigger.md)
- [TalonOne.ExpiringPointsNotificationPolicy](docs/ExpiringPointsNotificationPolicy.md)
- [TalonOne.ExpiringPointsNotificationTrigger](docs/ExpiringPointsNotificationTrigger.md)
- [TalonOne.FeatureFlag](docs/FeatureFlag.md)
- [TalonOne.FeaturesFeed](docs/FeaturesFeed.md)
- [TalonOne.FuncArgDef](docs/FuncArgDef.md)
- [TalonOne.FunctionDef](docs/FunctionDef.md)
- [TalonOne.GenerateCampaignDescription](docs/GenerateCampaignDescription.md)
- [TalonOne.GenerateCampaignTags](docs/GenerateCampaignTags.md)
- [TalonOne.GenerateItemFilterDescription](docs/GenerateItemFilterDescription.md)
- [TalonOne.GenerateLoyaltyCard](docs/GenerateLoyaltyCard.md)
- [TalonOne.GenerateRuleTitle](docs/GenerateRuleTitle.md)
- [TalonOne.GenerateRuleTitleRule](docs/GenerateRuleTitleRule.md)
- [TalonOne.GetIntegrationCouponRequest](docs/GetIntegrationCouponRequest.md)
- [TalonOne.Giveaway](docs/Giveaway.md)
- [TalonOne.GiveawaysPool](docs/GiveawaysPool.md)
- [TalonOne.HiddenConditionsEffects](docs/HiddenConditionsEffects.md)
- [TalonOne.IdentifiableEntity](docs/IdentifiableEntity.md)
- [TalonOne.ImportEntity](docs/ImportEntity.md)
- [TalonOne.IncreaseAchievementProgressEffectProps](docs/IncreaseAchievementProgressEffectProps.md)
- [TalonOne.InlineResponse200](docs/InlineResponse200.md)
- [TalonOne.InlineResponse2001](docs/InlineResponse2001.md)
- [TalonOne.InlineResponse20010](docs/InlineResponse20010.md)
- [TalonOne.InlineResponse20011](docs/InlineResponse20011.md)
- [TalonOne.InlineResponse20012](docs/InlineResponse20012.md)
- [TalonOne.InlineResponse20013](docs/InlineResponse20013.md)
- [TalonOne.InlineResponse20014](docs/InlineResponse20014.md)
- [TalonOne.InlineResponse20015](docs/InlineResponse20015.md)
- [TalonOne.InlineResponse20016](docs/InlineResponse20016.md)
- [TalonOne.InlineResponse20017](docs/InlineResponse20017.md)
- [TalonOne.InlineResponse20018](docs/InlineResponse20018.md)
- [TalonOne.InlineResponse20019](docs/InlineResponse20019.md)
- [TalonOne.InlineResponse2002](docs/InlineResponse2002.md)
- [TalonOne.InlineResponse20020](docs/InlineResponse20020.md)
- [TalonOne.InlineResponse20021](docs/InlineResponse20021.md)
- [TalonOne.InlineResponse20022](docs/InlineResponse20022.md)
- [TalonOne.InlineResponse20023](docs/InlineResponse20023.md)
- [TalonOne.InlineResponse20024](docs/InlineResponse20024.md)
- [TalonOne.InlineResponse20025](docs/InlineResponse20025.md)
- [TalonOne.InlineResponse20026](docs/InlineResponse20026.md)
- [TalonOne.InlineResponse20027](docs/InlineResponse20027.md)
- [TalonOne.InlineResponse20028](docs/InlineResponse20028.md)
- [TalonOne.InlineResponse20029](docs/InlineResponse20029.md)
- [TalonOne.InlineResponse2003](docs/InlineResponse2003.md)
- [TalonOne.InlineResponse20030](docs/InlineResponse20030.md)
- [TalonOne.InlineResponse20031](docs/InlineResponse20031.md)
- [TalonOne.InlineResponse20032](docs/InlineResponse20032.md)
- [TalonOne.InlineResponse20033](docs/InlineResponse20033.md)
- [TalonOne.InlineResponse20034](docs/InlineResponse20034.md)
- [TalonOne.InlineResponse20035](docs/InlineResponse20035.md)
- [TalonOne.InlineResponse20036](docs/InlineResponse20036.md)
- [TalonOne.InlineResponse20037](docs/InlineResponse20037.md)
- [TalonOne.InlineResponse20038](docs/InlineResponse20038.md)
- [TalonOne.InlineResponse20039](docs/InlineResponse20039.md)
- [TalonOne.InlineResponse2004](docs/InlineResponse2004.md)
- [TalonOne.InlineResponse20040](docs/InlineResponse20040.md)
- [TalonOne.InlineResponse20041](docs/InlineResponse20041.md)
- [TalonOne.InlineResponse20042](docs/InlineResponse20042.md)
- [TalonOne.InlineResponse20043](docs/InlineResponse20043.md)
- [TalonOne.InlineResponse20044](docs/InlineResponse20044.md)
- [TalonOne.InlineResponse20045](docs/InlineResponse20045.md)
- [TalonOne.InlineResponse20046](docs/InlineResponse20046.md)
- [TalonOne.InlineResponse20047](docs/InlineResponse20047.md)
- [TalonOne.InlineResponse20048](docs/InlineResponse20048.md)
- [TalonOne.InlineResponse20049](docs/InlineResponse20049.md)
- [TalonOne.InlineResponse2005](docs/InlineResponse2005.md)
- [TalonOne.InlineResponse2006](docs/InlineResponse2006.md)
- [TalonOne.InlineResponse2007](docs/InlineResponse2007.md)
- [TalonOne.InlineResponse2008](docs/InlineResponse2008.md)
- [TalonOne.InlineResponse2009](docs/InlineResponse2009.md)
- [TalonOne.InlineResponse201](docs/InlineResponse201.md)
- [TalonOne.IntegrationCoupon](docs/IntegrationCoupon.md)
- [TalonOne.IntegrationCustomerSessionResponse](docs/IntegrationCustomerSessionResponse.md)
- [TalonOne.IntegrationEntity](docs/IntegrationEntity.md)
- [TalonOne.IntegrationEvent](docs/IntegrationEvent.md)
- [TalonOne.IntegrationEventV2Request](docs/IntegrationEventV2Request.md)
- [TalonOne.IntegrationProfileEntity](docs/IntegrationProfileEntity.md)
- [TalonOne.IntegrationRequest](docs/IntegrationRequest.md)
- [TalonOne.IntegrationState](docs/IntegrationState.md)
- [TalonOne.IntegrationStateV2](docs/IntegrationStateV2.md)
- [TalonOne.IntegrationStoreEntity](docs/IntegrationStoreEntity.md)
- [TalonOne.InventoryCoupon](docs/InventoryCoupon.md)
- [TalonOne.InventoryReferral](docs/InventoryReferral.md)
- [TalonOne.ItemAttribute](docs/ItemAttribute.md)
- [TalonOne.LedgerEntry](docs/LedgerEntry.md)
- [TalonOne.LedgerInfo](docs/LedgerInfo.md)
- [TalonOne.LedgerPointsEntryIntegrationAPI](docs/LedgerPointsEntryIntegrationAPI.md)
- [TalonOne.LedgerTransactionLogEntryIntegrationAPI](docs/LedgerTransactionLogEntryIntegrationAPI.md)
- [TalonOne.LibraryAttribute](docs/LibraryAttribute.md)
- [TalonOne.LimitConfig](docs/LimitConfig.md)
- [TalonOne.LimitCounter](docs/LimitCounter.md)
- [TalonOne.ListCampaignStoreBudgets](docs/ListCampaignStoreBudgets.md)
- [TalonOne.ListCampaignStoreBudgetsStore](docs/ListCampaignStoreBudgetsStore.md)
- [TalonOne.LoginParams](docs/LoginParams.md)
- [TalonOne.Loyalty](docs/Loyalty.md)
- [TalonOne.LoyaltyBalance](docs/LoyaltyBalance.md)
- [TalonOne.LoyaltyBalanceWithTier](docs/LoyaltyBalanceWithTier.md)
- [TalonOne.LoyaltyBalances](docs/LoyaltyBalances.md)
- [TalonOne.LoyaltyBalancesWithTiers](docs/LoyaltyBalancesWithTiers.md)
- [TalonOne.LoyaltyCard](docs/LoyaltyCard.md)
- [TalonOne.LoyaltyCardBalances](docs/LoyaltyCardBalances.md)
- [TalonOne.LoyaltyCardBatch](docs/LoyaltyCardBatch.md)
- [TalonOne.LoyaltyCardBatchResponse](docs/LoyaltyCardBatchResponse.md)
- [TalonOne.LoyaltyCardProfileRegistration](docs/LoyaltyCardProfileRegistration.md)
- [TalonOne.LoyaltyCardRegistration](docs/LoyaltyCardRegistration.md)
- [TalonOne.LoyaltyDashboardData](docs/LoyaltyDashboardData.md)
- [TalonOne.LoyaltyDashboardPointsBreakdown](docs/LoyaltyDashboardPointsBreakdown.md)
- [TalonOne.LoyaltyLedger](docs/LoyaltyLedger.md)
- [TalonOne.LoyaltyLedgerEntry](docs/LoyaltyLedgerEntry.md)
- [TalonOne.LoyaltyLedgerEntryFlags](docs/LoyaltyLedgerEntryFlags.md)
- [TalonOne.LoyaltyLedgerTransactions](docs/LoyaltyLedgerTransactions.md)
- [TalonOne.LoyaltyMembership](docs/LoyaltyMembership.md)
- [TalonOne.LoyaltyProgram](docs/LoyaltyProgram.md)
- [TalonOne.LoyaltyProgramBalance](docs/LoyaltyProgramBalance.md)
- [TalonOne.LoyaltyProgramEntity](docs/LoyaltyProgramEntity.md)
- [TalonOne.LoyaltyProgramLedgers](docs/LoyaltyProgramLedgers.md)
- [TalonOne.LoyaltyProgramTransaction](docs/LoyaltyProgramTransaction.md)
- [TalonOne.LoyaltySubLedger](docs/LoyaltySubLedger.md)
- [TalonOne.LoyaltyTier](docs/LoyaltyTier.md)
- [TalonOne.ManagementKey](docs/ManagementKey.md)
- [TalonOne.ManagerConfig](docs/ManagerConfig.md)
- [TalonOne.MessageLogEntries](docs/MessageLogEntries.md)
- [TalonOne.MessageLogEntry](docs/MessageLogEntry.md)
- [TalonOne.MessageLogRequest](docs/MessageLogRequest.md)
- [TalonOne.MessageLogResponse](docs/MessageLogResponse.md)
- [TalonOne.MessageTest](docs/MessageTest.md)
- [TalonOne.Meta](docs/Meta.md)
- [TalonOne.ModelExport](docs/ModelExport.md)
- [TalonOne.ModelImport](docs/ModelImport.md)
- [TalonOne.ModelReturn](docs/ModelReturn.md)
- [TalonOne.MultiApplicationEntity](docs/MultiApplicationEntity.md)
- [TalonOne.MultipleAttribute](docs/MultipleAttribute.md)
- [TalonOne.MultipleAudiences](docs/MultipleAudiences.md)
- [TalonOne.MultipleAudiencesItem](docs/MultipleAudiencesItem.md)
- [TalonOne.MultipleCustomerProfileIntegrationRequest](docs/MultipleCustomerProfileIntegrationRequest.md)
- [TalonOne.MultipleCustomerProfileIntegrationRequestItem](docs/MultipleCustomerProfileIntegrationRequestItem.md)
- [TalonOne.MultipleCustomerProfileIntegrationResponseV2](docs/MultipleCustomerProfileIntegrationResponseV2.md)
- [TalonOne.MultipleNewAttribute](docs/MultipleNewAttribute.md)
- [TalonOne.MultipleNewAudiences](docs/MultipleNewAudiences.md)
- [TalonOne.MutableEntity](docs/MutableEntity.md)
- [TalonOne.NewAccount](docs/NewAccount.md)
- [TalonOne.NewAccountSignUp](docs/NewAccountSignUp.md)
- [TalonOne.NewAdditionalCost](docs/NewAdditionalCost.md)
- [TalonOne.NewAppWideCouponDeletionJob](docs/NewAppWideCouponDeletionJob.md)
- [TalonOne.NewApplication](docs/NewApplication.md)
- [TalonOne.NewApplicationAPIKey](docs/NewApplicationAPIKey.md)
- [TalonOne.NewApplicationCIF](docs/NewApplicationCIF.md)
- [TalonOne.NewApplicationCIFExpression](docs/NewApplicationCIFExpression.md)
- [TalonOne.NewAttribute](docs/NewAttribute.md)
- [TalonOne.NewAudience](docs/NewAudience.md)
- [TalonOne.NewBaseNotification](docs/NewBaseNotification.md)
- [TalonOne.NewCampaign](docs/NewCampaign.md)
- [TalonOne.NewCampaignCollection](docs/NewCampaignCollection.md)
- [TalonOne.NewCampaignEvaluationGroup](docs/NewCampaignEvaluationGroup.md)
- [TalonOne.NewCampaignGroup](docs/NewCampaignGroup.md)
- [TalonOne.NewCampaignSet](docs/NewCampaignSet.md)
- [TalonOne.NewCampaignStoreBudget](docs/NewCampaignStoreBudget.md)
- [TalonOne.NewCampaignStoreBudgetStoreLimit](docs/NewCampaignStoreBudgetStoreLimit.md)
- [TalonOne.NewCampaignTemplate](docs/NewCampaignTemplate.md)
- [TalonOne.NewCatalog](docs/NewCatalog.md)
- [TalonOne.NewCollection](docs/NewCollection.md)
- [TalonOne.NewCouponCreationJob](docs/NewCouponCreationJob.md)
- [TalonOne.NewCouponDeletionJob](docs/NewCouponDeletionJob.md)
- [TalonOne.NewCoupons](docs/NewCoupons.md)
- [TalonOne.NewCouponsForMultipleRecipients](docs/NewCouponsForMultipleRecipients.md)
- [TalonOne.NewCustomEffect](docs/NewCustomEffect.md)
- [TalonOne.NewCustomerProfile](docs/NewCustomerProfile.md)
- [TalonOne.NewCustomerSession](docs/NewCustomerSession.md)
- [TalonOne.NewCustomerSessionV2](docs/NewCustomerSessionV2.md)
- [TalonOne.NewEvent](docs/NewEvent.md)
- [TalonOne.NewEventType](docs/NewEventType.md)
- [TalonOne.NewExternalInvitation](docs/NewExternalInvitation.md)
- [TalonOne.NewGiveawaysPool](docs/NewGiveawaysPool.md)
- [TalonOne.NewInternalAudience](docs/NewInternalAudience.md)
- [TalonOne.NewInvitation](docs/NewInvitation.md)
- [TalonOne.NewInviteEmail](docs/NewInviteEmail.md)
- [TalonOne.NewLoyaltyProgram](docs/NewLoyaltyProgram.md)
- [TalonOne.NewLoyaltyTier](docs/NewLoyaltyTier.md)
- [TalonOne.NewManagementKey](docs/NewManagementKey.md)
- [TalonOne.NewMessageTest](docs/NewMessageTest.md)
- [TalonOne.NewMultipleAudiencesItem](docs/NewMultipleAudiencesItem.md)
- [TalonOne.NewNotificationWebhook](docs/NewNotificationWebhook.md)
- [TalonOne.NewOutgoingIntegrationWebhook](docs/NewOutgoingIntegrationWebhook.md)
- [TalonOne.NewPassword](docs/NewPassword.md)
- [TalonOne.NewPasswordEmail](docs/NewPasswordEmail.md)
- [TalonOne.NewPicklist](docs/NewPicklist.md)
- [TalonOne.NewReferral](docs/NewReferral.md)
- [TalonOne.NewReferralsForMultipleAdvocates](docs/NewReferralsForMultipleAdvocates.md)
- [TalonOne.NewReturn](docs/NewReturn.md)
- [TalonOne.NewRevisionVersion](docs/NewRevisionVersion.md)
- [TalonOne.NewRole](docs/NewRole.md)
- [TalonOne.NewRoleV2](docs/NewRoleV2.md)
- [TalonOne.NewRuleset](docs/NewRuleset.md)
- [TalonOne.NewSamlConnection](docs/NewSamlConnection.md)
- [TalonOne.NewStore](docs/NewStore.md)
- [TalonOne.NewTemplateDef](docs/NewTemplateDef.md)
- [TalonOne.NewUser](docs/NewUser.md)
- [TalonOne.NewWebhook](docs/NewWebhook.md)
- [TalonOne.Notification](docs/Notification.md)
- [TalonOne.NotificationActivation](docs/NotificationActivation.md)
- [TalonOne.NotificationListItem](docs/NotificationListItem.md)
- [TalonOne.OktaEvent](docs/OktaEvent.md)
- [TalonOne.OktaEventPayload](docs/OktaEventPayload.md)
- [TalonOne.OktaEventPayloadData](docs/OktaEventPayloadData.md)
- [TalonOne.OktaEventTarget](docs/OktaEventTarget.md)
- [TalonOne.OneTimeCode](docs/OneTimeCode.md)
- [TalonOne.OutgoingIntegrationBrazePolicy](docs/OutgoingIntegrationBrazePolicy.md)
- [TalonOne.OutgoingIntegrationCleverTapPolicy](docs/OutgoingIntegrationCleverTapPolicy.md)
- [TalonOne.OutgoingIntegrationConfiguration](docs/OutgoingIntegrationConfiguration.md)
- [TalonOne.OutgoingIntegrationIterablePolicy](docs/OutgoingIntegrationIterablePolicy.md)
- [TalonOne.OutgoingIntegrationMoEngagePolicy](docs/OutgoingIntegrationMoEngagePolicy.md)
- [TalonOne.OutgoingIntegrationTemplate](docs/OutgoingIntegrationTemplate.md)
- [TalonOne.OutgoingIntegrationTemplateWithConfigurationDetails](docs/OutgoingIntegrationTemplateWithConfigurationDetails.md)
- [TalonOne.OutgoingIntegrationTemplates](docs/OutgoingIntegrationTemplates.md)
- [TalonOne.OutgoingIntegrationType](docs/OutgoingIntegrationType.md)
- [TalonOne.OutgoingIntegrationTypes](docs/OutgoingIntegrationTypes.md)
- [TalonOne.PatchItemCatalogAction](docs/PatchItemCatalogAction.md)
- [TalonOne.PatchManyItemsCatalogAction](docs/PatchManyItemsCatalogAction.md)
- [TalonOne.PendingPointsNotificationPolicy](docs/PendingPointsNotificationPolicy.md)
- [TalonOne.Picklist](docs/Picklist.md)
- [TalonOne.Product](docs/Product.md)
- [TalonOne.ProductSearchMatch](docs/ProductSearchMatch.md)
- [TalonOne.ProductUnitAnalytics](docs/ProductUnitAnalytics.md)
- [TalonOne.ProductUnitAnalyticsDataPoint](docs/ProductUnitAnalyticsDataPoint.md)
- [TalonOne.ProductUnitAnalyticsTotals](docs/ProductUnitAnalyticsTotals.md)
- [TalonOne.ProfileAudiencesChanges](docs/ProfileAudiencesChanges.md)
- [TalonOne.ProjectedTier](docs/ProjectedTier.md)
- [TalonOne.RedeemReferralEffectProps](docs/RedeemReferralEffectProps.md)
- [TalonOne.Referral](docs/Referral.md)
- [TalonOne.ReferralConstraints](docs/ReferralConstraints.md)
- [TalonOne.ReferralCreatedEffectProps](docs/ReferralCreatedEffectProps.md)
- [TalonOne.ReferralRejectionReason](docs/ReferralRejectionReason.md)
- [TalonOne.RejectCouponEffectProps](docs/RejectCouponEffectProps.md)
- [TalonOne.RejectReferralEffectProps](docs/RejectReferralEffectProps.md)
- [TalonOne.RemoveFromAudienceEffectProps](docs/RemoveFromAudienceEffectProps.md)
- [TalonOne.RemoveItemCatalogAction](docs/RemoveItemCatalogAction.md)
- [TalonOne.RemoveManyItemsCatalogAction](docs/RemoveManyItemsCatalogAction.md)
- [TalonOne.ReopenSessionResponse](docs/ReopenSessionResponse.md)
- [TalonOne.ReserveCouponEffectProps](docs/ReserveCouponEffectProps.md)
- [TalonOne.ReturnIntegrationRequest](docs/ReturnIntegrationRequest.md)
- [TalonOne.ReturnedCartItem](docs/ReturnedCartItem.md)
- [TalonOne.Revision](docs/Revision.md)
- [TalonOne.RevisionActivation](docs/RevisionActivation.md)
- [TalonOne.RevisionActivationRequest](docs/RevisionActivationRequest.md)
- [TalonOne.RevisionVersion](docs/RevisionVersion.md)
- [TalonOne.Role](docs/Role.md)
- [TalonOne.RoleAssign](docs/RoleAssign.md)
- [TalonOne.RoleMembership](docs/RoleMembership.md)
- [TalonOne.RoleV2](docs/RoleV2.md)
- [TalonOne.RoleV2ApplicationDetails](docs/RoleV2ApplicationDetails.md)
- [TalonOne.RoleV2Base](docs/RoleV2Base.md)
- [TalonOne.RoleV2PermissionSet](docs/RoleV2PermissionSet.md)
- [TalonOne.RoleV2Permissions](docs/RoleV2Permissions.md)
- [TalonOne.RoleV2RolesGroup](docs/RoleV2RolesGroup.md)
- [TalonOne.RollbackAddedLoyaltyPointsEffectProps](docs/RollbackAddedLoyaltyPointsEffectProps.md)
- [TalonOne.RollbackCouponEffectProps](docs/RollbackCouponEffectProps.md)
- [TalonOne.RollbackDeductedLoyaltyPointsEffectProps](docs/RollbackDeductedLoyaltyPointsEffectProps.md)
- [TalonOne.RollbackDiscountEffectProps](docs/RollbackDiscountEffectProps.md)
- [TalonOne.RollbackIncreasedAchievementProgressEffectProps](docs/RollbackIncreasedAchievementProgressEffectProps.md)
- [TalonOne.RollbackReferralEffectProps](docs/RollbackReferralEffectProps.md)
- [TalonOne.Rule](docs/Rule.md)
- [TalonOne.RuleFailureReason](docs/RuleFailureReason.md)
- [TalonOne.Ruleset](docs/Ruleset.md)
- [TalonOne.SSOConfig](docs/SSOConfig.md)
- [TalonOne.SamlConnection](docs/SamlConnection.md)
- [TalonOne.SamlConnectionInternal](docs/SamlConnectionInternal.md)
- [TalonOne.SamlConnectionMetadata](docs/SamlConnectionMetadata.md)
- [TalonOne.SamlLoginEndpoint](docs/SamlLoginEndpoint.md)
- [TalonOne.ScimBaseUser](docs/ScimBaseUser.md)
- [TalonOne.ScimBaseUserName](docs/ScimBaseUserName.md)
- [TalonOne.ScimNewUser](docs/ScimNewUser.md)
- [TalonOne.ScimPatchOperation](docs/ScimPatchOperation.md)
- [TalonOne.ScimPatchRequest](docs/ScimPatchRequest.md)
- [TalonOne.ScimResource](docs/ScimResource.md)
- [TalonOne.ScimResourceTypesListResponse](docs/ScimResourceTypesListResponse.md)
- [TalonOne.ScimSchemaResource](docs/ScimSchemaResource.md)
- [TalonOne.ScimSchemasListResponse](docs/ScimSchemasListResponse.md)
- [TalonOne.ScimServiceProviderConfigResponse](docs/ScimServiceProviderConfigResponse.md)
- [TalonOne.ScimServiceProviderConfigResponseBulk](docs/ScimServiceProviderConfigResponseBulk.md)
- [TalonOne.ScimServiceProviderConfigResponseChangePassword](docs/ScimServiceProviderConfigResponseChangePassword.md)
- [TalonOne.ScimServiceProviderConfigResponseFilter](docs/ScimServiceProviderConfigResponseFilter.md)
- [TalonOne.ScimServiceProviderConfigResponsePatch](docs/ScimServiceProviderConfigResponsePatch.md)
- [TalonOne.ScimServiceProviderConfigResponseSort](docs/ScimServiceProviderConfigResponseSort.md)
- [TalonOne.ScimUser](docs/ScimUser.md)
- [TalonOne.ScimUsersListResponse](docs/ScimUsersListResponse.md)
- [TalonOne.Session](docs/Session.md)
- [TalonOne.SetDiscountEffectProps](docs/SetDiscountEffectProps.md)
- [TalonOne.SetDiscountPerAdditionalCostEffectProps](docs/SetDiscountPerAdditionalCostEffectProps.md)
- [TalonOne.SetDiscountPerAdditionalCostPerItemEffectProps](docs/SetDiscountPerAdditionalCostPerItemEffectProps.md)
- [TalonOne.SetDiscountPerItemEffectProps](docs/SetDiscountPerItemEffectProps.md)
- [TalonOne.ShowBundleMetadataEffectProps](docs/ShowBundleMetadataEffectProps.md)
- [TalonOne.ShowNotificationEffectProps](docs/ShowNotificationEffectProps.md)
- [TalonOne.SkuUnitAnalytics](docs/SkuUnitAnalytics.md)
- [TalonOne.SkuUnitAnalyticsDataPoint](docs/SkuUnitAnalyticsDataPoint.md)
- [TalonOne.SlotDef](docs/SlotDef.md)
- [TalonOne.Store](docs/Store.md)
- [TalonOne.StrikethroughChangedItem](docs/StrikethroughChangedItem.md)
- [TalonOne.StrikethroughCustomEffectPerItemProps](docs/StrikethroughCustomEffectPerItemProps.md)
- [TalonOne.StrikethroughDebugResponse](docs/StrikethroughDebugResponse.md)
- [TalonOne.StrikethroughEffect](docs/StrikethroughEffect.md)
- [TalonOne.StrikethroughLabelingNotification](docs/StrikethroughLabelingNotification.md)
- [TalonOne.StrikethroughSetDiscountPerItemEffectProps](docs/StrikethroughSetDiscountPerItemEffectProps.md)
- [TalonOne.StrikethroughTrigger](docs/StrikethroughTrigger.md)
- [TalonOne.SummaryCampaignStoreBudget](docs/SummaryCampaignStoreBudget.md)
- [TalonOne.TalangAttribute](docs/TalangAttribute.md)
- [TalonOne.TalangAttributeVisibility](docs/TalangAttributeVisibility.md)
- [TalonOne.TemplateArgDef](docs/TemplateArgDef.md)
- [TalonOne.TemplateDef](docs/TemplateDef.md)
- [TalonOne.TemplateLimitConfig](docs/TemplateLimitConfig.md)
- [TalonOne.Tier](docs/Tier.md)
- [TalonOne.TierDowngradeNotificationPolicy](docs/TierDowngradeNotificationPolicy.md)
- [TalonOne.TierUpgradeNotificationPolicy](docs/TierUpgradeNotificationPolicy.md)
- [TalonOne.TierWillDowngradeNotificationPolicy](docs/TierWillDowngradeNotificationPolicy.md)
- [TalonOne.TierWillDowngradeNotificationTrigger](docs/TierWillDowngradeNotificationTrigger.md)
- [TalonOne.TimePoint](docs/TimePoint.md)
- [TalonOne.TrackEventV2Response](docs/TrackEventV2Response.md)
- [TalonOne.TransferLoyaltyCard](docs/TransferLoyaltyCard.md)
- [TalonOne.TriggerWebhookEffectProps](docs/TriggerWebhookEffectProps.md)
- [TalonOne.TwoFAConfig](docs/TwoFAConfig.md)
- [TalonOne.UpdateAccount](docs/UpdateAccount.md)
- [TalonOne.UpdateAchievement](docs/UpdateAchievement.md)
- [TalonOne.UpdateApplication](docs/UpdateApplication.md)
- [TalonOne.UpdateApplicationAPIKey](docs/UpdateApplicationAPIKey.md)
- [TalonOne.UpdateApplicationCIF](docs/UpdateApplicationCIF.md)
- [TalonOne.UpdateAttributeEffectProps](docs/UpdateAttributeEffectProps.md)
- [TalonOne.UpdateAudience](docs/UpdateAudience.md)
- [TalonOne.UpdateCampaign](docs/UpdateCampaign.md)
- [TalonOne.UpdateCampaignCollection](docs/UpdateCampaignCollection.md)
- [TalonOne.UpdateCampaignEvaluationGroup](docs/UpdateCampaignEvaluationGroup.md)
- [TalonOne.UpdateCampaignGroup](docs/UpdateCampaignGroup.md)
- [TalonOne.UpdateCampaignTemplate](docs/UpdateCampaignTemplate.md)
- [TalonOne.UpdateCatalog](docs/UpdateCatalog.md)
- [TalonOne.UpdateCollection](docs/UpdateCollection.md)
- [TalonOne.UpdateCoupon](docs/UpdateCoupon.md)
- [TalonOne.UpdateCouponBatch](docs/UpdateCouponBatch.md)
- [TalonOne.UpdateLoyaltyCard](docs/UpdateLoyaltyCard.md)
- [TalonOne.UpdateLoyaltyProgram](docs/UpdateLoyaltyProgram.md)
- [TalonOne.UpdateLoyaltyProgramTier](docs/UpdateLoyaltyProgramTier.md)
- [TalonOne.UpdatePicklist](docs/UpdatePicklist.md)
- [TalonOne.UpdateReferral](docs/UpdateReferral.md)
- [TalonOne.UpdateReferralBatch](docs/UpdateReferralBatch.md)
- [TalonOne.UpdateRole](docs/UpdateRole.md)
- [TalonOne.UpdateStore](docs/UpdateStore.md)
- [TalonOne.UpdateUser](docs/UpdateUser.md)
- [TalonOne.User](docs/User.md)
- [TalonOne.UserEntity](docs/UserEntity.md)
- [TalonOne.ValueMap](docs/ValueMap.md)
- [TalonOne.Webhook](docs/Webhook.md)
- [TalonOne.WebhookActivationLogEntry](docs/WebhookActivationLogEntry.md)
- [TalonOne.WebhookLogEntry](docs/WebhookLogEntry.md)
- [TalonOne.WebhookWithOutgoingIntegrationDetails](docs/WebhookWithOutgoingIntegrationDetails.md)
- [TalonOne.WillAwardGiveawayEffectProps](docs/WillAwardGiveawayEffectProps.md)

## Authorization

### api_key_v1

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### management_key

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### manager_auth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

