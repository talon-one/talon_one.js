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
 * The NewCampaignGroup model module.
 * @module model/NewCampaignGroup
 * @version 5.0.0
 */
class NewCampaignGroup {
    /**
     * Constructs a new <code>NewCampaignGroup</code>.
     * @alias module:model/NewCampaignGroup
     * @param name {String} The name of this campaign group.
     */
    constructor(name) { 
        
        NewCampaignGroup.initialize(this, name);
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
     * Constructs a <code>NewCampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignGroup} obj Optional instance to populate.
     * @return {module:model/NewCampaignGroup} The populated <code>NewCampaignGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaignGroup();

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
 * The name of this campaign group.
 * @member {String} name
 */
NewCampaignGroup.prototype['name'] = undefined;

/**
 * A longer description of the campaign group.
 * @member {String} description
 */
NewCampaignGroup.prototype['description'] = undefined;

/**
 * A list of the IDs of the applications that this campaign group is enabled for.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
NewCampaignGroup.prototype['subscribedApplicationsIds'] = undefined;

/**
 * A list of the IDs of the campaigns that this campaign group owns.
 * @member {Array.<Number>} campaignIds
 */
NewCampaignGroup.prototype['campaignIds'] = undefined;






export default NewCampaignGroup;

