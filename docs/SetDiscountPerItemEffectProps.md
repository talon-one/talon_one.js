# TalonOne.SetDiscountPerItemEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the discount. Contains a hashtag character indicating the index of the position of the item the discount applies to. It is identical to the value of the &#x60;position&#x60; property.  | 
**value** | **Number** | The total monetary value of the discount. | 
**position** | **Number** | The index of the item in the cart items list on which this discount should be applied. | 
**subPosition** | **Number** | Only used when [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#flattened-cart-items) is enabled. Indicates which item the discount applies to for cart items with &#x60;quantity&#x60; &gt; 1.  | [optional] 
**desiredValue** | **Number** | The original value of the discount. | [optional] 
**scope** | **String** | The scope of the discount: - &#x60;additionalCosts&#x60;: The discount applies to all the additional costs of the item. - &#x60;itemTotal&#x60;: The discount applies to the price of the item + the additional costs of the item. - &#x60;price&#x60;: The discount applies to the price of the item.  | [optional] 
**totalDiscount** | **Number** | The total discount given if this effect is a result of a prorated discount. | [optional] 
**desiredTotalDiscount** | **Number** | The original total discount to give if this effect is a result of a prorated discount. | [optional] 
**bundleIndex** | **Number** | The position of the bundle in a list of item bundles created from the same bundle definition. | [optional] 
**bundleName** | **String** | The name of the bundle binding. | [optional] 


