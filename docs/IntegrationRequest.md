# TalonOne.IntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerSession** | [**NewCustomerSessionV2**](NewCustomerSessionV2.md) |  | 
**responseContent** | **[String]** | Extends the response with the chosen data entities. Use this property to get as much data as you need in one _Update customer session_ request instead of sending extra requests to other endpoints.  | [optional] 



## Enum: [ResponseContentEnum]


* `customerSession` (value: `"customerSession"`)

* `customerProfile` (value: `"customerProfile"`)

* `coupons` (value: `"coupons"`)

* `triggeredCampaigns` (value: `"triggeredCampaigns"`)

* `referral` (value: `"referral"`)

* `loyalty` (value: `"loyalty"`)

* `event` (value: `"event"`)

* `awardedGiveaways` (value: `"awardedGiveaways"`)

* `ruleFailureReasons` (value: `"ruleFailureReasons"`)

* `previousReturns` (value: `"previousReturns"`)




