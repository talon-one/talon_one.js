# TalonOne.RewardWithUnlocks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique ID of the reward. | 
**integrationId** | **String** | A unique identifier used to reference the reward in API integrations. | 
**name** | **String** | The customer-facing name of the reward. | 
**description** | **String** | Customer-facing description of the reward. | [optional] 
**rule** | [**RuleMetadata**](RuleMetadata.md) |  | 
**unlocked** | [**[CustomerReward]**](CustomerReward.md) | The customer profile&#39;s unlocks of this reward that are not yet &#x60;used&#x60;. | [optional] 


