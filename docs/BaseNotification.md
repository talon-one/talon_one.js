# TalonOne.BaseNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**Object**](.md) | Indicates which notification properties to apply. | 
**enabled** | **Boolean** | Indicates whether the notification is activated. | [optional] [default to true]
**webhook** | [**BaseNotificationWebhook**](BaseNotificationWebhook.md) |  | 
**id** | **Number** | Unique ID for this entity. | 
**type** | **String** | The notification type. | 



## Enum: TypeEnum


* `campaign` (value: `"campaign"`)

* `loyalty_added_deducted_points` (value: `"loyalty_added_deducted_points"`)

* `card_added_deducted_points` (value: `"card_added_deducted_points"`)

* `loyalty_added_deducted_points_balances` (value: `"loyalty_added_deducted_points_balances"`)

* `loyalty_card_added_deducted_points_balances` (value: `"loyalty_card_added_deducted_points_balances"`)

* `coupon` (value: `"coupon"`)

* `expiring_coupons` (value: `"expiring_coupons"`)

* `expiring_points` (value: `"expiring_points"`)

* `card_expiring_points` (value: `"card_expiring_points"`)

* `pending_to_active_points` (value: `"pending_to_active_points"`)

* `strikethrough_pricing` (value: `"strikethrough_pricing"`)

* `tier_downgrade` (value: `"tier_downgrade"`)

* `tier_upgrade` (value: `"tier_upgrade"`)

* `tier_will_downgrade` (value: `"tier_will_downgrade"`)




