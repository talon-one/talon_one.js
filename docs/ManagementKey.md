# TalonOne.ManagementKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name for management key. | 
**expiryDate** | **Date** | The date the management key expires. | 
**endpoints** | [**[Endpoint]**](Endpoint.md) | The list of endpoints that can be accessed with the key | 
**allowedApplicationIds** | **[Number]** | A list of Application IDs that you can access with the management key. An empty or missing list means the management key can be used for all Applications in the account.  | [optional] 
**id** | **Number** | ID of the management key. | 
**createdBy** | **Number** | ID of the user who created it. | 
**accountID** | **Number** | ID of account the key is used for. | 
**created** | **Date** | The date the management key was created. | 


