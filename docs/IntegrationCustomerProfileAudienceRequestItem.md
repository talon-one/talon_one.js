# TalonOne.IntegrationCustomerProfileAudienceRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Defines the action to perform: - &#x60;add&#x60;: Adds the customer profile to the audience.    **Note**: If the customer profile does not exist, it will be created. The profile will not be visible in any Application   until a session or profile update is received for that profile. - &#x60;delete&#x60;: Removes the customer profile from the audience.  | 
**profileIntegrationId** | **String** | The ID of this customer profile in the third-party integration. | 
**integrationId** | **String** | The ID of this audience in the third-party integration. | 



## Enum: ActionEnum


* `add` (value: `"add"`)

* `delete` (value: `"delete"`)




