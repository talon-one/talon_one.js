# TalonOne.AddLoyaltyPointsEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The reason of this loyalty point addition. | 
**programId** | **Number** | The ID of the loyalty program where these points were added. | 
**subLedgerId** | **String** | The ID of the subledger within the loyalty program where these points were added. | 
**value** | **Number** | The amount of points that were added. | 
**desiredValue** | **Number** | (Partial rewards enabled only) The amount of loyalty points to be awarded without considering budget limitations. | [optional] 
**recipientIntegrationId** | **String** | The user for whom these points were added. | 
**startDate** | **Date** | The date after which the added points will be valid. | [optional] 
**expiryDate** | **Date** | The date after which the added points will expire. | [optional] 
**transactionUUID** | **String** | The identifier of this loyalty point transaction. | 
**cartItemPosition** | **Number** | (_Add points per cart item_ only.) The index of the item in the &#x60;cartItem&#x60; object for which these points were added. | [optional] 
**cartItemSubPosition** | **Number** | (_Add points per cart item_ ) The index of the item unit in its line item. | [optional] 
**cardIdentifier** | **String** | The identifier of the loyalty card, which must match the regular expression &#x60;^[A-Za-z0-9._%+@-]+$&#x60;.  | [optional] 
**bundleIndex** | **Number** | _(With bundles only)_ The position of the specific bundle in the list of bundles created from the same bundle definition. | [optional] 
**bundleName** | **String** | _(With bundles only)_ The name of the bundle definition. | [optional] 
**awaitsActivation** | **Boolean** | Indicates whether the points have an action-based start date. This property is returned only for point transactions with an action-based start date. | [optional] 
**validityDuration** | **String** | The duration for which the points remain active, calculated relative to their start date. | [optional] 


