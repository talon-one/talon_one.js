# TalonOne.CardAddedDeductedPointsNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileIntegrationIDs** | **[String]** | The integration ID of the customer profile to whom points were added or deducted. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**subledgerID** | **String** | The ID of the subledger within the loyalty program where these points were added or deducted. | 
**amount** | **Number** | The amount of added or deducted loyalty points. | 
**reason** | **String** | The reason for the points addition or deduction. | 
**typeOfChange** | **String** | The notification source, that is, it indicates whether the points were added or deducted via one of the following routes:  - [The Campaign Manager](/docs/product/getting-started)  - [Management API](/management-api#tag/Loyalty)  - [Rule Engine](/docs/product/applications/evaluation-order-for-rules-and-filters)  | 
**employeeName** | **String** | The name of the employee who added or deducted points. | 
**userID** | **Number** | The ID of the employee who added or deducted points. | 
**operation** | **String** | The action (addition or deduction) made with loyalty points. | 
**startDate** | **Date** | The start date for loyalty points. | [optional] 
**expiryDate** | **Date** | The expiration date for loyalty points. | [optional] 
**sessionIntegrationID** | **String** | The integration ID of the session through which the points were earned or lost. | 
**notificationType** | **String** | The type of notification. | 
**cardIdentifier** | **String** | Loyalty card identification number. | 
**usersPerCardLimit** | **Number** | The max amount of user profiles with whom a card can be shared. This can be set to &#x60;0&#x60; for no limit. | 



## Enum: TypeOfChangeEnum


* `campaign_manager` (value: `"campaign_manager"`)

* `rule_engine` (value: `"rule_engine"`)

* `management_api` (value: `"management_api"`)





## Enum: OperationEnum


* `addition` (value: `"addition"`)

* `deduction` (value: `"deduction"`)





## Enum: NotificationTypeEnum


* `LoyaltyCardPointsDeducted` (value: `"LoyaltyCardPointsDeducted"`)

* `LoyaltyCardPointsAdded` (value: `"LoyaltyCardPointsAdded"`)




