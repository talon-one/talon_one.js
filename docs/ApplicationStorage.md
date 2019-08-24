# TalonOne.ApplicationStorage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**modified** | **Date** | The exact moment this entity was last modified. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**name** | **String** | Identifier for the information to be saved, e.g. \&quot;Loyalty points for SKU\&quot;. | 
**datatype** | **Object** | A JSON Schema describing the information to be saved in the storage | 
**description** | **String** | Description of the application store | [optional] 
**usedAt** | **[String]** | array of rulesets where the application storage is used | 


