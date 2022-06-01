# TalonOne.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **String** | ID of the customers profile as used within this Talon.One account.  **Note:** If the customer does not yet have a known profileId, we recommend you use a guest profileId.  | [optional] 
**type** | **String** | A string representing the event. Must not be a reserved event name. | 
**attributes** | [**Object**](.md) | Arbitrary additional JSON data associated with the event. | 
**sessionId** | **String** | The ID of the session that this event occurred in. | [optional] 
**effects** | **[Object]** | An array of \&quot;effects\&quot; that must be applied in response to this event. See the list of [effects](/docs/dev/integration-api/api-effects).  | 
**ledgerEntries** | [**[LedgerEntry]**](LedgerEntry.md) | Ledger entries for the event. | 
**meta** | [**Meta**](Meta.md) |  | [optional] 


