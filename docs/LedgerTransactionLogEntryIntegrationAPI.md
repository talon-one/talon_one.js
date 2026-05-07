# TalonOne.LedgerTransactionLogEntryIntegrationAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionUUID** | **String** | Unique identifier of the transaction in the UUID format. | 
**created** | **Date** | Date and time the loyalty transaction occurred. | 
**programId** | **Number** | ID of the loyalty program. | 
**customerSessionId** | **String** | ID of the customer session where the transaction occurred. | [optional] 
**type** | **String** | Type of transaction. Possible values:   - &#x60;addition&#x60;: Signifies added points.   - &#x60;subtraction&#x60;: Signifies deducted points.  | 
**name** | **String** | Name or reason of the loyalty ledger transaction. | 
**startDate** | **String** | When points become active. Possible values:   - &#x60;immediate&#x60;: Points are immediately active.   - &#x60;on_action&#x60;: Points become active based on the customer&#39;s action.   - a timestamp value: Points become active at a given date and time.  | 
**expiryDate** | **String** | Date when points expire. Possible values are:   - &#x60;unlimited&#x60;: Points have no expiration date.   - &#x60;timestamp value&#x60;: Points expire on the given date.  | 
**subledgerId** | **String** | ID of the subledger. | 
**amount** | **Number** | Amount of loyalty points added or deducted in the transaction. | 
**id** | **Number** | ID of the loyalty ledger transaction. | 
**rulesetId** | **Number** | The ID of the ruleset containing the rule that triggered this effect. | [optional] 
**ruleName** | **String** | The name of the rule that triggered this effect. | [optional] 
**flags** | [**LoyaltyLedgerEntryFlags**](LoyaltyLedgerEntryFlags.md) |  | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the  activation date.  **Note**: This only applies to points for which &#x60;awaitsActivation&#x60; is &#x60;true&#x60; and &#x60;expiryDate&#x60; is not set.  | [optional] 



## Enum: TypeEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




