# TalonOne.CheckLoyaltyBalanceBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | An indicator of how the block compares the balance to the value. | 
**program** | [**CheckLoyaltyBalanceBlockProgram**](CheckLoyaltyBalanceBlockProgram.md) |  | 
**subledger** | **String** | The name of the subledger to check the balance of. Can be empty if this block checks the loyalty program&#39;s main ledger balance instead of a subledger. | 
**balance** | **String** | The type of balance to check:  - &#x60;current&#x60; is the sum of currently active points  - &#x60;pending&#x60; is the sum of pending points.  - &#x60;negative&#x60; is the sum of negative points.  - &#x60;tentativeCurrent&#x60; is the tentative points balance within the current open customer session. | 
**value** | **Number** | The numeric value to compare the balance against. | 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `equals` (value: `"equals"`)

* `not(equals)` (value: `"not(equals)"`)

* `lessThan` (value: `"lessThan"`)

* `lessThanOrEqual` (value: `"lessThanOrEqual"`)

* `greaterThan` (value: `"greaterThan"`)

* `greaterThanOrEqual` (value: `"greaterThanOrEqual"`)





## Enum: BalanceEnum


* `current` (value: `"current"`)

* `pending` (value: `"pending"`)

* `negative` (value: `"negative"`)

* `tentativeCurrent` (value: `"tentativeCurrent"`)




