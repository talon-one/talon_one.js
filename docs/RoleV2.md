# TalonOne.RoleV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**modified** | **Date** | The time this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | Name of the role. | [optional] 
**description** | **String** | Description of the role. | [optional] 
**isAdmin** | **Boolean** | Indicates whether the role grants admin permissions. | [optional] 
**permissions** | [**RoleV2Permissions**](RoleV2Permissions.md) |  | [optional] 
**members** | **[Number]** | A list of user identifiers the role is assigned to. | [optional] 


