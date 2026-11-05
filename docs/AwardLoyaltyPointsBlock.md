# TalonOne.AwardLoyaltyPointsBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**name** | **String** | The human-readable label attached to the awarded points. | 
**program** | [**AwardLoyaltyPointsBlockProgram**](AwardLoyaltyPointsBlockProgram.md) |  | 
**recipient** | **String** | The customer profile that receives the points. &#x60;Current&#x60; targets the customer in the current session; &#x60;Advocate&#x60; targets the person who invited their friend via referral program. | 
**subledger** | **String** | The name of the subledger to add points to. Can be empty if this block adds points to the loyalty program&#39;s main ledger instead of a subledger. | 
**target** | [**Object**](.md) | Identifies the scope over which loyalty points are awarded. The &#x60;type&#x60; field selects the target variant. | 
**value** | [**Object**](.md) | Number of points to award. Either a numeric scalar or a &#x60;{{expression}}&#x60; string that resolves to a number at evaluation time. | 
**partial** | **Boolean** | When &#x60;true&#x60;, applies a partial points reward when the requested value exceeds the configured budget. | [optional] 
**awaitsActivation** | **Boolean** | When &#x60;true&#x60;, the awarded points require manual or delayed activation before becoming active. Mutually exclusive with &#x60;startDate&#x60;. | [optional] 
**startDate** | [**Object**](.md) | Timestamp at which the awarded points become active. Mutually exclusive with &#x60;awaitsActivation&#x60;. | [optional] 
**validityDuration** | **String** | Relative duration (e.g. &#x60;30D&#x60;) after which the awarded points expire. Mutually exclusive with &#x60;expiryDate&#x60;. | [optional] 
**expiryDate** | [**Object**](.md) | Timestamp at which the awarded points expire. Mutually exclusive with &#x60;validityDuration&#x60;. | [optional] 
**pendingDuration** | **String** | Relative duration (e.g. &#x60;3D&#x60;) the awarded points remain pending before activation. | [optional] 



## Enum: RecipientEnum


* `Current` (value: `"Current"`)

* `Advocate` (value: `"Advocate"`)




