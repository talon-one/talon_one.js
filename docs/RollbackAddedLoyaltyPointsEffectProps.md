# TalonOne.RollbackAddedLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | The ID of the loyalty program where the points were originally added | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were originally added | 
**value** | **Number** | The amount of points that were rolled back | 
**recipientIntegrationId** | **String** | The user for whom these points were originally added | 
**transactionUUID** | **String** | The identifier of &#39;deduction&#39; entry added to the ledger as the &#x60;addLoyaltyPoints&#x60; effect is rolled back. | 
**cartItemPosition** | **Number** | The index of the item in the cart items for which the loyalty points were rolled back. | [optional] 
**cartItemSubPosition** | **Number** | The sub-position is returned when [cart item flattening](https://docs.talon.one/docs/product/campaigns/campaign-evaluation/#flattened-cart-items) is enabled. It indicates to which item the loyalty points were rolled back, for cart items with &#x60;quantity&#x60; &gt; 1.  | [optional] 
**cardIdentifier** | **String** | The card on which these points were originally added. | [optional] 


