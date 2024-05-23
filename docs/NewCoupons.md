# TalonOne.NewCoupons

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageLimit** | **Number** | The number of times the coupon code can be redeemed. &#x60;0&#x60; means unlimited redemptions but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The total discount value that the code can give. Typically used to represent a gift card value.  | [optional] 
**reservationLimit** | **Number** | The number of reservations that can be made with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiration date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured.  | [optional] 
**numberOfCoupons** | **Number** | The number of new coupon codes to generate for the campaign. Must be at least 1. | 
**uniquePrefix** | **String** | **DEPRECATED** To create more than 20,000 coupons in one request, use [Create coupons asynchronously](https://docs.talon.one/management-api#operation/createCouponsAsync) endpoint.  | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 
**recipientIntegrationId** | **String** | The integration ID for this coupon&#39;s beneficiary&#39;s profile. | [optional] 
**validCharacters** | **[String]** | List of characters used to generate the random parts of a code. By default, the list of characters is equivalent to the &#x60;[A-Z, 0-9]&#x60; regular expression.  | [optional] 
**couponPattern** | **String** | The pattern used to generate coupon codes. The character &#x60;#&#x60; is a placeholder and is replaced by a random character from the &#x60;validCharacters&#x60; set.  | [optional] 
**isReservationMandatory** | **Boolean** | Whether the reservation effect actually created a new reservation. | [optional] [default to false]
**implicitlyReserved** | **Boolean** | An indication of whether the coupon is implicitly reserved for all customers. | [optional] 


