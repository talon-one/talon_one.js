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
import CampaignNotification from './CampaignNotification';

/**
 * The BulkCampaignNotification model module.
 * @module model/BulkCampaignNotification
 * @version 12.0.0
 */
class BulkCampaignNotification {
    /**
     * Constructs a new <code>BulkCampaignNotification</code>.
     * @alias module:model/BulkCampaignNotification
     * @param totalResultSize {Number} 
     * @param data {Array.<module:model/CampaignNotification>} 
     */
    constructor(totalResultSize, data) { 
        
        BulkCampaignNotification.initialize(this, totalResultSize, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalResultSize, data) { 
        obj['totalResultSize'] = totalResultSize;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>BulkCampaignNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkCampaignNotification} obj Optional instance to populate.
     * @return {module:model/BulkCampaignNotification} The populated <code>BulkCampaignNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkCampaignNotification();

            if (data.hasOwnProperty('totalResultSize')) {
                obj['totalResultSize'] = ApiClient.convertToType(data['totalResultSize'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CampaignNotification]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalResultSize
 */
BulkCampaignNotification.prototype['totalResultSize'] = undefined;

/**
 * @member {Array.<module:model/CampaignNotification>} data
 */
BulkCampaignNotification.prototype['data'] = undefined;






export default BulkCampaignNotification;

