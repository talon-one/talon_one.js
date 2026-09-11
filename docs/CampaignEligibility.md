# TalonOne.CampaignEligibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**id** | **Number** | Unique ID of Campaign. | 
**name** | **String** | The name of the campaign. | 
**description** | **String** | A detailed description of the campaign. | [optional] 
**startTime** | **Date** | Timestamp when the campaign will become active. | [optional] 
**endTime** | **Date** | Timestamp when the campaign will become inactive. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**state** | **String** | The state of the campaign.  | [default to &#39;enabled&#39;]
**tags** | **[String]** | A list of tags for the campaign. | 
**features** | **[String]** | The features enabled in this campaign. | 
**eligibility** | [**[CampaignEligibilityDetails]**](CampaignEligibilityDetails.md) | The customer&#39;s eligibility for each campaign in the current customer session. | 
**rules** | [**[RuleMetadataEligibility]**](RuleMetadataEligibility.md) | A list of rules containing customer-facing details of the rewards defined in the campaign. | 
**experiment** | [**CampaignEligibilityExperiment**](CampaignEligibilityExperiment.md) |  | [optional] 



## Enum: StateEnum


* `enabled` (value: `"enabled"`)





## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)

* `giveaways` (value: `"giveaways"`)

* `strikethrough` (value: `"strikethrough"`)

* `achievements` (value: `"achievements"`)

* `advancedEvents` (value: `"advancedEvents"`)




