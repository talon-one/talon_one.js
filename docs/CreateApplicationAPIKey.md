# TalonOne.CreateApplicationAPIKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Title of the API key. | 
**expires** | **Date** | The date the API key expires. | 
**platform** | **String** | The third-party platform the API key is valid for. Use &#x60;none&#x60; for a generic API key to be used from your own integration layer.  | [optional] 
**type** | **String** | The API key type. Can be empty or &#x60;staging&#x60;.  Staging API keys can only be used for dry requests with the [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) endpoint, [Update customer profile](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint, and [Track event](https://docs.talon.one/integration-api#tag/Events/operation/trackEventV2) endpoint.  When using the _Update customer profile_ endpoint with a staging API key, the query parameter &#x60;runRuleEngine&#x60; must be &#x60;true&#x60;.  | [optional] 
**timeOffset** | **Number** | A time offset in nanoseconds associated with the API key. When making a request using the API key, rule evaluation is based on a date that is calculated by adding the offset to the current date.  | [optional] 



## Enum: PlatformEnum


* `none` (value: `"none"`)

* `segment` (value: `"segment"`)

* `braze` (value: `"braze"`)

* `mparticle` (value: `"mparticle"`)

* `shopify` (value: `"shopify"`)

* `iterable` (value: `"iterable"`)

* `customer_engagement` (value: `"customer_engagement"`)

* `customer_data` (value: `"customer_data"`)

* `salesforce` (value: `"salesforce"`)

* `emarsys` (value: `"emarsys"`)





## Enum: TypeEnum


* `staging` (value: `"staging"`)




