# TalonOne.CheckTierBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | An indicator of how the block compares its elements. | 
**subledger** | **String** | The name of the subledger to check the balance of. Can be empty if this block checks the loyalty program&#39;s main ledger balance instead of a subledger. | 
**tier** | [**CheckTierBlockTier**](CheckTierBlockTier.md) |  | 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `member` (value: `"member"`)

* `not(member)` (value: `"not(member)"`)




