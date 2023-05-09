# TalonOne.Picklist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**type** | **String** | The type of allowed values in the picklist. If type time is chosen, it must be an RFC3339 timestamp string. | 
**values** | **[String]** | The list of allowed values provided by this picklist. | 
**modifiedBy** | **Number** | ID of the user who last updated this effect if available. | [optional] 
**createdBy** | **Number** | ID of the user who created this effect. | 
**accountId** | **Number** | The ID of the account that owns this entity. | [optional] 
**imported** | **Boolean** | Imported flag shows that a picklist is imported by a CSV file or not | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `boolean` (value: `"boolean"`)

* `number` (value: `"number"`)

* `time` (value: `"time"`)




