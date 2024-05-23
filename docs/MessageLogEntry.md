# TalonOne.MessageLogEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the message. | 
**service** | **String** | Name of the service that generated the log entry. | 
**changeType** | **String** | Type of change that triggered the notification. | [optional] 
**notificationId** | **Number** | ID of the notification. | [optional] 
**notificationName** | **String** | The name of the notification. | [optional] 
**request** | [**MessageLogRequest**](MessageLogRequest.md) |  | [optional] 
**response** | [**MessageLogResponse**](MessageLogResponse.md) |  | [optional] 
**createdAt** | **Date** | Timestamp when the log entry was created. | 
**entityType** | **String** | The entity type the log is related to.  | [optional] 
**url** | **String** | The target URL of the request. | [optional] 
**applicationId** | **Number** | Identifier of the Application. | [optional] 
**loyaltyProgramId** | **Number** | Identifier of the loyalty program. | [optional] 



## Enum: EntityTypeEnum


* `application` (value: `"application"`)

* `loyalty_program` (value: `"loyalty_program"`)

* `webhook` (value: `"webhook"`)




