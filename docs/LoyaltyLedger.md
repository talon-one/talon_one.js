# TalonOne.LoyaltyLedger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** | The current balance in the program. | 
**transactions** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | Transactions contains a list of all events that have happened such as additions, subtractions and expiries | 
**expiringPoints** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | ExpiringPoints contains a list of all points that will expiry and when | [optional] 
**loyaltyProgramId** | **Number** | The ID of the loyalty program this ledger belongs to. | [optional] 
**loyaltyProgramName** | **String** | The name of the loyalty program this ledger belongs to. | [optional] 


