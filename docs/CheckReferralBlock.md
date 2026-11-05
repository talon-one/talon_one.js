# TalonOne.CheckReferralBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | A block discriminator of type &#x60;checkReferral&#x60;. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**redeem** | **Boolean** | When &#x60;true&#x60;, the referral code is redeemed. | 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: TypeEnum


* `checkReferral` (value: `"checkReferral"`)




