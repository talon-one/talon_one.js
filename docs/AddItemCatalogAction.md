# TalonOne.AddItemCatalogAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **String** | The unique SKU of the item to add. | 
**price** | **Number** | Price of the item. | [optional] 
**attributes** | [**Object**](.md) | The attributes of the item to add. | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**replaceIfExists** | **Boolean** | Indicates whether to replace the attributes of the item if the same SKU exists.  **Note**: When set to &#x60;true&#x60;:   - If you do not provide a new &#x60;price&#x60; value, the existing &#x60;price&#x60; value is retained.   - If you do not provide a new &#x60;product&#x60; value, the &#x60;product&#x60; value is set to &#x60;null&#x60;.  | [optional] [default to false]


