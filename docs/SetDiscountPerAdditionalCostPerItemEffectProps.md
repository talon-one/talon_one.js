# TalonOne.SetDiscountPerAdditionalCostPerItemEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The description of this discount. &#x60;#number&#x60; is appended to the name. It is equal to the &#x60;position&#x60; property. | 
**additionalCostId** | **Number** | The identifier of the additional cost to be discounted. | 
**value** | **Number** | The monetary value of the effective discount applied to the item&#39;s additional cost. | 
**position** | **Number** | The index of the item in the &#x60;cartItem&#x60; object containing the additional cost that this discount applies to. | 
**subPosition** | **Number** | The index of the item unit in its line item. | [optional] 
**additionalCost** | **String** | The API name of the additional cost to be discounted. | 
**desiredValue** | **Number** | _[(Partial discounts enabled only)](https://docs.talon.one/docs/product/applications/manage-general-settings#partial-discounts)_. The monetary value of the discount to be applied to the additional cost without considering budget limitations. | [optional] 


