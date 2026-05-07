# TalonOne.AddLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name / description of this loyalty point addition. | 
**programId** | **Number** | The ID of the loyalty program where these points were added. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were added. | 
**value** | **Number** | The amount of points that were added. | 
**desiredValue** | **Number** | The original amount of loyalty points to be awarded. | [optional] 
**recipientIntegrationId** | **String** | The user for whom these points were added. | 
**startDate** | **Date** | Date after which points will be valid. | [optional] 
**expiryDate** | **Date** | Date after which points will expire. | [optional] 
**transactionUUID** | **String** | The identifier of this addition in the loyalty ledger. | 
**cartItemPosition** | **Number** | The index of the item in the cart items list on which the loyal points addition should be applied. | [optional] 
**cartItemSubPosition** | **Number** | For cart items with &#x60;quantity&#x60; &gt; 1, the sub position indicates to which item the loyalty points addition is applied.  | [optional] 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 
**bundleIndex** | **Number** | The position of the bundle in a list of item bundles created from the same bundle definition. | [optional] 
**bundleName** | **String** | The name of the bundle definition. | [optional] 
**awaitsActivation** | **Boolean** | If &#x60;true&#x60;, the loyalty points remain pending until a specific action is complete. The &#x60;startDate&#x60; parameter automatically sets to &#x60;on_action&#x60;.  | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, calculated relative to the  activation date.    **Note**: This value is returned only if &#x60;awaitsActivation&#x60; is &#x60;true&#x60;  and &#x60;expiryDate&#x60; is not set.  | [optional] 


