# TalonOne.ModelReturn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**returnedCartItems** | [**[ReturnedCartItem]**](ReturnedCartItem.md) | List of cart items to be returned. | 
**eventId** | **Number** | The event ID of that was generated for this return. | 
**sessionId** | **Number** | The internal ID of the session this return was requested on. | 
**sessionIntegrationId** | **String** | The integration ID of the session this return was requested on. | 
**profileId** | **Number** | The internal ID of the profile this return was requested on. | [optional] 
**profileIntegrationId** | **String** | The integration ID of the profile this return was requested on. | [optional] 
**createdBy** | **Number** | ID of the user who requested this return. | [optional] 


