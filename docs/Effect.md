# TalonOne.Effect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **Number** | The ID of the campaign that triggered this effect. | 
**rulesetId** | **Number** | The ID of the ruleset that was active in the campaign when this effect was triggered. | 
**ruleIndex** | **Number** | The position of the rule that triggered this effect within the ruleset. | 
**ruleName** | **String** | The name of the rule that triggered this effect. | 
**effectType** | **String** | The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). | 
**triggeredByCoupon** | **Number** | The ID of the coupon that was being evaluated when this effect was triggered. | [optional] 
**triggeredForCatalogItem** | **Number** | The ID of the catalog item that was being evaluated when this effect was triggered. | [optional] 
**conditionIndex** | **Number** | The index of the condition that was triggered. | [optional] 
**evaluationGroupID** | **Number** | The ID of the evaluation group. For more information, see [Managing campaign evaluation](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation). | [optional] 
**evaluationGroupMode** | **String** | The evaluation mode of the evaluation group. For more information, see [Managing campaign evaluation](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation). | [optional] 
**campaignRevisionId** | **Number** | The revision ID of the campaign that was used when triggering the effect. | [optional] 
**campaignRevisionVersionId** | **Number** | The revision version ID of the campaign that was used when triggering the effect. | [optional] 
**selectedPriceType** | **String** | The selected price type for the SKU targeted by this effect. | [optional] 
**selectedPrice** | **Number** | The value of the selected price type to apply to the SKU targeted by this effect, before any discounts are applied. | [optional] 
**adjustmentReferenceId** | **String** | The reference identifier of the selected price adjustment for this SKU. This is only returned if the &#x60;selectedPrice&#x60; resulted from a price adjustment. | [optional] 
**props** | [**Object**](.md) | The properties of the effect. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). | 


