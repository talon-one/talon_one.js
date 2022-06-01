# TalonOne.RollbackDiscountEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the \&quot;setDiscount\&quot; effect that was rolled back | 
**value** | **Number** | The value of the discount that was rolled back. | 
**cartItemPosition** | **Number** | The index of the item in the cart items for which the discount was rolled back. | [optional] 
**cartItemSubPosition** | **Number** | The index of the item unit in its line item. It is only used for cart items with &#x60;quantity&#x60; &gt; 1 and is only returned when cart item flattening is enabled.  | [optional] 
**additionalCostId** | **Number** | The ID of the additional cost that was rolled back | [optional] 
**additionalCost** | **String** | The name of the additional cost that was rolled back | [optional] 
**scope** | **String** | The scope of the rolled back discount - For a discount per session, it can be one of &#x60;cartItems&#x60;, &#x60;additionalCosts&#x60; or &#x60;sessionTotal&#x60; - For a discount per item, it can be one of &#x60;price&#x60;, &#x60;additionalCosts&#x60; or &#x60;itemTotal&#x60;  | [optional] 


