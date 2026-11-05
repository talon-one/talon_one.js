# TalonOne.IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** |  | 
**reason** | **String** |  | [optional] 
**operation** | **String** |  | 
**startDate** | **Date** |  | [optional] 
**expiryDate** | **Date** |  | [optional] 
**transactionUUID** | **String** | The identifier of the transaction in the loyalty ledger. | 
**created** | **Date** | The timestamp when the loyalty transaction occurred. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the activation date.  **Note**: This only applies to points for which &#x60;AwaitsActivation&#x60; is &#x60;true&#x60; and &#x60;ExpiryDate&#x60; is not set.  | [optional] 



## Enum: OperationEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




