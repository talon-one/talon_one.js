# TalonOne.User

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
**policy** | [**Object**](.md) | User ACL Policy | 
**latestFeedTimestamp** | **Date** | Latest timestamp the user has been notified for feed. | [optional] 
**roles** | **[Number]** | Contains a list of all roles the user is a member of | [optional] 
**applicationNotificationSubscriptions** | [**Object**](.md) |  | [optional] 
**authMethod** | **String** | The Authentication method for this user | [optional] 



## Enum: StateEnum


* `invited` (value: `"invited"`)

* `active` (value: `"active"`)

* `deactivated` (value: `"deactivated"`)




