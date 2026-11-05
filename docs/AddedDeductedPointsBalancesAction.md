# TalonOne.AddedDeductedPointsBalancesAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount of added or deducted loyalty points. | 
**reason** | **String** | The reason for the points addition or deduction. | 
**operation** | **String** | The action (addition or subtraction) made with loyalty points. | 
**startDate** | **Date** | The start date for loyalty points. | [optional] 
**expiryDate** | **Date** | The expiration date for loyalty points. | [optional] 
**transactionUUID** | **String** | The identifier of the transaction in the loyalty ledger. | 
**created** | **Date** | The timestamp when the loyalty transaction occurred. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, calculated relative to their start date.   **Note**: This only applies to points for which &#x60;AwaitsActivation&#x60; is &#x60;true&#x60; and &#x60;ExpiryDate&#x60; is not set.  | [optional] 



## Enum: OperationEnum


* `addition` (value: `"addition"`)

* `subtraction` (value: `"subtraction"`)




