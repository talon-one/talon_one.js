# TalonOne.CheckEventBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**eventType** | **String** | The event type to check against. | 
**matchers** | **[Object]** |  | [optional] 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 


