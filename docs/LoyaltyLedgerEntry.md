# TalonOne.LoyaltyLedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** |  | 
**programID** | **Number** |  | 
**customerProfileID** | **String** |  | 
**customerSessionID** | **String** |  | [optional] 
**eventID** | **Number** |  | [optional] 
**type** | **String** | The type of the ledger transaction. Possible values are addition, subtraction, expire or expiring (for expiring points ledgers)  | 
**amount** | **Number** |  | 
**expiryDate** | **Date** |  | [optional] 
**name** | **String** | A name referencing the condition or effect that added this entry, or the specific name provided in an API call. | 
**subLedgerID** | **String** | This specifies if we are adding loyalty points to the main ledger or a subledger | 
**userID** | **Number** | This is the ID of the user who created this entry, if the addition or subtraction was done manually. | [optional] 


