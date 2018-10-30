# TalononeApi.InlineResponse2006Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**campaignId** | **Number** | ID of the campaign from which the referral received the referral code. | 
**advocateProfileIntegrationId** | **String** | The Integration Id of the Advocate&#39;s Profile | 
**friendProfileIntegrationId** | **String** | An optional Integration ID of the Friend&#39;s Profile | [optional] 
**startDate** | **Date** | Timestamp at which point the referral code becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative. | [optional] 
**code** | **String** | The actual referral code. | 
**usageCounter** | **Number** | The number of times this referral code has been successfully used. | 
**usageLimit** | **Number** | The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | 


