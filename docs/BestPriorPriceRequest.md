# TalonOne.BestPriorPriceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skus** | **[String]** | List of product SKUs to check when determining the best prior price. | 
**timeframeEndDate** | **Date** | The end date and time that defines the latest time for retrieving historical SKU prices. | 
**timeframe** | **Number** | The number of days prior to the timeframeEndDate. Only prices within this look back period are considered for the best prior price evaluation. | 
**strictEndDate** | **Boolean** | Indicates whether the timeframe includes the start of the current sale. - When &#x60;false&#x60;, the timeframe includes the start date of the current sale. - When &#x60;true&#x60;, the timeframe striclty uses the number of days specified in &#x60;timeframe&#x60;.  | 
**target** | [**BestPriorPriceRequestTarget**](BestPriorPriceRequestTarget.md) |  | [optional] 


