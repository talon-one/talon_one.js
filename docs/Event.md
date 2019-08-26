# TalonOne.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **String** | ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID. | [optional] 
**sessionId** | **String** | The ID of the session that this event occurred in. | 
**type** | **String** | A string representing the event. Must not be a reserved event name. | 
**attributes** | **Object** | Arbitrary additional JSON data associated with the event. | 
**effects** | **[Object]** | An array of \&quot;effects\&quot; that must be applied in response to this event. Example effects include &#x60;addItemToCart&#x60; or &#x60;setDiscount&#x60;.  | 
**ledgerEntries** | [**[LedgerEntry]**](LedgerEntry.md) | Ledger entries for the event. | 
**meta** | [**Meta**](Meta.md) |  | [optional] 


