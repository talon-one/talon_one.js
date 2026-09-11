# TalonOne.ShowNotificationBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**notificationType** | **String** | The type of notification to display. | 
**title** | **String** | The notification heading shown to the customer. | 
**body** | **String** | The notification body text. Supports template placeholders (e.g. \&quot;{{$Session.Total}}\&quot;) evaluated at rule execution time. | [optional] 
**onFailure** | **[Object]** | Blocks evaluated when this block fails or returns false. | [optional] 
**onError** | **{String: [Object]}** | Named error handlers evaluated when a specific error occurs. | [optional] 


