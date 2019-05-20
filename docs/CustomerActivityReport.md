# TalononeApi.CustomerActivityReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrationId** | **String** | The ID used for this entity in the application system. | 
**created** | **Date** | The exact moment this entity was created. | 
**name** | **String** | The name for this customer profile. | 
**customerId** | **Number** | The internal Talon.One ID of the customer. | 
**lastActivity** | **Date** | The last activity of the customer. | [optional] 
**couponRedemptions** | **Number** | Number of coupon redemptions in all customer campaigns. | 
**couponUseAttempts** | **Number** | Number of coupon use attempts in all customer campaigns. | 
**couponFailedAttempts** | **Number** | Number of failed coupon use attempts in all customer campaigns. | 
**accruedDiscounts** | **Number** | Number of accrued discounts in all customer campaigns. | 
**accruedRevenue** | **Number** | Amount of accrued revenue in all customer campaigns. | 
**totalOrders** | **Number** | Number of orders in all customer campaigns. | 
**totalOrdersNoCoupon** | **Number** | Number of orders without coupon used in all customer campaigns. | 
**campaignName** | **String** | The name of the campaign this customer belongs to. | 


