# TalonOne.SetDiscountEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name or description of this discount. | 
**value** | **Number** | The monetary value of the effective discount. | 
**scope** | **String** | What the discount applies to. Possible values:  - &#x60;cartItems&#x60;: Discount on the price of the items. - &#x60;additionalCosts&#x60;: Discount on the [additional costs](https://docs.talon.one/docs/product/account/dev-tools/manage-additional-costs) of the items. - &#x60;sessionTotal&#x60;: Discount on the total value of the customer session.  **Note:** [Cascading discounts](https://docs.talon.one/docs/product/applications/manage-general-settings#cascading-discounts) must be enabled for this property to be returned. | [optional] 
**desiredValue** | **Number** | _(Partial discounts enabled only)_ The monetary value of the discount to be applied without considering budget limitations. | [optional] 


