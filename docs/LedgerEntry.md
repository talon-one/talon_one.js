# TalonOne.LedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**profileId** | **String** | ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known &#x60;profileId&#x60;, we recommend you use a guest &#x60;profileId&#x60;.  | 
**accountId** | **Number** | The ID of the Talon.One account that owns this profile. | 
**loyaltyProgramId** | **Number** | ID of the ledger. | 
**eventId** | **Number** | ID of the related event. | 
**amount** | **Number** | Amount of loyalty points. | 
**reason** | **String** | reason for awarding/deducting points. | 
**expiryDate** | **Date** | Expiration date of the points. | 
**referenceId** | **Number** | The ID of the balancing ledgerEntry. | [optional] 


