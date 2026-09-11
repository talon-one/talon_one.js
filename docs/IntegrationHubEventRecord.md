# TalonOne.IntegrationHubEventRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the event record. | 
**flowId** | **Number** | ID of the integration hub flow. | 
**integrationName** | **String** | Name of the integration. | [optional] 
**instanceName** | **String** | Name of the integration instance. | [optional] 
**eventType** | [**IntegrationHubEventType**](IntegrationHubEventType.md) |  | 
**publishedAt** | **Date** | Timestamp when the event was published. | 
**processedAt** | **Date** | Timestamp when the event was processed. | [optional] 
**deliveredAt** | **Date** | Timestamp when the event was delivered. | [optional] 
**scheduledTo** | **Date** | Timestamp after which the event is scheduled to be processed. | 
**retry** | **Number** | Number of delivery retries attempted. | 
**payload** | **String** | The event payload as a formatted JSON string. | 


