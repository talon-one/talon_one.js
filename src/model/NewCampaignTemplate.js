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
import CampaignTemplateCollection from './CampaignTemplateCollection';
import CampaignTemplateParams from './CampaignTemplateParams';
import CodeGeneratorSettings from './CodeGeneratorSettings';
import TemplateLimitConfig from './TemplateLimitConfig';

/**
 * The NewCampaignTemplate model module.
 * @module model/NewCampaignTemplate
 * @version 5.0.0
 */
class NewCampaignTemplate {
    /**
     * Constructs a new <code>NewCampaignTemplate</code>.
     * @alias module:model/NewCampaignTemplate
     * @param name {String} The campaign template name.
     * @param description {String} Customer-facing text that explains the objective of the template.
     * @param instructions {String} Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign.
     * @param state {module:model/NewCampaignTemplate.StateEnum} Only Campaign Templates in 'available' state may be used to create Campaigns.
     */
    constructor(name, description, instructions, state) { 
        
        NewCampaignTemplate.initialize(this, name, description, instructions, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, description, instructions, state) { 
        obj['name'] = name;
        obj['description'] = description;
        obj['instructions'] = instructions;
        obj['state'] = state;
    }

    /**
     * Constructs a <code>NewCampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignTemplate} obj Optional instance to populate.
     * @return {module:model/NewCampaignTemplate} The populated <code>NewCampaignTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaignTemplate();

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
            if (data.hasOwnProperty('campaignCollections')) {
                obj['campaignCollections'] = ApiClient.convertToType(data['campaignCollections'], [CampaignTemplateCollection]);
            }
            if (data.hasOwnProperty('defaultCampaignGroupId')) {
                obj['defaultCampaignGroupId'] = ApiClient.convertToType(data['defaultCampaignGroupId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The campaign template name.
 * @member {String} name
 */
NewCampaignTemplate.prototype['name'] = undefined;

/**
 * Customer-facing text that explains the objective of the template.
 * @member {String} description
 */
NewCampaignTemplate.prototype['description'] = undefined;

/**
 * Customer-facing text that explains how to use the template. For example, you can use this property to explain the available attributes of this template, and how they can be modified when a user uses this template to create a new campaign.
 * @member {String} instructions
 */
NewCampaignTemplate.prototype['instructions'] = undefined;

/**
 * The campaign attributes that campaigns created from this template will have by default.
 * @member {Object} campaignAttributes
 */
NewCampaignTemplate.prototype['campaignAttributes'] = undefined;

/**
 * The campaign attributes that coupons created from this template will have by default.
 * @member {Object} couponAttributes
 */
NewCampaignTemplate.prototype['couponAttributes'] = undefined;

/**
 * Only Campaign Templates in 'available' state may be used to create Campaigns.
 * @member {module:model/NewCampaignTemplate.StateEnum} state
 */
NewCampaignTemplate.prototype['state'] = undefined;

/**
 * A list of tags for the campaign template.
 * @member {Array.<String>} tags
 */
NewCampaignTemplate.prototype['tags'] = undefined;

/**
 * A list of features for the campaign template.
 * @member {Array.<module:model/NewCampaignTemplate.FeaturesEnum>} features
 */
NewCampaignTemplate.prototype['features'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
NewCampaignTemplate.prototype['couponSettings'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */
NewCampaignTemplate.prototype['referralSettings'] = undefined;

/**
 * The set of limits that will operate for this campaign template.
 * @member {Array.<module:model/TemplateLimitConfig>} limits
 */
NewCampaignTemplate.prototype['limits'] = undefined;

/**
 * Fields which can be used to replace values in a rule.
 * @member {Array.<module:model/CampaignTemplateParams>} templateParams
 */
NewCampaignTemplate.prototype['templateParams'] = undefined;

/**
 * The campaign collections from the blueprint campaign for the template.
 * @member {Array.<module:model/CampaignTemplateCollection>} campaignCollections
 */
NewCampaignTemplate.prototype['campaignCollections'] = undefined;

/**
 * The default campaign group ID.
 * @member {Number} defaultCampaignGroupId
 */
NewCampaignTemplate.prototype['defaultCampaignGroupId'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
NewCampaignTemplate['StateEnum'] = {

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
NewCampaignTemplate['FeaturesEnum'] = {

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



export default NewCampaignTemplate;

