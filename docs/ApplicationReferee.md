# TalonOne.ApplicationReferee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**sessionId** | **String** | Integration ID of the session in which the customer redeemed the referral. | 
**advancedEventIntegrationId** | **String** | The unique ID of the advanced event in which the customer redeemed the referral. Omitted when the referral was redeemed through a customer session rather than an advanced event. | [optional] 
**advocateIntegrationId** | **String** | Integration ID of the Advocate&#39;s Profile. | 
**friendIntegrationId** | **String** | Integration ID of the Friend&#39;s Profile. | 
**code** | **String** | Advocate&#39;s referral code. | 
**created** | **Date** | Timestamp of the moment the customer redeemed the referral. | 


