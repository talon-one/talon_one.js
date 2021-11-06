# TalonOne.NewCampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The campaign template name. | 
**description** | **String** | Customer-facing text that explains the objective of the template. | 
**instructions** | **String** | Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign. | 
**campaignAttributes** | [**Object**](.md) | The Campaign Attributes that Campaigns created from this template will have by default. | [optional] 
**couponAttributes** | [**Object**](.md) | The Campaign Attributes that Coupons created from this template will have by default. | [optional] 
**state** | **String** | Only Campaign Templates in &#39;available&#39; state may be used to create Campaigns. | 
**tags** | **[String]** | A list of tags for the campaign template. | [optional] 
**features** | **[String]** | A list of features for the campaign template. | [optional] 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[TemplateLimitConfig]**](TemplateLimitConfig.md) | The set of limits that will operate for this campaign template | [optional] 
**templateParams** | [**[CampaignTemplateParams]**](CampaignTemplateParams.md) | Template parameters are fields which can be used to replace values in a rule. | [optional] 



## Enum: StateEnum


* `draft` (value: `"draft"`)

* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)





## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)




