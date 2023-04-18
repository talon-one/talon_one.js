# TalonOne.Giveaway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**code** | **String** | The code value of this giveaway. | 
**poolId** | **Number** | The ID of the pool to return giveaway codes from. | 
**startDate** | **Date** | Timestamp at which point the giveaway becomes valid. | [optional] 
**endDate** | **Date** | Timestamp at which point the giveaway becomes invalid. | [optional] 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this giveaway. | [optional] 
**used** | **Boolean** | Indicates whether this giveaway code was given before. | [optional] 
**importId** | **Number** | The ID of the Import which created this giveaway. | [optional] 
**profileIntegrationId** | **String** | The third-party integration ID of the customer profile that was awarded the giveaway, if the giveaway was awarded. | [optional] 
**profileId** | **Number** | The internal ID of the customer profile that was awarded the giveaway, if the giveaway was awarded and an internal ID exists. | [optional] 


