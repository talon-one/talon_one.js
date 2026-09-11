# TalonOne.RiskAffectedEntityItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **String** | The integration ID of the affected entity. | 
**activityValue** | **Number** | The observed value of the monitored activity metric for this entity. | 
**threshold** | **Number** | The anomaly threshold computed for the entity&#39;s Application group. | 
**severityRatio** | **Number** | The ratio of the observed value to the threshold. | 
**criticality** | **String** | The critical classification bucket of this entity. | 



## Enum: CriticalityEnum


* `critical` (value: `"critical"`)

* `not_critical` (value: `"not_critical"`)




