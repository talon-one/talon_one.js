# TalonOne.CartItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of item. | [optional] 
**sku** | **String** | Stock keeping unit of item. | 
**quantity** | **Number** | Quantity of item. **Important:** If you enabled [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation#flattening), the quantity is always one and the same cart item might receive multiple per-item discounts. Ensure you can process multiple discounts on one cart item correctly.  | 
**returnedQuantity** | **Number** | Number of returned items, calculated internally based on returns of this item. | [optional] 
**remainingQuantity** | **Number** | Remaining quantity of the item, calculated internally based on returns of this item. | [optional] 
**price** | **Number** | Price of the item in the currency defined by your Application. This field is required if this item is not part of a [catalog](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs). If it is part of a catalog, setting a price here overrides the price from the catalog.  | [optional] 
**category** | **String** | Type, group or model of the item. | [optional] 
**weight** | **Number** | Weight of item in grams. | [optional] 
**height** | **Number** | Height of item in mm. | [optional] 
**width** | **Number** | Width of item in mm. | [optional] 
**length** | **Number** | Length of item in mm. | [optional] 
**position** | **Number** | Position of the Cart Item in the Cart (calculated internally). | [optional] 
**attributes** | [**Object**](.md) | Use this property to set a value for the attributes of your choice. [Attributes](https://docs.talon.one/docs/dev/concepts/attributes) represent any information to attach to this cart item.  Custom _cart item_ attributes must be created in the Campaign Manager before you set them with this property.  | [optional] 
**additionalCosts** | [**{String: AdditionalCost}**](AdditionalCost.md) | Use this property to set a value for the additional costs of this item, such as a shipping cost. They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs).  | [optional] 
**catalogItemID** | **Number** | The [catalog item ID](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs/#synchronizing-cart-item-catalogs). | [optional] 


