# TalonOne.UpdateApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of this application. | 
**description** | **String** | A longer description of the application. | [optional] 
**timezone** | **String** | A string containing an IANA timezone descriptor. | 
**currency** | **String** | The default currency for new customer sessions. | 
**caseSensitivity** | **String** | The case sensitivity behavior to check coupon codes in the campaigns of this Application. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign. | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Default limits for campaigns created in this application. | [optional] 
**campaignPriority** | **String** | Default [priority](https://docs.talon.one/docs/product/applications/setting-up-campaign-priorities) for campaigns created in this Application.  | [optional] [default to &#39;universal&#39;]
**exclusiveCampaignsStrategy** | **String** | The strategy used when choosing exclusive campaigns for evaluation. | [optional] [default to &#39;listOrder&#39;]
**defaultDiscountScope** | **String** | The default scope to apply &#x60;setDiscount&#x60; effects on if no scope was provided with the effect.  | [optional] 
**enableCascadingDiscounts** | **Boolean** | Indicates if discounts should cascade for this Application. | [optional] 
**enableFlattenedCartItems** | **Boolean** | Indicates if cart items of quantity larger than one should be separated into different items of quantity one. See the [docs](https://docs.talon.one/docs/product/campaigns/campaign-evaluation#flattening).  | [optional] 
**attributesSettings** | [**AttributesSettings**](AttributesSettings.md) |  | [optional] 
**sandbox** | **Boolean** | Indicates if this is a live or sandbox Application. | [optional] 
**enablePartialDiscounts** | **Boolean** | Indicates if this Application supports partial discounts. | [optional] 
**defaultDiscountAdditionalCostPerItemScope** | **String** | The default scope to apply &#x60;setDiscountPerItem&#x60; effects on if no scope was provided with the effect.  | [optional] 



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





## Enum: DefaultDiscountAdditionalCostPerItemScopeEnum


* `price` (value: `"price"`)

* `itemTotal` (value: `"itemTotal"`)

* `additionalCosts` (value: `"additionalCosts"`)




