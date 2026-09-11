# TalonOne.EventV3RequestEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known &#x60;profileId&#x60;, we recommend you use a guest &#x60;profileId&#x60;.  | 
**storeIntegrationId** | **String** | The integration ID of the store. You choose this ID when you create a store. | [optional] 
**evaluableCampaignIds** | **[Number]** | When using the &#x60;dry&#x60; query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them.  | [optional] 
**type** | **String** | The name of the event. Must be a [custom event](https://docs.talon.one/docs/dev/concepts/entities/events#custom-events), not a built-in event. | 
**attributes** | [**Object**](.md) | Arbitrary additional JSON properties associated with the event. They must be created in the Campaign Manager before setting them with this property. See [creating custom attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes#creating-a-custom-attribute). | [optional] 
**integrationId** | **String** | The unique ID of the event. Only one event with this ID can be registered.  | 
**connectedSessionId** | **String** | The ID of the session to reference. The session must be in &#x60;closed&#x60; state. Otherwise, the API call will fail. | [optional] 
**referralCode** | **String** | The referral code submitted with the event. The endpoint does not validate the code, and submitting a code does not redeem it. Use the \&quot;Referral code is valid\&quot; condition in the Rule Builder to validate and redeem the code, or \&quot;Referral code is valid (without redemption)\&quot; to validate without redeeming.  | [optional] 


