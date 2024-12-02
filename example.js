const TalonOne = require("./dist");

const defaultClient = TalonOne.ApiClient.instance;
defaultClient.basePath = "http://localhost:9000";

// Configure API key authorization: api_key_v1
const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey = process.env.TALON_API_KEY;
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
                switch (effect.effectType) {
                    case 'setDiscount':
                        // Initiating right props instance according to the effect type
                        const setDiscountProps = TalonOne.SetDiscountEffectProps.constructFromObject(effect.props)
                        // Initiating the right props class is not a necessity, it is only a suggestion here that could help in case of unexpected returned values from the API

                        // Access the specific effect's properties
                        console.log(`Set a discount '${setDiscountProps.name}' of ${setDiscountProps.value}`)
                        break
                    case 'rejectCoupon':
                    // Work with AcceptCouponEffectProps' properties
                    // ...
                }
            })
        },
        err => {
            console.error(err);
        }
    );