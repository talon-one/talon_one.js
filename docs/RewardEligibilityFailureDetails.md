# TalonOne.RewardEligibilityFailureDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failureCode** | **String** | A code identifying why the customer is not eligible for the reward. | 
**conditionIndex** | **Number** | The index of the eligibility condition that the customer did not meet. Only applicable when &#x60;failureCode&#x60; is &#x60;CONDITION_NOT_MET&#x60;. | [optional] 



## Enum: FailureCodeEnum


* `CONDITION_NOT_MET` (value: `"CONDITION_NOT_MET"`)

* `INSUFFICIENT_BALANCE` (value: `"INSUFFICIENT_BALANCE"`)

* `CARD_REQUIRED` (value: `"CARD_REQUIRED"`)

* `PROFILE_REQUIRED` (value: `"PROFILE_REQUIRED"`)




