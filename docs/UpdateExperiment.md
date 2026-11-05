# TalonOne.UpdateExperiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isVariantAssignmentExternal** | **Boolean** | Deprecated and ignored. The assignment type is set at experiment creation and cannot be changed. Use &#x60;assignmentType&#x60; when creating an experiment instead.  | [optional] 
**campaign** | [**UpdateCampaign**](UpdateCampaign.md) |  | 
**goalType** | **String** | The goal of the experiment. Determines which single metric is used to decide the winning variant. When set to &#x60;other&#x60;, multiple metrics are used. If omitted, the current value is preserved.  | [optional] 
**goalDescription** | **String** | A description of the experiment goal. Provides context for the AI summary and helps it interpret the outcome of the experiment against the stated goal. If omitted, the current value is preserved.  | [optional] 



## Enum: GoalTypeEnum


* `other` (value: `"other"`)

* `maximize_revenue` (value: `"maximize_revenue"`)

* `maximize_items_sold` (value: `"maximize_items_sold"`)

* `optimize_discount_efficiency` (value: `"optimize_discount_efficiency"`)




