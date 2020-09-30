# talon_one

TalonOne - JavaScript client for talon_one
The Talon.One API is used to manage applications and campaigns, as well as to
integrate with your application. The operations in the _Integration API_ section
are used to integrate with our platform, while the other operations are
used to manage applications and campaigns.

### Where is the API?

The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`

[updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 4.2.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install talon_one --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your talon_one from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/talon-one/talon_one.js
then install it via:

```shell
    npm install talon-one/talon_one.js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:


### Integration API

#### V2

```javascript
const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://mycompany.talon.one";

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

#### V1

```javascript
const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://mycompany.talon.one";

// Configure API key authorization: api_key_v1
const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey =
  "dbc644d33aa74d582bd9479c59e16f970fe13bf34a208c39d6c7fa7586968468";
api_key_v1.apiKeyPrefix = "ApiKey-v1";

// Integration API example to send a session update
const integrationApi = new TalonOne.IntegrationApi();

/**
 * // Using `constructFromObject` initializer:
 * const customerSession = TalonOne.NewCustomerSession.constructFromObject({
 *   total: 100.33,
 *   coupon: "Cool-Summer!"
 * });
 */

const customerSession = new TalonOne.NewCustomerSession();
customerSession.total = 100.33;
customerSession.coupon = "Cool-Summer!";

integrationApi
  .updateCustomerSession("example_integration_id", customerSession)
  .then(
    function(data) {
      console.log(JSON.stringify(data, null, 2));
    },
    function(error) {
      console.error(error);
    }
  );
```

### Management API

```javascript
const TalonOne = require("talon_one");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "https://mycompany.talon.one";

// Configure API key authorization: manager_auth
const managerAuth = defaultClient.authentications["manager_auth"];
managerAuth.apiKeyPrefix = "Bearer";

// Management API example to load application with id 7
const managerApi = new TalonOne.ManagementApi();

/**
 * // Using `constructFromObject`:
 * const loginParams = TalonOne.LoginParams.constructFromObject({
 *   email: "admin@talon.one",
 *   password: "$hhhD0ntT3ll!"
 * });
 */

const loginParams = new TalonOne.LoginParams(
  "admin@talon.one",
  "$hhhD0ntT3ll!"
);

