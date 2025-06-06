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
 * The UpdateCampaignGroup model module.
 * @module model/UpdateCampaignGroup
 * @version 12.0.0
 */
class UpdateCampaignGroup {
    /**
     * Constructs a new <code>UpdateCampaignGroup</code>.
     * @alias module:model/UpdateCampaignGroup
     * @param name {String} The name of the campaign access group.
     */
    constructor(name) { 
        
        UpdateCampaignGroup.initialize(this, name);
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
     * Constructs a <code>UpdateCampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCampaignGroup} obj Optional instance to populate.
     * @return {module:model/UpdateCampaignGroup} The populated <code>UpdateCampaignGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCampaignGroup();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('campaignIds')) {
                obj['campaignIds'] = ApiClient.convertToType(data['campaignIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The name of the campaign access group.
 * @member {String} name
 */
UpdateCampaignGroup.prototype['name'] = undefined;

/**
 * A longer description of the campaign access group.
 * @member {String} description
 */
UpdateCampaignGroup.prototype['description'] = undefined;

/**
 * A list of IDs of the Applications that this campaign access group is enabled for.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
UpdateCampaignGroup.prototype['subscribedApplicationsIds'] = undefined;

/**
 * A list of IDs of the campaigns that are part of the campaign access group.
 * @member {Array.<Number>} campaignIds
 */
UpdateCampaignGroup.prototype['campaignIds'] = undefined;






export default UpdateCampaignGroup;

