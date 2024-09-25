# TalonOne.Coupon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | 
**value** | **String** | The coupon code. | 
**usageLimit** | **Number** | The number of times the coupon code can be redeemed. &#x60;0&#x60; means unlimited redemptions but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The total discount value that the code can give. Typically used to represent a gift card value.  | [optional] 
**reservationLimit** | **Number** | The number of reservations that can be made with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiration date of the coupon. Coupon never expires if this is omitted. | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured.  | [optional] 
**usageCounter** | **Number** | The number of times the coupon has been successfully redeemed. | 
**discountCounter** | **Number** | The amount of discounts given on rules redeeming this coupon. Only usable if a coupon discount budget was set for this coupon. | [optional] 
**discountRemainder** | **Number** | The remaining discount this coupon can give. | [optional] 
**reservationCounter** | **Number** | The number of times this coupon has been reserved. | [optional] 
**attributes** | [**Object**](.md) | Custom attributes associated with this coupon. | [optional] 
**referralId** | **Number** | The integration ID of the referring customer (if any) for whom this coupon was created as an effect. | [optional] 
**recipientIntegrationId** | **String** | The Integration ID of the customer that is allowed to redeem this coupon. | [optional] 
**importId** | **Number** | The ID of the Import which created this coupon. | [optional] 
**reservation** | **Boolean** | Defines the reservation type: - &#x60;true&#x60;: The coupon can be reserved for multiple customers. - &#x60;false&#x60;: The coupon can be reserved only for one customer. It is a personal code.  | [optional] [default to true]
**batchId** | **String** | The id of the batch the coupon belongs to. | [optional] 
**isReservationMandatory** | **Boolean** | An indication of whether the code can be redeemed only if it has been reserved first. | [optional] [default to false]
**implicitlyReserved** | **Boolean** | An indication of whether the coupon is implicitly reserved for all customers. | [optional] 


