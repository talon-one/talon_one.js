# TalonOne.NewApplication

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
**defaultDiscountScope** | **String** | The default scope to apply &#x60;setDiscount&#x60; effects on if no scope was provided with the effect.  | [optional] 
**enableCascadingDiscounts** | **Boolean** | Indicates if discounts should cascade for this Application. | [optional] 
**enableFlattenedCartItems** | **Boolean** | Indicates if cart items of quantity larger than one should be separated into different items of quantity one.  | [optional] 
**attributesSettings** | [**AttributesSettings**](AttributesSettings.md) |  | [optional] 
**sandbox** | **Boolean** | Indicates if this is a live or sandbox Application. | [optional] 
**enablePartialDiscounts** | **Boolean** | Indicates if this Application supports partial discounts. | [optional] 
**defaultDiscountAdditionalCostPerItemScope** | **String** | The default scope to apply &#x60;setDiscountPerItem&#x60; effects on if no scope was provided with the effect.  | [optional] 
**key** | **String** | Hex key for HMAC-signing API calls as coming from this application (16 hex digits). | [optional] 



## Enum: CaseSensitivityEnum


* `sensitive` (value: `"sensitive"`)

* `insensitive-uppercase` (value: `"insensitive-uppercase"`)

* `insensitive-lowercase` (value: `"insensitive-lowercase"`)





## Enum: DefaultDiscountScopeEnum


* `sessionTotal` (value: `"sessionTotal"`)

* `cartItems` (value: `"cartItems"`)

* `additionalCosts` (value: `"additionalCosts"`)





## Enum: DefaultDiscountAdditionalCostPerItemScopeEnum


* `price` (value: `"price"`)

* `itemTotal` (value: `"itemTotal"`)

* `additionalCosts` (value: `"additionalCosts"`)




