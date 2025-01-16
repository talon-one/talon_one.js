# TalonOne.LimitConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The limitable action to which this limit applies. For example: - &#x60;setDiscount&#x60; - &#x60;setDiscountEffect&#x60; - &#x60;redeemCoupon&#x60; - &#x60;createCoupon&#x60;  | 
**limit** | **Number** | The value to set for the limit. | 
**period** | **String** | The period on which the budget limit recurs. | [optional] 
**entities** | **[String]** | The entity that this limit applies to. | 



## Enum: PeriodEnum


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `yearly` (value: `"yearly"`)





## Enum: [EntitiesEnum]


* `Coupon` (value: `"Coupon"`)

* `Referral` (value: `"Referral"`)

* `Profile` (value: `"Profile"`)

* `Identifier` (value: `"Identifier"`)

* `Store` (value: `"Store"`)

* `Session` (value: `"Session"`)




