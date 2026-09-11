# TalonOne.AwardDiscountBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**name** | **String** | The human-readable label attached to the discount. | 
**value** | [**Object**](.md) | Discount amount. Either a numeric scalar or a &#x60;{{expression}}&#x60; string that resolves to a number at evaluation time. | 
**partial** | **Boolean** | Whether to apply a partial discount when the requested value exceeds the configured budget. | 
**target** | [**Object**](.md) | Identifies the scope a discount applies to. The &#x60;type&#x60; field selects the concrete target variant. | 


