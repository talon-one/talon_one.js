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
**cartItemSubPosition** | **Number** | The sub position is triggered when application flattening is enabled. It indicates to which item the loyalty points addition applies, for cart items with &#x60;quantity&#x60; &gt; 1.  | [optional] 
**cardIdentifier** | **String** | The alphanumeric identifier of the loyalty card.  | [optional] 
**bundleIndex** | **Number** | The position of the bundle in a list of item bundles created from the same bundle definition. | [optional] 
**bundleName** | **String** | The name of the bundle definition. | [optional] 


