# TalononeApi.InlineResponse2001Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | This campaign&#39;s ID. Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**userId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | A friendly name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | 
**startTime** | **Date** | Datetime when the campaign will become active. | [optional] 
**endTime** | **Date** | Datetime when the campaign will become in-active. | [optional] 
**attributes** | **Object** | Arbitrary properties associated with this campaign | [optional] 
**state** | **String** | A disabled or archived campaign is not evaluated for rules or coupons.  | [default to &#39;enabled&#39;]
**activeRulesetId** | **Number** | ID of Ruleset this campaign applies on customer session evaluation. | [optional] 
**tags** | **[String]** | A list of tags for the campaign. | 
**features** | **[String]** | A list of features for the campaign. | 
**couponSettings** | [**InlineResponse2001CouponSettings**](InlineResponse2001CouponSettings.md) |  | [optional] 
**referralSettings** | [**InlineResponse2001CouponSettings**](InlineResponse2001CouponSettings.md) |  | [optional] 
**limits** | [**[InlineResponse2001Limits]**](InlineResponse2001Limits.md) | The set of limits that will operate for this campaign | 
**couponRedemptionCount** | **Number** | Number of coupons redeemed in the campaign. | [optional] 
**referralRedemptionCount** | **Number** | Number of referral codes redeemed in the campaign. | [optional] 
**discountCount** | **Number** | Total amount of discounts redeemed in the campaign. | [optional] 
**lastActivity** | **Date** | Timestamp of the most recent event received by this campaign. | [optional] 
**updated** | **Date** | Timestamp of the most recent update to the campaign or any of its elements. | [optional] 
**createdBy** | **String** | Name of the user who created this campaign if available. | [optional] 
**updatedBy** | **String** | Name of the user who last updated this campaign if available. | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `enabled` (value: `"enabled"`)

* `disabled` (value: `"disabled"`)

* `archived` (value: `"archived"`)




<a name="[FeaturesEnum]"></a>
## Enum: [FeaturesEnum]


* `coupons` (value: `"coupons"`)

* `referrals` (value: `"referrals"`)

* `loyalty` (value: `"loyalty"`)




