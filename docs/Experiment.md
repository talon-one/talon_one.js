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
**goalType** | **String** | The goal of the experiment. Determines which single metric is used to decide the winning variant. When set to &#x60;other&#x60;, multiple metrics are used.  | 
**goalDescription** | **String** | A description of the experiment goal. Provides context for the AI summary and helps it interpret the outcome of the experiment against the stated goal.  | [optional] 
**deletedat** | **Date** | The date and time the experiment was deleted.  | [optional] 



## Enum: StateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)





## Enum: GoalTypeEnum


* `other` (value: `"other"`)

* `maximize_revenue` (value: `"maximize_revenue"`)

* `optimize_discount_efficiency` (value: `"optimize_discount_efficiency"`)

* `maximize_items_sold` (value: `"maximize_items_sold"`)




