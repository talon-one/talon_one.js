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
import CustomerProfileUpdateV2Response from './CustomerProfileUpdateV2Response';

/**
 * The MultipleCustomerProfileIntegrationResponseV2 model module.
 * @module model/MultipleCustomerProfileIntegrationResponseV2
 * @version 5.0.0
 */
class MultipleCustomerProfileIntegrationResponseV2 {
    /**
     * Constructs a new <code>MultipleCustomerProfileIntegrationResponseV2</code>.
     * @alias module:model/MultipleCustomerProfileIntegrationResponseV2
     */
    constructor() { 
        
        MultipleCustomerProfileIntegrationResponseV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationResponseV2} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationResponseV2} The populated <code>MultipleCustomerProfileIntegrationResponseV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleCustomerProfileIntegrationResponseV2();

            if (data.hasOwnProperty('integrationStates')) {
                obj['integrationStates'] = ApiClient.convertToType(data['integrationStates'], [CustomerProfileUpdateV2Response]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CustomerProfileUpdateV2Response>} integrationStates
 */
MultipleCustomerProfileIntegrationResponseV2.prototype['integrationStates'] = undefined;






export default MultipleCustomerProfileIntegrationResponseV2;

