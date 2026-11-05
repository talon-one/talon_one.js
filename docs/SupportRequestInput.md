# TalonOne.SupportRequestInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **Number** | Identifier of the Application connected to the loyalty program or the campaign. It is displayed in your Talon.One deployment URL. | 
**campaignId** | **Number** | Identifier of the campaign where the coupon or gift card is created. | [optional] 
**loyaltyProgramId** | **Number** | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. | [optional] 
**subledgerId** | **String** | ID of the subledger the points are added to or deducted from. Must be combined with &#x60;loyaltyProgramId&#x60;. The subledger must already exist in the given loyalty program. | [optional] 
**customerProfileId** | **String** | Integration ID of the customer profile linked to the support request. | 
**requestType** | **String** | Type of reward requested, including gift cards, personal coupons, and loyalty point additions or deductions. | 
**requestValue** | **Number** | Requested monetary balance of the gift card or the number of loyalty points to be added or deducted. | [optional] 
**requestNote** | **String** | Notes attached to the support request. | 



## Enum: RequestTypeEnum


* `gift_card` (value: `"gift_card"`)

* `personal_coupon` (value: `"personal_coupon"`)

* `loyalty_points_added` (value: `"loyalty_points_added"`)

* `loyalty_points_deducted` (value: `"loyalty_points_deducted"`)




