# TalonOne.BulkOperationOnCampaigns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **String** | The operation to perform on the specified campaign IDs.  | 
**campaignIds** | **[Number]** | The list of campaign IDs on which the operation will be performed. | 
**activateAt** | **Date** | Timestamp when the revisions are finalized after the &#x60;activate_revision&#x60; operation. The current time is used when left blank.  **Note:** It must be an RFC3339 timestamp string.  | [optional] 



## Enum: OperationEnum


* `disable` (value: `"disable"`)

* `delete` (value: `"delete"`)

* `activate_revision` (value: `"activate_revision"`)




