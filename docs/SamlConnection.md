# TalonOne.SamlConnection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**created** | **Date** | Unix timestamp indicating when the session was first created. | 
**accountId** | **Number** | The ID of the account that owns this SAML Service. | 
**assertionConsumerServiceURL** | **String** | The location where the SAML assertion is sent with a HTTP POST. | 
**name** | **String** | ID of the SAML service. | 
**enabled** | **Boolean** | Determines if this SAML connection active. | 
**issuer** | **String** | Identity Provider Entity ID. | 
**signOnURL** | **String** | Single Sign-On URL. | 
**signOutURL** | **String** | Single Sign-Out URL. | [optional] 
**metadataURL** | **String** | Metadata URL. | [optional] 
**x509certificate** | **String** | X.509 Certificate. | 
**audience** | **String** | The application-defined unique identifier that is the intended audience of the SAML assertion.  This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used.  | 


