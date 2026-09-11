# TalonOne.RollbackDiscountEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the discount effect that was rolled back. | 
**value** | **Number** | The monetary value of the discount that was rolled back. | 
**cartItemPosition** | **Number** | The index of the item in the &#x60;cartItem&#x60; object whose discount was rolled back, or the unit containing the additional cost whose discount was rolled back. | [optional] 
**cartItemSubPosition** | **Number** | The index of the item unit in its line item for which the discount was rolled back. | [optional] 
**additionalCostId** | **Number** | _Only when rolling back [setDiscountPerAdditionalCost](https://docs.talon.one/docs/dev/integration-api/api-effects#setdiscountperadditionalcost) and [setDiscountPerAdditionalCostPerItem](https://docs.talon.one/docs/dev/integration-api/api-effects#setdiscountperadditionalcostperitem)_ The ID of the additional cost to be discounted. | [optional] 
**additionalCost** | **String** | The API name of the additional cost whose discount was rolled back. | [optional] 
**scope** | **String** | The scope of the rolled back discount.  - For a discount per session, it can be one of &#x60;cartItems&#x60;, &#x60;additionalCosts&#x60; or &#x60;sessionTotal&#x60; - For a discount per item, it can be one of &#x60;price&#x60;, &#x60;additionalCosts&#x60; or &#x60;itemTotal&#x60; | [optional] 


