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
import Campaign from './Campaign';

/**
 * The CampaignDeletedNotification model module.
 * @module model/CampaignDeletedNotification
 * @version 5.0.0
 */
class CampaignDeletedNotification {
    /**
     * Constructs a new <code>CampaignDeletedNotification</code>.
     * A notification regarding a campaign that was deleted.
     * @alias module:model/CampaignDeletedNotification
     * @param campaign {module:model/Campaign} 
     * @param deletedAt {Date} Time when the campaign was deleted.
     */
    constructor(campaign, deletedAt) { 
        
        CampaignDeletedNotification.initialize(this, campaign, deletedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaign, deletedAt) { 
        obj['campaign'] = campaign;
        obj['deletedAt'] = deletedAt;
    }

    /**
     * Constructs a <code>CampaignDeletedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignDeletedNotification} obj Optional instance to populate.
     * @return {module:model/CampaignDeletedNotification} The populated <code>CampaignDeletedNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignDeletedNotification();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ApiClient.convertToType(data['campaign'], Campaign);
            }
            if (data.hasOwnProperty('deletedAt')) {
                obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Campaign} campaign
 */
CampaignDeletedNotification.prototype['campaign'] = undefined;

/**
 * Time when the campaign was deleted.
 * @member {Date} deletedAt
 */
CampaignDeletedNotification.prototype['deletedAt'] = undefined;






export default CampaignDeletedNotification;

