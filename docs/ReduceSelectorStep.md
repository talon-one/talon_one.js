# TalonOne.ReduceSelectorStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | A step discriminator of type &#x60;reduce&#x60;. | 
**operator** | **String** | The aggregation operator applied to the items produced by the preceding step: - &#x60;max&#x60;, &#x60;min&#x60;, and &#x60;sum&#x60; operate on numeric values. - &#x60;count&#x60; returns the number of items. - &#x60;empty&#x60; reports whether the list is empty.  | 



## Enum: TypeEnum


* `reduce` (value: `"reduce"`)





## Enum: OperatorEnum


* `max` (value: `"max"`)

* `min` (value: `"min"`)

* `sum` (value: `"sum"`)

* `count` (value: `"count"`)

* `empty` (value: `"empty"`)




