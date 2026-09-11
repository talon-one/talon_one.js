# TalonOne.NewIntegrationHubCoupons

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usageLimit** | **Number** | The number of times the coupon code can be redeemed. &#x60;0&#x60; means unlimited redemptions but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The total discount value that the code can give. Typically used to represent a gift card value.  | [optional] 
**reservationLimit** | **Number** | The number of reservations that can be made with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiration date of the coupon. Coupon never expires if this is omitted. | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured.  | [optional] 
**applicationId** | **Number** | The ID of the Application the coupons will belong to. | 
**campaignId** | **Number** | The ID of the Campaign the coupons will belong to. | 
**batchId** | **String** | An identifier for the batch of coupons being created. | 
**numberOfCoupons** | **Number** | The number of new coupon codes to generate for the campaign. Must be at least 1. | 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | [optional] 
**validCharacters** | **[String]** | List of characters used to generate the random parts of a code. By default, the list of characters is equivalent to the &#x60;[A-Z, 0-9]&#x60; regular expression.  | [optional] 
**couponPattern** | **String** | The pattern used to generate coupon codes. The character &#x60;#&#x60; is a placeholder and is replaced by a random character from the &#x60;validCharacters&#x60; set.  | [optional] 
**isReservationMandatory** | **Boolean** | An indication of whether the code can be redeemed only if it has been reserved first. | [optional] [default to false]
**implicitlyReserved** | **Boolean** | An indication of whether the coupon is implicitly reserved for all customers. | [optional] 
**recipientIntegrationId** | **String** | The integration ID for this coupon&#39;s beneficiary&#39;s profile. | [optional] 
**supportRequestId** | **Number** | The identifier of the support request to link to the coupon creation. The request must exist and not yet be processed. | [optional] 
**supportRequestNote** | **String** | A note recorded when the linked support request is approved or rejected. Applied when &#x60;supportRequestId&#x60; is provided. | [optional] 


