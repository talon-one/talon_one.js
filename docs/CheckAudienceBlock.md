# TalonOne.CheckAudienceBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | An indicator of how the block compares its elements. | 
**profile** | **String** | The customer profile to check against the audience. &#x60;Current&#x60; targets the customer in the current session; &#x60;Advocate&#x60; targets the person who invited their friend via referral program. | 
**audience** | [**CheckAudienceBlockAudience**](CheckAudienceBlockAudience.md) |  | 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `member` (value: `"member"`)

* `not(member)` (value: `"not(member)"`)

* `justJoined` (value: `"justJoined"`)

* `justLeft` (value: `"justLeft"`)





## Enum: ProfileEnum


* `Current` (value: `"Current"`)

* `Advocate` (value: `"Advocate"`)




