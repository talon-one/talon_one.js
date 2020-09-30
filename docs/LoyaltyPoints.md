# TalonOne.LoyaltyPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Amount of loyalty points | 
**name** | **String** | Allows to specify a name for the addition or deduction | [optional] 
**validityDuration** | **String** | Indicates the duration after which the added loyalty points should expire. The format is a number followed by one letter indicating the time unit, like &#39;1h&#39; or &#39;40m&#39; (defined by Go time package). | [optional] 
**pendingDuration** | **String** | Indicates the amount of time before the points are considered valid. The format is a number followed by one letter indicating the time unit, like &#39;1h&#39; or &#39;40m&#39; (defined by Go time package). | [optional] 
**subLedgerID** | **String** | This specifies if we are adding loyalty points to the main ledger or a subledger | [optional] 


