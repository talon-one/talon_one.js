# TalonOne.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | The name of this application. | 
**description** | **String** | A longer description of the application. | [optional] 
**timezone** | **String** | A string containing an IANA timezone descriptor. | 
**currency** | **String** | A string describing a default currency for new customer sessions. | 
**caseSensitivity** | **String** | A string indicating how should campaigns in this application deal with case sensitivity on coupon codes. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this campaign | [optional] 
**limits** | [**[LimitConfig]**](LimitConfig.md) | Default limits for campaigns created in this application | [optional] 
**campaignPriority** | **String** | Default priority for campaigns created in this application, can be one of (universal, stackable, exclusive) | [optional] 
**attributesSettings** | [**AttributesSettings**](AttributesSettings.md) |  | [optional] 
**loyaltyPrograms** | [**[LoyaltyProgram]**](LoyaltyProgram.md) | An array containing all the loyalty programs to which this application is subscribed | 



## Enum: CaseSensitivityEnum


* `sensitive` (value: `"sensitive"`)

* `insensitive-uppercase` (value: `"insensitive-uppercase"`)

* `insensitive-lowercase` (value: `"insensitive-lowercase"`)





## Enum: CampaignPriorityEnum


* `universal` (value: `"universal"`)

* `stackable` (value: `"stackable"`)

* `exclusive` (value: `"exclusive"`)




