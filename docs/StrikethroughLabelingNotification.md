# TalonOne.StrikethroughLabelingNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | The version of the strikethrough pricing notification. | [optional] 
**validFrom** | **Date** | Timestamp at which the strikethrough pricing update becomes valid. Set for **scheduled** strikethrough pricing updates (version: v2) only.  | [optional] 
**applicationId** | **Number** | The ID of the Application to which the catalog items labels belongs. | 
**currentBatch** | **Number** | The batch number of the notification. Notifications might be sent in different batches. | 
**totalBatches** | **Number** | The total number of batches for the notification. | 
**trigger** | [**StrikethroughTrigger**](StrikethroughTrigger.md) |  | 
**changedItems** | [**[StrikethroughChangedItem]**](StrikethroughChangedItem.md) |  | 
**notificationType** | **String** | The type of the notification | 



## Enum: VersionEnum


* `v2` (value: `"v2"`)




