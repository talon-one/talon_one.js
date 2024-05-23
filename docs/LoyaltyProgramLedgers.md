# TalonOne.LoyaltyProgramLedgers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of loyalty program. | 
**title** | **String** | Visible name of loyalty program. | 
**name** | **String** | Internal name of loyalty program. | 
**joinDate** | **Date** | The date on which the customer joined the loyalty program in RFC3339.  **Note**: This is in the loyalty program&#39;s time zone.  | [optional] 
**ledger** | [**LedgerInfo**](LedgerInfo.md) |  | 
**subLedgers** | [**{String: LedgerInfo}**](LedgerInfo.md) | A map containing information about each loyalty subledger. | [optional] 


