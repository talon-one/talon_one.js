# TalonOne.Reward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**accountId** | **Number** | The ID of the account that owns this entity. | 
**name** | **String** | The name of the reward. | 
**apiName** | **String** | A unique identifier used to reference the reward in API integrations. | 
**description** | **String** | A description of the reward. | [optional] 
**applicationIds** | **[Number]** | The IDs of the Applications this reward is connected to.   **Note**: Currently, a reward can only be connected to one Application.  | 
**sandbox** | **Boolean** | Indicates if this is a live or sandbox reward. Rewards of a given type can only be connected to Applications of the same type. | 
**status** | **String** | The status of the reward. | 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




