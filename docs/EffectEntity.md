# TalonOne.EffectEntity

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


