# TalonOne.CatalogRuleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**[CatalogRule]**](CatalogRule.md) | Array of rule templates in this ruleset. Rules only contain title (no description, as description is at the catalog entry level). | 
**bindings** | [**[Binding]**](Binding.md) | An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array. | [optional] 
**rbVersion** | **String** | The version of the rulebuilder used to create this ruleset. | [optional] 


