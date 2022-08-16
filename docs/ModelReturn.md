# TalonOne.ModelReturn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**returnedCartItems** | [**[ReturnedCartItem]**](ReturnedCartItem.md) | List of cart items to be returned. | 
**eventId** | **Number** | The event ID of that was generated for this return. | 
**sessionId** | **Number** | The internal ID of the session this return was requested on. | 
**sessionIntegrationId** | **String** | The integration ID of the session this return was requested on. | 
**profileId** | **Number** | The internal ID of the profile this return was requested on. | [optional] 
**profileIntegrationId** | **String** | The integration ID of the profile this return was requested on. | [optional] 
**createdBy** | **Number** | ID of the user who requested this return. | [optional] 


