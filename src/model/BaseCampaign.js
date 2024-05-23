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
import CodeGeneratorSettings from './CodeGeneratorSettings';
import LimitConfig from './LimitConfig';

/**
 * The BaseCampaign model module.
 * @module model/BaseCampaign
 * @version 7.0.0
 */
class BaseCampaign {
    /**
     * Constructs a new <code>BaseCampaign</code>.
     * @alias module:model/BaseCampaign
     * @param name {String} A user-facing name for this campaign.
     * @param state {module:model/BaseCampaign.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
     * @param tags {Array.<String>} A list of tags for the campaign.
     * @param features {Array.<module:model/BaseCampaign.FeaturesEnum>} The features enabled in this campaign.
     * @param limits {Array.<module:model/LimitConfig>} The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets) for this campaign. 
     */
    constructor(name, state, tags, features, limits) { 
        
        BaseCampaign.initialize(this, name, state, tags, features, limits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, state, tags, features, limits) { 
        obj['name'] = name;
        obj['state'] = state;
        obj['tags'] = tags;
        obj['features'] = features;
        obj['limits'] = limits;
    }

    /**
     * Constructs a <code>BaseCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseCampaign} obj Optional instance to populate.
     * @return {module:model/BaseCampaign} The populated <code>BaseCampaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseCampaign();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
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
                obj['limits'] = ApiClient.convertToType(data['limits'], [LimitConfig]);
            }
            if (data.hasOwnProperty('campaignGroups')) {
                obj['campaignGroups'] = ApiClient.convertToType(data['campaignGroups'], ['Number']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('linkedStoreIds')) {
                obj['linkedStoreIds'] = ApiClient.convertToType(data['linkedStoreIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * A user-facing name for this campaign.
 * @member {String} name
 */
BaseCampaign.prototype['name'] = undefined;

/**
 * A detailed description of the campaign.
 * @member {String} description
 */
BaseCampaign.prototype['description'] = undefined;

/**
 * Timestamp when the campaign will become active.
 * @member {Date} startTime
 */
BaseCampaign.prototype['startTime'] = undefined;

/**
 * Timestamp when the campaign will become inactive.
 * @member {Date} endTime
 */
BaseCampaign.prototype['endTime'] = undefined;

/**
 * Arbitrary properties associated with this campaign.
 * @member {Object} attributes
 */
BaseCampaign.prototype['attributes'] = undefined;

/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/BaseCampaign.StateEnum} state
 * @default 'enabled'
 */
BaseCampaign.prototype['state'] = 'enabled';

/**
 * [ID of Ruleset](https://docs.talon.one/management-api#operation/getRulesets) this campaign applies on customer session evaluation. 
 * @member {Number} activeRulesetId
 */
BaseCampaign.prototype['activeRulesetId'] = undefined;

/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */
BaseCampaign.prototype['tags'] = undefined;

/**
 * The features enabled in this campaign.
 * @member {Array.<module:model/BaseCampaign.FeaturesEnum>} features
 */
BaseCampaign.prototype['features'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
BaseCampaign.prototype['couponSettings'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */
BaseCampaign.prototype['referralSettings'] = undefined;

/**
 * The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets) for this campaign. 
 * @member {Array.<module:model/LimitConfig>} limits
 */
BaseCampaign.prototype['limits'] = undefined;

/**
 * The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/managing-campaign-groups) this campaign belongs to. 
 * @member {Array.<Number>} campaignGroups
 */
BaseCampaign.prototype['campaignGroups'] = undefined;

/**
 * The campaign type. Possible type values:   - `cartItem`: Type of campaign that can apply effects only to cart items.   - `advanced`: Type of campaign that can apply effects to customer sessions and cart items. 
 * @member {module:model/BaseCampaign.TypeEnum} type
 * @default 'advanced'
 */
BaseCampaign.prototype['type'] = 'advanced';

/**
 * A list of store IDs that you want to link to the campaign.  **Note:** Campaigns with linked store IDs will only be evaluated when there is a [customer session update](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) that references a linked store. 
 * @member {Array.<Number>} linkedStoreIds
 */
BaseCampaign.prototype['linkedStoreIds'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
BaseCampaign['StateEnum'] = {

    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled",

    /**
     * value: "archived"
     * @const
     */
    "archived": "archived"
};


/**
 * Allowed values for the <code>features</code> property.
 * @enum {String}
 * @readonly
 */
BaseCampaign['FeaturesEnum'] = {

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
    "strikethrough": "strikethrough",

    /**
     * value: "achievements"
     * @const
     */
    "achievements": "achievements"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseCampaign['TypeEnum'] = {

    /**
     * value: "cartItem"
     * @const
     */
    "cartItem": "cartItem",

    /**
     * value: "advanced"
     * @const
     */
    "advanced": "advanced"
};



export default BaseCampaign;

