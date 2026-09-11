# TalonOne.RollbackAddedLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **Number** | The ID of the loyalty program where these points were rolled back. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were rolled back. | 
**value** | **Number** | The amount of points that were rolled back. | 
**recipientIntegrationId** | **String** | The user for whom these points were rolled back. | 
**transactionUUID** | **String** | The identifier of this loyalty point transaction. | 
**cartItemPosition** | **Number** | (_Add points per cart item_ only.) The index of the item in the &#x60;cartItem&#x60; object for which these points were rolled back. | [optional] 
**cartItemSubPosition** | **Number** | (_Add points per cart item_ ) The index of the item unit in its line item. | [optional] 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 


