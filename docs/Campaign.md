# TalonOne.Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**userId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | A user-facing name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | 
**startTime** | **Date** | Timestamp when the campaign will become active. | [optional] 
**endTime** | **Date** | Timestamp the campaign will become inactive. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**state** | **String** | A disabled or archived campaign is not evaluated for rules or coupons.  | [default to &#39;enabled&#39;]
**activeRulesetId** | **Number** | [ID of Ruleset](https://docs.talon.one/management-api/#operation/getRulesets) this campaign applies on customer session evaluation.  | [optional] 
**tags** | **[String]** | A list of tags for the campaign. | 
**features** | **[String]** | The features enabled in this campaign. | 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/) for this campaign.  | 
**campaignGroups** | **[Number]** | The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/managing-campaign-groups/) this campaign belongs to.  | [optional] 
**couponRedemptionCount** | **Number** | Number of coupons redeemed in the campaign. | [optional] 
**referralRedemptionCount** | **Number** | Number of referral codes redeemed in the campaign. | [optional] 
**discountCount** | **Number** | Total amount of discounts redeemed in the campaign. | [optional] 
**discountEffectCount** | **Number** | Total number of times discounts were redeemed in this campaign. | [optional] 
**couponCreationCount** | **Number** | Total number of coupons created by rules in this campaign. | [optional] 
**customEffectCount** | **Number** | Total number of custom effects triggered by rules in this campaign. | [optional] 
**referralCreationCount** | **Number** | Total number of referrals created by rules in this campaign. | [optional] 
**addFreeItemEffectCount** | **Number** | Total number of times triggering add free item effext is allowed in this campaign. | [optional] 
**awardedGiveawaysCount** | **Number** | Total number of giveaways awarded by rules in this campaign. | [optional] 
**createdLoyaltyPointsCount** | **Number** | Total number of loyalty points created by rules in this campaign. | [optional] 
**createdLoyaltyPointsEffectCount** | **Number** | Total number of loyalty point creation effects triggered by rules in this campaign. | [optional] 
**redeemedLoyaltyPointsCount** | **Number** | Total number of loyalty points redeemed by rules in this campaign. | [optional] 
**redeemedLoyaltyPointsEffectCount** | **Number** | Total number of loyalty point redemption effects triggered by rules in this campaign. | [optional] 
**callApiEffectCount** | **Number** | Total number of webhook triggered by rules in this campaign. | [optional] 
**lastActivity** | **Date** | Timestamp of the most recent event received by this campaign. | [optional] 
**updated** | **Date** | Timestamp of the most recent update to the campaign&#39;s property. Updates to external entities used in this campaign are **not** registered by this property, such as collection or coupon updates.  | [optional] 
**createdBy** | **String** | Name of the user who created this campaign if available. | [optional] 
**updatedBy** | **String** | Name of the user who last updated this campaign if available. | [optional] 
**templateId** | **Number** | The ID of the Campaign Template this Campaign was created from. | [optional] 



## Enum: StateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)





## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)




