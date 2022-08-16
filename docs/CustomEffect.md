# TalonOne.CustomEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**applicationIds** | **[Number]** | The IDs of the applications that are related to this entity. | 
**name** | **String** | The name of this effect. | 
**title** | **String** | The title of this effect. | 
**payload** | **String** | The JSON payload of this effect. | 
**description** | **String** | The description of this effect. | [optional] 
**enabled** | **Boolean** | Determines if this effect is active. | 
**params** | [**[TemplateArgDef]**](TemplateArgDef.md) | Array of template argument definitions. | [optional] 
**modifiedBy** | **Number** | ID of the user who last updated this effect if available. | [optional] 
**createdBy** | **Number** | ID of the user who created this effect. | 


