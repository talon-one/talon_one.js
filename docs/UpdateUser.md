# TalonOne.UpdateUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the user. | [optional] 
**state** | **String** | The state of the user.   - &#x60;deactivated&#x60;: The user has been deactivated.   - &#x60;active&#x60;: The user is active.  **Note**: Only &#x60;admin&#x60; users can update the state of another user.  | [optional] 
**isAdmin** | **Boolean** | Indicates whether the user is an &#x60;admin&#x60;. | [optional] 
**policy** | **String** | Indicates the access level of the user. | [optional] 
**roles** | **[Number]** | A list of the IDs of the roles assigned to the user.  **Note**: Use the [List roles](https://docs.talon.one/management-api#tag/Roles/operation/getAllRoles) endpoint to find the ID of a role.  | [optional] 
**applicationNotificationSubscriptions** | [**Object**](.md) | Application notifications that the user is subscribed to. | [optional] 



## Enum: StateEnum


* `deactivated` (value: `"deactivated"`)

* `active` (value: `"active"`)




