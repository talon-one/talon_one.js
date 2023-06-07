# TalonOne.OutgoingIntegrationTemplateWithConfigurationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**integrationType** | **Number** | Unique ID of outgoing integration type. | 
**title** | **String** | The title of the integration template. | 
**description** | **String** | The description of the specific outgoing integration template. | 
**payload** | **String** | The API payload (supports templating using parameters) for this integration template. | 
**method** | **String** | API method for this webhook. | 
**relativeUrl** | **String** | The relative URL corresponding to each integration template. | 
**headers** | **[String]** | The list of HTTP headers for this integration template. | 
**policy** | [**Object**](.md) | The outgoing integration policy specific to each integration type. | 



## Enum: MethodEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `GET` (value: `"GET"`)

* `DELETE` (value: `"DELETE"`)

* `PATCH` (value: `"PATCH"`)




