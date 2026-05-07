# TalonOne.ExperimentSegmentInsightMetric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **String** | The metric being measured. | 
**segments** | [**[ExperimentSegmentInsight]**](ExperimentSegmentInsight.md) | Segments with statistically significant results for this metric. An empty array means no significant segments were found. Segments are sorted by confidence score from highest to lowest.  | 



## Enum: MetricEnum


* `session_value` (value: `"avg_session_value"`)

* `discounted_session_value` (value: `"avg_discounted_session_value"`)

* `items_per_session` (value: `"avg_items_per_session"`)




