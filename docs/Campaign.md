# TalonOne.Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**userId** | **Number** | The ID of the user associated with this entity. | 
**name** | **String** | A user-facing name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | 
**startTime** | **Date** | Timestamp when the campaign will become active. | [optional] 
**endTime** | **Date** | Timestamp when the campaign will become inactive. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**state** | **String** | A disabled or archived campaign is not evaluated for rules or coupons.  | [default to &#39;enabled&#39;]
**activeRulesetId** | **Number** | [ID of Ruleset](https://docs.talon.one/management-api#operation/getRulesets) this campaign applies on customer session evaluation.  | [optional] 
**tags** | **[String]** | A list of tags for the campaign. | 
**features** | **[String]** | The features enabled in this campaign. | 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets) for this campaign.  | 
**campaignGroups** | **[Number]** | The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/managing-campaign-groups) this campaign belongs to.  | [optional] 
**evaluationGroupId** | **Number** | The ID of the campaign evaluation group the campaign belongs to. | [optional] 
**type** | **String** | The campaign type. Possible type values:   - &#x60;cartItem&#x60;: Type of campaign that can apply effects only to cart items.   - &#x60;advanced&#x60;: Type of campaign that can apply effects to customer sessions and cart items.  | [default to &#39;advanced&#39;]
**linkedStoreIds** | **[Number]** | A list of store IDs that you want to link to the campaign.  **Note:** Campaigns with linked store IDs will only be evaluated when there is a [customer session update](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) that references a linked store.  | [optional] 
**budgets** | [**[CampaignBudget]**](CampaignBudget.md) | A list of all the budgets that are defined by this campaign and their usage.  **Note:** Budgets that are not defined do not appear in this list and their usage is not counted until they are defined.  | 
**couponRedemptionCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Number of coupons redeemed in the campaign.  | [optional] 
**referralRedemptionCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Number of referral codes redeemed in the campaign.  | [optional] 
**discountCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total amount of discounts redeemed in the campaign.  | [optional] 
**discountEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of times discounts were redeemed in this campaign.  | [optional] 
**couponCreationCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of coupons created by rules in this campaign.  | [optional] 
**customEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of custom effects triggered by rules in this campaign.  | [optional] 
**referralCreationCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of referrals created by rules in this campaign.  | [optional] 
**addFreeItemEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of times the [add free item effect](https://docs.talon.one/docs/dev/integration-api/api-effects#addfreeitem) can be triggered in this campaign.  | [optional] 
**awardedGiveawaysCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of giveaways awarded by rules in this campaign.  | [optional] 
**createdLoyaltyPointsCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty points created by rules in this campaign.  | [optional] 
**createdLoyaltyPointsEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty point creation effects triggered by rules in this campaign.  | [optional] 
**redeemedLoyaltyPointsCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty points redeemed by rules in this campaign.  | [optional] 
**redeemedLoyaltyPointsEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty point redemption effects triggered by rules in this campaign.  | [optional] 
**callApiEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of webhooks triggered by rules in this campaign.  | [optional] 
**reservecouponEffectCount** | **Number** | This property is **deprecated**. The count should be available under *budgets* property. Total number of reserve coupon effects triggered by rules in this campaign.  | [optional] 
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

* `strikethrough` (value: `"strikethrough"`)





## Enum: TypeEnum


* `cartItem` (value: `"cartItem"`)

* `advanced` (value: `"advanced"`)




