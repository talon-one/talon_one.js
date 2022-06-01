# TalonOne.NewApplicationAPIKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Title for API Key | 
**expires** | **Date** | The date the API key expired | 
**platform** | **String** | The third-party platform the API key is valid for. Use &#x60;none&#x60; for a generic API key to be used from your own integration layer.  | [optional] 
**id** | **Number** | ID of the API Key | 
**createdBy** | **Number** | ID of user who created | 
**accountID** | **Number** | ID of account the key is used for | 
**applicationID** | **Number** | ID of application the key is used for | 
**created** | **Date** | The date the API key was created | 
**key** | **String** | The API key | 



## Enum: PlatformEnum


* `none` (value: `"none"`)

* `segment` (value: `"segment"`)

* `braze` (value: `"braze"`)

* `mparticle` (value: `"mparticle"`)

* `selligent` (value: `"selligent"`)

* `iterable` (value: `"iterable"`)

* `customer_engagement` (value: `"customer_engagement"`)

* `customer_data` (value: `"customer_data"`)




