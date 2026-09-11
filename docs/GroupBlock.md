# TalonOne.GroupBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | Logical operator applied across child blocks. &#x60;all&#x60; requires every child to pass, &#x60;atLeastOne&#x60; requires at least one, &#x60;none&#x60; requires all to fail. | 
**blocks** | **[Object]** | Child blocks evaluated according to the operator. | 
**onFailure** | **[Object]** | Blocks evaluated when this block fails or returns false. | [optional] 
**onError** | **{String: [Object]}** | Named error handlers evaluated when a specific error occurs. | [optional] 



## Enum: OperatorEnum


* `all` (value: `"all"`)

* `atLeastOne` (value: `"atLeastOne"`)

* `none` (value: `"none"`)




