# TalonOne.NewReferral

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | Timestamp at which point the referral code becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative. | [optional] 
**usageLimit** | **Number** | The number of times a referral code can be used. &#x60;0&#x60; means no limit but any campaign usage limits will still apply.  | [optional] 
**campaignId** | **Number** | ID of the campaign from which the referral received the referral code. | 
**advocateProfileIntegrationId** | **String** | The Integration ID of the Advocate&#39;s Profile. | 
**friendProfileIntegrationId** | **String** | An optional Integration ID of the Friend&#39;s Profile. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 


