# TalonOne.NewCustomerSessionV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known &#x60;profileId&#x60;, we recommend you use a guest &#x60;profileId&#x60;.  | [optional] 
**storeIntegrationId** | **String** | The integration ID of the store. You choose this ID when you create a store. | [optional] 
**evaluableCampaignIds** | **[Number]** | When using the &#x60;dry&#x60; query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them.  | [optional] 
**couponCodes** | **[String]** | Any coupon codes entered.  **Important**: If you [create a coupon budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a coupon code by the time you close it.  | [optional] 
**referralCode** | **String** | Any referral code entered.  **Important**: If you [create a referral budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a referral code by the time you close it.  | [optional] 
**loyaltyCards** | **[String]** | Any loyalty cards used. | [optional] 
**state** | **String** | Indicates the current state of the session. Sessions can be created as &#x60;open&#x60; or &#x60;closed&#x60;. The state transitions are:  1. &#x60;open&#x60; → &#x60;closed&#x60; 2. &#x60;open&#x60; → &#x60;cancelled&#x60; 3. Either:    - &#x60;closed&#x60; → &#x60;cancelled&#x60; (**only** via [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2)) or    - &#x60;closed&#x60; → &#x60;partially_returned&#x60; (**only** via [Return cart items](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/returnCartItems))    - &#x60;closed&#x60; → &#x60;open&#x60; (**only** via [Reopen customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession)) 4. &#x60;partially_returned&#x60; → &#x60;cancelled&#x60;  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions).  | [optional] [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | The items to add to this session. **Do not exceed 1000 items** and ensure the sum of all cart item&#39;s &#x60;quantity&#x60; **does not exceed 10.000** per request.  | [optional] 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Use this property to set a value for the additional costs of this session, such as a shipping cost.  They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs).  | [optional] 
**identifiers** | **[String]** | Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts. See the [tutorial](https://docs.talon.one/docs/dev/tutorials/using-identifiers).  **Important**: Ensure the session contains an identifier by the time you close it if: - You [create a unique identifier budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign. - Your campaign has [coupons](https://docs.talon.one/docs/product/campaigns/coupons/coupon-page-overview).  | [optional] 
**attributes** | [**Object**](.md) | Use this property to set a value for the attributes of your choice. Attributes represent any information to attach to your session, like the shipping city.  You can use [built-in attributes](https://docs.talon.one/docs/dev/concepts/attributes#built-in-attributes) or [custom ones](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes). Custom attributes must be created in the Campaign Manager before you set them with this property.  | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `partially_returned` (value: `"partially_returned"`)

* `cancelled` (value: `"cancelled"`)




