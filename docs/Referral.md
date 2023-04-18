# TalonOne.Referral

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**startDate** | **Date** | Timestamp at which point the referral code becomes valid. | [optional] 
**expiryDate** | **Date** | Expiration date of the referral code. Referral never expires if this is omitted, zero, or negative. | [optional] 
**usageLimit** | **Number** | The number of times a referral code can be used. &#x60;0&#x60; means no limit but any campaign usage limits will still apply.  | 
**campaignId** | **Number** | ID of the campaign from which the referral received the referral code. | 
**advocateProfileIntegrationId** | **String** | The Integration ID of the Advocate&#39;s Profile. | 
**friendProfileIntegrationId** | **String** | An optional Integration ID of the Friend&#39;s Profile. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 
**importId** | **Number** | The ID of the Import which created this referral. | [optional] 
**code** | **String** | The referral code. | 
**usageCounter** | **Number** | The number of times this referral code has been successfully used. | 
**batchId** | **String** | The ID of the batch the referrals belong to. | [optional] 


