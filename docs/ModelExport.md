# TalonOne.ModelExport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**userId** | **Number** | The ID of the account that owns this entity. | 
**entity** | **String** | The name of the entity that was exported. | 
**filter** | [**Object**](.md) | Map of keys and values that were used to filter the exported rows. | 



## Enum: EntityEnum


* `Coupon` (value: `"Coupon"`)

* `Referral` (value: `"Referral"`)

* `Effect` (value: `"Effect"`)

* `CustomerSession` (value: `"CustomerSession"`)

* `LoyaltyLedger` (value: `"LoyaltyLedger"`)

* `LoyaltyLedgerLog` (value: `"LoyaltyLedgerLog"`)

* `Collection` (value: `"Collection"`)




