const TalonOne = require("./dist");

const defaultClient = TalonOne.ApiClient.instance;

// Configure API key authorization: api_key_v1
const api_key_v1 = defaultClient.authentications['api_key_v1'];
// api_key_v1.apiKey = 'c972ae569cb45e71d68e0738723de9becd39c677d365eb5e635a5f338ea96e75';
api_key_v1.apiKey = '953f4d85715c479a30b9ac0592495b576ee90dfc7671a53a7ed440225cb48676';
api_key_v1.apiKeyPrefix = 'ApiKey-v1';
// defaultClient.basePath = 'http://localhost:9000';
defaultClient.basePath = 'https://developerdocs.talon.one';

// Integration API example to send a session update
const integrationApi = new TalonOne.IntegrationApi();

// Using `constructFromObject`:
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

const integrationRequest = new TalonOne.IntegrationRequest(customerSession);
integrationRequest.responseContent = ['customerSession', 'customerProfile']
// console.log(integrationRequest)

integrationApi.updateCustomerSessionV2('TEST', integrationRequest).then(
  function (data) {
    console.log(`> INTEGRATION SESSION API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);

    // Parsing the returned effects list, please consult https://developers.talon.one/Integration-API/handling-effects-v2 for the full list of effects and their corresponding properties
    data.effects.forEach(effect => {
      switch(effect.effectType) {
        case 'acceptCoupon':
          const propsX = TalonOne.AcceptCouponEffectProps.constructFromObject(effect.props)
          console.log('AcceptCouponEffectProps', propsX)
          break
        case 'setDiscount':
          const propsY = TalonOne.SetDiscountEffectProps.constructFromObject(effect.props)
          // Access the specific effect's properties
          console.log(`Set a discount '${propsY.name}' of ${propsY.value}`)
          break
        // ...
        // default:
        //   throw new Error(`Unhandled effect type from integration: ${effect.effectType}`)
      }
    })
    // for (Effect eff : is.getEffects()) {
    //   if (eff.getEffectType() == "addLoyaltyPoints") {
    //       // Typecasting according to the effect type
    //       AddLoyaltyPointsEffectProps props = (AddLoyaltyPointsEffectProps) eff.getProps();
    //       // Access the specific effect's properties
    //       System.out.println(props.getName());
    //       System.out.println(props.getProgramId());
    //       System.out.println(props.getValue());
    //   }
    //   if (eff.getEffectType() == "acceptCoupon") {
    //     // Typecasting according to the effect type
    //     AcceptCouponEffectProps props = (AcceptCouponEffectProps) eff.getProps();
    //     // work with AcceptCouponEffectProps' properties
    //     // ...
    //   }
    // }
  },
  function (error) {
    console.error(`X Error while updating session:\n${JSON.stringify(error.response)}`);
  }
);

// integrationApi.getCustomerInventory('example_prof_id', {
//   profile: true
// }).then(
//   function(data) {
//     console.log(`> INTEGRATION INVENTORY API called successfully. Returned data:\n ${JSON.stringify(data, null, 2)}`);
//   },
//   function(error) {
//     console.error(`X Error while getting inventory session:\n${error}`);
//   }
// );