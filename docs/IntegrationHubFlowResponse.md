# TalonOne.IntegrationHubFlowResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the integration hub flow. | 
**integrationName** | **String** | Name of the integration. | [optional] 
**instanceName** | **String** | Name of the integration instance. | [optional] 
**createdAt** | **Date** | Timestamp when the flow was created. | 
**disabledUntil** | **Date** | Timestamp until which the flow is disabled. Null when the flow is active. | [optional] 
**applicationId** | **Number** | ID of the application the flow is registered for. | [optional] 
**loyaltyProgramId** | **Number** | ID of the loyalty program the flow is registered for. | [optional] 
**eventType** | **String** | The event type we want to register a flow for. | 
**config** | [**IntegrationHubFlowConfigResponse**](IntegrationHubFlowConfigResponse.md) |  | 


