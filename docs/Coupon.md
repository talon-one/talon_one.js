# TalonOne.Coupon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | 
**value** | **String** | The actual coupon code. | 
**usageLimit** | **Number** | The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The amount of discounts that can be given with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**usageCounter** | **Number** | The number of times this coupon has been successfully used. | 
**discountCounter** | **Number** | The amount of discounts given on rules redeeming this coupon. Only usable if a coupon discount budget was set for this coupon. | [optional] 
**discountRemainder** | **Number** | The remaining discount this coupon can give. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | [optional] 
**referralId** | **Number** | The integration ID of the referring customer (if any) for whom this coupon was created as an effect. | [optional] 
**recipientIntegrationId** | **String** | The Integration ID of the customer that is allowed to redeem this coupon. | [optional] 
**importId** | **Number** | The ID of the Import which created this coupon. | [optional] 
**reservation** | **Boolean** | This value controls what reservations mean to a coupon. If set to true the coupon reservation is used to mark it as a favourite, if set to false the coupon reservation is used as a requirement of usage. This value defaults to true if not specified. | [optional] 
**batchId** | **String** | The id of the batch the coupon belongs to. | [optional] 


