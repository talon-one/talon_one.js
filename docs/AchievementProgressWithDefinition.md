# TalonOne.AchievementProgressWithDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the achievement. | 
**progress** | **Number** | The current progress of the customer in the achievement. | 
**startDate** | **Date** | Timestamp at which the customer started the achievement. | [optional] 
**completionDate** | **Date** | Timestamp at which point the customer completed the achievement. | [optional] 
**endDate** | **Date** | Timestamp at which point the achievement ends and resets for the customer. | [optional] 
**achievementId** | **Number** | The internal ID of the achievement. | 
**name** | **String** | The internal name of the achievement used in API requests.  | 
**title** | **String** | The display name of the achievement in the Campaign Manager. | 
**description** | **String** | The description of the achievement in the Campaign Manager. | 
**campaignId** | **Number** | The ID of the campaign the achievement belongs to. | 
**target** | **Number** | The required number of actions or the transactional milestone to complete the achievement. | [optional] 
**achievementRecurrencePolicy** | **String** | The policy that determines if and how the achievement recurs. - &#x60;no_recurrence&#x60;: The achievement can be completed only once. - &#x60;on_expiration&#x60;: The achievement resets after it expires and becomes available again. - &#x60;on_completion&#x60;: When the customer progress status reaches &#x60;completed&#x60;, the achievement resets and becomes available again.  | 
**achievementActivationPolicy** | **String** | The policy that determines how the achievement starts, ends, or resets. - &#x60;user_action&#x60;: The achievement ends or resets relative to when the customer started the achievement. - &#x60;fixed_schedule&#x60;: The achievement starts, ends, or resets for all customers following a fixed schedule.  | 
**achievementFixedStartDate** | **Date** | The achievement&#39;s start date when &#x60;achievementActivationPolicy&#x60; is equal to &#x60;fixed_schedule&#x60;.  **Note:** It is an RFC3339 timestamp string.  | [optional] 
**achievementEndDate** | **Date** | The achievement&#39;s end date. If defined, customers cannot participate in the achievement after this date.  **Note:** It is an RFC3339 timestamp string.  | [optional] 
**achievementAllowRollbackAfterCompletion** | **Boolean** | When &#x60;true&#x60;, customer progress can be rolled back in completed achievements. | [optional] 



## Enum: StatusEnum


* `inprogress` (value: `"inprogress"`)

* `completed` (value: `"completed"`)

* `expired` (value: `"expired"`)

* `not_started` (value: `"not_started"`)





## Enum: AchievementRecurrencePolicyEnum


* `no_recurrence` (value: `"no_recurrence"`)

* `on_expiration` (value: `"on_expiration"`)

* `on_completion` (value: `"on_completion"`)





## Enum: AchievementActivationPolicyEnum


* `user_action` (value: `"user_action"`)

* `fixed_schedule` (value: `"fixed_schedule"`)




