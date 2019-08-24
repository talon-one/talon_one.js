# TalonOne.ApplicationSession

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **Number** | The globally unique Talon.One ID of the customer that created this entity. | [optional] 
**integrationId** | **String** | The ID used for this entity in the application system. | 
**coupon** | **String** | Any coupon code entered. | 
**referral** | **String** | Any referal code entered. | 
**state** | **String** | Indicating if the customer session is in progress (\&quot;open\&quot;), \&quot;closed\&quot;, or \&quot;cancelled\&quot;. | 
**cartItems** | [**[CartItem]**](CartItem.md) | Serialized JSON representation. | 
**discounts** | **{String: Number}** | A map of labelled discount values, in the same currency as the session. | 
**attributes** | **Object** | Arbitrary properties associated with this item | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




