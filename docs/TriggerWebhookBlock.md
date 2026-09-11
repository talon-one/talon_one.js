# TalonOne.TriggerWebhookBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**webhook** | [**TriggerWebhookBlockWebhook**](TriggerWebhookBlockWebhook.md) |  | 
**params** | [**Object**](.md) | The webhook&#39;s parameters, in configured order. Each property name is the parameter&#39;s title, lowercased with spaces replaced by underscores (for example, &#x60;Order ID&#x60; becomes &#x60;order_id&#x60;); falls back to &#x60;param_0&#x60;, &#x60;param_1&#x60;, and so on if a title is blank or collides with another. | [optional] 
**onError** | **{String: [Object]}** | Named error handlers evaluated when a specific error occurs. | [optional] 


