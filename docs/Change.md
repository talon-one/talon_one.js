# TalonOne.Change

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**userId** | **Number** | The ID of the user associated with this entity. | 
**applicationId** | **Number** | ID of application associated with change. | [optional] 
**entity** | **String** | API endpoint on which the change was initiated. | 
**old** | [**Object**](.md) | Resource before the change occurred. | [optional] 
**_new** | [**Object**](.md) | Resource after the change occurred. | [optional] 
**managementKeyId** | **Number** | ID of management key used to perform changes. | [optional] 


