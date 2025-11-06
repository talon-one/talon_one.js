# TalonOne.BaseLoyaltyProgram

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The display title for the Loyalty Program. | [optional] 
**description** | **String** | Description of our Loyalty Program. | [optional] 
**subscribedApplications** | **[Number]** | A list containing the IDs of all applications that are subscribed to this Loyalty Program. | [optional] 
**defaultValidity** | **String** | The default duration after which new loyalty points should expire. Can be &#39;unlimited&#39; or a specific time. The time format is a number followed by one letter indicating the time unit, like &#39;30s&#39;, &#39;40m&#39;, &#39;1h&#39;, &#39;5D&#39;, &#39;7W&#39;, or 10M&#39;. These rounding suffixes are also supported: - &#39;_D&#39; for rounding down. Can be used as a suffix after &#39;D&#39;, and signifies the start of the day. - &#39;_U&#39; for rounding up. Can be used as a suffix after &#39;D&#39;, &#39;W&#39;, and &#39;M&#39;, and signifies the end of the day, week, and month.  | [optional] 
**defaultPending** | **String** | The default duration of the pending time after which points should be valid. Accepted values: &#39;immediate&#39;, &#39;on_action&#39; or a specific time. The time format is a number followed by one letter indicating the time unit, like &#39;30s&#39;, &#39;40m&#39;, &#39;1h&#39;, &#39;5D&#39;, &#39;7W&#39;, or 10M&#39;. These rounding suffixes are also supported: - &#39;_D&#39; for rounding down. Can be used as a suffix after &#39;D&#39;, and signifies the start of the day. - &#39;_U&#39; for rounding up. Can be used as a suffix after &#39;D&#39;, &#39;W&#39;, and &#39;M&#39;, and signifies the end of the day, week, and month.  | [optional] 
**allowSubledger** | **Boolean** | Indicates if this program supports subledgers inside the program. | [optional] 
**usersPerCardLimit** | **Number** | The max amount of user profiles with whom a card can be shared. This can be set to 0 for no limit. This property is only used when &#x60;cardBased&#x60; is &#x60;true&#x60;.  | [optional] 
**sandbox** | **Boolean** | Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type. | [optional] 
**programJoinPolicy** | **String** | The policy that defines when the customer joins the loyalty program.   - &#x60;not_join&#x60;: The customer does not join the loyalty program but can still earn and spend loyalty points.       **Note**: The customer does not have a program join date.   - &#x60;points_activated&#x60;: The customer joins the loyalty program only when their earned loyalty points become active for the first time.   - &#x60;points_earned&#x60;: The customer joins the loyalty program when they earn loyalty points for the first time.  | [optional] 
**tiersExpirationPolicy** | **String** | The policy that defines how tier expiration, used to reevaluate the customer&#39;s current tier, is determined.  - &#x60;tier_start_date&#x60;: The tier expiration is relative to when the customer joined the current tier.  - &#x60;program_join_date&#x60;: The tier expiration is relative to when the customer joined the loyalty program.  - &#x60;customer_attribute&#x60;: The tier expiration is determined by a custom customer attribute.  - &#x60;absolute_expiration&#x60;: The tier is reevaluated at the start of each tier cycle. For this policy, it is required to provide a &#x60;tierCycleStartDate&#x60;.  | [optional] 
**tierCycleStartDate** | **Date** | Timestamp at which the tier cycle starts for all customers in the loyalty program.  **Note**: This is only required when the tier expiration policy is set to &#x60;absolute_expiration&#x60;.  | [optional] 
**tiersExpireIn** | **String** | The amount of time after which the tier expires and is reevaluated.  The time format is an **integer** followed by one letter indicating the time unit. Examples: &#x60;30s&#x60;, &#x60;40m&#x60;, &#x60;1h&#x60;, &#x60;5D&#x60;, &#x60;7W&#x60;, &#x60;10M&#x60;, &#x60;15Y&#x60;.  Available units:  - &#x60;s&#x60;: seconds - &#x60;m&#x60;: minutes - &#x60;h&#x60;: hours - &#x60;D&#x60;: days - &#x60;W&#x60;: weeks - &#x60;M&#x60;: months - &#x60;Y&#x60;: years  You can round certain units up or down: - &#x60;_D&#x60; for rounding down days only. Signifies the start of the day. - &#x60;_U&#x60; for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year.  | [optional] 
**tiersDowngradePolicy** | **String** | The policy that defines how customer tiers are downgraded in the loyalty program after tier reevaluation.  - &#x60;one_down&#x60;: If the customer doesn&#39;t have enough points to stay in the current tier, they are downgraded by one tier.  - &#x60;balance_based&#x60;: The customer&#39;s tier is reevaluated based on the amount of active points they have at the moment.  | [optional] 
**cardCodeSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**returnPolicy** | **String** | The policy that defines the rollback of points in case of a partially returned, cancelled, or reopened [customer session](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). - &#x60;only_pending&#x60;: Only pending points can be rolled back. - &#x60;within_balance&#x60;: Available active points can be rolled back if there aren&#39;t enough pending points. The active balance of the customer cannot be negative. - &#x60;unlimited&#x60;: Allows negative balance without any limit.  | [optional] 



## Enum: ProgramJoinPolicyEnum


* `not_join` (value: `"not_join"`)

* `points_activated` (value: `"points_activated"`)

* `points_earned` (value: `"points_earned"`)





## Enum: TiersExpirationPolicyEnum


* `tier_start_date` (value: `"tier_start_date"`)

* `program_join_date` (value: `"program_join_date"`)

* `customer_attribute` (value: `"customer_attribute"`)

* `absolute_expiration` (value: `"absolute_expiration"`)





## Enum: TiersDowngradePolicyEnum


* `one_down` (value: `"one_down"`)

* `balance_based` (value: `"balance_based"`)





## Enum: ReturnPolicyEnum


* `only_pending` (value: `"only_pending"`)

* `within_balance` (value: `"within_balance"`)

* `unlimited` (value: `"unlimited"`)




