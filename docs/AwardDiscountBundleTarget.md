# TalonOne.AwardDiscountBundleTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | A target discriminator of type &#x60;bundle&#x60;. | 
**name** | **String** | Name of the bundle binding the discount targets. | 
**item** | [**Object**](.md) | Selects which slot inside a bundle a discount applies to. The &#x60;type&#x60; field picks the selection mode. | [optional] 
**prorated** | **Boolean** | Whether to distribute the discount proportionally across the bundle&#39;s items. | [optional] 



## Enum: TypeEnum


* `bundle` (value: `"bundle"`)




