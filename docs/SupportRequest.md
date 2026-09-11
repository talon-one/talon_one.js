# TalonOne.SupportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Identifier of the support request. | 
**applicationId** | **Number** | Identifier of the Application connected to the loyalty program or the campaign. It is displayed in your Talon.One deployment URL. | 
**campaignId** | **Number** | Identifier of the campaign where the coupon or gift card is created. | [optional] 
**loyaltyProgramId** | **Number** | Identifier of the loyalty program where the points are added or deducted. | [optional] 
**subledgerId** | **Number** | Identifier of the subledger the points are added to or deducted from. If there is no existing subledger with this ID, the subledger is created automatically. | [optional] 
**createdByUser** | **String** | Email address of the customer support agent who created the support request. | 
**createdAt** | **Date** | Timestamp when the request was made. | 
**customerProfileId** | **String** | Integration ID of the customer profile linked to the support request. | 
**requestType** | **String** | Type of reward requested, including gift cards, personal coupons, and loyalty point additions or deductions. | 
**requestValue** | **Number** | Requested monetary balance of the gift card or the number of loyalty points to be added or deducted. | [optional] 
**requestNote** | **String** | Notes attached to the support request. | 
**requestStatus** | **String** | Current status of the support request. | 
**processedAt** | **Date** | Timestamp when the request was approved or rejected. | [optional] 
**processingNote** | **String** | Notes attached by the admin when rejecting or approving a request. | [optional] 
**processedByUser** | **String** | Email address of the admin who approved or rejected the support request. | [optional] 
**couponCode** | **String** | Coupon code associated with the approved support request. | [optional] 



## Enum: RequestTypeEnum


* `gift_card` (value: `"gift_card"`)

* `personal_coupon` (value: `"personal_coupon"`)

* `loyalty_points_added` (value: `"loyalty_points_added"`)

* `loyalty_points_deducted` (value: `"loyalty_points_deducted"`)





## Enum: RequestStatusEnum


* `pending_approval` (value: `"pending_approval"`)

* `approved` (value: `"approved"`)

* `rejected` (value: `"rejected"`)

* `expired` (value: `"expired"`)




