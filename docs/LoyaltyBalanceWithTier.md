# TalonOne.LoyaltyBalanceWithTier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activePoints** | **Number** | Total amount of points awarded to this customer and available to spend. | [optional] 
**pendingPoints** | **Number** | Total amount of points awarded to this customer but not available until their start date. | [optional] 
**spentPoints** | **Number** | Total amount of points already spent by this customer. | [optional] 
**expiredPoints** | **Number** | Total amount of points awarded but never redeemed. They cannot be used anymore. | [optional] 
**currentTier** | [**Tier**](Tier.md) |  | [optional] 
**projectedTier** | [**ProjectedTier**](ProjectedTier.md) |  | [optional] 
**pointsToNextTier** | **Number** | The number of points required to move up a tier. | [optional] 
**nextTierName** | **String** | The name of the tier consecutive to the current tier. | [optional] 


