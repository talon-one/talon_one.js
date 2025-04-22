# TalonOne.LoyaltySubLedger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** | **DEPRECATED** Use &#x60;totalActivePoints&#x60; property instead. Total amount of currently active and available points in the customer&#39;s balance.  | 
**totalActivePoints** | **Number** | Total amount of currently active and available points in the customer&#39;s balance. | 
**totalPendingPoints** | **Number** | Total amount of pending points, which are not active yet but will become active in the future. | 
**totalSpentPoints** | **Number** | Total amount of points already spent by this customer. | 
**totalExpiredPoints** | **Number** | Total amount of points, that expired without ever being spent. | 
**totalNegativePoints** | **Number** | Total amount of negative points. This implies that &#x60;totalActivePoints&#x60; is &#x60;0&#x60;. | 
**transactions** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | List of all events that have happened such as additions, subtractions and expiries. | [optional] 
**expiringPoints** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | List of all points that will expire. | [optional] 
**activePoints** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | List of all currently active points. | [optional] 
**pendingPoints** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | List of all points pending activation. | [optional] 
**expiredPoints** | [**[LoyaltyLedgerEntry]**](LoyaltyLedgerEntry.md) | List of expired points. | [optional] 
**currentTier** | [**Tier**](Tier.md) |  | [optional] 


