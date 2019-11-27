# TalonOne.NewSamlConnection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | ID of the SAML service. | 
**enabled** | **Boolean** | Determines if this SAML connection active. | 
**issuer** | **String** | Identity Provider Entity ID. | 
**signOnURL** | **String** | Single Sign-On URL. | 
**signOutURL** | **String** | Single Sign-Out URL. | [optional] 
**metadataURL** | **String** | Metadata URL. | [optional] 
**x509certificate** | **String** | X.509 Certificate. | 
**audience** | **String** | The application-defined unique identifier that is the intended audience of the SAML assertion.  This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used.  | [optional] 


