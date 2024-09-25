# TalonOne.ApplicationCampaignAnalytics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **Date** | The start of the aggregation time frame in UTC. | 
**endTime** | **Date** | The end of the aggregation time frame in UTC. | 
**campaignId** | **Number** | The ID of the campaign. | 
**campaignName** | **String** | The name of the campaign. | 
**campaignTags** | **[String]** | A list of tags for the campaign. | 
**campaignState** | **String** | The state of the campaign.  **Note:** A disabled or archived campaign is not evaluated for rules or coupons.  | 
**totalRevenue** | [**AnalyticsDataPointWithTrendAndInfluencedRate**](AnalyticsDataPointWithTrendAndInfluencedRate.md) |  | [optional] 
**sessionsCount** | [**AnalyticsDataPointWithTrendAndInfluencedRate**](AnalyticsDataPointWithTrendAndInfluencedRate.md) |  | [optional] 
**avgItemsPerSession** | [**AnalyticsDataPointWithTrendAndUplift**](AnalyticsDataPointWithTrendAndUplift.md) |  | [optional] 
**avgSessionValue** | [**AnalyticsDataPointWithTrendAndUplift**](AnalyticsDataPointWithTrendAndUplift.md) |  | [optional] 
**totalDiscounts** | [**AnalyticsDataPointWithTrend**](AnalyticsDataPointWithTrend.md) |  | [optional] 
**couponsCount** | [**AnalyticsDataPointWithTrend**](AnalyticsDataPointWithTrend.md) |  | [optional] 



## Enum: CampaignStateEnum


* `expired` (value: `"expired"`)

* `scheduled` (value: `"scheduled"`)

* `running` (value: `"running"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)




