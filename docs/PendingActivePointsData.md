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


