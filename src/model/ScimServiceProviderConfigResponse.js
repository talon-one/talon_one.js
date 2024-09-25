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
import ScimServiceProviderConfigResponseBulk from './ScimServiceProviderConfigResponseBulk';
import ScimServiceProviderConfigResponseChangePassword from './ScimServiceProviderConfigResponseChangePassword';
import ScimServiceProviderConfigResponseFilter from './ScimServiceProviderConfigResponseFilter';
import ScimServiceProviderConfigResponsePatch from './ScimServiceProviderConfigResponsePatch';

/**
 * The ScimServiceProviderConfigResponse model module.
 * @module model/ScimServiceProviderConfigResponse
 * @version 9.0.0
 */
class ScimServiceProviderConfigResponse {
    /**
     * Constructs a new <code>ScimServiceProviderConfigResponse</code>.
     * Service provider configuration details.
     * @alias module:model/ScimServiceProviderConfigResponse
     */
    constructor() { 
        
        ScimServiceProviderConfigResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScimServiceProviderConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimServiceProviderConfigResponse} obj Optional instance to populate.
     * @return {module:model/ScimServiceProviderConfigResponse} The populated <code>ScimServiceProviderConfigResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimServiceProviderConfigResponse();

            if (data.hasOwnProperty('bulk')) {
                obj['bulk'] = ScimServiceProviderConfigResponseBulk.constructFromObject(data['bulk']);
            }
            if (data.hasOwnProperty('changePassword')) {
                obj['changePassword'] = ScimServiceProviderConfigResponseChangePassword.constructFromObject(data['changePassword']);
            }
            if (data.hasOwnProperty('documentationUri')) {
                obj['documentationUri'] = ApiClient.convertToType(data['documentationUri'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ScimServiceProviderConfigResponseFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('patch')) {
                obj['patch'] = ScimServiceProviderConfigResponsePatch.constructFromObject(data['patch']);
            }
            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ScimServiceProviderConfigResponseBulk} bulk
 */
ScimServiceProviderConfigResponse.prototype['bulk'] = undefined;

/**
 * @member {module:model/ScimServiceProviderConfigResponseChangePassword} changePassword
 */
ScimServiceProviderConfigResponse.prototype['changePassword'] = undefined;

/**
 * The URI that points to the SCIM service provider's documentation, providing further details about the service's capabilities and usage.
 * @member {String} documentationUri
 */
ScimServiceProviderConfigResponse.prototype['documentationUri'] = undefined;

/**
 * @member {module:model/ScimServiceProviderConfigResponseFilter} filter
 */
ScimServiceProviderConfigResponse.prototype['filter'] = undefined;

/**
 * @member {module:model/ScimServiceProviderConfigResponsePatch} patch
 */
ScimServiceProviderConfigResponse.prototype['patch'] = undefined;

/**
 * A list of SCIM schemas that define the structure and data types supported by the service provider.
 * @member {Array.<String>} schemas
 */
ScimServiceProviderConfigResponse.prototype['schemas'] = undefined;






export default ScimServiceProviderConfigResponse;

