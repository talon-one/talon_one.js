# TalonOne.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**applicationIds** | **[Number]** | The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity. | 
**title** | **String** | Friendly title for this webhook. | 
**verb** | **String** | API method for this webhook. | 
**url** | **String** | API url (supports templating using parameters) for this webhook. | 
**headers** | **[String]** | List of API HTTP headers for this webhook. | 
**payload** | **String** | API payload (supports templating using parameters) for this webhook. | [optional] 
**params** | [**[TemplateArgDef]**](TemplateArgDef.md) | Array of template argument definitions. | 
**enabled** | **Boolean** | Enables or disables webhook from showing in rule builder. | 



## Enum: VerbEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `GET` (value: `"GET"`)

* `DELETE` (value: `"DELETE"`)

* `PATCH` (value: `"PATCH"`)




