# TalonOne.Attribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**entity** | **String** | The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an &#x60;attributes&#x60; object with keys corresponding to the &#x60;name&#x60; of the custom attributes for that type. | 
**eventType** | **String** |  | [optional] 
**name** | **String** | The attribute name that will be used in API requests and Talang. E.g. if &#x60;name &#x3D;&#x3D; \&quot;region\&quot;&#x60; then you would set the region attribute by including an &#x60;attributes.region&#x60; property in your request payload. | 
**title** | **String** | The human-readable name for the attribute that will be shown in the Campaign Manager. Like &#x60;name&#x60;, the combination of entity and title must also be unique. | 
**type** | **String** | The data type of the attribute, a &#x60;time&#x60; attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format. | 
**description** | **String** | A description of this attribute. | 
**suggestions** | **[String]** | A list of suggestions for the attribute. | 
**hasAllowedList** | **Boolean** | Whether or not this attribute has an allowed list of values associated with it. | [optional] [default to false]
**restrictedBySuggestions** | **Boolean** | Whether or not this attribute&#39;s value is restricted by suggestions (&#x60;suggestions&#x60; property) or by an allowed list of value (&#x60;hasAllowedList&#x60; property).  | [optional] [default to false]
**editable** | **Boolean** | Whether or not this attribute can be edited. | 
**subscribedApplicationsIds** | **[Number]** | A list of the IDs of the applications that are subscribed to this attribute | [optional] 
**eventTypeId** | **Number** |  | [optional] 



## Enum: EntityEnum


* `Account` (value: `"Account"`)

* `Application` (value: `"Application"`)

* `Campaign` (value: `"Campaign"`)

* `CustomerProfile` (value: `"CustomerProfile"`)

* `CustomerSession` (value: `"CustomerSession"`)

* `CartItem` (value: `"CartItem"`)

* `Coupon` (value: `"Coupon"`)

* `Event` (value: `"Event"`)

* `Giveaway` (value: `"Giveaway"`)

* `Referral` (value: `"Referral"`)





## Enum: TypeEnum


* `string` (value: `"string"`)

* `number` (value: `"number"`)

* `boolean` (value: `"boolean"`)

* `time` (value: `"time"`)

* `(list string)` (value: `"(list string)"`)

* `(list number)` (value: `"(list number)"`)

* `(list time)` (value: `"(list time)"`)

* `location` (value: `"location"`)

* `(list location)` (value: `"(list location)"`)




