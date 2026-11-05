# TalonOne.ExpiringCardPointsData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **Date** | The expiration date of loyalty points. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**amountOfExpiringPoints** | **Number** | The amount of loyalty points that will be expired soon. | 
**subledgerID** | **String** | The ID of the subledger within the loyalty program where these points were added. | 
**cardIdentifier** | **String** | The identifier of the loyalty card, &#x60;which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | 
**usersPerCardLimit** | **Number** | The maximum number of customer profiles with which a card can be shared. This can be set to &#x60;0&#x60; for no limit.  | 
**profiles** | **[String]** | The integration IDs of the customer profiles linked to the card. | 
**created** | **Date** | The timestamp when the loyalty transaction occurred. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, relative to the activation date.  **Note**: This only applies to points for which &#x60;AwaitsActivation&#x60; is &#x60;true&#x60; and &#x60;ExpiryDate&#x60; is not set.  | [optional] 


