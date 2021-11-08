# TalonOne.NewCustomerSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID. | [optional] 
**coupon** | **String** | Any coupon code entered. | [optional] 
**referral** | **String** | Any referral code entered. | [optional] 
**state** | **String** | Indicates the current state of the session. Sessions can be created as &#x60;open&#x60; or &#x60;closed&#x60;, after which valid transitions are:  1. &#x60;open&#x60; → &#x60;closed&#x60; 2. &#x60;open&#x60; → &#x60;cancelled&#x60; 3. &#x60;closed&#x60; → &#x60;cancelled&#x60;  For more information, see [Entities](/docs/dev/concepts/entities#customer-session).  | [optional] [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | Serialized JSON representation. | [optional] 
**identifiers** | **[String]** | Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts.  | [optional] 
**total** | **Number** | The total sum of the cart in one session. | [optional] 
**attributes** | [**Object**](.md) | A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.  | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




