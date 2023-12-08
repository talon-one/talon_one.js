# TalonOne.CreateTemplateCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A user-facing name for this campaign. | 
**description** | **String** | A detailed description of the campaign. | [optional] 
**templateId** | **Number** | The ID of the Campaign Template which will be used in order to create the Campaign. | 
**campaignAttributesOverrides** | [**Object**](.md) | Custom Campaign Attributes. If the Campaign Template defines the same values, they will be overridden. | [optional] 
**templateParamValues** | [**[Binding]**](Binding.md) | Actual values to replace the template placeholder values in the Ruleset bindings. Values for all Template Parameters must be provided. | [optional] 
**limitOverrides** | [**[LimitConfig]**](LimitConfig.md) | Limits for this Campaign. If the Campaign Template or Application define default values for the same limits, they will be overridden. | [optional] 
**campaignGroups** | **[Number]** | The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/account-settings/managing-campaign-groups) this campaign belongs to.  | [optional] 
**tags** | **[String]** | A list of tags for the campaign. If the campaign template has tags, they will be overridden by this list. | [optional] 
**evaluationGroupId** | **Number** | The ID of the campaign evaluation group the campaign belongs to. | [optional] 
**linkedStoreIds** | **[Number]** | A list of store IDs that are linked to the campaign.  **Note:** Campaigns with linked store IDs will only be evaluated when there is a [customer session update](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) that references a linked store.  | [optional] 


