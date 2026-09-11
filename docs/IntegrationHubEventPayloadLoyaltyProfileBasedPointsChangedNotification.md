# TalonOne.IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **Number** | The ID of the integration hub event. Return this value in the delivery-status callback to mark the event delivered or failed. | 
**profileIntegrationID** | **String** |  | 
**loyaltyProgramID** | **Number** |  | 
**loyaltyProgramName** | **String** | The name of the loyalty program. | 
**subledgerID** | **String** |  | 
**sourceOfEvent** | **String** |  | 
**currentTier** | **String** | The name of the customer&#39;s current tier. | 
**sessionIntegrationID** | **String** | The integration ID of the session through which the points were earned or lost. Only set when the change results from a rule engine execution; empty otherwise. | [optional] 
**employeeName** | **String** |  | [optional] 
**userID** | **Number** |  | [optional] 
**currentPoints** | **Number** |  | 
**actions** | [**[IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction]**](IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction.md) |  | [optional] 
**publishedAt** | **Date** | Timestamp when the event was published. | 


