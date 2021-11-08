# TalonOne.ApplicationSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **Number** | The globally unique Talon.One ID of the customer that created this entity. | [optional] 
**integrationId** | **String** | The integration ID for this entity sent to and used in the Talon.One system. | 
**profileintegrationid** | **String** | Integration ID of the customer for the session. | [optional] 
**coupon** | **String** | Any coupon code entered. | 
**referral** | **String** | Any referral code entered. | 
**state** | **String** | Indicating if the customer session is in progress (&#x60;open&#x60;), &#x60;closed&#x60;, or &#x60;cancelled&#x60;. For more information about customer sessions, see [Customer sessions](/docs/dev/concepts/entities#customer-session-states) in the docs.  | 
**cartItems** | [**[CartItem]**](CartItem.md) | Serialized JSON representation. | 
**discounts** | **{String: Number}** | A map of labelled discount values, in the same currency as the session. | 
**total** | **Number** | The total sum of the session before any discounts applied. | 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)

* `cancelled` (value: `"cancelled"`)




