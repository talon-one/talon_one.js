# TalonOne.RedeemLoyaltyPointsBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**program** | [**RedeemLoyaltyPointsBlockProgram**](RedeemLoyaltyPointsBlockProgram.md) |  | 
**subledger** | **String** | The name of the subledger to deduct points from. Can be empty if this block deducts from the loyalty program&#39;s main ledger instead of a subledger. | 
**value** | [**Object**](.md) | Number of points to deduct. Either a numeric scalar or a &#x60;{{expression}}&#x60; string that resolves to a number at evaluation time. | 
**name** | **String** | A custom description recorded as the reason for the point deduction. | [optional] 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 


