# TalonOne.CouponDeletionJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**filters** | [**CouponDeletionFilters**](CouponDeletionFilters.md) |  | 
**status** | **String** | The current status of this request. Possible values: - &#x60;not_ready&#x60; - &#x60;pending&#x60; - &#x60;completed&#x60; - &#x60;failed&#x60;  | 
**deletedAmount** | **Number** | The number of coupon codes that were already deleted for this request. | [optional] 
**failCount** | **Number** | The number of times this job failed. | 
**errors** | **[String]** | An array of individual problems encountered during the request. | 
**createdBy** | **Number** | ID of the user who created this effect. | 
**communicated** | **Boolean** | Indicates whether the user that created this job was notified of its final state. | 
**campaignIDs** | **[Number]** |  | [optional] 


