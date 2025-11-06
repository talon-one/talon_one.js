# TalonOne.TierUpgradeData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerProfileID** | **String** | The integration ID of the customer profile whose tier was upgraded. | 
**loyaltyProgramID** | **Number** | The ID of the loyalty program. | 
**subledgerID** | **String** | The ID of the subledger, when applicable. If this field is empty, the main ledger is used. | [default to &#39;&#39;]
**currentTier** | **String** | The name of the customer&#39;s current tier. | 
**currentPoints** | **Number** | The number of points the customer had at the time of tier upgrade. | 
**oldTier** | **String** | The name of the customer&#39;s previous tier. | [optional] 
**pointsRequiredToTheNextTier** | **Number** | The number of points needed for a customer to reach the next tier. | [optional] 
**nextTier** | **String** | The name of the customer&#39;s next tier. | [optional] 
**tierExpirationDate** | **Date** | The exact date and time the tier expires. | 
**timestampOfTierChange** | **Date** | The exact date and time the tier was changed. | 


