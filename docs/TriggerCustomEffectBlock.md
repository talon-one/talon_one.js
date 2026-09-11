# TalonOne.TriggerCustomEffectBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**customEffect** | [**TriggerCustomEffectBlockCustomEffect**](TriggerCustomEffectBlockCustomEffect.md) |  | 
**params** | [**Object**](.md) | The custom effect&#39;s parameters, in configured order. Each property name is the parameter&#39;s title, lowercased with spaces replaced by underscores (for example, &#x60;Order ID&#x60; becomes &#x60;order_id&#x60;); falls back to &#x60;param_0&#x60;, &#x60;param_1&#x60;, and so on if a title is blank or collides with another. | [optional] 
**target** | [**TriggerCustomEffectBlockTarget**](TriggerCustomEffectBlockTarget.md) |  | 
**onError** | **{String: [Object]}** | Named error handlers evaluated when a specific error occurs. | [optional] 


