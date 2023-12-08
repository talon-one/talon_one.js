# TalonOne.NewInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the user being invited. | [optional] 
**email** | **String** |  | 
**acl** | **String** | The &#x60;Access Control List&#x60; json defining the role of the user.  This represents the access control on the user level. Use one of the following: - normal user: &#x60;{\&quot;Role\&quot;: 0}&#x60; - admin: &#x60;{\&quot;Role\&quot;: 127}&#x60;  | [optional] 
**isAdmin** | **Boolean** | An indication of whether the user has admin permissions. We recommend using this flag over using the &#x60;acl&#x60; with value &#x60;{\&quot;Role\&quot;: 127}&#x60;.  | [optional] 
**roles** | **[Number]** | An array of role IDs to assign to the new user. | [optional] 


