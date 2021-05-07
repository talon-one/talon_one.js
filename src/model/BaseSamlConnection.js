/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The BaseSamlConnection model module.
 * @module model/BaseSamlConnection
 * @version 10.0.0
 */
class BaseSamlConnection {
    /**
     * Constructs a new <code>BaseSamlConnection</code>.
     * @alias module:model/BaseSamlConnection
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param issuer {String} Identity Provider Entity ID.
     * @param signOnURL {String} Single Sign-On URL.
     */
    constructor(accountId, name, enabled, issuer, signOnURL) { 
        
        BaseSamlConnection.initialize(this, accountId, name, enabled, issuer, signOnURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, name, enabled, issuer, signOnURL) { 
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['enabled'] = enabled;
        obj['issuer'] = issuer;
        obj['signOnURL'] = signOnURL;
    }

    /**
     * Constructs a <code>BaseSamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseSamlConnection} obj Optional instance to populate.
     * @return {module:model/BaseSamlConnection} The populated <code>BaseSamlConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseSamlConnection();

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
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
BaseSamlConnection.prototype['accountId'] = undefined;

/**
 * ID of the SAML service.
 * @member {String} name
 */
BaseSamlConnection.prototype['name'] = undefined;

/**
 * Determines if this SAML connection active.
 * @member {Boolean} enabled
 */
BaseSamlConnection.prototype['enabled'] = undefined;

/**
 * Identity Provider Entity ID.
 * @member {String} issuer
 */
BaseSamlConnection.prototype['issuer'] = undefined;

/**
 * Single Sign-On URL.
 * @member {String} signOnURL
 */
BaseSamlConnection.prototype['signOnURL'] = undefined;

/**
 * Single Sign-Out URL.
 * @member {String} signOutURL
 */
BaseSamlConnection.prototype['signOutURL'] = undefined;

/**
 * Metadata URL.
 * @member {String} metadataURL
 */
BaseSamlConnection.prototype['metadataURL'] = undefined;

/**
 * The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used. 
 * @member {String} audienceURI
 */
BaseSamlConnection.prototype['audienceURI'] = undefined;






export default BaseSamlConnection;

