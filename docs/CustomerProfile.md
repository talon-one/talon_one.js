# TalonOne.CustomerProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrationId** | **String** | The integration ID for this entity sent to and used in the Talon.One system. | 
**created** | **Date** | The exact moment this entity was created. | 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item | 
**accountId** | **Number** | The ID of the Talon.One account that owns this profile. | 
**closedSessions** | **Number** | The total amount of closed sessions by a customer. A closed session is a successful purchase. | 
**totalSales** | **Number** | Sum of all purchases made by this customer | 
**loyaltyMemberships** | [**[LoyaltyMembership]**](LoyaltyMembership.md) | A list of loyalty programs joined by the customer | [optional] 
**audienceMemberships** | [**[AudienceMembership]**](AudienceMembership.md) | A list of audiences the customer belongs to | [optional] 
**lastActivity** | **Date** | Timestamp of the most recent event received from this customer | 


