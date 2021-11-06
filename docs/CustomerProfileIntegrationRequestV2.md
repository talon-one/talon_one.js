# TalonOne.CustomerProfileIntegrationRequestV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | [optional] 
**audiencesChanges** | [**ProfileAudiencesChanges**](ProfileAudiencesChanges.md) |  | [optional] 
**responseContent** | **[String]** | Optional list of requested information to be present on the response related to the customer profile update.  Currently supported: \&quot;customerProfile\&quot;, \&quot;triggeredCampaigns\&quot;, \&quot;loyalty\&quot;, \&quot;event\&quot;, \&quot;awardedGiveaways\&quot;, \&quot;ruleFailureReasons\&quot;.  **Note:** &#x60;ruleFailureReasons&#x60; is always part of the response when the Application type is &#x60;sandbox&#x60;.  | [optional] 



## Enum: [ResponseContentEnum]


* `customerProfile` (value: `"customerProfile"`)

* `triggeredCampaigns` (value: `"triggeredCampaigns"`)

* `loyalty` (value: `"loyalty"`)

* `event` (value: `"event"`)

* `awardedGiveaways` (value: `"awardedGiveaways"`)

* `ruleFailureReasons` (value: `"ruleFailureReasons"`)




