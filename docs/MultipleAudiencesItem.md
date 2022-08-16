# TalonOne.MultipleAudiencesItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**name** | **String** | The human-friendly display name for this audience. | 
**integrationId** | **String** | The ID of this audience in the third-party integration. | 
**status** | **String** | Indicates whether the audience is new, updated or unmodified by the request.  | 



## Enum: StatusEnum


* `unmodified` (value: `"unmodified"`)

* `updated` (value: `"updated"`)

* `new` (value: `"new"`)




