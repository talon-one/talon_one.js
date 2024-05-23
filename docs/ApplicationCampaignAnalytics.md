# TalonOne.ApplicationCampaignAnalytics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **Date** | The start of the aggregation time frame in UTC. | [optional] 
**endTime** | **Date** | The end of the aggregation time frame in UTC. | [optional] 
**campaignId** | **Number** | The ID of the campaign. | [optional] 
**campaignName** | **String** | The name of the campaign. | [optional] 
**campaignTags** | **[String]** | A list of tags for the campaign. | [optional] 
**campaignState** | **String** | The state of the campaign.  **Note:** A disabled or archived campaign is not evaluated for rules or coupons.  | [optional] [default to &#39;enabled&#39;]
**campaignActiveRulesetId** | **Number** | The [ID of the ruleset](https://docs.talon.one/management-api#operation/getRulesets) this campaign applies on customer session evaluation.  | [optional] 
**campaignStartTime** | **Date** | Date and time when the campaign becomes active. | [optional] 
**campaignEndTime** | **Date** | Date and time when the campaign becomes inactive. | [optional] 
**totalRevenue** | [**ApplicationCampaignAnalyticsTotalRevenue**](ApplicationCampaignAnalyticsTotalRevenue.md) |  | [optional] 
**sessionsCount** | [**ApplicationCampaignAnalyticsSessionsCount**](ApplicationCampaignAnalyticsSessionsCount.md) |  | [optional] 
**avgItemsPerSession** | [**ApplicationCampaignAnalyticsAvgItemsPerSession**](ApplicationCampaignAnalyticsAvgItemsPerSession.md) |  | [optional] 
**avgSessionValue** | [**ApplicationCampaignAnalyticsAvgSessionValue**](ApplicationCampaignAnalyticsAvgSessionValue.md) |  | [optional] 
**totalDiscounts** | [**ApplicationCampaignAnalyticsTotalDiscounts**](ApplicationCampaignAnalyticsTotalDiscounts.md) |  | [optional] 
**couponsCount** | [**ApplicationCampaignAnalyticsCouponsCount**](ApplicationCampaignAnalyticsCouponsCount.md) |  | [optional] 



## Enum: CampaignStateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)




