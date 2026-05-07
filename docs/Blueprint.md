# TalonOne.Blueprint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this blueprint. | 
**accountId** | **Number** | The ID of the account that owns this blueprint. | 
**applicationId** | **Number** | The ID of the Application that owns this blueprint. | 
**title** | **String** | A short description of the blueprint. | 
**description** | **String** | A longer, more detailed description of the blueprint. | [optional] 
**category** | **String** | Category used to group blueprints. | 
**source** | **String** | Indicates whether the blueprint is custom or shipped by Talon.One. | 
**rules** | [**[CatalogRule]**](CatalogRule.md) | Array of rule templates in this blueprint. Rules only contain title (no description, as description is at the blueprint level). | 
**cartItemFilters** | [**[CartItemFilterTemplate]**](CartItemFilterTemplate.md) | Array of cart item filter templates in this blueprint. Cart item filters only contain name (no description, as description is at the blueprint level). | 
**created** | **Date** | Timestamp when the blueprint was created. | 
**createdBy** | **Number** | ID of the user who created the blueprint. | 
**modified** | **Date** | Timestamp when the blueprint was last updated. | [optional] 
**modifiedBy** | **Number** | ID of the user who last updated the blueprint. | [optional] 



## Enum: CategoryEnum


* `promotions` (value: `"promotions"`)

* `pricing` (value: `"pricing"`)

* `loyalty` (value: `"loyalty"`)

* `custom` (value: `"custom"`)





## Enum: SourceEnum


* `custom` (value: `"custom"`)

* `default` (value: `"default"`)




