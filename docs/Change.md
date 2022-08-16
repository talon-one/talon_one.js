# TalonOne.Change

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**userId** | **Number** | The ID of the account that owns this entity. | 
**applicationId** | **Number** | ID of application associated with change. | [optional] 
**entity** | **String** | API endpoint on which the change was initiated. | 
**old** | [**Object**](.md) | Resource before the change occurred. | [optional] 
**_new** | [**Object**](.md) | Resource after the change occurred. | [optional] 


