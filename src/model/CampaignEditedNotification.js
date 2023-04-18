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
import Campaign from './Campaign';
import Ruleset from './Ruleset';

/**
 * The CampaignEditedNotification model module.
 * @module model/CampaignEditedNotification
 * @version 5.0.0
 */
class CampaignEditedNotification {
    /**
     * Constructs a new <code>CampaignEditedNotification</code>.
     * A notification regarding a campaign which was edited.
     * @alias module:model/CampaignEditedNotification
     * @param campaign {module:model/Campaign} 
     * @param oldCampaign {module:model/Campaign} 
     */
    constructor(campaign, oldCampaign) { 
        
        CampaignEditedNotification.initialize(this, campaign, oldCampaign);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaign, oldCampaign) { 
        obj['campaign'] = campaign;
        obj['oldCampaign'] = oldCampaign;
    }

    /**
     * Constructs a <code>CampaignEditedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignEditedNotification} obj Optional instance to populate.
     * @return {module:model/CampaignEditedNotification} The populated <code>CampaignEditedNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignEditedNotification();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ApiClient.convertToType(data['campaign'], Campaign);
            }
            if (data.hasOwnProperty('oldCampaign')) {
                obj['oldCampaign'] = ApiClient.convertToType(data['oldCampaign'], Campaign);
            }
            if (data.hasOwnProperty('ruleset')) {
                obj['ruleset'] = Ruleset.constructFromObject(data['ruleset']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Campaign} campaign
 */
CampaignEditedNotification.prototype['campaign'] = undefined;

/**
 * @member {module:model/Campaign} oldCampaign
 */
CampaignEditedNotification.prototype['oldCampaign'] = undefined;

/**
 * @member {module:model/Ruleset} ruleset
 */
CampaignEditedNotification.prototype['ruleset'] = undefined;






export default CampaignEditedNotification;

