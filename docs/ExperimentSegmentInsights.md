# TalonOne.ExperimentSegmentInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**[ExperimentSegmentInsightMetric]**](ExperimentSegmentInsightMetric.md) | Segment insights grouped by metric. This array always contains exactly three metric objects. Each metric includes a segments array, which is empty if no significant results were found. The metrics array itself is empty if the &#x60;reason&#x60; property is populated.  | 
**totalSegmentsTested** | **Number** | Total number of segment-metric combinations that were tested for statistical significance.  | 
**dimensionsTested** | **Number** | Number of segmentation dimensions that had sufficient data variance to test. Dimensions where all sessions fall into a single bucket are excluded.  | 
**reason** | **String** | Empty string when segment insights are available. Contains a reason code when insights could not be computed (e.g., \&quot;insufficient_data\&quot; when the experiment has fewer than 100 sessions per variant).  | 


