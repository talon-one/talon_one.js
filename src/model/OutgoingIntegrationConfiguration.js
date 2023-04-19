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
 * The OutgoingIntegrationConfiguration model module.
 * @module model/OutgoingIntegrationConfiguration
 * @version 5.0.0
 */
class OutgoingIntegrationConfiguration {
    /**
     * Constructs a new <code>OutgoingIntegrationConfiguration</code>.
     * @alias module:model/OutgoingIntegrationConfiguration
     * @param accountId {Number} The ID of the account to which this configuration belongs.
     * @param typeId {Number} The outgoing integration type ID.
     * @param policy {Object} 
     */
    constructor(accountId, typeId, policy) { 
        
        OutgoingIntegrationConfiguration.initialize(this, accountId, typeId, policy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, typeId, policy) { 
        obj['accountId'] = accountId;
        obj['typeId'] = typeId;
        obj['policy'] = policy;
    }

    /**
     * Constructs a <code>OutgoingIntegrationConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutgoingIntegrationConfiguration} obj Optional instance to populate.
     * @return {module:model/OutgoingIntegrationConfiguration} The populated <code>OutgoingIntegrationConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutgoingIntegrationConfiguration();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('typeId')) {
                obj['typeId'] = ApiClient.convertToType(data['typeId'], 'Number');
            }
            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ApiClient.convertToType(data['policy'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the account to which this configuration belongs.
 * @member {Number} accountId
 */
OutgoingIntegrationConfiguration.prototype['accountId'] = undefined;

/**
 * The outgoing integration type ID.
 * @member {Number} typeId
 */
OutgoingIntegrationConfiguration.prototype['typeId'] = undefined;

/**
 * @member {Object} policy
 */
OutgoingIntegrationConfiguration.prototype['policy'] = undefined;






export default OutgoingIntegrationConfiguration;

