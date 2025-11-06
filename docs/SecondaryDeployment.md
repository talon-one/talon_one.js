# TalonOne.SecondaryDeployment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**name** | **String** | The name of the deployment. Used as subdomain, e.g. experimental.your-company.europe-west1.talon.one | 
**userId** | **Number** | The ID of the user who created the deployment. | 
**status** | **String** | The status of the deployment. | 
**createdAt** | **Date** | Timestamp when the deployment was created. | 
**activeAt** | **Date** | Timestamp when the deployment became active. | [optional] 
**failedAt** | **Date** | Timestamp when the deployment failed. | [optional] 
**deletedAt** | **Date** | Timestamp when the deployment was deleted. | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `active` (value: `"active"`)

* `failed` (value: `"failed"`)

* `deleted` (value: `"deleted"`)




