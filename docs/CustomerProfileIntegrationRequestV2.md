# TalonOne.CustomerProfileIntegrationRequestV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | [optional] 
**audiencesChanges** | [**ProfileAudiencesChanges**](ProfileAudiencesChanges.md) |  | [optional] 
**responseContent** | **[String]** | Optional list of requested information to be present on the response related to the customer profile update. Currently supported: \&quot;customerProfile\&quot;, \&quot;triggeredCampaigns\&quot;, \&quot;loyalty\&quot;, \&quot;event\&quot; and \&quot;ruleFailureReasons\&quot;.  | [optional] 



## Enum: [ResponseContentEnum]


* `customerProfile` (value: `"customerProfile"`)

* `triggeredCampaigns` (value: `"triggeredCampaigns"`)

* `loyalty` (value: `"loyalty"`)

* `event` (value: `"event"`)

* `ruleFailureReasons` (value: `"ruleFailureReasons"`)




