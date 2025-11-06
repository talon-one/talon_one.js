# TalonOne.TierWillDowngradeData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerProfileID** | **String** | The integration ID of the customer profile whose tier was downgraded. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**subledgerID** | **String** | The ID of the subledger, when applicable. If this field is empty, the main ledger is used. | [default to &#39;&#39;]
**currentTier** | **String** | The name of the customer&#39;s current tier. | 
**currentPoints** | **Number** | The number of points the customer will have after the tier downgrade. | 
**pointsRequiredToRemain** | **Number** | The number of points needed for a customer to remain on the same tier. | 
**nextTier** | **String** | The name of the customer&#39;s next tier. | [optional] 
**tierExpirationDate** | **Date** | The date and time the tier expires. | [optional] 


