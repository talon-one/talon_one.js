# TalonOne.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**modified** | **Date** | The time this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
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
**defaultEvaluationGroupId** | **Number** | The ID of the default campaign evaluation group to which new campaigns will be added unless a different group is selected when creating the campaign. | [optional] 
**defaultCartItemFilterId** | **Number** | The ID of the default Cart-Item-Filter for this application. | [optional] 
**enableCampaignStateManagement** | **Boolean** | Indicates whether the campaign staging and revisions feature is enabled for the Application.  **Important:** After this feature is enabled, it cannot be disabled.  | [optional] 
**loyaltyPrograms** | [**[LoyaltyProgram]**](LoyaltyProgram.md) | An array containing all the loyalty programs to which this application is subscribed. | 



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




