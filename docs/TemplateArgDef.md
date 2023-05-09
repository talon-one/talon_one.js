# TalonOne.TemplateArgDef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of value this argument expects. | 
**description** | **String** | A campaigner-friendly description of the argument, this will also be shown in the rule editor. | 
**title** | **String** | A campaigner friendly name for the argument, this will be shown in the rule editor. | 
**ui** | [**Object**](.md) | Arbitrary metadata that may be used to render an input for this argument. | 
**picklistID** | **Number** | ID of the picklist linked to a template. | [optional] 
**restrictedByPicklist** | **Boolean** | Whether or not this attribute&#39;s value is restricted by picklist (&#x60;picklist&#x60; property) | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `boolean` (value: `"boolean"`)

* `number` (value: `"number"`)

* `time` (value: `"time"`)

* `(list string)` (value: `"(list string)"`)




