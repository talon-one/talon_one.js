# TalonOne.CampaignSetBranchNode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates the node type. | 
**name** | **String** | Name of the set. | 
**operator** | **String** | An indicator of how the set operates on its elements. | 
**elements** | [**[CampaignSetNode]**](CampaignSetNode.md) | Child elements of this set. | 
**groupId** | **Number** | The ID of the campaign set. | 
**locked** | **Boolean** | An indicator of whether the campaign set is locked for modification. | 
**description** | **String** | A description of the campaign set. | [optional] 
**evaluationMode** | **String** | The mode by which campaigns in the campaign evaluation group are evaluated. | 
**evaluationScope** | **String** | The evaluation scope of the campaign evaluation group. | 



## Enum: TypeEnum


* `SET` (value: `"SET"`)





## Enum: OperatorEnum


* `ALL` (value: `"ALL"`)

* `FIRST` (value: `"FIRST"`)





## Enum: EvaluationModeEnum


* `stackable` (value: `"stackable"`)

* `listOrder` (value: `"listOrder"`)

* `lowestDiscount` (value: `"lowestDiscount"`)

* `highestDiscount` (value: `"highestDiscount"`)





## Enum: EvaluationScopeEnum


* `cartItem` (value: `"cartItem"`)

* `session` (value: `"session"`)




