# TalonOne.PendingActivePointsData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**subledgerID** | **String** | The ID of the subledger, when applicable. If this field is empty, the main ledger is used. | [default to &#39;&#39;]
**customerProfileID** | **String** | The integration ID of the customer profile whose loyalty points are becoming active. | 
**points** | **Number** | The amount of pending loyalty points becoming active. | 
**activeOn** | **Date** | The date and time the loyalty points become active. | [optional] 
**expireOn** | **Date** | The date and time the loyalty points expire. | [optional] 
**sessionIntegrationID** | **String** | The integration ID of the session through which the points were earned. | [optional] 
**created** | **Date** | The timestamp when the loyalty transaction occurred. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the activation date.  **Note**: This only applies to points for which &#x60;AwaitsActivation&#x60; is &#x60;true&#x60; and &#x60;ExpireOn&#x60; is not set.  | [optional] 


