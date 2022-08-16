# TalonOne.Giveaway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints. | 
**created** | **Date** | The exact moment this entity was created. | 
**code** | **String** | The code value of this giveaway. | 
**poolId** | **Number** | The ID of the pool to return giveaway codes from. | 
**startDate** | **Date** | Timestamp at which point the giveaway becomes valid. | [optional] 
**endDate** | **Date** | Timestamp at which point the giveaway becomes invalid. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this giveaway. | [optional] 
**used** | **Boolean** | Indicates whether this giveaway code was given before. | [optional] 
**importId** | **Number** | The ID of the Import which created this giveaway. | [optional] 


