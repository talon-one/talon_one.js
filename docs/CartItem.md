# TalonOne.CartItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of item | 
**sku** | **String** | Stock keeping unit of item | 
**quantity** | **Number** | Quantity of item. **Important:** If you enabled [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#flattened-cart-items), the quantity is always one and the same cart item might receive multiple per-item discounts. Ensure you can process multiple discounts on one cart item correctly.  | 
**returnedQuantity** | **Number** | Number of returned items, calculated internally based on returns of this item. | [optional] 
**remainingQuantity** | **Number** | Remaining quantity of the item, calculated internally based on returns of this item. | [optional] 
**price** | **Number** | Price of item | 
**category** | **String** | Type, group or model of the item | [optional] 
**weight** | **Number** | Weight of item in grams | [optional] 
**height** | **Number** | Height of item in mm | [optional] 
**width** | **Number** | Width of item in mm | [optional] 
**length** | **Number** | Length of item in mm | [optional] 
**position** | **Number** | Position of the Cart Item in the Cart (calculated internally) | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. You can use built-in attributes or create your own. See [Attributes](https://docs.talon.one/docs/dev/concepts/attributes).  | [optional] 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Any additional costs associated with the cart item  | [optional] 


