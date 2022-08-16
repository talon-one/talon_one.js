# TalonOne.Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**campaignGroupID** | **Number** | The ID of the [Campaign Group](https://docs.talon.one/docs/product/account/managing-campaign-groups/) this role was created for.  | [optional] 
**name** | **String** | Name of the role. | 
**description** | **String** | Description of the role. | [optional] 
**members** | **[Number]** | A list of user identifiers assigned to this role. | [optional] 
**acl** | [**Object**](.md) | Role ACL Policy. | 


