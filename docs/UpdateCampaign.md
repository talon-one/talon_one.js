# TalonOne.UpdateCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A user-facing name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | [optional] 
**startTime** | **Date** | Timestamp when the campaign will become active. | [optional] 
**endTime** | **Date** | Timestamp when the campaign will become inactive. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**state** | **String** | A disabled or archived campaign is not evaluated for rules or coupons.  | [optional] [default to &#39;enabled&#39;]
**activeRulesetId** | **Number** | [ID of Ruleset](https://docs.talon.one/management-api#tag/Campaigns/operation/getRulesets) this campaign applies on customer session evaluation.  | [optional] 
**tags** | **[String]** | A list of tags for the campaign. | 
**reevaluateOnReturn** | **Boolean** | Indicates whether this campaign should be reevaluated when a customer returns an item. | [optional] 
**features** | **[String]** | A list of features for the campaign. | 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**referralSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | The set of limits that will operate for this campaign. | 
**campaignGroups** | **[Number]** | The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/account-settings/managing-campaign-groups) this campaign belongs to.  | [optional] 
**evaluationGroupId** | **Number** | The ID of the campaign evaluation group the campaign belongs to. | [optional] 
**type** | **String** | The campaign type. Possible type values:   - &#x60;cartItem&#x60;: Type of campaign that can apply effects only to cart items.   - &#x60;advanced&#x60;: Type of campaign that can apply effects to customer sessions and cart items.  | [optional] [default to &#39;advanced&#39;]
**linkedStoreIds** | **[Number]** | A list of store IDs that you want to link to the campaign.  &gt; [!note] **Note** &gt; - Campaigns with linked store IDs will only be evaluated when there is a &gt;   [customer session update](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) &gt;   that references a linked store. &gt; - If you linked stores to the campaign by uploading a CSV file, you cannot use this property and it should be empty. &gt; - Use of this property is limited to 50 stores. To link more than 50 stores, upload them via a CSV file.  | [optional] 
**couponAttributes** | [**Object**](.md) | Arbitrary properties associated with coupons in this campaign. | [optional] 



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

* `achievements` (value: `"achievements"`)





## Enum: TypeEnum


* `cartItem` (value: `"cartItem"`)

* `advanced` (value: `"advanced"`)




