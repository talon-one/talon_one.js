# TalonOne.NewApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of this application. | 
**description** | **String** | A longer description of the application. | [optional] 
**timezone** | **String** | A string containing an IANA timezone descriptor. | 
**currency** | **String** | A string describing a default currency for new customer sessions. | 
**caseSensitivity** | **String** | A string indicating how should campaigns in this application deal with case sensitivity on coupon codes. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Default limits for campaigns created in this application | [optional] 
**campaignPriority** | **String** | Default priority for campaigns created in this application, can be one of (universal, stackable, exclusive). If no value is provided, this is set to \&quot;universal\&quot; | [optional] 
**exclusiveCampaignsStrategy** | **String** | The strategy used when choosing exclusive campaigns for evaluation, can be one of (listOrder, lowestDiscount, highestDiscount). If no value is provided, this is set to \&quot;listOrder\&quot; | [optional] 
**defaultDiscountScope** | **String** | The default scope to apply \&quot;setDiscount\&quot; effects on if no scope was provided with the effect. | [optional] 
**enableCascadingDiscounts** | **Boolean** | Flag indicating if discounts should cascade for this application | [optional] 
**enableFlattenedCartItems** | **Boolean** | Flag indicating if cart items of quantity larger than one should be separated into different items of quantity one | [optional] 
**attributesSettings** | [**AttributesSettings**](AttributesSettings.md) |  | [optional] 
**sandbox** | **Boolean** | Flag indicating if this is a live or sandbox application | [optional] 
**key** | **String** | Hex key for HMAC-signing API calls as coming from this application (16 hex digits) | [optional] 



## Enum: CaseSensitivityEnum


* `sensitive` (value: `"sensitive"`)

* `insensitive-uppercase` (value: `"insensitive-uppercase"`)

* `insensitive-lowercase` (value: `"insensitive-lowercase"`)





## Enum: CampaignPriorityEnum


* `universal` (value: `"universal"`)

* `stackable` (value: `"stackable"`)

* `exclusive` (value: `"exclusive"`)





## Enum: ExclusiveCampaignsStrategyEnum


* `listOrder` (value: `"listOrder"`)

* `lowestDiscount` (value: `"lowestDiscount"`)

* `highestDiscount` (value: `"highestDiscount"`)





## Enum: DefaultDiscountScopeEnum


* `sessionTotal` (value: `"sessionTotal"`)

* `cartItems` (value: `"cartItems"`)

* `additionalCosts` (value: `"additionalCosts"`)




