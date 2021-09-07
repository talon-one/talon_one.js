# TalonOne.NewReferralsForMultipleAdvocates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | Timestamp at which point the referral code becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the referral code. Referral never expires if this is omitted, zero, or negative. | [optional] 
**usageLimit** | **Number** | The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | 
**campaignId** | **Number** | The ID of the campaign from which the referral received the referral code. | 
**advocateProfileIntegrationIds** | **[String]** | An array containing all the respective advocate profiles. | 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 
**validCharacters** | **[String]** | Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp). | [optional] 
**referralPattern** | **String** | The pattern that will be used to generate referrals. The character &#x60;#&#x60; acts as a placeholder and will be replaced by a random character from the &#x60;validCharacters&#x60; set.  | [optional] 


