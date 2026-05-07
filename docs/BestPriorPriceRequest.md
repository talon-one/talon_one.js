# TalonOne.BestPriorPriceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skus** | **[String]** | List of product SKUs to check when determining the best prior price. | 
**timeframeEndDate** | **Date** | The end date and time that defines the latest time for retrieving historical SKU prices. | 
**timeframe** | **String** | The number of days prior to the timeframeEndDate. Only prices within this look back period are considered for the best prior price evaluation. | 
**timeframeEndDateType** | **String** | Sets the timeframe for retrieving historical pricing data. Can be one of the following values: - &#x60;strict&#x60;: The timeframe ends at the &#x60;timeframeEndDate&#x60; value. - &#x60;price&#x60;: The timeframe ends at the start of current price value and takes the prices prior to the start of the current price value into account. - &#x60;sale&#x60;:  The timeframe ends at the start of current &#x60;contextId&#x60; and takes the prices prior to the start of the &#x60;contextId&#x60; into account.  | 
**target** | [**BestPriorTarget**](BestPriorTarget.md) |  | [optional] 



## Enum: TimeframeEndDateTypeEnum


* `strict` (value: `"strict"`)

* `price` (value: `"price"`)

* `sale` (value: `"sale"`)




