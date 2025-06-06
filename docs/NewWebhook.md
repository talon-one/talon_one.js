# TalonOne.NewWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationIds** | **[Number]** | The IDs of the Applications in which this webhook is available. An empty array means the webhook is available in &#x60;All Applications&#x60;.  | 
**title** | **String** | Name or title for this webhook. | 
**description** | **String** | A description of the webhook. | [optional] 
**verb** | **String** | API method for this webhook. | 
**url** | **String** | API URL (supports templating using parameters) for this webhook. | 
**headers** | **[String]** | List of API HTTP headers for this webhook. | 
**payload** | **String** | API payload (supports templating using parameters) for this webhook. | [optional] 
**params** | [**[TemplateArgDef]**](TemplateArgDef.md) | Array of template argument definitions. | 
**enabled** | **Boolean** | Enables or disables webhook from showing in the Rule Builder. | 



## Enum: VerbEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `GET` (value: `"GET"`)

* `DELETE` (value: `"DELETE"`)

* `PATCH` (value: `"PATCH"`)




