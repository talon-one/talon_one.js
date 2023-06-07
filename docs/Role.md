# TalonOne.Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**modified** | **Date** | The time this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**campaignGroupID** | **Number** | The ID of the [Campaign Group](https://docs.talon.one/docs/product/account/account-settings/managing-campaign-groups) this role was created for.  | [optional] 
**name** | **String** | Name of the role. | 
**description** | **String** | Description of the role. | [optional] 
**members** | **[Number]** | A list of user identifiers assigned to this role. | [optional] 
**acl** | [**Object**](.md) | The &#x60;Access Control List&#x60; json defining the role of the user. This represents the access control on the user level. | 


