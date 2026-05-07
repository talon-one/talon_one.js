# TalonOne.CampaignRulesetChangedNotificationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | The type of the event. Can be one of the following: [&#39;campaign_state_changed&#39;, &#39;campaign_ruleset_changed&#39;, &#39;campaign_edited&#39;, &#39;campaign_created&#39;, &#39;campaign_deleted&#39;]  | 
**campaign** | [**Campaign**](Campaign.md) |  | 
**oldRuleset** | [**Ruleset**](Ruleset.md) |  | [optional] 
**oldPlaceholders** | [**[PlaceholderDetails]**](PlaceholderDetails.md) | The previous details of the placeholders before the ruleset was changed. | [optional] 
**ruleset** | [**Ruleset**](Ruleset.md) |  | [optional] 
**placeholders** | [**[PlaceholderDetails]**](PlaceholderDetails.md) | The current details of the [placeholders](https://docs.talon.one/docs/product/campaigns/templates/create-templates#use-placeholders) in the campaign. | [optional] 


