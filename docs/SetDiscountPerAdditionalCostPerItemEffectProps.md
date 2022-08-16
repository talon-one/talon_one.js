# TalonOne.SetDiscountPerAdditionalCostPerItemEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name/description of this discount. | 
**additionalCostId** | **Number** | The ID of the additional cost. | 
**value** | **Number** | The total monetary value of the discount. | 
**position** | **Number** | The index of the item in the cart item list containing the additional cost to be discounted. | 
**subPosition** | **Number** | Only used when [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#flattened-cart-items) is enabled. Indicates which item the discount applies to for cart items with &#x60;quantity&#x60; &gt; 1.  | [optional] 
**additionalCost** | **String** | The name of the additional cost. | 
**desiredValue** | **Number** | Only with [partial discounts enabled](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#partial-discounts). Represents the monetary value of the discount to be applied to additional discount without considering budget limitations.  | [optional] 


