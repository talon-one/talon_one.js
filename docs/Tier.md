# TalonOne.Tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of the tier. | 
**name** | **String** | The name of the tier. | 
**startDate** | **Date** | Date and time when the customer moved to this tier. This value uses the loyalty program&#39;s time zone setting. | [optional] 
**expiryDate** | **Date** | Date when tier level expires in the RFC3339 format (in the Loyalty Program&#39;s timezone). | [optional] 
**downgradePolicy** | **String** | The policy that defines how customer tiers are downgraded in the loyalty program after tier reevaluation.  - &#x60;one_down&#x60;: If the customer doesn&#39;t have enough points to stay in the current tier, they are downgraded by one tier.  - &#x60;balance_based&#x60;: The customer&#39;s tier is reevaluated based on the amount of active points they have at the moment.  | [optional] 



## Enum: DowngradePolicyEnum


* `one_down` (value: `"one_down"`)

* `balance_based` (value: `"balance_based"`)




