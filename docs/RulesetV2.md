# TalonOne.RulesetV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | [optional] [readonly] 
**created** | **Date** | The time this entity was created. | [optional] [readonly] 
**userId** | **Number** | The ID of the user that created this ruleset. | [optional] [readonly] 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | [optional] [readonly] 
**templateId** | **Number** | The ID of the campaign template that owns this entity. | [optional] [readonly] 
**activatedAt** | **Date** | Timestamp indicating when this ruleset was activated. | [optional] [readonly] 
**promotionRules** | [**[RuleV2]**](RuleV2.md) | Set of promotion rules. | 
**strikethroughRules** | [**[RuleV2]**](RuleV2.md) | Set of strikethrough rules. | [optional] 
**selectors** | [**[Selector]**](Selector.md) | Variable bindings of type selector. | [optional] [readonly] 
**bundles** | [**[Bundle]**](Bundle.md) | Variable bindings of type bundle. | [optional] [readonly] 
**parameters** | [**[TemplateParameter]**](TemplateParameter.md) | Variable bindings of type template parameter. | [optional] [readonly] 


