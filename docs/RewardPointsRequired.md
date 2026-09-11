# TalonOne.RewardPointsRequired

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the &#x60;pointsRequired&#x60; entry. When updating a reward, include this property to update an existing entry. Omit it to create a new one.  | [optional] 
**amount** | **Number** | The number of loyalty points required to activate the reward. | 
**loyaltyProgramId** | **Number** | The ID of the associated loyalty program. | 
**subledgerId** | **String** | The ID of the subledger within the loyalty program from which points are deducted when activating the reward.  To specify the main ledger, provide an empty string (\&quot;\&quot;).  | 


