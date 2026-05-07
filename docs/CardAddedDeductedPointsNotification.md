# TalonOne.CardAddedDeductedPointsNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardIdentifier** | **String** | Loyalty card identification number. | 
**employeeName** | **String** | The name of the employee who added or deducted points. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**notificationType** | **String** | The type of notification. | 
**profileIntegrationIDs** | **[String]** | The integration ID of the customer profile to whom points were added or deducted. | 
**sessionIntegrationID** | **String** | The integration ID of the session through which the points were earned or lost. | 
**subledgerID** | **String** | The ID of the subledger within the loyalty program where these points were added or deducted. | 
**typeOfChange** | **String** | The notification source, that is, it indicates whether the points were added or deducted via one of the following routes:  - [The Campaign Manager](/docs/product/getting-started)  - [Management API](/management-api#tag/Loyalty)  - [Rule Engine](/docs/product/applications/evaluation-order-for-rules-and-filters)  | 
**userID** | **Number** | The ID of the employee who added or deducted points. | 
**usersPerCardLimit** | **Number** | The max amount of user profiles with whom a card can be shared. This can be set to &#x60;0&#x60; for no limit. | 
**amount** | **Number** | The amount of added or deducted loyalty points. | 
**expiryDate** | **Date** | The expiration date for loyalty points. | [optional] 
**operation** | **String** | The action (addition or subtraction) made with loyalty points. | 
**reason** | **String** | The reason for the points addition or deduction. | 
**startDate** | **Date** | The start date for loyalty points. | [optional] 
**transactionUUID** | **String** | The identifier of the transaction in the loyalty ledger. | 



## Enum: NotificationTypeEnum


* `LoyaltyCardPointsDeducted` (value: `"LoyaltyCardPointsDeducted"`)

* `LoyaltyCardPointsAdded` (value: `"LoyaltyCardPointsAdded"`)





## Enum: TypeOfChangeEnum


* `campaign_manager` (value: `"campaign_manager"`)

* `rule_engine` (value: `"rule_engine"`)

* `management_api` (value: `"management_api"`)





## Enum: OperationEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




