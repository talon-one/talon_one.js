# TalonOne.NewCustomerSessionV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customers profile as used within this Talon.One account.  **Note:** If the customer does not yet have a known profileId, we recommend you use a guest profileId.  | [optional] 
**couponCodes** | **[String]** | Any coupon codes entered.  **Important**: If you [create a coupon budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a coupon code by the time you close it.  | [optional] 
**referralCode** | **String** | Any referral code entered.  **Important**: If you [create a referral budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a referral code by the time you close it.  | [optional] 
**loyaltyCards** | **[String]** | Any loyalty cards used. | [optional] 
**state** | **String** | Indicates the current state of the session. Sessions can be created as &#x60;open&#x60; or &#x60;closed&#x60;, after which valid transitions are:  1. &#x60;open&#x60; → &#x60;closed&#x60; 2. &#x60;open&#x60; → &#x60;cancelled&#x60; 3. &#x60;closed&#x60; → &#x60;cancelled&#x60;  For more information, see [Entites](/docs/dev/concepts/entities#customer-session).  | [optional] [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | The items to add to this sessions. - If cart item flattening is disabled: **Do not exceed 1000 items** (regardless of their &#x60;quantity&#x60;) per request. - If cart item flattening is enabled: **Do not exceed 1000 items** and ensure the sum of all cart item&#39;s &#x60;quantity&#x60; **does not exceed 10.000** per request.  | [optional] 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees. [Create them in the Campaign Manager](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs/#creating-additional-costs) before setting them with this property.  | [optional] 
**identifiers** | **[String]** | Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts. See the [tutorial](https://docs.talon.one/docs/dev/tutorials/using-identifiers/).  **Important**: If you [create a unique identifier budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains an identifier by the time you close it.  | [optional] 
**attributes** | [**Object**](.md) | A key-value map of the sessions attributes. If you use custom attributes, they must be created in the Campaign Manager before you set them with this property. For more information, see [Attributes](https://docs.talon.one/docs/dev/concepts/attributes).  | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `partially_returned` (value: `"partially_returned"`)

* `cancelled` (value: `"cancelled"`)




