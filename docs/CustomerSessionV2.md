# TalonOne.CustomerSessionV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrationId** | **String** | The integration ID for this entity sent to and used in the Talon.One system. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **String** | ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID. | 
**couponCodes** | **[String]** | Any coupon codes entered. | [optional] 
**referralCode** | **String** | Any referral code entered. | [optional] 
**state** | **String** | Indicates the current state of the session. All sessions must start in the \&quot;open\&quot; state, after which valid transitions are...  1. open -&gt; closed 2. open -&gt; cancelled 3. closed -&gt; cancelled  | [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | All items the customer will be purchasing in this session | 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees. | [optional] 
**identifiers** | **[String]** | Identifiers for the customer, this can be used for limits on values such as device ID. | [optional] 
**attributes** | [**Object**](.md) | A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.  | 
**firstSession** | **Boolean** | Indicates whether this is the first session for the customer&#39;s profile. Will always be true for anonymous sessions. | 
**total** | **Number** | The total sum of cart-items, as well as additional costs, before any discounts applied | 
**cartItemTotal** | **Number** | The total sum of cart-items before any discounts applied | 
**additionalCostTotal** | **Number** | The total sum of additional costs before any discounts applied | 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




