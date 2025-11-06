# TalonOne.SetLoyaltyPointsExpiryDateEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | ID of the loyalty program that contains these points. | 
**subLedgerId** | **String** | API name of the loyalty program subledger that contains these points. | 
**newExpiryDate** | **Date** | The specified expiry date and time for all active and pending point transactions in the loyalty program subledger. | 
**affectedTransactions** | [**[LoyaltyLedgerEntryExpiryDateChange]**](LoyaltyLedgerEntryExpiryDateChange.md) | List of transactions affected by the expiry date update. | [optional] 


