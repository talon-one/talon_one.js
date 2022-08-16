# TalonOne.ReturnIntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_return** | [**NewReturn**](NewReturn.md) |  | 
**responseContent** | **[String]** | Optional list of extra data that you want to get in the response. Use this property to get as much data as you need in one request instead of sending extra requests to other endpoints.  **Note:** &#x60;ruleFailureReasons&#x60; is always part of the response when the [Application type](https://docs.talon.one/docs/product/applications/overview#application-types) is &#x60;sandbox&#x60;.  | [optional] 



## Enum: [ResponseContentEnum]


* `customerSession` (value: `"customerSession"`)

* `customerProfile` (value: `"customerProfile"`)

* `coupons` (value: `"coupons"`)

* `triggeredCampaigns` (value: `"triggeredCampaigns"`)

* `referral` (value: `"referral"`)

* `loyalty` (value: `"loyalty"`)

* `event` (value: `"event"`)

* `previousReturns` (value: `"previousReturns"`)




