# TalonOne.InventoryCoupon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | 
**value** | **String** | The coupon code. | 
**usageLimit** | **Number** | The number of times the coupon code can be redeemed. &#x60;0&#x60; means unlimited redemptions but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The amount of discounts that can be given with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured.  | [optional] 
**usageCounter** | **Number** | The number of times this coupon has been successfully used. | 
**discountCounter** | **Number** | The amount of discounts given on rules redeeming this coupon. Only usable if a coupon discount budget was set for this coupon. | [optional] 
**discountRemainder** | **Number** | The remaining discount this coupon can give. | [optional] 
**attributes** | [**Object**](.md) | Custom attributes associated with this coupon. | [optional] 
**referralId** | **Number** | The integration ID of the referring customer (if any) for whom this coupon was created as an effect. | [optional] 
**recipientIntegrationId** | **String** | The Integration ID of the customer that is allowed to redeem this coupon. | [optional] 
**importId** | **Number** | The ID of the Import which created this coupon. | [optional] 
**reservation** | **Boolean** | Defines the type of reservation: - &#x60;true&#x60;: The reservation is a soft reservation. Any customer can use the coupon. This is done via the [Create coupon reservation endpoint](/integration-api/#operation/createCouponReservation). - &#x60;false&#x60;: The reservation is a hard reservation. Only the associated customer (&#x60;recipientIntegrationId&#x60;) can use the coupon. This is done via the Campaign Manager when you create a coupon for a given &#x60;recipientIntegrationId&#x60;, the [Create coupons endpoint](/management-api/#operation/createCoupons) or [Create coupons for multiple recipients endpoint](/management-api/#operation/createCouponsForMultipleRecipients).  | [optional] [default to true]
**batchId** | **String** | The id of the batch the coupon belongs to. | [optional] 
**profileRedemptionCount** | **Number** | The number of times the coupon was redeemed by the profile. | 
**state** | **String** | Can be:  - &#x60;active&#x60;: The coupon can be used. It is a reserved coupon that is neither pending, used nor expired, and has a non-exhausted limit counter. - &#x60;used&#x60;: The coupon has been redeemed and cannot be used again. It is not pending and has reached its redemption limit or was redeemed by the profile before expiration. - &#x60;expired&#x60;: The coupon was never redeemed and it is now expired. It is non-pending, non-active and non-used by the profile. - &#x60;pending&#x60;: The coupon will be usable in the future. - &#x60;disabled&#x60;: The coupon is part of a non-active campaign.  | 


