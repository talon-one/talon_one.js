# TalonOne.UpdateAchievementProgressBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** |  | 
**value** | [**Object**](.md) | The value to update the progress by. Either a numeric scalar or a &#x60;{{expression}}&#x60; string that resolves to a number at evaluation time. | 
**achievement** | [**AchievementBlockReference**](AchievementBlockReference.md) |  | 



## Enum: OperatorEnum


* `increaseBy` (value: `"increaseBy"`)




