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
 * The SamlLoginEndpoint model module.
 * @module model/SamlLoginEndpoint
 * @version 4.1.0
 */
class SamlLoginEndpoint {
    /**
     * Constructs a new <code>SamlLoginEndpoint</code>.
     * @alias module:model/SamlLoginEndpoint
     * @param name {String} ID of the SAML service.
     * @param loginURL {String} Single Sign-On URL.
     */
    constructor(name, loginURL) { 
        
        SamlLoginEndpoint.initialize(this, name, loginURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, loginURL) { 
        obj['name'] = name;
        obj['loginURL'] = loginURL;
    }

    /**
     * Constructs a <code>SamlLoginEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlLoginEndpoint} obj Optional instance to populate.
     * @return {module:model/SamlLoginEndpoint} The populated <code>SamlLoginEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SamlLoginEndpoint();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('loginURL')) {
                obj['loginURL'] = ApiClient.convertToType(data['loginURL'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the SAML service.
 * @member {String} name
 */
SamlLoginEndpoint.prototype['name'] = undefined;

/**
 * Single Sign-On URL.
 * @member {String} loginURL
 */
SamlLoginEndpoint.prototype['loginURL'] = undefined;






export default SamlLoginEndpoint;

