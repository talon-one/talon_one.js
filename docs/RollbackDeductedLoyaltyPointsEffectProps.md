# TalonOne.RollbackDeductedLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | The ID of the loyalty program where these points were reimbursed. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were reimbursed. | 
**value** | **Number** | The amount of reimbursed points that were added. | 
**recipientIntegrationId** | **String** | The user for whom these points were reimbursed. | 
**startDate** | **Date** | Date after which the reimbursed points will be valid. | [optional] 
**expiryDate** | **Date** | Date after which the reimbursed points will expire. | [optional] 
**transactionUUID** | **String** | The identifier of &#39;addition&#39; entries added to the ledger as the &#x60;deductLoyaltyPoints&#x60; effect is rolled back. | 
**cardIdentifier** | **String** | The alphanumeric identifier of the loyalty card.  | [optional] 


