# TalonOne.IntegrationHubFlowConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** |  | 
**workerCount** | **Number** | Number of IntegrationHub workers to run in parallel for this flow (maximum 500). | [optional] [default to 10]
**maxEventsPerMessage** | **Number** | Maximum number of events to send in a single message to IntegrationHub. | [optional] [default to 1000]
**maxRetries** | **Number** | Maximum number of retries for a IntegrationHub event before it is ignored. | [optional] [default to 10]


