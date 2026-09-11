# TalonOne.RuleEligibilityFailureDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failureCode** | **String** | A code identifying why the customer was not eligible for the rule in the current session. | 
**couponID** | **Number** | The ID of the coupon that was being evaluated when the rule failed.  | [optional] 
**couponValue** | **String** | The coupon code that was being evaluated when the rule failed.  | [optional] 
**referralID** | **Number** | The ID of the referral that was being evaluated when the rule failed.  | [optional] 
**referralValue** | **String** | The referral code that was being evaluated when the rule failed.  | [optional] 
**conditionIndex** | **Number** | The index of the condition that caused the rule to fail. | [optional] 
**effectIndex** | **Number** | The index of the effect that caused the rule to fail. | [optional] 
**details** | **String** | Additional details about the failure. | 



## Enum: FailureCodeEnum


* `CONDITION_NOT_MET` (value: `"CONDITION_NOT_MET"`)

* `EFFECT_FAILED` (value: `"EFFECT_FAILED"`)




