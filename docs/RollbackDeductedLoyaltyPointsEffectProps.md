# TalonOne.RollbackDeductedLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | The ID of the loyalty program where these points were reimbursed. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were reimbursed. | 
**value** | **Number** | The amount of points that were reimbursed. | 
**recipientIntegrationId** | **String** | The user for whom these points were reimbursed. | 
**startDate** | **Date** | The date after which the reimbursed points will be valid. | [optional] 
**expiryDate** | **Date** | The date after which the reimbursed points will expire. | [optional] 
**transactionUUID** | **String** | The identifier of this loyalty point transaction. | 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 


