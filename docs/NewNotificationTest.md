# TalonOne.NewNotificationTest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The notification type. | 
**queryParams** | **{String: String}** | Array of query parameters. | [optional] 
**headers** | **{String: String}** | List of API HTTP headers for the given webhook-based notification. | [optional] 
**verb** | **String** | API method for this notification. | 
**url** | **String** | API URL for the given notification. | 
**payload** | **String** | API payload of this notification. | 



## Enum: TypeEnum


* `campaign` (value: `"campaign"`)

* `loyalty_added_deducted_points` (value: `"loyalty_added_deducted_points"`)

* `coupon` (value: `"coupon"`)

* `expiring_coupons` (value: `"expiring_coupons"`)

* `expiring_points` (value: `"expiring_points"`)

* `pending_to_active_points` (value: `"pending_to_active_points"`)

* `strikethrough_pricing` (value: `"strikethrough_pricing"`)

* `tier_downgrade` (value: `"tier_downgrade"`)

* `tier_upgrade` (value: `"tier_upgrade"`)

* `tier_will_downgrade` (value: `"tier_will_downgrade"`)

* `card_expiring_points` (value: `"card_expiring_points"`)





## Enum: VerbEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `GET` (value: `"GET"`)

* `DELETE` (value: `"DELETE"`)

* `PATCH` (value: `"PATCH"`)




