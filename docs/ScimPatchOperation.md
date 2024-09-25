# TalonOne.ScimPatchOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **String** | The method that should be used in the operation. | 
**path** | **String** | The path specifying the attribute that should be updated. | [optional] 
**value** | **String** | The value that should be updated. Required if &#x60;op&#x60; is &#x60;add&#x60; or &#x60;replace&#x60;. | [optional] 



## Enum: OpEnum


* `add` (value: `"add"`)

* `remove` (value: `"remove"`)

* `replace` (value: `"replace"`)




