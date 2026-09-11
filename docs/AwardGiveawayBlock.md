# TalonOne.AwardGiveawayBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**giveawayPool** | [**GiveawayPoolReference**](GiveawayPoolReference.md) |  | 
**profile** | **String** | The customer profile to award the giveaway to. &#x60;Current&#x60; targets the customer in the current session; &#x60;Advocate&#x60; targets the person who invited their friend via referral program. | 
**onFailure** | **[Object]** | Blocks evaluated when this block fails or returns false. | [optional] 
**onError** | **{String: [Object]}** | Named error handlers evaluated when a specific error occurs. | [optional] 



## Enum: ProfileEnum


* `Current` (value: `"Current"`)

* `Advocate` (value: `"Advocate"`)




