# TalonOne.LedgerEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**profileId** | **String** | ID of the customers profile as used within this Talon.One account.  **Note:** If the customer does not yet have a known profileId, we recommend you use a guest profileId.  | 
**accountId** | **Number** | The ID of the Talon.One account that owns this profile. | 
**loyaltyProgramId** | **Number** | ID of the ledger | 
**eventId** | **Number** | ID of the related event | 
**amount** | **Number** | Amount of loyalty points | 
**reason** | **String** | reason for awarding/deducting points | 
**expiryDate** | **Date** | Expiry date of the points | 
**referenceId** | **Number** | The ID of the balancing ledgerEntry | [optional] 


