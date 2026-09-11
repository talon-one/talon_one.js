# TalonOne.Bundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An identifier derived from the bundle content. | 
**name** | **String** | The name of the bundle. | 
**type** | **String** | A binding of type &#x60;bundle&#x60;. | 
**sources** | **[String]** | The selector sources of bundle items. Each source is expressed as a &#x60;{{$selectorName}}&#x60; reference. | 
**counts** | **[Number]** | The number of items to retrieve from each corresponding source in &#x60;sources&#x60;. | 
**matchers** | **[String]** | Attribute names that the bundled items must share. | [optional] 



## Enum: TypeEnum


* `bundle` (value: `"bundle"`)




