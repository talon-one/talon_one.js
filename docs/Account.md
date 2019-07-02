# TalononeApi.Account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**companyName** | **String** |  | 
**domainName** | **String** | Subdomain Name for yourcompany.talon.one | 
**state** | **String** | State of the account (trial, active, trial_expired) | 
**billingEmail** | **String** | The billing email address associated with your company account. | 
**planName** | **String** | The name of your booked plan. | [optional] 
**planExpires** | **Date** | The point in time at which your current plan expires. | [optional] 
**applicationLimit** | **Number** | The maximum number of Applications covered by your plan. | [optional] 
**userLimit** | **Number** | The maximum number of Campaign Manager Users covered by your plan. | [optional] 
**campaignLimit** | **Number** | The maximum number of Campaigns covered by your plan. | [optional] 
**apiLimit** | **Number** | The maximum number of Integration API calls covered by your plan per billing period. | [optional] 
**applicationCount** | **Number** | The current number of Applications in your account. | 
**userCount** | **Number** | The current number of Campaign Manager Users in your account. | 
**campaignsActiveCount** | **Number** | The current number of active Campaigns in your account. | 
**campaignsInactiveCount** | **Number** | The current number of inactive Campaigns in your account. | 
**attributes** | **Object** | Arbitrary properties associated with this campaign | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `trial` (value: `"trial"`)

* `active` (value: `"active"`)

* `trial_expired` (value: `"trial_expired"`)




