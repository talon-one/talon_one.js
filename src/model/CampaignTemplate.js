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
import CampaignTemplateCollection from './CampaignTemplateCollection';
import CampaignTemplateParams from './CampaignTemplateParams';
import CodeGeneratorSettings from './CodeGeneratorSettings';
import TemplateLimitConfig from './TemplateLimitConfig';

/**
 * The CampaignTemplate model module.
 * @module model/CampaignTemplate
 * @version 5.0.0
 */
class CampaignTemplate {
    /**
     * Constructs a new <code>CampaignTemplate</code>.
     * 
     * @alias module:model/CampaignTemplate
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param userId {Number} The ID of the user associated with this entity.
     * @param name {String} The campaign template name.
     * @param description {String} Customer-facing text that explains the objective of the template.
     * @param instructions {String} Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign.
     * @param state {module:model/CampaignTemplate.StateEnum} Only campaign templates in 'available' state may be used to create campaigns.
     * @param applicationsIds {Array.<Number>} A list of IDs of the Applications that are subscribed to this campaign template.
     * @param validApplicationIds {Array.<Number>} The IDs of the Applications that are related to this entity.
     */
    constructor(id, created, accountId, userId, name, description, instructions, state, applicationsIds, validApplicationIds) { 
        
        CampaignTemplate.initialize(this, id, created, accountId, userId, name, description, instructions, state, applicationsIds, validApplicationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, userId, name, description, instructions, state, applicationsIds, validApplicationIds) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['userId'] = userId;
        obj['name'] = name;
        obj['description'] = description;
        obj['instructions'] = instructions;
        obj['state'] = state;
        obj['applicationsIds'] = applicationsIds;
        obj['validApplicationIds'] = validApplicationIds;
    }

    /**
     * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignTemplate} obj Optional instance to populate.
     * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('campaignAttributes')) {
                obj['campaignAttributes'] = ApiClient.convertToType(data['campaignAttributes'], Object);
            }
            if (data.hasOwnProperty('couponAttributes')) {
                obj['couponAttributes'] = ApiClient.convertToType(data['couponAttributes'], Object);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('activeRulesetId')) {
                obj['activeRulesetId'] = ApiClient.convertToType(data['activeRulesetId'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], ['String']);
            }
            if (data.hasOwnProperty('couponSettings')) {
                obj['couponSettings'] = CodeGeneratorSettings.constructFromObject(data['couponSettings']);
            }
            if (data.hasOwnProperty('referralSettings')) {
                obj['referralSettings'] = CodeGeneratorSettings.constructFromObject(data['referralSettings']);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [TemplateLimitConfig]);
            }
            if (data.hasOwnProperty('templateParams')) {
                obj['templateParams'] = ApiClient.convertToType(data['templateParams'], [CampaignTemplateParams]);
            }
            if (data.hasOwnProperty('applicationsIds')) {
                obj['applicationsIds'] = ApiClient.convertToType(data['applicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('campaignCollections')) {
                obj['campaignCollections'] = ApiClient.convertToType(data['campaignCollections'], [CampaignTemplateCollection]);
            }
            if (data.hasOwnProperty('defaultCampaignGroupId')) {
                obj['defaultCampaignGroupId'] = ApiClient.convertToType(data['defaultCampaignGroupId'], 'Number');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
            if (data.hasOwnProperty('validApplicationIds')) {
                obj['validApplicationIds'] = ApiClient.convertToType(data['validApplicationIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CampaignTemplate.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CampaignTemplate.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
CampaignTemplate.prototype['accountId'] = undefined;

/**
 * The ID of the user associated with this entity.
 * @member {Number} userId
 */
CampaignTemplate.prototype['userId'] = undefined;

/**
 * The campaign template name.
 * @member {String} name
 */
CampaignTemplate.prototype['name'] = undefined;

/**
 * Customer-facing text that explains the objective of the template.
 * @member {String} description
 */
CampaignTemplate.prototype['description'] = undefined;

/**
 * Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign.
 * @member {String} instructions
 */
CampaignTemplate.prototype['instructions'] = undefined;

/**
 * The campaign attributes that campaigns created from this template will have by default.
 * @member {Object} campaignAttributes
 */
CampaignTemplate.prototype['campaignAttributes'] = undefined;

/**
 * The campaign attributes that coupons created from this template will have by default.
 * @member {Object} couponAttributes
 */
CampaignTemplate.prototype['couponAttributes'] = undefined;

/**
 * Only campaign templates in 'available' state may be used to create campaigns.
 * @member {module:model/CampaignTemplate.StateEnum} state
 */
CampaignTemplate.prototype['state'] = undefined;

/**
 * The ID of the ruleset this campaign template will use.
 * @member {Number} activeRulesetId
 */
CampaignTemplate.prototype['activeRulesetId'] = undefined;

/**
 * A list of tags for the campaign template.
 * @member {Array.<String>} tags
 */
CampaignTemplate.prototype['tags'] = undefined;

/**
 * A list of features for the campaign template.
 * @member {Array.<module:model/CampaignTemplate.FeaturesEnum>} features
 */
CampaignTemplate.prototype['features'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
CampaignTemplate.prototype['couponSettings'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */
CampaignTemplate.prototype['referralSettings'] = undefined;

/**
 * The set of limits that operate for this campaign template.
 * @member {Array.<module:model/TemplateLimitConfig>} limits
 */
CampaignTemplate.prototype['limits'] = undefined;

/**
 * Fields which can be used to replace values in a rule.
 * @member {Array.<module:model/CampaignTemplateParams>} templateParams
 */
CampaignTemplate.prototype['templateParams'] = undefined;

/**
 * A list of IDs of the Applications that are subscribed to this campaign template.
 * @member {Array.<Number>} applicationsIds
 */
CampaignTemplate.prototype['applicationsIds'] = undefined;

/**
 * The campaign collections from the blueprint campaign for the template.
 * @member {Array.<module:model/CampaignTemplateCollection>} campaignCollections
 */
CampaignTemplate.prototype['campaignCollections'] = undefined;

/**
 * The default campaign group ID.
 * @member {Number} defaultCampaignGroupId
 */
CampaignTemplate.prototype['defaultCampaignGroupId'] = undefined;

/**
 * Timestamp of the most recent update to the campaign template or any of its elements.
 * @member {Date} updated
 */
CampaignTemplate.prototype['updated'] = undefined;

/**
 * Name of the user who last updated this campaign template, if available.
 * @member {String} updatedBy
 */
CampaignTemplate.prototype['updatedBy'] = undefined;

/**
 * The IDs of the Applications that are related to this entity.
 * @member {Array.<Number>} validApplicationIds
 */
CampaignTemplate.prototype['validApplicationIds'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CampaignTemplate['StateEnum'] = {

    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};


/**
 * Allowed values for the <code>features</code> property.
 * @enum {String}
 * @readonly
 */
CampaignTemplate['FeaturesEnum'] = {

    /**
     * value: "coupons"
     * @const
     */
    "coupons": "coupons",

    /**
     * value: "referrals"
     * @const
     */
    "referrals": "referrals",

    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",

    /**
     * value: "giveaways"
     * @const
     */
    "giveaways": "giveaways",

    /**
     * value: "strikethrough"
     * @const
     */
    "strikethrough": "strikethrough"
};



export default CampaignTemplate;

