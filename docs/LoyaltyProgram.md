# TalonOne.LoyaltyProgram

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of loyalty program. | 
**accountID** | **Number** | The ID of the Talon.One account that owns this program. | 
**name** | **String** | The internal name for the Loyalty Program. | 
**title** | **String** | The display title for the Loyalty Program. | 
**description** | **String** | Description of our Loyalty Program. | 
**subscribedApplications** | **[Number]** | A list containing the IDs of all applications that are subscribed to this Loyalty Program. | 
**defaultValidity** | **String** | Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like &#39;1h&#39; or &#39;40m&#39;. | 
**defaultPending** | **String** | Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like &#39;1h&#39; or &#39;40m&#39;. | 
**allowSubledger** | **Boolean** | Indicates if this program supports subledgers inside the program | 
**tiers** | [**[LoyaltyTier]**](LoyaltyTier.md) | The tiers in this loyalty program | [optional] 


