# TalonOne.RoleV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**modified** | **Date** | The time this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | Name of the role. | [optional] 
**description** | **String** | Description of the role. | [optional] 
**permissions** | [**RoleV2Permissions**](RoleV2Permissions.md) |  | [optional] 
**members** | **[Number]** | A list of user IDs the role is assigned to. | [optional] 
**isReadonly** | **Boolean** | Identifies if the role is read-only. For read-only roles, you can only assign or unassign users. You cannot edit any other properties, such as the name, description, or permissions. The &#39;isReadonly&#39; property cannot be set for new or existing roles. It is reserved for predefined roles, such as the Talon.One support role. | [optional] [default to false]


