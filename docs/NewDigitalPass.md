# TalonOne.NewDigitalPass

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyaltyProgramId** | **Number** | The ID of the associated loyalty program. | 
**passTemplateId** | **String** | The ID of the digital pass template used to generate the pass.  | 
**profileId** | **String** | The integration ID of the customer profile the pass is issued for. | 
**loyaltyCardId** | **String** | The identifier of the loyalty card the pass is issued for.  **Note**: Only applicable for card-based loyalty programs.  | [optional] 
**platform** | **String** | The wallet platform the pass is generated for. | 
**attributes** | **{String: String}** | A map of placeholder values that you provide to fill in the pass template. These values are not validated against the template.  | [optional] 



## Enum: PlatformEnum


* `apple` (value: `"apple"`)

* `google` (value: `"google"`)




