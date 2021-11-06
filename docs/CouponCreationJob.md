# TalonOne.CouponCreationJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**campaignId** | **Number** | The ID of the campaign that owns this entity. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**usageLimit** | **Number** | The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.  | 
**discountLimit** | **Number** | The amount of discounts that can be given with this coupon code.  | [optional] 
**startDate** | **Date** | Timestamp at which point the coupon becomes valid. | [optional] 
**expiryDate** | **Date** | Expiry date of the coupon. Coupon never expires if this is omitted, zero, or negative. | [optional] 
**numberOfCoupons** | **Number** | The number of new coupon codes to generate for the campaign. Must be between 20,001 and 5,000,000. | 
**couponSettings** | [**CodeGeneratorSettings**](CodeGeneratorSettings.md) |  | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with coupons | 
**batchId** | **String** | The batch ID coupons created by this job will bear | 
**status** | **String** | The current status of this request. The value should be either &#39;pending&#39;, &#39;completed&#39; or &#39;failed&#39; | 
**createdAmount** | **Number** | The number of coupon codes that were already created for this request | 
**failCount** | **Number** | The number of times this job failed | 
**errors** | **[String]** | An array of individual problems encountered during the request. | 
**createdBy** | **Number** | ID of the user who created this effect. | 
**communicated** | **Boolean** | Whether or not the user that created this job was notified of its final state | 
**batchExecutionCount** | **Number** | The number of times an attempt to create a batch of coupons was made during the processing of the job | 


