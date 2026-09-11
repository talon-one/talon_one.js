# TalonOne.CheckAchievementBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | The comparison operator applied to the achievement. | 
**achievement** | [**CheckAchievementBlockAchievement**](CheckAchievementBlockAchievement.md) |  | 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `justCompleted` (value: `"justCompleted"`)

* `started` (value: `"started"`)

* `not(started)` (value: `"not(started)"`)

* `inProgress` (value: `"inProgress"`)

* `not(inProgress)` (value: `"not(inProgress)"`)

* `completed` (value: `"completed"`)

* `not(completed)` (value: `"not(completed)"`)




