# TalonOne.LibraryAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **String** | The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an &#x60;attributes&#x60; object with keys corresponding to the &#x60;name&#x60; of the custom attributes for that type. | 
**name** | **String** | The attribute name that will be used in API requests and Talang. E.g. if &#x60;name &#x3D;&#x3D; \&quot;region\&quot;&#x60; then you would set the region attribute by including an &#x60;attributes.region&#x60; property in your request payload.  | 
**title** | **String** | The human-readable name for the attribute that will be shown in the Campaign Manager. Like &#x60;name&#x60;, the combination of entity and title must also be unique. | 
**type** | **String** | The data type of the attribute, a &#x60;time&#x60; attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format. | 
**description** | **String** | A description of the attribute. | 
**presets** | **[String]** | The presets that indicate to which industry the attribute applies to. | 
**suggestions** | **[String]** | Short suggestions that are used to group attributes. | 



## Enum: EntityEnum


* `Application` (value: `"Application"`)

* `Campaign` (value: `"Campaign"`)

* `CustomerProfile` (value: `"CustomerProfile"`)

* `CustomerSession` (value: `"CustomerSession"`)

* `CartItem` (value: `"CartItem"`)

* `Coupon` (value: `"Coupon"`)

* `Event` (value: `"Event"`)





## Enum: TypeEnum


* `string` (value: `"string"`)

* `number` (value: `"number"`)

* `boolean` (value: `"boolean"`)

* `time` (value: `"time"`)




