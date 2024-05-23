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
 * The CampaignGroup model module.
 * @module model/CampaignGroup
 * @version 7.0.0
 */
class CampaignGroup {
    /**
     * Constructs a new <code>CampaignGroup</code>.
     * 
     * @alias module:model/CampaignGroup
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The name of the campaign access group.
     */
    constructor(id, created, modified, accountId, name) { 
        
        CampaignGroup.initialize(this, id, created, modified, accountId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, accountId, name) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['accountId'] = accountId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignGroup} obj Optional instance to populate.
     * @return {module:model/CampaignGroup} The populated <code>CampaignGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
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
 * Internal ID of this entity.
 * @member {Number} id
 */
CampaignGroup.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CampaignGroup.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
CampaignGroup.prototype['modified'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
CampaignGroup.prototype['accountId'] = undefined;

/**
 * The name of the campaign access group.
 * @member {String} name
 */
CampaignGroup.prototype['name'] = undefined;

/**
 * A longer description of the campaign access group.
 * @member {String} description
 */
CampaignGroup.prototype['description'] = undefined;

/**
 * A list of IDs of the Applications that this campaign access group is enabled for.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
CampaignGroup.prototype['subscribedApplicationsIds'] = undefined;

/**
 * A list of IDs of the campaigns that are part of the campaign access group.
 * @member {Array.<Number>} campaignIds
 */
CampaignGroup.prototype['campaignIds'] = undefined;






export default CampaignGroup;

