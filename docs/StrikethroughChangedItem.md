# TalonOne.StrikethroughChangedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the event that triggered the strikethrough labeling. | 
**catalogId** | **Number** | The ID of the catalog that the changed item belongs to. | 
**sku** | **String** | The unique SKU of the changed item. | 
**version** | **Number** | The version of the changed item. | 
**price** | **Number** | The price of the changed item. | 
**prices** | [**{String: PriceDetail}**](PriceDetail.md) | A map of keys and values representing the price types and related price adjustment details for this cart item.       The keys correspond to the &#x60;priceType&#x60; names.  | [optional] 
**evaluatedAt** | **Date** | The evaluation time of the changed item. | 
**effects** | [**[StrikethroughEffect]**](StrikethroughEffect.md) |  | [optional] 


