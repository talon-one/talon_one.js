# TalonOne.UpdateUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The email address associated with your account. | 
**name** | **String** | Your name. | [optional] 
**password** | **String** | Your old password. | [optional] 
**newPassword** | **String** | Your new password. | [optional] 
**policy** | **String** | a blob of acl json | [optional] 
**state** | **String** | New state (\&quot;deactivated\&quot; or \&quot;active\&quot;) for the user. Only usable by admins for the user. | [optional] 
**releaseUpdate** | **Boolean** | Update the user via email | [optional] 
**latestFeature** | **String** | The latest feature you&#39;ve been notified. | [optional] 
**roles** | **[Number]** | Update | [optional] 
**applicationNotificationSubscriptions** | **Object** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `deactivated` (value: `"deactivated"`)

* `active` (value: `"active"`)




