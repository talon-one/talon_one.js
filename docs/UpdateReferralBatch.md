# TalonOne.UpdateReferralBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 
**batchID** | **String** | The id of the batch the referral belongs to. | 
**startDate** | **Date** | Timestamp at which point the referral code becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative. | [optional] 
**usageLimit** | **Number** | The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | [optional] 


