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
 * The CustomerProfileAudienceRequestItem model module.
 * @module model/CustomerProfileAudienceRequestItem
 * @version 10.0.0
 */
class CustomerProfileAudienceRequestItem {
    /**
     * Constructs a new <code>CustomerProfileAudienceRequestItem</code>.
     * @alias module:model/CustomerProfileAudienceRequestItem
     * @param action {module:model/CustomerProfileAudienceRequestItem.ActionEnum} Defines the action to perform: - `add`: Adds the customer profile to the audience.    **Note**: If the customer profile does not exist, it will be created. The profile will not be visible in any Application   until a session or profile update is received for that profile. - `delete`: Removes the customer profile from the audience. 
     * @param profileIntegrationId {String} The ID of this customer profile in the third-party integration.
     * @param audienceId {Number} The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
     */
    constructor(action, profileIntegrationId, audienceId) { 
        
        CustomerProfileAudienceRequestItem.initialize(this, action, profileIntegrationId, audienceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, profileIntegrationId, audienceId) { 
        obj['action'] = action;
        obj['profileIntegrationId'] = profileIntegrationId;
        obj['audienceId'] = audienceId;
    }

    /**
     * Constructs a <code>CustomerProfileAudienceRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileAudienceRequestItem} obj Optional instance to populate.
     * @return {module:model/CustomerProfileAudienceRequestItem} The populated <code>CustomerProfileAudienceRequestItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProfileAudienceRequestItem();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('profileIntegrationId')) {
                obj['profileIntegrationId'] = ApiClient.convertToType(data['profileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('audienceId')) {
                obj['audienceId'] = ApiClient.convertToType(data['audienceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the action to perform: - `add`: Adds the customer profile to the audience.    **Note**: If the customer profile does not exist, it will be created. The profile will not be visible in any Application   until a session or profile update is received for that profile. - `delete`: Removes the customer profile from the audience. 
 * @member {module:model/CustomerProfileAudienceRequestItem.ActionEnum} action
 */
CustomerProfileAudienceRequestItem.prototype['action'] = undefined;

/**
 * The ID of this customer profile in the third-party integration.
 * @member {String} profileIntegrationId
 */
CustomerProfileAudienceRequestItem.prototype['profileIntegrationId'] = undefined;

/**
 * The ID of the audience. You get it via the `id` property when [creating an audience](#operation/createAudienceV2).
 * @member {Number} audienceId
 */
CustomerProfileAudienceRequestItem.prototype['audienceId'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
CustomerProfileAudienceRequestItem['ActionEnum'] = {

    /**
     * value: "add"
     * @const
     */
    "add": "add",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete"
};



export default CustomerProfileAudienceRequestItem;

