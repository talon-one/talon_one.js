# TalonOne.UpdateExperimentBlueprint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The display name for the experiment blueprint. | [optional] 
**description** | **String** | A longer, more detailed description of the experiment blueprint. | [optional] 
**category** | **String** | Category used to group experiment blueprints. | [optional] 
**variants** | [**[ExperimentBlueprintVariant]**](ExperimentBlueprintVariant.md) | Replaces the stored experiment variant templates. | [optional] 
**cartItemFilters** | [**[CartItemFilterTemplate]**](CartItemFilterTemplate.md) | Replaces the stored cart item filters. Cart item filters should only contain name (no description, as description is at the experiment blueprint level). | [optional] 



## Enum: CategoryEnum


* `promotions` (value: `"promotions"`)

* `pricing` (value: `"pricing"`)

* `loyalty` (value: `"loyalty"`)

* `custom` (value: `"custom"`)




