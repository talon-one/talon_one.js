/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SamlConnection model module.
 * @module model/SamlConnection
 * @version 5.0.0
 */
class SamlConnection {
    /**
     * Constructs a new <code>SamlConnection</code>.
     * 
     * @alias module:model/SamlConnection
     * @param assertionConsumerServiceURL {String} The location where the SAML assertion is sent with a HTTP POST.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param issuer {String} Identity Provider Entity ID.
     * @param signOnURL {String} Single Sign-On URL.
     * @param audienceURI {String} The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     */
    constructor(assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created) { 
        
        SamlConnection.initialize(this, assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assertionConsumerServiceURL, accountId, name, enabled, issuer, signOnURL, audienceURI, id, created) { 
        obj['assertionConsumerServiceURL'] = assertionConsumerServiceURL;
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['enabled'] = enabled;
        obj['issuer'] = issuer;
        obj['signOnURL'] = signOnURL;
        obj['audienceURI'] = audienceURI;
        obj['id'] = id;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>SamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlConnection} obj Optional instance to populate.
     * @return {module:model/SamlConnection} The populated <code>SamlConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SamlConnection();

            if (data.hasOwnProperty('assertionConsumerServiceURL')) {
                obj['assertionConsumerServiceURL'] = ApiClient.convertToType(data['assertionConsumerServiceURL'], 'String');
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The location where the SAML assertion is sent with a HTTP POST.
 * @member {String} assertionConsumerServiceURL
 */
SamlConnection.prototype['assertionConsumerServiceURL'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
SamlConnection.prototype['accountId'] = undefined;

/**
 * ID of the SAML service.
 * @member {String} name
 */
SamlConnection.prototype['name'] = undefined;

/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */
SamlConnection.prototype['enabled'] = undefined;

/**
 * Identity Provider Entity ID.
 * @member {String} issuer
 */
SamlConnection.prototype['issuer'] = undefined;

/**
 * Single Sign-On URL.
 * @member {String} signOnURL
 */
SamlConnection.prototype['signOnURL'] = undefined;

/**
 * Single Sign-Out URL.
 * @member {String} signOutURL
 */
SamlConnection.prototype['signOutURL'] = undefined;

/**
 * Metadata URL.
 * @member {String} metadataURL
 */
SamlConnection.prototype['metadataURL'] = undefined;

/**
 * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
 * @member {String} audienceURI
 */
SamlConnection.prototype['audienceURI'] = undefined;

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
SamlConnection.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
SamlConnection.prototype['created'] = undefined;






export default SamlConnection;

