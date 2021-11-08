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
**state** | **String** | Indicates the current state of the session. Sessions can be created as &#x60;open&#x60; or &#x60;closed&#x60;, after which valid transitions are:  1. &#x60;open&#x60; → &#x60;closed&#x60; 2. &#x60;open&#x60; → &#x60;cancelled&#x60; 3. &#x60;closed&#x60; → &#x60;cancelled&#x60;  For more information, see [Entites](/docs/dev/concepts/entities#customer-session).  | [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | All items the customer will be purchasing in this session | 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Any costs associated with the session that can not be explicitly attributed to cart items. Examples include shipping costs and service fees. | [optional] 
**identifiers** | **[String]** | Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts.  | [optional] 
**attributes** | [**Object**](.md) | A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.  | 
**firstSession** | **Boolean** | Indicates whether this is the first session for the customer&#39;s profile. Will always be true for anonymous sessions. | 
**total** | **Number** | The total sum of cart-items, as well as additional costs, before any discounts applied | 
**cartItemTotal** | **Number** | The total sum of cart-items before any discounts applied | 
**additionalCostTotal** | **Number** | The total sum of additional costs before any discounts applied | 
**updated** | **Date** | Timestamp of the most recent event received on this session | 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




