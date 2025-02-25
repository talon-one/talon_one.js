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
 * The CampaignNotificationPolicy model module.
 * @module model/CampaignNotificationPolicy
 * @version 11.0.0
 */
class CampaignNotificationPolicy {
    /**
     * Constructs a new <code>CampaignNotificationPolicy</code>.
     * @alias module:model/CampaignNotificationPolicy
     * @param name {String} Notification name.
     */
    constructor(name) { 
        
        CampaignNotificationPolicy.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CampaignNotificationPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignNotificationPolicy} obj Optional instance to populate.
     * @return {module:model/CampaignNotificationPolicy} The populated <code>CampaignNotificationPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignNotificationPolicy();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('batchingEnabled')) {
                obj['batchingEnabled'] = ApiClient.convertToType(data['batchingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('batchSize')) {
                obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Notification name.
 * @member {String} name
 */
CampaignNotificationPolicy.prototype['name'] = undefined;

/**
 * Indicates whether batching is activated.
 * @member {Boolean} batchingEnabled
 * @default true
 */
CampaignNotificationPolicy.prototype['batchingEnabled'] = true;

/**
 * The required size of each batch of data. This value applies only when `batchingEnabled` is `true`.
 * @member {Number} batchSize
 */
CampaignNotificationPolicy.prototype['batchSize'] = undefined;






export default CampaignNotificationPolicy;

