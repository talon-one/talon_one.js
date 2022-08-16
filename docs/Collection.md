# TalonOne.Collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**description** | **String** | A short description of the purpose of this collection. | [optional] 
**subscribedApplicationsIds** | **[Number]** | A list of the IDs of the Applications where this collection is enabled. | [optional] 
**name** | **String** | The name of this collection. | 
**modifiedBy** | **Number** | ID of the user who last updated this effect if available. | [optional] 
**createdBy** | **Number** | ID of the user who created this effect. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | [optional] 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | [optional] 
**payload** | **[String]** | The content of the collection. | [optional] 


