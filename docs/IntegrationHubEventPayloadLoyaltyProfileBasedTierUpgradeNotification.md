# TalonOne.IntegrationHubEventPayloadLoyaltyProfileBasedTierUpgradeNotification

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
**currentPoints** | **Number** |  | 
**oldTier** | **String** |  | [optional] 
**pointsRequiredToTheNextTier** | **Number** |  | [optional] 
**nextTier** | **String** |  | [optional] 
**tierExpirationDate** | **Date** |  | [optional] 
**timestampOfTierChange** | **Date** |  | [optional] 
**publishedAt** | **Date** | Timestamp when the event was published. | 


