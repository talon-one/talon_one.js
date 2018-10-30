# TalononeApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**email** | **String** | The email address associated with your account. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**inviteToken** | **String** | Invite token, empty if the user as already accepted their invite. | 
**state** | **String** | Current user state. | 
**name** | **String** | Full name | 
**lastActivity** | **Date** | Last time user used management API | [optional] 
**policy** | **{String: [String]}** | Access policy for the user as json object. | 
**releaseUpdate** | **Boolean** | Update the user via email | 
**latestFeature** | **String** | Latest feature the user has been notified. | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `invited` (value: `"invited"`)

* `active` (value: `"active"`)

* `deactivated` (value: `"deactivated"`)