managerApi.createSession(loginParams).then(
  function(data) {
    // Save token in the configuration for future management API calls
    managerAuth.apiKey = data.token;

    // Calling `getApplication` function with the desired id (7)
    managerApi.getApplication(7).then(
      function(data) {
        console.log(
          "API called successfully. Returned data:\n" + JSON.stringify(data)
        );
      },
      function(error) {
        console.error("Error while fetching the application:\n" + error);
      }
    );
  },
  function(error) {
    console.error("Error while login:\n" + error);
  }
);
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TalonOne.IntegrationApi* | [**createCouponReservation**](docs/IntegrationApi.md#createCouponReservation) | **POST** /v1/coupon_reservations/{couponValue} | Create a new coupon reservation
*TalonOne.IntegrationApi* | [**createReferral**](docs/IntegrationApi.md#createReferral) | **POST** /v1/referrals | Create a referral code for an advocate
*TalonOne.IntegrationApi* | [**deleteCouponReservation**](docs/IntegrationApi.md#deleteCouponReservation) | **DELETE** /v1/coupon_reservations/{couponValue} | Delete coupon reservations
*TalonOne.IntegrationApi* | [**deleteCustomerData**](docs/IntegrationApi.md#deleteCustomerData) | **DELETE** /v1/customer_data/{integrationId} | Delete the personal data of a customer.
*TalonOne.IntegrationApi* | [**getCustomerInventory**](docs/IntegrationApi.md#getCustomerInventory) | **GET** /v1/customer_profiles/{integrationId}/inventory | Get an inventory of all data associated with a specific customer profile.
*TalonOne.IntegrationApi* | [**getReservedCustomers**](docs/IntegrationApi.md#getReservedCustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | Get the users that have this coupon reserved
*TalonOne.IntegrationApi* | [**trackEvent**](docs/IntegrationApi.md#trackEvent) | **POST** /v1/events | Track an Event
*TalonOne.IntegrationApi* | [**updateCustomerProfile**](docs/IntegrationApi.md#updateCustomerProfile) | **PUT** /v1/customer_profiles/{integrationId} | Update a Customer Profile V1
*TalonOne.IntegrationApi* | [**updateCustomerProfileAudiences**](docs/IntegrationApi.md#updateCustomerProfileAudiences) | **POST** /v2/customer_audiences | Update a Customer Profile Audiences
*TalonOne.IntegrationApi* | [**updateCustomerProfileV2**](docs/IntegrationApi.md#updateCustomerProfileV2) | **PUT** /v2/customer_profiles/{integrationId} | Update a Customer Profile
*TalonOne.IntegrationApi* | [**updateCustomerProfilesV2**](docs/IntegrationApi.md#updateCustomerProfilesV2) | **PUT** /v2/customer_profiles | Update multiple Customer Profiles
*TalonOne.IntegrationApi* | [**updateCustomerSession**](docs/IntegrationApi.md#updateCustomerSession) | **PUT** /v1/customer_sessions/{customerSessionId} | Update a Customer Session V1
*TalonOne.IntegrationApi* | [**updateCustomerSessionV2**](docs/IntegrationApi.md#updateCustomerSessionV2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update a Customer Session
*TalonOne.ManagementApi* | [**addLoyaltyPoints**](docs/ManagementApi.md#addLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/add_points | Add points in a certain loyalty program for the specified customer
*TalonOne.ManagementApi* | [**copyCampaignToApplications**](docs/ManagementApi.md#copyCampaignToApplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into every specified application
*TalonOne.ManagementApi* | [**createAdditionalCost**](docs/ManagementApi.md#createAdditionalCost) | **POST** /v1/additional_costs | Define a new additional cost
*TalonOne.ManagementApi* | [**createAttribute**](docs/ManagementApi.md#createAttribute) | **POST** /v1/attributes | Define a new custom attribute
*TalonOne.ManagementApi* | [**createCampaign**](docs/ManagementApi.md#createCampaign) | **POST** /v1/applications/{applicationId}/campaigns | Create a Campaign
*TalonOne.ManagementApi* | [**createCoupons**](docs/ManagementApi.md#createCoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create Coupons
*TalonOne.ManagementApi* | [**createPasswordRecoveryEmail**](docs/ManagementApi.md#createPasswordRecoveryEmail) | **POST** /v1/password_recovery_emails | Request a password reset
*TalonOne.ManagementApi* | [**createRuleset**](docs/ManagementApi.md#createRuleset) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | Create a Ruleset
*TalonOne.ManagementApi* | [**createSession**](docs/ManagementApi.md#createSession) | **POST** /v1/sessions | Create a Session
*TalonOne.ManagementApi* | [**deleteCampaign**](docs/ManagementApi.md#deleteCampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete a Campaign
*TalonOne.ManagementApi* | [**deleteCoupon**](docs/ManagementApi.md#deleteCoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete one Coupon
*TalonOne.ManagementApi* | [**deleteCoupons**](docs/ManagementApi.md#deleteCoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete Coupons
*TalonOne.ManagementApi* | [**deleteReferral**](docs/ManagementApi.md#deleteReferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete one Referral
*TalonOne.ManagementApi* | [**deleteRuleset**](docs/ManagementApi.md#deleteRuleset) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Delete a Ruleset
*TalonOne.ManagementApi* | [**getAccessLogs**](docs/ManagementApi.md#getAccessLogs) | **GET** /v1/applications/{applicationId}/access_logs | Get access logs for application (with total count)
*TalonOne.ManagementApi* | [**getAccessLogsWithoutTotalCount**](docs/ManagementApi.md#getAccessLogsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for application
*TalonOne.ManagementApi* | [**getAccount**](docs/ManagementApi.md#getAccount) | **GET** /v1/accounts/{accountId} | Get Account Details
*TalonOne.ManagementApi* | [**getAccountAnalytics**](docs/ManagementApi.md#getAccountAnalytics) | **GET** /v1/accounts/{accountId}/analytics | Get Account Analytics
*TalonOne.ManagementApi* | [**getAdditionalCost**](docs/ManagementApi.md#getAdditionalCost) | **GET** /v1/additional_costs/{additionalCostId} | Get an additional cost
*TalonOne.ManagementApi* | [**getAdditionalCosts**](docs/ManagementApi.md#getAdditionalCosts) | **GET** /v1/additional_costs | List additional costs
*TalonOne.ManagementApi* | [**getAllAccessLogs**](docs/ManagementApi.md#getAllAccessLogs) | **GET** /v1/access_logs | Get all access logs
*TalonOne.ManagementApi* | [**getAllRoles**](docs/ManagementApi.md#getAllRoles) | **GET** /v1/roles | Get all roles.
*TalonOne.ManagementApi* | [**getApplication**](docs/ManagementApi.md#getApplication) | **GET** /v1/applications/{applicationId} | Get Application
*TalonOne.ManagementApi* | [**getApplicationApiHealth**](docs/ManagementApi.md#getApplicationApiHealth) | **GET** /v1/applications/{applicationId}/health_report | Get report of health of application API
*TalonOne.ManagementApi* | [**getApplicationCustomer**](docs/ManagementApi.md#getApplicationCustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get Application Customer
*TalonOne.ManagementApi* | [**getApplicationCustomers**](docs/ManagementApi.md#getApplicationCustomers) | **GET** /v1/applications/{applicationId}/customers | List Application Customers
*TalonOne.ManagementApi* | [**getApplicationCustomersByAttributes**](docs/ManagementApi.md#getApplicationCustomersByAttributes) | **POST** /v1/application_customer_search | Get a list of the customer profiles that match the given attributes (with total count)
*TalonOne.ManagementApi* | [**getApplicationEventTypes**](docs/ManagementApi.md#getApplicationEventTypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications Event Types
*TalonOne.ManagementApi* | [**getApplicationEvents**](docs/ManagementApi.md#getApplicationEvents) | **GET** /v1/applications/{applicationId}/events | List Applications Events (with total count)
*TalonOne.ManagementApi* | [**getApplicationEventsWithoutTotalCount**](docs/ManagementApi.md#getApplicationEventsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications Events
*TalonOne.ManagementApi* | [**getApplicationSession**](docs/ManagementApi.md#getApplicationSession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application Session
*TalonOne.ManagementApi* | [**getApplicationSessions**](docs/ManagementApi.md#getApplicationSessions) | **GET** /v1/applications/{applicationId}/sessions | List Application Sessions
*TalonOne.ManagementApi* | [**getApplications**](docs/ManagementApi.md#getApplications) | **GET** /v1/applications | List Applications
*TalonOne.ManagementApi* | [**getAttribute**](docs/ManagementApi.md#getAttribute) | **GET** /v1/attributes/{attributeId} | Get a custom attribute
*TalonOne.ManagementApi* | [**getAttributes**](docs/ManagementApi.md#getAttributes) | **GET** /v1/attributes | List custom attributes
*TalonOne.ManagementApi* | [**getCampaign**](docs/ManagementApi.md#getCampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get a Campaign
*TalonOne.ManagementApi* | [**getCampaignAnalytics**](docs/ManagementApi.md#getCampaignAnalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns
*TalonOne.ManagementApi* | [**getCampaignByAttributes**](docs/ManagementApi.md#getCampaignByAttributes) | **POST** /v1/applications/{applicationId}/campaigns_search | Get a list of all campaigns that match the given attributes
*TalonOne.ManagementApi* | [**getCampaigns**](docs/ManagementApi.md#getCampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List your Campaigns
*TalonOne.ManagementApi* | [**getChanges**](docs/ManagementApi.md#getChanges) | **GET** /v1/changes | Get audit log for an account
*TalonOne.ManagementApi* | [**getCoupons**](docs/ManagementApi.md#getCoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | List Coupons (with total count)
*TalonOne.ManagementApi* | [**getCouponsByAttributes**](docs/ManagementApi.md#getCouponsByAttributes) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search | Get a list of the coupons that match the given attributes
*TalonOne.ManagementApi* | [**getCouponsByAttributesApplicationWide**](docs/ManagementApi.md#getCouponsByAttributesApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search | Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
*TalonOne.ManagementApi* | [**getCouponsWithoutTotalCount**](docs/ManagementApi.md#getCouponsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List Coupons
*TalonOne.ManagementApi* | [**getCustomerActivityReport**](docs/ManagementApi.md#getCustomerActivityReport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get Activity Report for Single Customer
*TalonOne.ManagementApi* | [**getCustomerActivityReports**](docs/ManagementApi.md#getCustomerActivityReports) | **GET** /v1/applications/{applicationId}/customer_activity_reports | Get Activity Reports for Application Customers (with total count)
*TalonOne.ManagementApi* | [**getCustomerActivityReportsWithoutTotalCount**](docs/ManagementApi.md#getCustomerActivityReportsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers
*TalonOne.ManagementApi* | [**getCustomerAnalytics**](docs/ManagementApi.md#getCustomerAnalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get Analytics Report for a Customer
*TalonOne.ManagementApi* | [**getCustomerProfile**](docs/ManagementApi.md#getCustomerProfile) | **GET** /v1/customers/{customerId} | Get Customer Profile
*TalonOne.ManagementApi* | [**getCustomerProfiles**](docs/ManagementApi.md#getCustomerProfiles) | **GET** /v1/customers/no_total | List Customer Profiles
*TalonOne.ManagementApi* | [**getCustomersByAttributes**](docs/ManagementApi.md#getCustomersByAttributes) | **POST** /v1/customer_search/no_total | Get a list of the customer profiles that match the given attributes
*TalonOne.ManagementApi* | [**getEventTypes**](docs/ManagementApi.md#getEventTypes) | **GET** /v1/event_types | List Event Types
*TalonOne.ManagementApi* | [**getExports**](docs/ManagementApi.md#getExports) | **GET** /v1/exports | Get Exports
*TalonOne.ManagementApi* | [**getImports**](docs/ManagementApi.md#getImports) | **GET** /v1/imports | Get Imports
*TalonOne.ManagementApi* | [**getLoyaltyPoints**](docs/ManagementApi.md#getLoyaltyPoints) | **GET** /v1/loyalty_programs/{programID}/profile/{integrationID} | get the Loyalty Ledger for this integrationID
*TalonOne.ManagementApi* | [**getLoyaltyProgram**](docs/ManagementApi.md#getLoyaltyProgram) | **GET** /v1/loyalty_programs/{programID} | Get a loyalty program
*TalonOne.ManagementApi* | [**getLoyaltyPrograms**](docs/ManagementApi.md#getLoyaltyPrograms) | **GET** /v1/loyalty_programs | List all loyalty Programs
*TalonOne.ManagementApi* | [**getLoyaltyStatistics**](docs/ManagementApi.md#getLoyaltyStatistics) | **GET** /v1/loyalty_programs/{programID}/statistics | Get loyalty program statistics by loyalty program ID
*TalonOne.ManagementApi* | [**getReferrals**](docs/ManagementApi.md#getReferrals) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals | List Referrals (with total count)
*TalonOne.ManagementApi* | [**getReferralsWithoutTotalCount**](docs/ManagementApi.md#getReferralsWithoutTotalCount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List Referrals
*TalonOne.ManagementApi* | [**getRole**](docs/ManagementApi.md#getRole) | **GET** /v1/roles/{roleId} | Get information for the specified role.
*TalonOne.ManagementApi* | [**getRuleset**](docs/ManagementApi.md#getRuleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get a Ruleset
*TalonOne.ManagementApi* | [**getRulesets**](docs/ManagementApi.md#getRulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List Campaign Rulesets
*TalonOne.ManagementApi* | [**getUser**](docs/ManagementApi.md#getUser) | **GET** /v1/users/{userId} | Get a single User
*TalonOne.ManagementApi* | [**getUsers**](docs/ManagementApi.md#getUsers) | **GET** /v1/users | List Users in your account
*TalonOne.ManagementApi* | [**getWebhook**](docs/ManagementApi.md#getWebhook) | **GET** /v1/webhooks/{webhookId} | Get Webhook
*TalonOne.ManagementApi* | [**getWebhookActivationLogs**](docs/ManagementApi.md#getWebhookActivationLogs) | **GET** /v1/webhook_activation_logs | List Webhook activation Log Entries
*TalonOne.ManagementApi* | [**getWebhookLogs**](docs/ManagementApi.md#getWebhookLogs) | **GET** /v1/webhook_logs | List Webhook Log Entries
*TalonOne.ManagementApi* | [**getWebhooks**](docs/ManagementApi.md#getWebhooks) | **GET** /v1/webhooks | List Webhooks
*TalonOne.ManagementApi* | [**removeLoyaltyPoints**](docs/ManagementApi.md#removeLoyaltyPoints) | **PUT** /v1/loyalty_programs/{programID}/profile/{integrationID}/deduct_points | Deduct points in a certain loyalty program for the specified customer
*TalonOne.ManagementApi* | [**resetPassword**](docs/ManagementApi.md#resetPassword) | **POST** /v1/reset_password | Reset password
*TalonOne.ManagementApi* | [**searchCouponsAdvanced**](docs/ManagementApi.md#searchCouponsAdvanced) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced | Get a list of the coupons that match the given attributes (with total count)
*TalonOne.ManagementApi* | [**searchCouponsAdvancedApplicationWide**](docs/ManagementApi.md#searchCouponsAdvancedApplicationWide) | **POST** /v1/applications/{applicationId}/coupons_search_advanced | Get a list of the coupons that match the given attributes in all active campaigns of an application (with total count)
*TalonOne.ManagementApi* | [**searchCouponsAdvancedApplicationWideWithoutTotalCount**](docs/ManagementApi.md#searchCouponsAdvancedApplicationWideWithoutTotalCount) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | Get a list of the coupons that match the given attributes in all active campaigns of an application
*TalonOne.ManagementApi* | [**searchCouponsAdvancedWithoutTotalCount**](docs/ManagementApi.md#searchCouponsAdvancedWithoutTotalCount) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total | Get a list of the coupons that match the given attributes
*TalonOne.ManagementApi* | [**updateAdditionalCost**](docs/ManagementApi.md#updateAdditionalCost) | **PUT** /v1/additional_costs/{additionalCostId} | Update an additional cost
*TalonOne.ManagementApi* | [**updateAttribute**](docs/ManagementApi.md#updateAttribute) | **PUT** /v1/attributes/{attributeId} | Update a custom attribute
*TalonOne.ManagementApi* | [**updateCampaign**](docs/ManagementApi.md#updateCampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update a Campaign
*TalonOne.ManagementApi* | [**updateCoupon**](docs/ManagementApi.md#updateCoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update a Coupon
*TalonOne.ManagementApi* | [**updateCouponBatch**](docs/ManagementApi.md#updateCouponBatch) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Update a Batch of Coupons
*TalonOne.ManagementApi* | [**updateRuleset**](docs/ManagementApi.md#updateRuleset) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Update a Ruleset


## Documentation for Models

 - [TalonOne.APIError](docs/APIError.md)
 - [TalonOne.AcceptCouponEffectProps](docs/AcceptCouponEffectProps.md)
 - [TalonOne.AcceptReferralEffectProps](docs/AcceptReferralEffectProps.md)
 - [TalonOne.AccessLogEntry](docs/AccessLogEntry.md)
 - [TalonOne.Account](docs/Account.md)
 - [TalonOne.AccountAdditionalCost](docs/AccountAdditionalCost.md)
 - [TalonOne.AccountAnalytics](docs/AccountAnalytics.md)
 - [TalonOne.AccountEntity](docs/AccountEntity.md)
 - [TalonOne.AccountLimits](docs/AccountLimits.md)
 - [TalonOne.AddFreeItemEffectProps](docs/AddFreeItemEffectProps.md)
 - [TalonOne.AddLoyaltyPointsEffectProps](docs/AddLoyaltyPointsEffectProps.md)
 - [TalonOne.AdditionalCost](docs/AdditionalCost.md)
 - [TalonOne.Application](docs/Application.md)
 - [TalonOne.ApplicationAPIKey](docs/ApplicationAPIKey.md)
 - [TalonOne.ApplicationApiHealth](docs/ApplicationApiHealth.md)
 - [TalonOne.ApplicationCustomer](docs/ApplicationCustomer.md)
 - [TalonOne.ApplicationCustomerEntity](docs/ApplicationCustomerEntity.md)
 - [TalonOne.ApplicationCustomerSearch](docs/ApplicationCustomerSearch.md)
 - [TalonOne.ApplicationEntity](docs/ApplicationEntity.md)
 - [TalonOne.ApplicationEvent](docs/ApplicationEvent.md)
 - [TalonOne.ApplicationSession](docs/ApplicationSession.md)
 - [TalonOne.ApplicationSessionEntity](docs/ApplicationSessionEntity.md)
 - [TalonOne.Attribute](docs/Attribute.md)
 - [TalonOne.AttributesMandatory](docs/AttributesMandatory.md)
 - [TalonOne.AttributesSettings](docs/AttributesSettings.md)
 - [TalonOne.Audience](docs/Audience.md)
 - [TalonOne.AudienceMembership](docs/AudienceMembership.md)
 - [TalonOne.BaseSamlConnection](docs/BaseSamlConnection.md)
 - [TalonOne.Binding](docs/Binding.md)
 - [TalonOne.Campaign](docs/Campaign.md)
 - [TalonOne.CampaignAnalytics](docs/CampaignAnalytics.md)
 - [TalonOne.CampaignCopy](docs/CampaignCopy.md)
 - [TalonOne.CampaignEntity](docs/CampaignEntity.md)
 - [TalonOne.CampaignGroup](docs/CampaignGroup.md)
 - [TalonOne.CampaignGroupEntity](docs/CampaignGroupEntity.md)
 - [TalonOne.CampaignSearch](docs/CampaignSearch.md)
 - [TalonOne.CampaignSet](docs/CampaignSet.md)
 - [TalonOne.CampaignSetBranchNode](docs/CampaignSetBranchNode.md)
 - [TalonOne.CampaignSetLeafNode](docs/CampaignSetLeafNode.md)
 - [TalonOne.CampaignSetNode](docs/CampaignSetNode.md)
 - [TalonOne.CartItem](docs/CartItem.md)
 - [TalonOne.CartItemAdjustment](docs/CartItemAdjustment.md)
 - [TalonOne.Change](docs/Change.md)
 - [TalonOne.ChangeProfilePassword](docs/ChangeProfilePassword.md)
 - [TalonOne.CodeGeneratorSettings](docs/CodeGeneratorSettings.md)
 - [TalonOne.Coupon](docs/Coupon.md)
 - [TalonOne.CouponConstraints](docs/CouponConstraints.md)
 - [TalonOne.CouponCreatedEffectProps](docs/CouponCreatedEffectProps.md)
 - [TalonOne.CouponRejectionReason](docs/CouponRejectionReason.md)
 - [TalonOne.CouponReservations](docs/CouponReservations.md)
 - [TalonOne.CouponSearch](docs/CouponSearch.md)
 - [TalonOne.CouponValue](docs/CouponValue.md)
 - [TalonOne.CreateApplicationAPIKey](docs/CreateApplicationAPIKey.md)
 - [TalonOne.CustomerActivityReport](docs/CustomerActivityReport.md)
 - [TalonOne.CustomerAnalytics](docs/CustomerAnalytics.md)
 - [TalonOne.CustomerInventory](docs/CustomerInventory.md)
 - [TalonOne.CustomerProfile](docs/CustomerProfile.md)
 - [TalonOne.CustomerProfileAudienceRequest](docs/CustomerProfileAudienceRequest.md)
 - [TalonOne.CustomerProfileAudienceRequestItem](docs/CustomerProfileAudienceRequestItem.md)
 - [TalonOne.CustomerProfileIntegrationRequestV2](docs/CustomerProfileIntegrationRequestV2.md)
 - [TalonOne.CustomerProfileSearchQuery](docs/CustomerProfileSearchQuery.md)
 - [TalonOne.CustomerSession](docs/CustomerSession.md)
 - [TalonOne.CustomerSessionV2](docs/CustomerSessionV2.md)
 - [TalonOne.DeductLoyaltyPointsEffectProps](docs/DeductLoyaltyPointsEffectProps.md)
 - [TalonOne.Effect](docs/Effect.md)
 - [TalonOne.EffectEntity](docs/EffectEntity.md)
 - [TalonOne.EmailEntity](docs/EmailEntity.md)
 - [TalonOne.Entity](docs/Entity.md)
 - [TalonOne.EntityWithTalangVisibleID](docs/EntityWithTalangVisibleID.md)
 - [TalonOne.Environment](docs/Environment.md)
 - [TalonOne.ErrorEffectProps](docs/ErrorEffectProps.md)
 - [TalonOne.ErrorResponse](docs/ErrorResponse.md)
 - [TalonOne.ErrorSource](docs/ErrorSource.md)
 - [TalonOne.Event](docs/Event.md)
 - [TalonOne.EventType](docs/EventType.md)
 - [TalonOne.FeatureFlag](docs/FeatureFlag.md)
 - [TalonOne.FeatureFlags](docs/FeatureFlags.md)
 - [TalonOne.FeaturesFeed](docs/FeaturesFeed.md)
 - [TalonOne.FeedNotification](docs/FeedNotification.md)
 - [TalonOne.FuncArgDef](docs/FuncArgDef.md)
 - [TalonOne.FunctionDef](docs/FunctionDef.md)
 - [TalonOne.ImportCoupons](docs/ImportCoupons.md)
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
 - [TalonOne.InlineResponse2004](docs/InlineResponse2004.md)
 - [TalonOne.InlineResponse2005](docs/InlineResponse2005.md)
 - [TalonOne.InlineResponse2006](docs/InlineResponse2006.md)
 - [TalonOne.InlineResponse2007](docs/InlineResponse2007.md)
 - [TalonOne.InlineResponse2008](docs/InlineResponse2008.md)
 - [TalonOne.InlineResponse2009](docs/InlineResponse2009.md)
 - [TalonOne.IntegrationEntity](docs/IntegrationEntity.md)
 - [TalonOne.IntegrationEvent](docs/IntegrationEvent.md)
 - [TalonOne.IntegrationProfileEntity](docs/IntegrationProfileEntity.md)
 - [TalonOne.IntegrationRequest](docs/IntegrationRequest.md)
 - [TalonOne.IntegrationState](docs/IntegrationState.md)
 - [TalonOne.IntegrationStateV2](docs/IntegrationStateV2.md)
 - [TalonOne.LedgerEntry](docs/LedgerEntry.md)
 - [TalonOne.LibraryAttribute](docs/LibraryAttribute.md)
 - [TalonOne.LimitConfig](docs/LimitConfig.md)
 - [TalonOne.LoginParams](docs/LoginParams.md)
 - [TalonOne.Loyalty](docs/Loyalty.md)
 - [TalonOne.LoyaltyLedger](docs/LoyaltyLedger.md)
 - [TalonOne.LoyaltyLedgerEntry](docs/LoyaltyLedgerEntry.md)
 - [TalonOne.LoyaltyMembership](docs/LoyaltyMembership.md)
 - [TalonOne.LoyaltyPoints](docs/LoyaltyPoints.md)
 - [TalonOne.LoyaltyProgram](docs/LoyaltyProgram.md)
 - [TalonOne.LoyaltyProgramBalance](docs/LoyaltyProgramBalance.md)
 - [TalonOne.LoyaltyProgramLedgers](docs/LoyaltyProgramLedgers.md)
 - [TalonOne.LoyaltyStatistics](docs/LoyaltyStatistics.md)
 - [TalonOne.LoyaltySubLedger](docs/LoyaltySubLedger.md)
 - [TalonOne.ManagerConfig](docs/ManagerConfig.md)
 - [TalonOne.Meta](docs/Meta.md)
 - [TalonOne.ModelExport](docs/ModelExport.md)
 - [TalonOne.ModelImport](docs/ModelImport.md)
 - [TalonOne.MultiApplicationEntity](docs/MultiApplicationEntity.md)
 - [TalonOne.MultipleCustomerProfileIntegrationRequest](docs/MultipleCustomerProfileIntegrationRequest.md)
 - [TalonOne.MultipleCustomerProfileIntegrationRequestItem](docs/MultipleCustomerProfileIntegrationRequestItem.md)
 - [TalonOne.MultipleCustomerProfileIntegrationResponseV2](docs/MultipleCustomerProfileIntegrationResponseV2.md)
 - [TalonOne.MutableEntity](docs/MutableEntity.md)
 - [TalonOne.NewAccount](docs/NewAccount.md)
 - [TalonOne.NewAccountSignUp](docs/NewAccountSignUp.md)
 - [TalonOne.NewAdditionalCost](docs/NewAdditionalCost.md)
 - [TalonOne.NewApplication](docs/NewApplication.md)
 - [TalonOne.NewApplicationAPIKey](docs/NewApplicationAPIKey.md)
 - [TalonOne.NewAttribute](docs/NewAttribute.md)
 - [TalonOne.NewAudience](docs/NewAudience.md)
 - [TalonOne.NewCampaign](docs/NewCampaign.md)
 - [TalonOne.NewCampaignGroup](docs/NewCampaignGroup.md)
 - [TalonOne.NewCampaignSet](docs/NewCampaignSet.md)
 - [TalonOne.NewCoupons](docs/NewCoupons.md)
 - [TalonOne.NewCustomerProfile](docs/NewCustomerProfile.md)
 - [TalonOne.NewCustomerSession](docs/NewCustomerSession.md)
 - [TalonOne.NewCustomerSessionV2](docs/NewCustomerSessionV2.md)
 - [TalonOne.NewEvent](docs/NewEvent.md)
 - [TalonOne.NewEventType](docs/NewEventType.md)
 - [TalonOne.NewFeatureFlags](docs/NewFeatureFlags.md)
 - [TalonOne.NewImport](docs/NewImport.md)
 - [TalonOne.NewInvitation](docs/NewInvitation.md)
 - [TalonOne.NewInviteEmail](docs/NewInviteEmail.md)
 - [TalonOne.NewLoyaltyProgram](docs/NewLoyaltyProgram.md)
 - [TalonOne.NewPassword](docs/NewPassword.md)
 - [TalonOne.NewPasswordEmail](docs/NewPasswordEmail.md)
 - [TalonOne.NewReferral](docs/NewReferral.md)
 - [TalonOne.NewRole](docs/NewRole.md)
 - [TalonOne.NewRuleset](docs/NewRuleset.md)
 - [TalonOne.NewSamlConnection](docs/NewSamlConnection.md)
 - [TalonOne.NewTemplateDef](docs/NewTemplateDef.md)
 - [TalonOne.NewUser](docs/NewUser.md)
 - [TalonOne.NewWebhook](docs/NewWebhook.md)
 - [TalonOne.Notification](docs/Notification.md)
 - [TalonOne.RedeemReferralEffectProps](docs/RedeemReferralEffectProps.md)
 - [TalonOne.Referral](docs/Referral.md)
 - [TalonOne.ReferralCreatedEffectProps](docs/ReferralCreatedEffectProps.md)
 - [TalonOne.ReferralRejectionReason](docs/ReferralRejectionReason.md)
 - [TalonOne.RejectCouponEffectProps](docs/RejectCouponEffectProps.md)
 - [TalonOne.RejectReferralEffectProps](docs/RejectReferralEffectProps.md)
 - [TalonOne.Role](docs/Role.md)
 - [TalonOne.RoleAssign](docs/RoleAssign.md)
 - [TalonOne.RoleMembership](docs/RoleMembership.md)
 - [TalonOne.RollbackCouponEffectProps](docs/RollbackCouponEffectProps.md)
 - [TalonOne.RollbackDiscountEffectProps](docs/RollbackDiscountEffectProps.md)
 - [TalonOne.Rule](docs/Rule.md)
 - [TalonOne.Ruleset](docs/Ruleset.md)
 - [TalonOne.SamlConnection](docs/SamlConnection.md)
 - [TalonOne.SamlConnectionMetadata](docs/SamlConnectionMetadata.md)
 - [TalonOne.SamlLoginEndpoint](docs/SamlLoginEndpoint.md)
 - [TalonOne.Session](docs/Session.md)
 - [TalonOne.SetDiscountEffectProps](docs/SetDiscountEffectProps.md)
 - [TalonOne.SetDiscountPerItemEffectProps](docs/SetDiscountPerItemEffectProps.md)
 - [TalonOne.ShowBundleMetadataEffectProps](docs/ShowBundleMetadataEffectProps.md)
 - [TalonOne.ShowNotificationEffectProps](docs/ShowNotificationEffectProps.md)
 - [TalonOne.SlotDef](docs/SlotDef.md)
 - [TalonOne.TemplateArgDef](docs/TemplateArgDef.md)
 - [TalonOne.TemplateDef](docs/TemplateDef.md)
 - [TalonOne.TriggerWebhookEffectProps](docs/TriggerWebhookEffectProps.md)
 - [TalonOne.UpdateAccount](docs/UpdateAccount.md)
 - [TalonOne.UpdateApplication](docs/UpdateApplication.md)
 - [TalonOne.UpdateAttributeEffectProps](docs/UpdateAttributeEffectProps.md)
 - [TalonOne.UpdateAudience](docs/UpdateAudience.md)
 - [TalonOne.UpdateCampaign](docs/UpdateCampaign.md)
 - [TalonOne.UpdateCampaignGroup](docs/UpdateCampaignGroup.md)
 - [TalonOne.UpdateCoupon](docs/UpdateCoupon.md)
 - [TalonOne.UpdateCouponBatch](docs/UpdateCouponBatch.md)
 - [TalonOne.UpdateLoyaltyProgram](docs/UpdateLoyaltyProgram.md)
 - [TalonOne.UpdateRole](docs/UpdateRole.md)
 - [TalonOne.UpdateUser](docs/UpdateUser.md)
 - [TalonOne.UpdateUserLatestFeedTimestamp](docs/UpdateUserLatestFeedTimestamp.md)
 - [TalonOne.User](docs/User.md)
 - [TalonOne.UserEntity](docs/UserEntity.md)
 - [TalonOne.UserFeedNotifications](docs/UserFeedNotifications.md)
 - [TalonOne.Webhook](docs/Webhook.md)
 - [TalonOne.WebhookActivationLogEntry](docs/WebhookActivationLogEntry.md)
 - [TalonOne.WebhookLogEntry](docs/WebhookLogEntry.md)


## Documentation for Authorization



### api_key_v1


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header



### integration_auth


- **Type**: API key
- **API key parameter name**: Content-Signature
- **Location**: HTTP header



### manager_auth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

