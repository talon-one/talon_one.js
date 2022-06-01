/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NewSamlConnection model module.
 * @module model/NewSamlConnection
 * @version 4.5.0
 */
class NewSamlConnection {
    /**
     * Constructs a new <code>NewSamlConnection</code>.
     * 
     * @alias module:model/NewSamlConnection
     * @param x509certificate {String} X.509 Certificate.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param issuer {String} Identity Provider Entity ID.
     * @param signOnURL {String} Single Sign-On URL.
     */
    constructor(x509certificate, accountId, name, enabled, issuer, signOnURL) { 
        
        NewSamlConnection.initialize(this, x509certificate, accountId, name, enabled, issuer, signOnURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, x509certificate, accountId, name, enabled, issuer, signOnURL) { 
        obj['x509certificate'] = x509certificate;
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['enabled'] = enabled;
        obj['issuer'] = issuer;
        obj['signOnURL'] = signOnURL;
    }

    /**
     * Constructs a <code>NewSamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSamlConnection} obj Optional instance to populate.
     * @return {module:model/NewSamlConnection} The populated <code>NewSamlConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewSamlConnection();

            if (data.hasOwnProperty('x509certificate')) {
                obj['x509certificate'] = ApiClient.convertToType(data['x509certificate'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('signOnURL')) {
                obj['signOnURL'] = ApiClient.convertToType(data['signOnURL'], 'String');
            }
            if (data.hasOwnProperty('signOutURL')) {
                obj['signOutURL'] = ApiClient.convertToType(data['signOutURL'], 'String');
            }
            if (data.hasOwnProperty('metadataURL')) {
                obj['metadataURL'] = ApiClient.convertToType(data['metadataURL'], 'String');
            }
            if (data.hasOwnProperty('audienceURI')) {
                obj['audienceURI'] = ApiClient.convertToType(data['audienceURI'], 'String');
            }
        }
        return obj;
    }


}

/**
 * X.509 Certificate.
 * @member {String} x509certificate
 */
NewSamlConnection.prototype['x509certificate'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
NewSamlConnection.prototype['accountId'] = undefined;

/**
 * ID of the SAML service.
 * @member {String} name
 */
NewSamlConnection.prototype['name'] = undefined;

/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */
NewSamlConnection.prototype['enabled'] = undefined;

/**
 * Identity Provider Entity ID.
 * @member {String} issuer
 */
NewSamlConnection.prototype['issuer'] = undefined;

/**
 * Single Sign-On URL.
 * @member {String} signOnURL
 */
NewSamlConnection.prototype['signOnURL'] = undefined;

/**
 * Single Sign-Out URL.
 * @member {String} signOutURL
 */
NewSamlConnection.prototype['signOutURL'] = undefined;

/**
 * Metadata URL.
 * @member {String} metadataURL
 */
NewSamlConnection.prototype['metadataURL'] = undefined;

/**
 * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
 * @member {String} audienceURI
 */
NewSamlConnection.prototype['audienceURI'] = undefined;






export default NewSamlConnection;

