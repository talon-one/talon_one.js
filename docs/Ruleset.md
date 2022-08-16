# TalonOne.Ruleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**userId** | **Number** | The ID of the account that owns this entity. | 
**rules** | [**[Rule]**](Rule.md) | Set of rules to apply. | 
**bindings** | [**[Binding]**](Binding.md) | An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array. | 
**rbVersion** | **String** | The version of the rulebuilder used to create this ruleset. | [optional] 
**activate** | **Boolean** | Indicates whether this created ruleset should be activated for the campaign that owns it. | [optional] 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | [optional] 
**templateId** | **Number** | The ID of the campaign template that owns this entity. | [optional] 
**activatedAt** | **Date** | Timestamp indicating when this Ruleset was activated. | [optional] 


