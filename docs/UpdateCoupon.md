# TalononeApi.UpdateCoupon

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageLimit** | **Number** | The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**recipientIntegrationId** | **String** | The integration ID for this coupon&#39;s beneficiary&#39;s profile | [optional] 
**attributes** | **Object** | Arbitrary properties associated with this item | [optional] 
**reservation** | **Boolean** | This value controls what reservations mean to a coupon. If set to true the coupon reservation is used to mark it as a favourite, if set to false the coupon reservation is used as a requirement of usage. This value defaults to false if not specified. | [optional] 


