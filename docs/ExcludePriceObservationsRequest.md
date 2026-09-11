# TalonOne.ExcludePriceObservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[Number]** | A list of historical price IDs to exclude from best prior price calculation. Must contain between 1 and 1000 IDs. All IDs must be valid &#x60;id&#x60; values obtained from the [Get summary of price history](https://docs.talon.one/management-api#tag/Catalogs/operation/priceHistory.responses.200.history) endpoint, must belong to the specified Application, and must not already be excluded from best prior price calculation.  | 
**reason** | **String** | The reason for excluding these historical price IDs. Applies to all IDs in the batch.  | 


