# TalonOne.CardLedgerTransactionLogEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** | Date and time the loyalty card transaction occurred. | 
**programId** | **Number** | ID of the loyalty program. | 
**cardIdentifier** | **String** | The alphanumeric identifier of the loyalty card.  | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | [optional] 
**sessionId** | **Number** | The **internal** ID of the session.  | [optional] 
**customerSessionId** | **String** | ID of the customer session where the transaction occurred. | [optional] 
**type** | **String** | Type of transaction. Possible values:   - &#x60;addition&#x60;: Signifies added points.   - &#x60;subtraction&#x60;: Signifies deducted points.  | 
**name** | **String** | Name or reason of the loyalty ledger transaction. | 
**startDate** | **String** | When points become active. Possible values:   - &#x60;immediate&#x60;: Points are immediately active.   - a timestamp value: Points become active at a given date and time.  | 
**expiryDate** | **String** | Date when points expire. Possible values are:   - &#x60;unlimited&#x60;: Points have no expiration date.   - &#x60;timestamp value&#x60;: Points become active from the given date.  | 
**subledgerId** | **String** | ID of the subledger. | 
**amount** | **Number** | Amount of loyalty points added or deducted in the transaction. | 
**id** | **Number** | ID of the loyalty ledger entry. | 



## Enum: TypeEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




