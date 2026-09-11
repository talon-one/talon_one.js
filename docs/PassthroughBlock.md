# TalonOne.PassthroughBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | The type discriminator for this block. | 
**expression** | **[Object]** | The raw Talang expression as an array. For a function call, the first element is the function name and subsequent elements are its arguments. For any other expression (for example a bare attribute path or a literal value), this is a single-element array containing that value. | 



## Enum: TypeEnum


* `passthrough` (value: `"passthrough"`)




