const TalonOne = require("./dist");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = 'http://host.docker.internal:9000';


// // Configure API key authorization: manager_auth
// const managerAuth = defaultClient.authentications["manager_auth"];
// managerAuth.apiKeyPrefix = "Bearer";

// // Management API example to load application with id 7
// const managerApi = new TalonOne.ManagementApi();

// /**
//  * // Using `constructFromObject`:
//  * const loginParams = TalonOne.LoginParams.constructFromObject({
//  *   email: 'admin@talon.one',
//  *   password: '$hhhD0ntT3ll!'
//  * });
//  */

// const loginParams = new TalonOne.LoginParams(
//   "demo@talon.one",
//   "Demo1234"
// );

// managerApi.createSession(loginParams).then(
//   function(data) {
//     // Save token in the configuration for future management API calls
//     managerAuth.apiKey = data.token;

//     // Calling `getApplication` function with the desired id (7)
//     managerApi.getApplication(1).then(
//       function(data) {
//         console.log(
//           "API called successfully. Returned data:\n" + JSON.stringify(data, null, 2)
//         );
//       },
//       function(error) {
//         console.error("Error while fetching the application:\n" + JSON.stringify(error, null, 2));
//       }
//     );
//   },
//   function(error) {
//     console.error("Error while login:\n" + JSON.stringify(error, null, 2));
//   }
// );

// const defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: api_key_v1
const api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'c972ae569cb45e71d68e0738723de9becd39c677d365eb5e635a5f338ea96e75';
api_key_v1.apiKeyPrefix = 'ApiKey-v1';

// Integration API example to send a session update
const integrationApi = new TalonOne.IntegrationApi();

// /**
//  *
//  * // Using `constructFromObject`:
//  * const customerSession = TalonOne.NewCustomerSession.constructFromObject({
//  *   total: 100.33,
//  *   coupon: 'Cool-Summer!'
//  * });
//  */

// const customerSession = new TalonOne.NewCustomerSession();
// customerSession.total =  100.33;
// customerSession.coupon =  'Cool-Summer!';

// integrationApi.updateCustomerSession('example_integration_id', customerSession).then(
//   function(data) {
//     console.log(`> INTEGRATION SESSION API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   },
//   function(error) {
//     console.error(`X Error while updating session:\n${JSON.stringify(error, null, 2)}`);
//   }
// );

// const customerProfile = new TalonOne.NewCustomerProfile();
// customerProfile.attributes =  {
//   Email: "helloworld@yahoo.de",
//   Name: "Hello SDK"
// };

// integrationApi.updateCustomerProfile('example_prof_id', customerProfile).then(
//   function(data) {
//     console.log(`> INTEGRATION PROFILE API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   },
//   function(error) {
//     console.error(`X Error while updating profile:\n${JSON.stringify(error, null, 2)}`);
//   }
// );


// /**
//  * ======================================================================================================================
//  * ======================================================================================================================
//  * ======================================================================================================================
//  */


// // Configure API key authorization: manager_auth
// const managerAuth = defaultClient.authentications['manager_auth'];
// managerAuth.apiKeyPrefix = 'Bearer';

// // // Management API example to load application with id 7
// const managerApi = new TalonOne.ManagementApi();

// // /**
// //  * // Using `constructFromObject`:
// //  * const loginParams = TalonOne.LoginParams.constructFromObject({
// //  *   email: 'admin@talon.one',
// //  *   password: '$hhhD0ntT3ll!'
// //  * });
// //  */

// const loginParams = new TalonOne.LoginParams('demo@talon.one', 'Demo1234')

// managerApi.createSession(loginParams).then(function(data) {
//   // Save token in the configuration for future management API calls
//   managerAuth.apiKey = data.token

//   // Calling `getApplication` function with the desired id (7)
//   managerApi.getApplication(1).then(function(data) {
//     console.log(`> MANAGEMENT API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   }, function(error) {
//     console.error(`X Error while fetching the application:\n ${error}`);
//   });
// }, function(error) {
//   console.error(`X Error while login:\n ${error}`);
// });

// /**
//  * ======================================================================================================================
//  * ======================================================================================================================
//  * ======================================================================================================================
//  */

// integrationApi.getCustomerInventory('Cool_Dude', {
//   profile: true,
//   referrals: true,
//   coupons: true,
// }).then(
//   function(data) {
//     console.log(`> INTEGRATION INVENTORY API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   },
//   function(error) {
//     console.error(`X Error while getting inventory session:\n${JSON.stringify(error, null, 2)}`);
//   }
// );

// /**
//  * ======================================================================================================================
//  * ======================================================================================================================
//  * ======================================================================================================================
//  */

// const customerSession = TalonOne.NewCustomerSessionV2.constructFromObject({
//   profileId: 'example_prof_id',
//   cartItems: [
//     {
//       name: 'Döner King',
//       sku: 'kd-100',
//       quantity: 1,
//       price: 2.00,
//       category: 'pizzas'
//     },
//     {
//       name: 'Spezi 500ml',
//       sku: 'sp-50',
//       quantity: 1,
//       price: 2,
//       category: 'beverages'
//     },
//     {
//       name: 'Queen Döner',
//       sku: 'qd-100',
//       quantity: 1,
//       price: 2.50,
//       category: 'pizzas'
//     },
//     {
//       name: 'Club Mate 330ml',
//       sku: 'cm-33',
//       quantity: 1,
//       price: 1.80,
//       category: 'beverages'
//     }
//   ],
//   couponCodes: [
//     'Cool-Summer!'
//   ]
// });


// const integrationRequest = new TalonOne.IntegrationRequest(customerSession);
// integrationRequest.responseContent = ['customerSession', 'customerProfile']

// integrationApi.updateCustomerSessionV2('pxyr', integrationRequest).then(
//   function (data) {
//     console.log(`> INTEGRATION SESSION API v2 called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   },
//   function (error) {
//     console.error(`X Error while updating session:\n${JSON.stringify(error.response)}`);
//   }
// );

// /**
//  * ======================================================================================================================
//  * ======================================================================================================================
//  * ======================================================================================================================
//  */

const profileIntegrationRequest = new TalonOne.CustomerProfileIntegrationRequestV2({
  attributes: {
    Email: "wall-e@pixar.com",
    Name: "Hello WallE"
  },
  responseContent: [
    'customerProfile',
    'loyalty',
  ],
});

integrationApi.updateCustomerProfileV2('pixar', profileIntegrationRequest, { runRuleEngine: true, dry: true }).then(
  function (data) {
    console.log(`> INTEGRATION Profile API v2 called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
  },
  function (error) {
    console.error(`X Error while updating session:\n${JSON.stringify(error)}`);
  }
);