# TalonOne.Revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**activateAt** | **Date** | Timestamp when the revision will be activated. | [optional] 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**campaignId** | **Number** | The ID of the campaign that the revision was created from. | 
**created** | **Date** | Timestamp when the revision was created. | 
**createdBy** | **Number** | The ID of the user who created this revision. | 
**activatedAt** | **Date** | Timestamp when this revision was activated. | [optional] 
**activatedBy** | **Number** | The ID of the user who activated this revision. | [optional] 
**currentVersion** | [**RevisionVersion**](RevisionVersion.md) |  | [optional] 


