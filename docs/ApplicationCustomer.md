# TalonOne.ApplicationCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. The time this entity was created. The time this entity was created. The time this entity was created. | 
**integrationId** | **String** | The integration ID set by your integration layer. The integration ID set by your integration layer. | 
**attributes** | [**Object**](.md) | Arbitrary properties associated with this item. | 
**accountId** | **Number** | The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile. | 
**closedSessions** | **Number** | The total amount of closed sessions by a customer. A closed session is a successful purchase. | 
**totalSales** | **Number** | The total amount of money spent by the customer **before** discounts are applied.  The total sales amount excludes the following: - Cancelled or reopened sessions. - Returned items.  | 
**loyaltyMemberships** | [**[LoyaltyMembership]**](LoyaltyMembership.md) | **DEPRECATED** A list of loyalty programs joined by the customer.  | [optional] 
**audienceMemberships** | [**[AudienceMembership]**](AudienceMembership.md) | The audiences the customer belongs to. | [optional] 
**lastActivity** | **Date** | Timestamp of the most recent event received from this customer. This field is updated on calls that trigger the Rule Engine and that are not [dry requests](https://docs.talon.one/docs/dev/integration-api/dry-requests/#overlay).  For example, [reserving a coupon](https://docs.talon.one/integration-api#operation/createCouponReservation) for a customer doesn&#39;t impact this field.  | 
**sandbox** | **Boolean** | Shows whether the customer is part of a sandbox or live Application. See the [docs](https://docs.talon.one/docs/product/applications/overview#application-environments).  | [optional] 
**advocateIntegrationId** | **String** | The Integration ID of the Customer Profile that referred this Customer in the Application. | [optional] 


