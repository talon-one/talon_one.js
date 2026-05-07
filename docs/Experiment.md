# TalonOne.Experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**isVariantAssignmentExternal** | **Boolean** | The source of the assignment. - false - The variant assignment is handled internally by Talon.One. - true - The variant assignment is handled externally.  | [optional] 
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**activated** | **Date** | The date and time the experiment was activated.  | [optional] 
**state** | **String** | A disabled experiment is not evaluated for rules or coupons.  | [default to &#39;disabled&#39;]
**variants** | [**[ExperimentVariant]**](ExperimentVariant.md) |  | [optional] 
**deletedat** | **Date** | The date and time the experiment was deleted.  | [optional] 



## Enum: StateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)




