# TalonOne.NewExperimentVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of this variant. | 
**weight** | **Number** | The percentage split of this variant. For &#x60;random&#x60; assignment, the split must be between 1 and 99 and the sum across all variants must equal 100. Ignored for &#x60;audience&#x60; and &#x60;external&#x60; assignment.  | 
**ruleset** | [**NewRuleset**](NewRuleset.md) |  | 
**isPrimary** | **Boolean** |  | 
**audienceId** | **Number** | The ID of the audience this variant targets. Only used when the experiment &#x60;assignmentType&#x60; is &#x60;audience&#x60;.  | [optional] 


