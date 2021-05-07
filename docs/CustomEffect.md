# TalonOne.CustomEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**name** | **String** | The name of this effect. | 
**title** | **String** | The title of this effect. | 
**payload** | **String** | The JSON payload of this effect. | 
**description** | **String** | The description of this effect. | [optional] 
**enabled** | **Boolean** | Determines if this effect is active. | 
**subscribedApplicationsIds** | **[Number]** | A list of the IDs of the applications that this effect is enabled for | [optional] 
**params** | [**[TemplateArgDef]**](TemplateArgDef.md) | Array of template argument definitions | [optional] 
**modifiedBy** | **Number** | ID of the user who last updated this effect if available. | [optional] 
**createdBy** | **Number** | ID of the user who created this effect. | 


