# TalonOne.ApplicationEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**profileId** | **Number** | The globally unique Talon.One ID of the customer that created this entity. | [optional] 
**sessionId** | **Number** | The globally unique Talon.One ID of the session that contains this event. | [optional] 
**type** | **String** | A string representing the event. Must not be a reserved event name. | 
**attributes** | [**Object**](.md) | Additional JSON serialized data associated with the event. | 
**effects** | **[Object]** | An array containing the effects that were applied as a result of this event. | 
**ruleFailureReasons** | [**[RuleFailureReason]**](RuleFailureReason.md) | An array containing the rule failure reasons which happened during this event. | [optional] 


