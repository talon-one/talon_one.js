# TalonOne.UpdateBlueprint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The display name for the blueprint. | [optional] 
**description** | **String** | A longer, more detailed description of the blueprint. | [optional] 
**category** | **String** | Category used to group blueprints. | [optional] 
**rules** | [**[CatalogRule]**](CatalogRule.md) | Replaces the stored rules. Rules should only contain title (no description, as description is at the blueprint level). | [optional] 
**cartItemFilters** | [**[CartItemFilterTemplate]**](CartItemFilterTemplate.md) | Replaces the stored cart item filters. Cart item filters should only contain name (no description, as description is at the blueprint level). | [optional] 



## Enum: CategoryEnum


* `promotions` (value: `"promotions"`)

* `pricing` (value: `"pricing"`)

* `loyalty` (value: `"loyalty"`)

* `custom` (value: `"custom"`)




