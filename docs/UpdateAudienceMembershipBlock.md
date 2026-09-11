# TalonOne.UpdateAudienceMembershipBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | The action to perform. | 
**profile** | **String** | The customer profile to add or remove from the audience. &#x60;Current&#x60; targets the customer in the current session; &#x60;Advocate&#x60; targets the person who invited their friend via referral program. | 
**audience** | [**UpdateAudienceMembershipBlockAudience**](UpdateAudienceMembershipBlockAudience.md) |  | 



## Enum: OperatorEnum


* `add` (value: `"add"`)

* `remove` (value: `"remove"`)





## Enum: ProfileEnum


* `Current` (value: `"Current"`)

* `Advocate` (value: `"Advocate"`)




