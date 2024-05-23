# TalonOne.TalangAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **String** | The name of the entity of the attribute. | [optional] 
**name** | **String** | The attribute name that will be used in API requests and Talang. E.g. if &#x60;name &#x3D;&#x3D; \&quot;region\&quot;&#x60; then you would set the region attribute by including an &#x60;attributes.region&#x60; property in your request payload.  | 
**title** | **String** | The name of the attribute that is displayed to the user in the Campaign Manager. | [optional] 
**type** | **String** | The talang type of the attribute. | 
**description** | **String** | A description of the attribute. | [optional] 
**visible** | **Boolean** | Indicates whether the attribute is visible in the UI or not. | [default to true]
**kind** | **String** | Indicate the kind of the attribute. | 
**campaignsCount** | **Number** | The number of campaigns that refer to the attribute. | 
**exampleValue** | **[String]** | Examples of values that can be assigned to the attribute. | [optional] 



## Enum: EntityEnum


* `AdvocateProfile` (value: `"AdvocateProfile"`)

* `Account` (value: `"Account"`)

* `Application` (value: `"Application"`)

* `AwardedGiveaway` (value: `"AwardedGiveaway"`)

* `Bundle` (value: `"Bundle"`)

* `Campaign` (value: `"Campaign"`)

* `CartItem` (value: `"CartItem"`)

* `Coupon` (value: `"Coupon"`)

* `CustomerProfile` (value: `"CustomerProfile"`)

* `CustomerSession` (value: `"CustomerSession"`)

* `Event` (value: `"Event"`)

* `Item` (value: `"Item"`)

* `Loyalty` (value: `"Loyalty"`)

* `Profile` (value: `"Profile"`)

* `Giveaway` (value: `"Giveaway"`)

* `Referral` (value: `"Referral"`)

* `Session` (value: `"Session"`)

* `Store` (value: `"Store"`)

* `Achievements` (value: `"Achievements"`)





## Enum: KindEnum


* `built-in` (value: `"built-in"`)

* `custom` (value: `"custom"`)




