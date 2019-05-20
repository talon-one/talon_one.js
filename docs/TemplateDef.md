# TalononeApi.TemplateDef

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**title** | **String** | Campaigner-friendly name for the template that will be shown in the rule editor. | 
**description** | **String** | A short description of the template that will be shown in the rule editor. | 
**help** | **String** | Extended help text for the template. | 
**category** | **String** | Used for grouping templates in the rule editor sidebar. | 
**expr** | **[Object]** | A Talang expression that contains variable bindings referring to args. | 
**args** | [**[TemplateArgDef]**](TemplateArgDef.md) | An array of argument definitions. | 
**expose** | **Boolean** | A flag to control exposure in Rule Builder. | [optional] [default to false]
**name** | **String** | The template name used in Talang. | 


