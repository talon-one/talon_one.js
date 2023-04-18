# TalonOne.CampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**userId** | **Number** | The ID of the user associated with this entity. | 
**name** | **String** | The campaign template name. | 
**description** | **String** | Customer-facing text that explains the objective of the template. | 
**instructions** | **String** | Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign. | 
**campaignAttributes** | [**Object**](.md) | The campaign attributes that campaigns created from this template will have by default. | [optional] 
**couponAttributes** | [**Object**](.md) | The campaign attributes that coupons created from this template will have by default. | [optional] 
**state** | **String** | Only campaign templates in &#39;available&#39; state may be used to create campaigns. | 
**activeRulesetId** | **Number** | The ID of the ruleset this campaign template will use. | [optional] 
**tags** | **[String]** | A list of tags for the campaign template. | [optional] 
**features** | **[String]** | A list of features for the campaign template. | [optional] 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[TemplateLimitConfig]**](TemplateLimitConfig.md) | The set of limits that operate for this campaign template. | [optional] 
**templateParams** | [**[CampaignTemplateParams]**](CampaignTemplateParams.md) | Fields which can be used to replace values in a rule. | [optional] 
**applicationsIds** | **[Number]** | A list of IDs of the Applications that are subscribed to this campaign template. | 
**campaignCollections** | [**[CampaignTemplateCollection]**](CampaignTemplateCollection.md) | The campaign collections from the blueprint campaign for the template. | [optional] 
**defaultCampaignGroupId** | **Number** | The default campaign group ID. | [optional] 
**updated** | **Date** | Timestamp of the most recent update to the campaign template or any of its elements. | [optional] 
**updatedBy** | **String** | Name of the user who last updated this campaign template, if available. | [optional] 
**validApplicationIds** | **[Number]** | The IDs of the Applications that are related to this entity. | 



## Enum: StateEnum


* `draft` (value: `"draft"`)

* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)





## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)

* `strikethrough` (value: `"strikethrough"`)




