# TalonOne.DiscardRisksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**riskIds** | **[Number]** | The IDs of the risks to discard. | 
**reason** | **String** | The reason the risks are being discarded. | 
**comment** | **String** | Free-text description of why the risks are being discarded. Required when &#x60;reason&#x60; is &#x60;other&#x60;, optional for &#x60;expected_behavior&#x60;.  | [optional] 



## Enum: ReasonEnum


* `expected_behavior` (value: `"expected_behavior"`)

* `other` (value: `"other"`)




