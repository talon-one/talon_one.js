# TalonOne.UpdateAttributeValueBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | The update operation applied to the attribute. | 
**attribute** | [**UpdateAttributeValueBlockAttribute**](UpdateAttributeValueBlockAttribute.md) |  | 
**value** | [**Object**](.md) | The value of the attribute. Omitted when operator is set to &#x60;toggle&#x60;. | [optional] 
**target** | [**UpdateAttributeValueBlockTarget**](UpdateAttributeValueBlockTarget.md) |  | 



## Enum: OperatorEnum


* `setTo` (value: `"setTo"`)

* `increaseBy` (value: `"increaseBy"`)

* `decreaseBy` (value: `"decreaseBy"`)

* `multiplyBy` (value: `"multiplyBy"`)

* `divideBy` (value: `"divideBy"`)

* `toggle` (value: `"toggle"`)

* `laterBy` (value: `"laterBy"`)

* `earlierBy` (value: `"earlierBy"`)




