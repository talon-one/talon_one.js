# TalonOne.LoyaltyProgramTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the loyalty ledger transaction. | 
**transactionUUID** | **String** | Unique identifier of the transaction in the UUID format. | 
**programId** | **Number** | ID of the loyalty program. | 
**campaignId** | **Number** | ID of the campaign. | [optional] 
**created** | **Date** | Date and time the loyalty transaction occurred. | 
**type** | **String** | Type of transaction. Possible values:   - &#x60;addition&#x60;: Signifies added points.   - &#x60;subtraction&#x60;: Signifies deducted points.  | 
**amount** | **Number** | Amount of loyalty points added or deducted in the transaction. | 
**name** | **String** | Name or reason for the loyalty ledger transaction. | 
**startDate** | **String** | When points become active. Possible values:   - &#x60;immediate&#x60;: Points are immediately active.   - &#x60;on_action&#x60;: Points become active based on the customer&#39;s action.   - a timestamp value: Points become active at a given date and time.  | 
**expiryDate** | **String** | When points expire. Possible values:   - &#x60;unlimited&#x60;: Points have no expiration date.   - a timestamp value: Points expire at a given date and time.  | 
**customerProfileId** | **String** | Customer profile integration ID used in the loyalty program. | [optional] 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 
**subledgerId** | **String** | ID of the subledger. | 
**customerSessionId** | **String** | ID of the customer session where the transaction occurred. | [optional] 
**importId** | **Number** | ID of the import where the transaction occurred. | [optional] 
**userId** | **Number** | ID of the user who manually added or deducted points. Applies only to manual transactions. | [optional] 
**userEmail** | **String** | The email of the Campaign Manager account that manually added or deducted points. Applies only to manual transactions. | [optional] 
**rulesetId** | **Number** | ID of the ruleset containing the rule that triggered the effect. Applies only for transactions that resulted from a customer session. | [optional] 
**ruleName** | **String** | Name of the rule that triggered the effect. Applies only for transactions that resulted from a customer session. | [optional] 
**flags** | [**LoyaltyLedgerEntryFlags**](LoyaltyLedgerEntryFlags.md) |  | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the  activation date.  **Note**: This only applies to points for which &#x60;awaitsActivation&#x60; is &#x60;true&#x60; and &#x60;expiryDate&#x60; is not set.  | [optional] 



## Enum: TypeEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




