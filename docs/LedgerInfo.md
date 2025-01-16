# TalonOne.LedgerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentBalance** | **Number** | Sum of currently active points. | 
**pendingBalance** | **Number** | Sum of pending points. | 
**expiredBalance** | **Number** | **DEPRECATED** Value is shown as 0.  | 
**spentBalance** | **Number** | **DEPRECATED** Value is shown as 0.  | 
**tentativeCurrentBalance** | **Number** | The tentative points balance, reflecting the &#x60;currentBalance&#x60; and all point additions and deductions within the current open customer session. When the session is closed, the effects are applied and the &#x60;currentBalance&#x60; is updated to this value.  **Note:** Tentative balances are specific to the current session and do not take into account other open sessions for the given customer.  | 
**tentativePendingBalance** | **Number** | The tentative points balance, reflecting the &#x60;pendingBalance&#x60; and all point additions with a future activation date within the current open customer session. When the session is closed, the effects are applied and the &#x60;pendingBalance&#x60; is updated to this value.  **Note:** Tentative balances are specific to the current session and do not take into account other open sessions for the given customer.  | [optional] 
**currentTier** | [**Tier**](Tier.md) |  | [optional] 
**pointsToNextTier** | **Number** | Points required to move up a tier. | [optional] 


