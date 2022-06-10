# TalonOne.DeductLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleTitle** | **String** | The title of the rule that contained triggered this points deduction | 
**programId** | **Number** | The ID of the loyalty program where these points were added | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were added | 
**value** | **Number** | The amount of points that were deducted | 
**transactionUUID** | **String** | The identifier of this deduction in the loyalty ledger | 
**name** | **String** | The name property gets one of the following two values. It can be the loyalty program name or it can represent a reason for the respective deduction of loyalty points. The latter is an optional value defined in a deduction rule.  | 
**cardIdentifier** | **String** | The card on which these points were added. | [optional] 


