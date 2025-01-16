/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
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
 * The SamlLoginEndpoint model module.
 * @module model/SamlLoginEndpoint
 * @version 10.0.0
 */
class SamlLoginEndpoint {
    /**
     * Constructs a new <code>SamlLoginEndpoint</code>.
     * @alias module:model/SamlLoginEndpoint
     * @param id {Number} ID of the SAML login endpoint.
     * @param name {String} ID of the SAML service.
     * @param loginURL {String} The single sign-on URL.
     */
    constructor(id, name, loginURL) { 
        
        SamlLoginEndpoint.initialize(this, id, name, loginURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, loginURL) { 
        obj['id'] = id;
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

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
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
 * ID of the SAML login endpoint.
 * @member {Number} id
 */
SamlLoginEndpoint.prototype['id'] = undefined;

/**
 * ID of the SAML service.
 * @member {String} name
 */
SamlLoginEndpoint.prototype['name'] = undefined;

/**
 * The single sign-on URL.
 * @member {String} loginURL
 */
SamlLoginEndpoint.prototype['loginURL'] = undefined;






export default SamlLoginEndpoint;

