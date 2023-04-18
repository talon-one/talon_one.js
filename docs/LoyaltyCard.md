# TalonOne.LoyaltyCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**programID** | **Number** | The ID of the loyalty program that owns this entity. | 
**status** | **String** | Status of the loyalty card. Can be one of: [&#39;active&#39;, &#39;inactive&#39;]  | 
**identifier** | **String** | The alphanumeric identifier of the loyalty card.  | 
**usersPerCardLimit** | **Number** | The max amount of customer profiles that can be linked to the card. 0 means unlimited.  | 
**profiles** | [**[LoyaltyCardProfileRegistration]**](LoyaltyCardProfileRegistration.md) | Integration IDs of the customers profiles linked to the card. | [optional] 
**ledger** | [**LedgerInfo**](LedgerInfo.md) |  | [optional] 
**subledgers** | [**{String: LedgerInfo}**](LedgerInfo.md) | Displays point balances of the card in the subledgers of the loyalty program. | [optional] 
**modified** | **Date** | Timestamp of the most recent update of the loyalty card. | [optional] 
**oldCardIdentifier** | **String** | The alphanumeric identifier of the loyalty card.  | [optional] 
**newCardIdentifier** | **String** | The alphanumeric identifier of the loyalty card.  | [optional] 


