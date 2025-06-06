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
import CustomerSessionV2 from './CustomerSessionV2';
import Effect from './Effect';

/**
 * The IntegrationCustomerSessionResponse model module.
 * @module model/IntegrationCustomerSessionResponse
 * @version 12.0.0
 */
class IntegrationCustomerSessionResponse {
    /**
     * Constructs a new <code>IntegrationCustomerSessionResponse</code>.
     * @alias module:model/IntegrationCustomerSessionResponse
     */
    constructor() { 
        
        IntegrationCustomerSessionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationCustomerSessionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationCustomerSessionResponse} obj Optional instance to populate.
     * @return {module:model/IntegrationCustomerSessionResponse} The populated <code>IntegrationCustomerSessionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationCustomerSessionResponse();

            if (data.hasOwnProperty('customerSession')) {
                obj['customerSession'] = CustomerSessionV2.constructFromObject(data['customerSession']);
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [Effect]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CustomerSessionV2} customerSession
 */
IntegrationCustomerSessionResponse.prototype['customerSession'] = undefined;

/**
 * The returned effects.  **Note:** This endpoint returns only the effects that are valid after any rollback effects and their corresponding non-rollback effects are removed. 
 * @member {Array.<module:model/Effect>} effects
 */
IntegrationCustomerSessionResponse.prototype['effects'] = undefined;






export default IntegrationCustomerSessionResponse;

