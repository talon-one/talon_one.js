# TalonOne.ExperimentBlueprint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this experiment blueprint. | 
**accountId** | **Number** | The ID of the account that owns this experiment blueprint. | 
**applicationId** | **Number** | The ID of the Application that owns this experiment blueprint. | 
**title** | **String** | A short description of the experiment blueprint. | 
**description** | **String** | A longer, more detailed description of the experiment blueprint. | [optional] 
**category** | **String** | Category used to group experiment blueprints. | 
**source** | **String** | Indicates whether the experiment blueprint is custom or shipped by Talon.One. | 
**variants** | [**[ExperimentBlueprintVariant]**](ExperimentBlueprintVariant.md) | Array of experiment variant templates in this experiment blueprint. Variants only contain name, weight, ruleset and the primary flag. | 
**cartItemFilters** | [**[CartItemFilterTemplate]**](CartItemFilterTemplate.md) | Array of cart item filter templates in this experiment blueprint. Cart item filters only contain name (no description, as description is at the experiment blueprint level). | 
**created** | **Date** | Timestamp when the experiment blueprint was created. | 
**createdBy** | **Number** | ID of the user who created the experiment blueprint. | 
**modified** | **Date** | Timestamp when the experiment blueprint was last updated. | [optional] 
**modifiedBy** | **Number** | ID of the user who last updated the experiment blueprint. | [optional] 



## Enum: CategoryEnum


* `promotions` (value: `"promotions"`)

* `pricing` (value: `"pricing"`)

* `loyalty` (value: `"loyalty"`)

* `custom` (value: `"custom"`)





## Enum: SourceEnum


* `custom` (value: `"custom"`)

* `default` (value: `"default"`)




