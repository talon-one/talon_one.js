# TalonOne.IntegrationEventV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known &#x60;profileId&#x60;, we recommend you use a guest &#x60;profileId&#x60;.  | [optional] 
**storeIntegrationId** | **String** | The integration ID of the store. You choose this ID when you create a store. | [optional] 
**evaluableCampaignIds** | **[Number]** | When using the &#x60;dry&#x60; query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them.  | [optional] 
**type** | **String** | The name of the event. Must be a [custom event](https://docs.talon.one/docs/dev/concepts/entities/events#custom-events), not a built-in event. | 
**attributes** | [**Object**](.md) | Arbitrary additional JSON properties associated with the event. They must be created in the Campaign Manager before setting them with this property. See [creating custom attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes#creating-a-custom-attribute). | [optional] 
**responseContent** | **[String]** | Extends the response with the chosen data entities. Use this property to get as much data back as needed from one request instead of sending extra requests to other endpoints.  | [optional] 
**loyaltyCards** | **[String]** | Identifiers of the loyalty cards used during this event. | [optional] 



## Enum: [ResponseContentEnum]


* `customerProfile` (value: `"customerProfile"`)

* `triggeredCampaigns` (value: `"triggeredCampaigns"`)

* `loyalty` (value: `"loyalty"`)

* `event` (value: `"event"`)

* `awardedGiveaways` (value: `"awardedGiveaways"`)

* `ruleFailureReasons` (value: `"ruleFailureReasons"`)

* `campaignEligibility` (value: `"campaignEligibility"`)

* `achievements` (value: `"achievements"`)

* `unlockedRewards` (value: `"unlockedRewards"`)




