# TalonOne.CampaignEvaluationGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**name** | **String** | The name of the campaign evaluation group. | 
**parentId** | **Number** | The ID of the parent group that contains the campaign evaluation group. | 
**description** | **String** | A description of the campaign evaluation group. | [optional] 
**evaluationMode** | **String** |  | 
**locked** | **Boolean** | An indicator of whether the campaign evaluation group is locked for modification. | 
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 



## Enum: EvaluationModeEnum


* `stackable` (value: `"stackable"`)

* `listOrder` (value: `"listOrder"`)

* `lowestDiscount` (value: `"lowestDiscount"`)

* `highestDiscount` (value: `"highestDiscount"`)




