# TalonOne.BoostLoyaltyTierEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | The ID of the loyalty program. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program. | 
**tierName** | **String** | The name of the tier to which the customer is temporarily boosted. | 
**reason** | **String** | A reason for the tier boost. | [optional] 
**expiryDate** | **Date** | The date when the tier boost expires. | 
**boostUuid** | **String** | The unique identifier of the tier boost. Used to match the boost to its rollback effect when a session is cancelled. | 


