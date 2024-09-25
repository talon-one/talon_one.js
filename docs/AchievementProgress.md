# TalonOne.AchievementProgress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievementId** | **Number** | The internal ID of the achievement. | 
**name** | **String** | The internal name of the achievement used in API requests.  | 
**title** | **String** | The display name of the achievement in the Campaign Manager. | 
**description** | **String** | The description of the achievement in the Campaign Manager. | 
**campaignId** | **Number** | The ID of the campaign the achievement belongs to. | 
**status** | **String** | The status of the achievement. | 
**target** | **Number** | The required number of actions or the transactional milestone to complete the achievement. | [optional] 
**progress** | **Number** | The current progress of the customer in the achievement. | 
**startDate** | **Date** | Timestamp at which the customer started the achievement. | 
**completionDate** | **Date** | Timestamp at which point the customer completed the achievement. | [optional] 
**endDate** | **Date** | Timestamp at which point the achievement ends and resets for the customer. | 



## Enum: StatusEnum


* `inprogress` (value: `"inprogress"`)

* `completed` (value: `"completed"`)

* `expired` (value: `"expired"`)




