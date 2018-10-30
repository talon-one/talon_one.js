# TalononeApi.Coupon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | 
**value** | **String** | The actual coupon code. | 
**usageLimit** | **Number** | The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**usageCounter** | **Number** | The number of times this coupon has been successfully used. | 
**attributes** | **Object** | Arbitrary properties associated with this item | [optional] 
**referralId** | **Number** | The integration ID of the referring customer (if any) for whom this coupon was created as an effect. | [optional] 
**recipientIntegrationId** | **String** | The integration ID of a referred customer profile. | [optional] 
**importId** | **Number** | The ID of the Import which created this coupon. | [optional] 
**batchId** | **String** | The id of the batch the coupon belongs to. | [optional] 


