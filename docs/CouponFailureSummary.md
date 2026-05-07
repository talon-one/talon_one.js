# TalonOne.CouponFailureSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the evaluation record. | 
**eventID** | **Number** | ID of the event. | 
**sessionID** | **String** | ID of the customer session set by your integration layer. | [optional] 
**profileID** | **String** | ID of the customer profile set by your integration layer. | [optional] 
**status** | **String** | Status defines if the coupon code was applied or rejected. | 
**couponCode** | **String** | Coupon code passed for evaluation. | 
**language** | **String** | Language of the summary. | 
**summary** | **String** | A summary of the reasons for coupon redemption failure. | 
**createdAt** | **Date** | Timestamp when the request was made. | 
**updatedAt** | **Date** | Timestamp when the request was last updated. | 


