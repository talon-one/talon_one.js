# TalonOne.EventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationIds** | **[Number]** | The IDs of the applications that are related to this entity. | 
**title** | **String** | The human-friendly display name for this event type. Use a short, past-tense, description of the event. | 
**name** | **String** | The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created. | 
**description** | **String** | An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  &gt; The \&quot;Payment Accepted\&quot; event is triggered after successful processing of a payment by our payment gateway.  | 
**mimeType** | **String** | This defines how the request payload will be parsed before your handler code is run. | 
**examplePayload** | **String** | It is often helpful to include an example payload with the event type definition for documentation purposes. | [optional] 
**schema** | [**Object**](.md) | It is strongly recommended to define a JSON schema that will be used to perform structural validation of request payloads after parsing.  | [optional] 
**handlerLanguage** | **String** | The language of the handler code. Currently only &#x60;\&quot;talang\&quot;&#x60; is supported. | [optional] 
**handler** | **String** | Code that will be run after successful parsing &amp; validation of the payload for this event. This code _may_ choose to evaluate campaign rules.  | 
**version** | **Number** | The version of this event type. When updating an existing event type this must be **exactly** &#x60;currentVersion + 1&#x60;.  | 



## Enum: MimeTypeEnum


* `application/json` (value: `"application/json"`)

* `application/x-www-form-urlencoded` (value: `"application/x-www-form-urlencoded"`)

* `none` (value: `"none"`)





## Enum: HandlerLanguageEnum


* `talang` (value: `"talang"`)




