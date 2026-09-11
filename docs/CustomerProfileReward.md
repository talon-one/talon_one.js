# TalonOne.CustomerProfileReward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the customer reward instance. A customer profile can have multiple instances of the same reward. | 
**integrationId** | **String** | The integration ID of the customer reward instance. | 
**rewardId** | **Number** | The ID of the reward this instance belongs to. | 
**rewardIntegrationId** | **String** | The integration ID of the reward this instance belongs to. | 
**rewardName** | **String** | The name of the reward. | 
**description** | **String** | The customer-facing description of the reward. | [optional] 
**rule** | [**RuleMetadata**](RuleMetadata.md) |  | [optional] 
**status** | **String** | The status of the customer reward: - &#x60;unlocked&#x60;: The reward is available for use. - &#x60;used&#x60;: The reward has been used.  | 
**unlockedAt** | **Date** | The date and time when the reward was unlocked. | 
**unlockedByProfileIntegrationId** | **String** | The integration ID of the customer profile that unlocked the reward.   For rewards unlocked with a loyalty card, this can be any customer profile  linked to that loyalty card.  | [optional] 
**usedAt** | **Date** | The date and time when the reward was used. | [optional] 
**usedByProfileIntegrationId** | **String** | The integration ID of the customer profile that used the reward.   For rewards unlocked with a loyalty card, this can be any customer profile  linked to that loyalty card.   Only returned when the reward has been used.  | [optional] 
**loyaltyProgramId** | **Number** | The ID of the loyalty program that the loyalty card belongs to. Only returned for rewards unlocked with a loyalty card. | [optional] 
**loyaltyCardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 



## Enum: StatusEnum


* `unlocked` (value: `"unlocked"`)

* `used` (value: `"used"`)




