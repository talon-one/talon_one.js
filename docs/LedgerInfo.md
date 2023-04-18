# TalonOne.LedgerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentBalance** | **Number** | Sum of currently active points. | 
**pendingBalance** | **Number** | Sum of pending points. | 
**expiredBalance** | **Number** | **DEPRECATED** Value is shown as 0.  | 
**spentBalance** | **Number** | **DEPRECATED** Value is shown as 0.  | 
**tentativeCurrentBalance** | **Number** | Sum of the tentative active points (including additions and deductions) inside the currently open session. The &#x60;currentBalance&#x60; is updated to this value when you close the session, and the effects are applied. | 
**tentativePendingBalance** | **Number** | Sum of pending points (including additions and deductions) inside the currently open session. The &#x60;pendingBalance&#x60; is updated to this value when you close the session, and the effects are applied. | [optional] 
**currentTier** | [**Tier**](Tier.md) |  | [optional] 
**pointsToNextTier** | **Number** | Points required to move up a tier. | [optional] 


