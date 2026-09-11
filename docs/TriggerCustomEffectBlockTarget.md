# TalonOne.TriggerCustomEffectBlockTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The scope the custom effect applies to: - &#x60;cart&#x60; applies once to the whole cart. - &#x60;allItems&#x60; applies once per cart item. - &#x60;selector&#x60; applies once per item matched by the named selector. - &#x60;globalFilter&#x60; applies once per item matched by the named global item filter. - &#x60;bundle&#x60; applies once per item in the named bundle. | 
**name** | **String** | The name of the targeted selector or bundle. Only set when &#x60;type&#x60; is &#x60;selector&#x60;, &#x60;globalFilter&#x60;, or &#x60;bundle&#x60;. | [optional] 



## Enum: TypeEnum


* `cart` (value: `"cart"`)

* `allItems` (value: `"allItems"`)

* `selector` (value: `"selector"`)

* `globalFilter` (value: `"globalFilter"`)

* `bundle` (value: `"bundle"`)




