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
 * The ScimServiceProviderConfigResponseBulk model module.
 * @module model/ScimServiceProviderConfigResponseBulk
 * @version 9.0.0
 */
class ScimServiceProviderConfigResponseBulk {
    /**
     * Constructs a new <code>ScimServiceProviderConfigResponseBulk</code>.
     * Configuration related to bulk operations, which allow multiple SCIM requests to be processed in a single HTTP request.
     * @alias module:model/ScimServiceProviderConfigResponseBulk
     */
    constructor() { 
        
        ScimServiceProviderConfigResponseBulk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScimServiceProviderConfigResponseBulk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimServiceProviderConfigResponseBulk} obj Optional instance to populate.
     * @return {module:model/ScimServiceProviderConfigResponseBulk} The populated <code>ScimServiceProviderConfigResponseBulk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimServiceProviderConfigResponseBulk();

            if (data.hasOwnProperty('maxOperations')) {
                obj['maxOperations'] = ApiClient.convertToType(data['maxOperations'], 'Number');
            }
            if (data.hasOwnProperty('maxPayloadSize')) {
                obj['maxPayloadSize'] = ApiClient.convertToType(data['maxPayloadSize'], 'Number');
            }
            if (data.hasOwnProperty('supported')) {
                obj['supported'] = ApiClient.convertToType(data['supported'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The maximum number of individual operations that can be included in a single bulk request.
 * @member {Number} maxOperations
 */
ScimServiceProviderConfigResponseBulk.prototype['maxOperations'] = undefined;

/**
 * The maximum size, in bytes, of the entire payload for a bulk operation request.
 * @member {Number} maxPayloadSize
 */
ScimServiceProviderConfigResponseBulk.prototype['maxPayloadSize'] = undefined;

/**
 * Indicates whether the SCIM service provider supports bulk operations.
 * @member {Boolean} supported
 */
ScimServiceProviderConfigResponseBulk.prototype['supported'] = undefined;






export default ScimServiceProviderConfigResponseBulk;
