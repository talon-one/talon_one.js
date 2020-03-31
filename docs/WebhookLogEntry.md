# TalonOne.WebhookLogEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID reference of the webhook request | 
**integrationRequestUuid** | **String** | UUID reference of the integration request linked to this webhook request | 
**webhookId** | **Number** | ID of the webhook that triggered the request | 
**applicationId** | **Number** | ID of the application that triggered the webhook | [optional] 
**url** | **String** | Target url of request | 
**request** | **String** | Request message | 
**response** | **String** | Response message | [optional] 
**status** | **Number** | HTTP status code of response | [optional] 
**requestTime** | **Date** | Timestamp of request | 
**responseTime** | **Date** | Timestamp of response | [optional] 


