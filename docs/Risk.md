# TalonOne.Risk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**notificationId** | **Number** | The ID of the risk notification rule that flagged this risk. | 
**featureDate** | **Date** | The date of the activity data in which this risk was detected. The anomaly detection pipeline scores complete 24-hour cycles, so this is always the day before the risk was reported, not the reporting date itself.  | 
**groupKey** | **String** | The Application group this risk was detected in. Contains the Application ID, or &#x60;__GLOBAL__&#x60; for metrics that are not grouped by Application.  | 
**applicationId** | **Number** | The ID of the Application this risk belongs to. Absent for global metrics. | [optional] 
**status** | **String** | The triage lifecycle status of this risk. | 
**criticality** | **String** | The critical classification bucket of this risk. | 
**entity** | **String** | The entity type the risk was detected in. | 
**activity** | **String** | The activity metric the risk was detected in. | 
**timeFrame** | **String** | The rolling time window of the risk evaluation. | 
**reportedDate** | **Date** | The time the ML service reported this risk. | 
**affectedEntityCount** | **Number** | The total number of entities affected by this risk. | 
**description** | **String** | Human-readable description of the detected anomaly. | [optional] 
**discardReason** | **String** | The reason this risk was discarded. Only present on discarded risks. | [optional] 
**statusComment** | **String** | The free-text details of the latest reclassification action: the description for resolving confirmed risks, or the details for discarding risks.  | [optional] 
**statusChangedBy** | **Number** | The ID of the user who performed the latest reclassification action. | [optional] 
**statusChangedAt** | **Date** | The time of the latest reclassification action. | [optional] 
**modified** | **Date** | Timestamp of the most recent update. | 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `in_review` (value: `"in_review"`)

* `confirmed` (value: `"confirmed"`)

* `discarded` (value: `"discarded"`)





## Enum: CriticalityEnum


* `critical` (value: `"critical"`)

* `not_critical` (value: `"not_critical"`)





## Enum: EntityEnum


* `profile` (value: `"customer_profile"`)

* `session` (value: `"customer_session"`)





## Enum: ActivityEnum


* `loyalty_points_earned` (value: `"loyalty_points_earned"`)

* `discounted_amount` (value: `"discounted_amount"`)

* `completed_orders` (value: `"completed_orders"`)

* `coupon_attempts` (value: `"coupon_attempts"`)





## Enum: TimeFrameEnum


* `1D` (value: `"1D"`)

* `7D` (value: `"7D"`)

* `30D` (value: `"30D"`)





## Enum: DiscardReasonEnum


* `expected_behavior` (value: `"expected_behavior"`)

* `other` (value: `"other"`)




