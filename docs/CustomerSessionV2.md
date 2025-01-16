# TalonOne.CustomerSessionV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**integrationId** | **String** | The integration ID set by your integration layer. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **String** | ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known &#x60;profileId&#x60;, we recommend you use a guest &#x60;profileId&#x60;.  | 
**storeIntegrationId** | **String** | The integration ID of the store. You choose this ID when you create a store. | [optional] 
**evaluableCampaignIds** | **[Number]** | When using the &#x60;dry&#x60; query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them.  | [optional] 
**couponCodes** | **[String]** | Any coupon codes entered.  **Important - for requests only**:  - If you [create a coupon budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a coupon code by the time you close it. - In requests where &#x60;dry&#x3D;false&#x60;, providing an empty array discards any previous coupons. To avoid this, omit the parameter entirely.  | [optional] 
**referralCode** | **String** | Any referral code entered.  **Important - for requests only**:  - If you [create a referral budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a referral code by the time you close it. - In requests where &#x60;dry&#x3D;false&#x60;, providing an empty value discards the previous referral code. To avoid this, omit the parameter entirely.  | [optional] 
**loyaltyCards** | **[String]** | Identifier of a loyalty card. | [optional] 
**state** | **String** | Indicates the current state of the session. Sessions can be created as &#x60;open&#x60; or &#x60;closed&#x60;. The state transitions are:  1. &#x60;open&#x60; → &#x60;closed&#x60; 2. &#x60;open&#x60; → &#x60;cancelled&#x60; 3. Either:    - &#x60;closed&#x60; → &#x60;cancelled&#x60; (**only** via [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2)) or    - &#x60;closed&#x60; → &#x60;partially_returned&#x60; (**only** via [Return cart items](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/returnCartItems))    - &#x60;closed&#x60; → &#x60;open&#x60; (**only** via [Reopen customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession)) 4. &#x60;partially_returned&#x60; → &#x60;cancelled&#x60;  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions).  | [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | The items to add to this session. **Do not exceed 1000 items** and ensure the sum of all cart item&#39;s &#x60;quantity&#x60; **does not exceed 10.000** per request.  | 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Use this property to set a value for the additional costs of this session, such as a shipping cost.  They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs).  | [optional] 
**identifiers** | **[String]** | Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts. See the [tutorial](https://docs.talon.one/docs/dev/tutorials/using-identifiers).  **Important**: Ensure the session contains an identifier by the time you close it if: - You [create a unique identifier budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign. - Your campaign has [coupons](https://docs.talon.one/docs/product/campaigns/coupons/coupon-page-overview). - We recommend passing an anonymized (hashed) version of the identifier value.  | [optional] 
**attributes** | [**Object**](.md) | Use this property to set a value for the attributes of your choice. Attributes represent any information to attach to your session, like the shipping city.  You can use [built-in attributes](https://docs.talon.one/docs/dev/concepts/attributes#built-in-attributes) or [custom ones](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes). Custom attributes must be created in the Campaign Manager before you set them with this property.  | 
**firstSession** | **Boolean** | Indicates whether this is the first session for the customer&#39;s profile. It&#39;s always &#x60;true&#x60; for anonymous sessions. | 
**total** | **Number** | The total value of cart items and additional costs in the session, before any discounts are applied. | 
**cartItemTotal** | **Number** | The total value of cart items, before any discounts are applied. | 
**additionalCostTotal** | **Number** | The total value of additional costs, before any discounts are applied. | 
**updated** | **Date** | Timestamp of the most recent event received on this session. | 
**closurePrediction** | **Number** | The likelihood of the customer session closing based on predictive modeling, expressed as a decimal between &#x60;0&#x60; and &#x60;1&#x60;. | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `partially_returned` (value: `"partially_returned"`)

* `cancelled` (value: `"cancelled"`)




