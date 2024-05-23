# TalonOne.CustomerProfileAudienceRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Defines the action to perform: - &#x60;add&#x60;: Adds the customer profile to the audience. If the customer profile does not exist, it will be created. - &#x60;delete&#x60;: Removes the customer profile from the audience.  | 
**profileIntegrationId** | **String** | The ID of this customer profile in the third-party integration. | 
**audienceId** | **Number** | The ID of the audience. You get it via the &#x60;id&#x60; property when [creating an audience](#operation/createAudienceV2). | 



## Enum: ActionEnum


* `add` (value: `"add"`)

* `delete` (value: `"delete"`)




