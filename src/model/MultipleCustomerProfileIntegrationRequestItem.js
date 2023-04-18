/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The MultipleCustomerProfileIntegrationRequestItem model module.
 * @module model/MultipleCustomerProfileIntegrationRequestItem
 * @version 5.0.0
 */
class MultipleCustomerProfileIntegrationRequestItem {
    /**
     * Constructs a new <code>MultipleCustomerProfileIntegrationRequestItem</code>.
     * 
     * @alias module:model/MultipleCustomerProfileIntegrationRequestItem
     * @param integrationId {String} The identifier of this profile, set by your integration layer. It must be unique within the account.  To get the `integrationId` of the profile from a `sessionId`, use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2). 
     */
    constructor(integrationId) { 
        
        MultipleCustomerProfileIntegrationRequestItem.initialize(this, integrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationId) { 
        obj['integrationId'] = integrationId;
    }

    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequestItem} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequestItem} The populated <code>MultipleCustomerProfileIntegrationRequestItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleCustomerProfileIntegrationRequestItem();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
MultipleCustomerProfileIntegrationRequestItem.prototype['attributes'] = undefined;

/**
 * The identifier of this profile, set by your integration layer. It must be unique within the account.  To get the `integrationId` of the profile from a `sessionId`, use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2). 
 * @member {String} integrationId
 */
MultipleCustomerProfileIntegrationRequestItem.prototype['integrationId'] = undefined;






export default MultipleCustomerProfileIntegrationRequestItem;

