# TalonOne.NewMessageTest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The message type. | 
**queryParams** | **{String: String}** | Array of query parameters. | [optional] 
**headers** | **{String: String}** | List of API HTTP headers for the given message. | [optional] 
**verb** | **String** | API method for this message. | 
**url** | **String** | API URL for the given message. | 
**payload** | **String** | API payload of this message. | [optional] 



## Enum: TypeEnum


* `campaign` (value: `"campaign"`)

* `loyalty_added_deducted_points` (value: `"loyalty_added_deducted_points"`)

* `card_added_deducted_points` (value: `"card_added_deducted_points"`)

* `loyalty_added_deducted_points_balances` (value: `"loyalty_added_deducted_points_balances"`)

* `loyalty_card_added_deducted_points_balances` (value: `"loyalty_card_added_deducted_points_balances"`)

* `coupon` (value: `"coupon"`)

* `expiring_coupons` (value: `"expiring_coupons"`)

* `expiring_points` (value: `"expiring_points"`)

* `pending_to_active_points` (value: `"pending_to_active_points"`)

* `strikethrough_pricing` (value: `"strikethrough_pricing"`)

* `tier_downgrade` (value: `"tier_downgrade"`)

* `tier_upgrade` (value: `"tier_upgrade"`)

* `tier_will_downgrade` (value: `"tier_will_downgrade"`)

* `card_expiring_points` (value: `"card_expiring_points"`)

* `rule_engine_webhook` (value: `"rule_engine_webhook"`)





## Enum: VerbEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `GET` (value: `"GET"`)

* `DELETE` (value: `"DELETE"`)

* `PATCH` (value: `"PATCH"`)




