# TalonOne.ExperimentBlueprintVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of this variant. | 
**weight** | **Number** | The percentage split of this variant. For &#x60;random&#x60; assignment, the split must be between 1 and 99 and the sum across all variants must equal 100. Ignored for &#x60;audience&#x60; and &#x60;external&#x60; assignment.  | 
**ruleset** | [**CatalogRuleset**](CatalogRuleset.md) |  | 
**isPrimary** | **Boolean** | Indicates whether this variant is the primary variant of the experiment. | 


