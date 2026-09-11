# TalonOne.StartAchievementProgressEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievementId** | **Number** | The ID of the achievement. | 
**achievementName** | **String** | The name of the achievement. | 
**progressTrackerId** | **Number** | The ID of the customer&#39;s progress tracker for this achievement.  For [on-completion achievements](https://docs.talon.one/docs/product/campaigns/achievements/overview#recurring-on-completion-achievements), this effect generates a unique ID for each iteration. | [optional] 
**target** | **Number** | The target value to complete the achievement. | 
**startDate** | **Date** | Timestamp at which the customer&#39;s progress started. | 
**endDate** | **Date** | Timestamp at which this progress period ends.  Only returned for achievements that have a fixed end date. [On-completion achievements](https://docs.talon.one/docs/product/campaigns/achievements/overview#recurring-on-completion-achievements) have no end date. | [optional] 


