# TalonOne.IntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerSession** | [**NewCustomerSessionV2**](NewCustomerSessionV2.md) |  | 
**responseContent** | **[String]** | Optional list of requested information to be present on the response related to the customer session update.  **Note:** &#x60;ruleFailureReasons&#x60; is always part of the response when the Application type is &#x60;sandbox&#x60;.  | [optional] 



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




