# TalonOne.NewRevisionVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A user-facing name for this campaign. | [optional] 
**startTime** | **Date** | Timestamp when the campaign will become active. | [optional] 
**endTime** | **Date** | Timestamp when the campaign will become inactive. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**description** | **String** | A detailed description of the campaign. | [optional] 
**activeRulesetId** | **Number** | The ID of the ruleset this campaign template will use. | [optional] 
**tags** | **[String]** | A list of tags for the campaign template. | [optional] 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | The set of limits that will operate for this campaign version. | [optional] 
**features** | **[String]** | A list of features for the campaign template. | [optional] 



## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)

* `strikethrough` (value: `"strikethrough"`)

* `achievements` (value: `"achievements"`)




