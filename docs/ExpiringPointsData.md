# TalonOne.ExpiringPointsData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **Date** | The expiration date of loyalty points. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**customerProfileID** | **String** | The integration ID of the customer profile that has expiring points. | 
**amountOfExpiringPoints** | **Number** | The amount of loyalty points that will be expired soon. | 
**subledgerID** | **String** | The ID of the subledger within the loyalty program where these points were added. | 
**created** | **Date** | The timestamp when the loyalty transaction occurred. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the activation date.  **Note**: This only applies to points for which &#x60;AwaitsActivation&#x60; is &#x60;true&#x60; and &#x60;ExpiryDate&#x60; is not set.  | [optional] 


