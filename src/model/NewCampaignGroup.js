/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
 * The NewCampaignGroup model module.
 * @module model/NewCampaignGroup
 * @version 4.3.0
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
 * A list of the IDs of the applications that this campaign group is enabled for
 * @member {Array.<Number>} subscribedApplicationsIds
 */
NewCampaignGroup.prototype['subscribedApplicationsIds'] = undefined;

/**
 * A list of the IDs of the campaigns that this campaign group owns
 * @member {Array.<Number>} campaignIds
 */
NewCampaignGroup.prototype['campaignIds'] = undefined;






export default NewCampaignGroup;

