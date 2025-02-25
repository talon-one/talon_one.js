# TalonOne.CouponsNotificationPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Notification name. | 
**scopes** | **[String]** |  | 
**batchingEnabled** | **Boolean** | Indicates whether batching is activated. | [optional] [default to true]
**includeData** | **Boolean** | Indicates whether to include all generated coupons. If &#x60;false&#x60;, only the &#x60;batchId&#x60; of the generated coupons is included. | [optional] 
**batchSize** | **Number** | The required size of each batch of data. This value applies only when &#x60;batchingEnabled&#x60; is &#x60;true&#x60;. | [optional] 



## Enum: [ScopesEnum]


* `all` (value: `"all"`)

* `campaign_manager` (value: `"campaign_manager"`)

* `management_api` (value: `"management_api"`)

* `rule_engine` (value: `"rule_engine"`)




