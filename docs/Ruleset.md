# TalonOne.Ruleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**userId** | **Number** | The ID of the user associated with this entity. | 
**rules** | [**[Rule]**](Rule.md) | Set of rules to apply. | 
**strikethroughRules** | [**[Rule]**](Rule.md) | Set of rules to apply for strikethrough. | [optional] 
**bindings** | [**[Binding]**](Binding.md) | An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array. | 
**rbVersion** | **String** | The version of the rulebuilder used to create this ruleset. | [optional] 
**activate** | **Boolean** | Indicates whether this created ruleset should be activated for the campaign that owns it. | [optional] 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | [optional] 
**templateId** | **Number** | The ID of the campaign template that owns this entity. | [optional] 
**activatedAt** | **Date** | Timestamp indicating when this Ruleset was activated. | [optional] 


