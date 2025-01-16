# TalonOne.UpdateAchievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The internal name of the achievement used in API requests.  | [optional] 
**title** | **String** | The display name for the achievement in the Campaign Manager. | [optional] 
**description** | **String** | A description of the achievement. | [optional] 
**target** | **Number** | The required number of actions or the transactional milestone to complete the achievement. | [optional] 
**period** | **String** | The relative duration after which the achievement ends and resets for a particular customer profile.  | [optional] 
**periodEndOverride** | [**TimePoint**](TimePoint.md) |  | [optional] 
**recurrencePolicy** | **String** | The policy that determines if and how the achievement recurs. - &#x60;no_recurrence&#x60;: The achievement can be completed only once. - &#x60;on_expiration&#x60;: The achievement resets after it expires and becomes available again.  | [optional] 
**activationPolicy** | **String** | The policy that determines how the achievement starts, ends, or resets. - &#x60;user_action&#x60;: The achievement ends or resets relative to when the customer started the achievement. - &#x60;fixed_schedule&#x60;: The achievement starts, ends, or resets for all customers following a fixed schedule.  | [optional] 
**fixedStartDate** | **Date** | The achievement&#39;s start date when &#x60;activationPolicy&#x60; is set to &#x60;fixed_schedule&#x60;.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 
**endDate** | **Date** | The achievement&#39;s end date. If defined, customers cannot participate in the achievement after this date.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 



## Enum: RecurrencePolicyEnum


* `no_recurrence` (value: `"no_recurrence"`)

* `on_expiration` (value: `"on_expiration"`)





## Enum: ActivationPolicyEnum


* `user_action` (value: `"user_action"`)

* `fixed_schedule` (value: `"fixed_schedule"`)




