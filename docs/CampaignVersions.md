# TalonOne.CampaignVersions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revisionFrontendState** | **String** | The campaign revision state displayed in the Campaign Manager. | [optional] 
**activeRevisionId** | **Number** | ID of the revision that was last activated on this campaign.  | [optional] 
**activeRevisionVersionId** | **Number** | ID of the revision version that is active on the campaign.  | [optional] 
**version** | **Number** | Incrementing number representing how many revisions have been activated on this campaign, starts from 0 for a new campaign.  | [optional] 
**currentRevisionId** | **Number** | ID of the revision currently being modified for the campaign.  | [optional] 
**currentRevisionVersionId** | **Number** | ID of the latest version applied on the current revision.  | [optional] 
**stageRevision** | **Boolean** | Flag for determining whether we use current revision when sending requests with staging API key.  | [optional] [default to false]



## Enum: RevisionFrontendStateEnum


* `revised` (value: `"revised"`)

* `pending` (value: `"pending"`)




