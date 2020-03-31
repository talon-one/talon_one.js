# TalonOne.NewCustomerSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID. | [optional] 
**coupon** | **String** | Any coupon code entered. | [optional] 
**referral** | **String** | Any referral code entered. | [optional] 
**state** | **String** | Indicates the current state of the session. All sessions must start in the \&quot;open\&quot; state, after which valid transitions are...  1. open -&gt; closed 2. open -&gt; cancelled 3. closed -&gt; cancelled  | [optional] [default to &#39;open&#39;]
**cartItems** | [**[CartItem]**](CartItem.md) | Serialized JSON representation. | [optional] 
**identifiers** | **[String]** | Identifiers for the customer, this can be used for limits on values such as device ID. | [optional] 
**total** | **Number** | The total sum of the cart in one session. | [optional] 
**attributes** | [**Object**](.md) | A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.  | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




