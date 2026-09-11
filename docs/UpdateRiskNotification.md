# TalonOne.UpdateRiskNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **String** | The entity type to analyze within the given time frame. | 
**activity** | **String** | The activity metric to analyze within the given entity. | 
**timeFrame** | **String** | The rolling time window for risk evaluation. | 
**active** | **Boolean** | Indicates whether this risk notification is active. | 



## Enum: EntityEnum


* `profile` (value: `"customer_profile"`)

* `session` (value: `"customer_session"`)





## Enum: ActivityEnum


* `loyalty_points_earned` (value: `"loyalty_points_earned"`)

* `discounted_amount` (value: `"discounted_amount"`)

* `completed_orders` (value: `"completed_orders"`)

* `coupon_attempts` (value: `"coupon_attempts"`)





## Enum: TimeFrameEnum


* `1D` (value: `"1D"`)

* `7D` (value: `"7D"`)

* `30D` (value: `"30D"`)




