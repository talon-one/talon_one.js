# TalonOne.UpdateCouponBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageLimit** | **Number** | The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | [optional] 
**discountLimit** | **Number** | The amount of discounts that can be given with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | [optional] 
**batchID** | **String** | The id of the batch the coupon belongs to. | 


