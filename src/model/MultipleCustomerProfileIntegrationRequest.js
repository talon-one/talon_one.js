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
import MultipleCustomerProfileIntegrationRequestItem from './MultipleCustomerProfileIntegrationRequestItem';

/**
 * The MultipleCustomerProfileIntegrationRequest model module.
 * @module model/MultipleCustomerProfileIntegrationRequest
 * @version 4.5.0
 */
class MultipleCustomerProfileIntegrationRequest {
    /**
     * Constructs a new <code>MultipleCustomerProfileIntegrationRequest</code>.
     * @alias module:model/MultipleCustomerProfileIntegrationRequest
     */
    constructor() { 
        
        MultipleCustomerProfileIntegrationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequest} The populated <code>MultipleCustomerProfileIntegrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleCustomerProfileIntegrationRequest();

            if (data.hasOwnProperty('customerProfiles')) {
                obj['customerProfiles'] = ApiClient.convertToType(data['customerProfiles'], [MultipleCustomerProfileIntegrationRequestItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/MultipleCustomerProfileIntegrationRequestItem>} customerProfiles
 */
MultipleCustomerProfileIntegrationRequest.prototype['customerProfiles'] = undefined;






export default MultipleCustomerProfileIntegrationRequest;

