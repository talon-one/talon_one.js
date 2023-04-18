# TalonOne.UpdateUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The user name. | [optional] 
**policy** | **String** | The &#x60;Access Control List&#x60; json defining the role of the user. This represents the access control on the user level. | [optional] 
**state** | **String** | New state (\&quot;deactivated\&quot; or \&quot;active\&quot;) for the user. Only usable by admins for the user. | [optional] 
**roles** | **[Number]** | List of roles to assign to the user. | [optional] 
**applicationNotificationSubscriptions** | [**Object**](.md) |  | [optional] 



## Enum: StateEnum


* `deactivated` (value: `"deactivated"`)

* `active` (value: `"active"`)




