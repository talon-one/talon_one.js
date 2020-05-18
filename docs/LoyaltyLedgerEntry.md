# TalonOne.LoyaltyLedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** |  | 
**programID** | **Number** |  | 
**customerProfileID** | **String** |  | 
**customerSessionID** | **String** |  | [optional] 
**eventID** | **Number** |  | [optional] 
**type** | **String** |  | 
**amount** | **Number** |  | 
**expiryDate** | **Date** |  | [optional] 
**name** | **String** | A name referencing the condition or effect that added this entry, or the specific name provided in an API call. | 
**subLedgerID** | **String** | This specifies if we are adding loyalty points to the main ledger or a subledger | 
**userID** | **Number** | This is the ID of the user who created this entry, if the addition or subtraction was done manually. | [optional] 



## Enum: TypeEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




