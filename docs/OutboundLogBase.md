# TalonOne.OutboundLogBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | UUID of the outbound message. | 
**notificationId** | **Number** | ID of the notification that produced the outbound request. | [optional] 
**notificationName** | **String** | Name of the notification that produced the outbound request. | [optional] 
**webhookId** | **Number** | ID of the webhook that produced the outbound request. | [optional] 
**webhookName** | **String** | The name of the webhook that produced the outbound request. | [optional] 
**notificationType** | **String** | Type of notification that produced the outbound request. | 
**applicationId** | **Number** | ID of the Application associated with the outbound request. | [optional] 
**loyaltyProgramId** | **Number** | ID of the loyalty program associated with the outbound request. | [optional] 
**request** | [**OutboundLogRequest**](OutboundLogRequest.md) |  | [optional] 


