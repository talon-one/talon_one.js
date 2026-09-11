# TalonOne.CheckBudgetBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | The comparison operator applied to the limit. &#x60;available&#x60; checks if there is budget available for a given limitable action; &#x60;enoughFor&#x60; checks if the available budget meets or exceeds a specific value limit. | 
**action** | **String** | The limitable action to check. | 
**value** | **Number** | The value to check against when using the &#x60;enoughFor&#x60; operator. | [optional] 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `available` (value: `"available"`)

* `enoughFor` (value: `"enoughFor"`)





## Enum: ActionEnum


* `redeemCoupon` (value: `"redeemCoupon"`)

* `redeemReferral` (value: `"redeemReferral"`)

* `setDiscount` (value: `"setDiscount"`)

* `createCoupon` (value: `"createCoupon"`)

* `createReferral` (value: `"createReferral"`)

* `setDiscountEffect` (value: `"setDiscountEffect"`)

* `createLoyaltyPoints` (value: `"createLoyaltyPoints"`)

* `createLoyaltyPointsEffect` (value: `"createLoyaltyPointsEffect"`)

* `redeemLoyaltyPoints` (value: `"redeemLoyaltyPoints"`)

* `redeemLoyaltyPointsEffect` (value: `"redeemLoyaltyPointsEffect"`)

* `awardGiveaway` (value: `"awardGiveaway"`)

* `addFreeItemEffect` (value: `"addFreeItemEffect"`)

* `customEffect` (value: `"customEffect"`)

* `callApi` (value: `"callApi"`)




