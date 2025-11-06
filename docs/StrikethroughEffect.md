# TalonOne.StrikethroughEffect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **Number** | The ID of the campaign that effect belongs to. | 
**rulesetId** | **Number** | The ID of the ruleset containing the rule that triggered this effect. | 
**ruleIndex** | **Number** | The position of the rule that triggered this effect within the ruleset. | 
**ruleName** | **String** | The name of the rule that triggered this effect. | 
**type** | **String** | The type of this effect. | 
**props** | [**Object**](.md) |  | 
**startTime** | **Date** | The start of the time frame where the effect is active in UTC. | [optional] 
**endTime** | **Date** | The end of the time frame where the effect is active in UTC. | [optional] 
**selectedPriceType** | **String** | The selected price type for this cart item (e.g. the price for members only). | [optional] 
**selectedPrice** | **Number** | The value of the selected price type to apply to the SKU targeted by this effect, before any discounts are applied. | [optional] 
**adjustmentReferenceId** | **String** | The reference identifier of the selected price adjustment for this cart item. | [optional] 
**targets** | **[Object]** | A list of entities (e.g. audiences) targeted by this effect. | [optional] 


