# TalonOne.TierDowngradeData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerProfileID** | **String** | The integration ID of the customer profile whose tier was downgraded. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**subledgerID** | **String** | The ID of the subledger, when applicable. If this field is empty, the main ledger is used. | [default to &#39;&#39;]
**currentTier** | **String** | The name of the customer&#39;s current tier. | [optional] 
**currentPoints** | **Number** | The number of points the customer had at the time of tier downgrade. | 
**oldTier** | **String** | The name of the customer&#39;s previous tier. | 
**tierExpirationDate** | **Date** | The exact date and time the tier expires. | [optional] 
**timestampOfTierChange** | **Date** | The exact date and time the tier was changed. | 


