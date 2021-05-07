# TalonOne.UpdateCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A friendly name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | [optional] 
**startTime** | **Date** | Datetime when the campaign will become active. | [optional] 
**endTime** | **Date** | Datetime when the campaign will become in-active. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign | [optional] 
**state** | **String** | A disabled or archived campaign is not evaluated for rules or coupons.  | [optional] [default to &#39;enabled&#39;]
**activeRulesetId** | **Number** | ID of Ruleset this campaign applies on customer session evaluation. | [optional] 
**tags** | **[String]** | A list of tags for the campaign. | 
**features** | **[String]** | A list of features for the campaign. | 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | The set of limits that will operate for this campaign | 
**campaignGroups** | **[Number]** | The IDs of the campaign groups that own this entity. | [optional] 



## Enum: StateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)





## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)




