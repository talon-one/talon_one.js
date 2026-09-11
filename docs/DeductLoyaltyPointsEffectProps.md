# TalonOne.DeductLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleTitle** | **String** | The title of the rule that contained triggered this points deduction. | 
**programId** | **Number** | The ID of the loyalty program from which these points were deducted. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program from which these points were deducted. | 
**value** | **Number** | The amount of points that were deducted. | 
**transactionUUID** | **String** | The identifier of this loyalty point transaction. | 
**name** | **String** | The reason of this loyalty points deduction. | 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 


