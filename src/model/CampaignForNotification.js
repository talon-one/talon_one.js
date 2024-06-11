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
import CampaignBudget from './CampaignBudget';
import CodeGeneratorSettings from './CodeGeneratorSettings';
import LimitConfig from './LimitConfig';

/**
 * The CampaignForNotification model module.
 * @module model/CampaignForNotification
 * @version 6.0.0
 */
class CampaignForNotification {
    /**
     * Constructs a new <code>CampaignForNotification</code>.
     * 
     * @alias module:model/CampaignForNotification
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param userId {Number} The ID of the user associated with this entity.
     * @param name {String} A user-facing name for this campaign.
     * @param description {String} A detailed description of the campaign.
     * @param state {module:model/CampaignForNotification.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
     * @param tags {Array.<String>} A list of tags for the campaign.
     * @param features {Array.<module:model/CampaignForNotification.FeaturesEnum>} The features enabled in this campaign.
     * @param limits {Array.<module:model/LimitConfig>} The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets) for this campaign. 
     * @param type {module:model/CampaignForNotification.TypeEnum} The campaign type. Possible type values:   - `cartItem`: Type of campaign that can apply effects only to cart items.   - `advanced`: Type of campaign that can apply effects to customer sessions and cart items. 
     * @param budgets {Array.<module:model/CampaignBudget>} A list of all the budgets that are defined by this campaign and their usage.  **Note:** Budgets that are not defined do not appear in this list and their usage is not counted until they are defined. 
     */
    constructor(id, created, applicationId, userId, name, description, state, tags, features, limits, type, budgets) { 
        
        CampaignForNotification.initialize(this, id, created, applicationId, userId, name, description, state, tags, features, limits, type, budgets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, userId, name, description, state, tags, features, limits, type, budgets) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['userId'] = userId;
        obj['name'] = name;
        obj['description'] = description;
        obj['state'] = state;
        obj['tags'] = tags;
        obj['features'] = features;
        obj['limits'] = limits;
        obj['type'] = type;
        obj['budgets'] = budgets;
    }

    /**
     * Constructs a <code>CampaignForNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignForNotification} obj Optional instance to populate.
     * @return {module:model/CampaignForNotification} The populated <code>CampaignForNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignForNotification();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
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
            if (data.hasOwnProperty('evaluationGroupId')) {
                obj['evaluationGroupId'] = ApiClient.convertToType(data['evaluationGroupId'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('linkedStoreIds')) {
                obj['linkedStoreIds'] = ApiClient.convertToType(data['linkedStoreIds'], ['Number']);
            }
            if (data.hasOwnProperty('budgets')) {
                obj['budgets'] = ApiClient.convertToType(data['budgets'], [CampaignBudget]);
            }
            if (data.hasOwnProperty('couponRedemptionCount')) {
                obj['couponRedemptionCount'] = ApiClient.convertToType(data['couponRedemptionCount'], 'Number');
            }
            if (data.hasOwnProperty('referralRedemptionCount')) {
                obj['referralRedemptionCount'] = ApiClient.convertToType(data['referralRedemptionCount'], 'Number');
            }
            if (data.hasOwnProperty('discountCount')) {
                obj['discountCount'] = ApiClient.convertToType(data['discountCount'], 'Number');
            }
            if (data.hasOwnProperty('discountEffectCount')) {
                obj['discountEffectCount'] = ApiClient.convertToType(data['discountEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('couponCreationCount')) {
                obj['couponCreationCount'] = ApiClient.convertToType(data['couponCreationCount'], 'Number');
            }
            if (data.hasOwnProperty('customEffectCount')) {
                obj['customEffectCount'] = ApiClient.convertToType(data['customEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('referralCreationCount')) {
                obj['referralCreationCount'] = ApiClient.convertToType(data['referralCreationCount'], 'Number');
            }
            if (data.hasOwnProperty('addFreeItemEffectCount')) {
                obj['addFreeItemEffectCount'] = ApiClient.convertToType(data['addFreeItemEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('awardedGiveawaysCount')) {
                obj['awardedGiveawaysCount'] = ApiClient.convertToType(data['awardedGiveawaysCount'], 'Number');
            }
            if (data.hasOwnProperty('createdLoyaltyPointsCount')) {
                obj['createdLoyaltyPointsCount'] = ApiClient.convertToType(data['createdLoyaltyPointsCount'], 'Number');
            }
            if (data.hasOwnProperty('createdLoyaltyPointsEffectCount')) {
                obj['createdLoyaltyPointsEffectCount'] = ApiClient.convertToType(data['createdLoyaltyPointsEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('redeemedLoyaltyPointsCount')) {
                obj['redeemedLoyaltyPointsCount'] = ApiClient.convertToType(data['redeemedLoyaltyPointsCount'], 'Number');
            }
            if (data.hasOwnProperty('redeemedLoyaltyPointsEffectCount')) {
                obj['redeemedLoyaltyPointsEffectCount'] = ApiClient.convertToType(data['redeemedLoyaltyPointsEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('callApiEffectCount')) {
                obj['callApiEffectCount'] = ApiClient.convertToType(data['callApiEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('reservecouponEffectCount')) {
                obj['reservecouponEffectCount'] = ApiClient.convertToType(data['reservecouponEffectCount'], 'Number');
            }
            if (data.hasOwnProperty('lastActivity')) {
                obj['lastActivity'] = ApiClient.convertToType(data['lastActivity'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
CampaignForNotification.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
CampaignForNotification.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CampaignForNotification.prototype['applicationId'] = undefined;

/**
 * The ID of the user associated with this entity.
 * @member {Number} userId
 */
CampaignForNotification.prototype['userId'] = undefined;

/**
 * A user-facing name for this campaign.
 * @member {String} name
 */
CampaignForNotification.prototype['name'] = undefined;

/**
 * A detailed description of the campaign.
 * @member {String} description
 */
CampaignForNotification.prototype['description'] = undefined;

/**
 * Timestamp when the campaign will become active.
 * @member {Date} startTime
 */
CampaignForNotification.prototype['startTime'] = undefined;

/**
 * Timestamp when the campaign will become inactive.
 * @member {Date} endTime
 */
CampaignForNotification.prototype['endTime'] = undefined;

/**
 * Arbitrary properties associated with this campaign.
 * @member {Object} attributes
 */
CampaignForNotification.prototype['attributes'] = undefined;

/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/CampaignForNotification.StateEnum} state
 * @default 'enabled'
 */
CampaignForNotification.prototype['state'] = 'enabled';

/**
 * [ID of Ruleset](https://docs.talon.one/management-api#operation/getRulesets) this campaign applies on customer session evaluation. 
 * @member {Number} activeRulesetId
 */
CampaignForNotification.prototype['activeRulesetId'] = undefined;

/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */
CampaignForNotification.prototype['tags'] = undefined;

/**
 * The features enabled in this campaign.
 * @member {Array.<module:model/CampaignForNotification.FeaturesEnum>} features
 */
CampaignForNotification.prototype['features'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
CampaignForNotification.prototype['couponSettings'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */
CampaignForNotification.prototype['referralSettings'] = undefined;

/**
 * The set of [budget limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets) for this campaign. 
 * @member {Array.<module:model/LimitConfig>} limits
 */
CampaignForNotification.prototype['limits'] = undefined;

/**
 * The IDs of the [campaign groups](https://docs.talon.one/docs/product/account/managing-campaign-groups) this campaign belongs to. 
 * @member {Array.<Number>} campaignGroups
 */
CampaignForNotification.prototype['campaignGroups'] = undefined;

/**
 * The ID of the campaign evaluation group the campaign belongs to.
 * @member {Number} evaluationGroupId
 */
CampaignForNotification.prototype['evaluationGroupId'] = undefined;

/**
 * The campaign type. Possible type values:   - `cartItem`: Type of campaign that can apply effects only to cart items.   - `advanced`: Type of campaign that can apply effects to customer sessions and cart items. 
 * @member {module:model/CampaignForNotification.TypeEnum} type
 * @default 'advanced'
 */
CampaignForNotification.prototype['type'] = 'advanced';

/**
 * A list of store IDs that are linked to the campaign.  **Note:** Campaigns with linked store IDs will only be evaluated when there is a [customer session update](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) that references a linked store. 
 * @member {Array.<Number>} linkedStoreIds
 */
CampaignForNotification.prototype['linkedStoreIds'] = undefined;

/**
 * A list of all the budgets that are defined by this campaign and their usage.  **Note:** Budgets that are not defined do not appear in this list and their usage is not counted until they are defined. 
 * @member {Array.<module:model/CampaignBudget>} budgets
 */
CampaignForNotification.prototype['budgets'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Number of coupons redeemed in the campaign. 
 * @member {Number} couponRedemptionCount
 */
CampaignForNotification.prototype['couponRedemptionCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Number of referral codes redeemed in the campaign. 
 * @member {Number} referralRedemptionCount
 */
CampaignForNotification.prototype['referralRedemptionCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total amount of discounts redeemed in the campaign. 
 * @member {Number} discountCount
 */
CampaignForNotification.prototype['discountCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of times discounts were redeemed in this campaign. 
 * @member {Number} discountEffectCount
 */
CampaignForNotification.prototype['discountEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of coupons created by rules in this campaign. 
 * @member {Number} couponCreationCount
 */
CampaignForNotification.prototype['couponCreationCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of custom effects triggered by rules in this campaign. 
 * @member {Number} customEffectCount
 */
CampaignForNotification.prototype['customEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of referrals created by rules in this campaign. 
 * @member {Number} referralCreationCount
 */
CampaignForNotification.prototype['referralCreationCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of times the [add free item effect](https://docs.talon.one/docs/dev/integration-api/api-effects#addfreeitem) can be triggered in this campaign. 
 * @member {Number} addFreeItemEffectCount
 */
CampaignForNotification.prototype['addFreeItemEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of giveaways awarded by rules in this campaign. 
 * @member {Number} awardedGiveawaysCount
 */
CampaignForNotification.prototype['awardedGiveawaysCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty points created by rules in this campaign. 
 * @member {Number} createdLoyaltyPointsCount
 */
CampaignForNotification.prototype['createdLoyaltyPointsCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty point creation effects triggered by rules in this campaign. 
 * @member {Number} createdLoyaltyPointsEffectCount
 */
CampaignForNotification.prototype['createdLoyaltyPointsEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty points redeemed by rules in this campaign. 
 * @member {Number} redeemedLoyaltyPointsCount
 */
CampaignForNotification.prototype['redeemedLoyaltyPointsCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of loyalty point redemption effects triggered by rules in this campaign. 
 * @member {Number} redeemedLoyaltyPointsEffectCount
 */
CampaignForNotification.prototype['redeemedLoyaltyPointsEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of webhooks triggered by rules in this campaign. 
 * @member {Number} callApiEffectCount
 */
CampaignForNotification.prototype['callApiEffectCount'] = undefined;

/**
 * This property is **deprecated**. The count should be available under *budgets* property. Total number of reserve coupon effects triggered by rules in this campaign. 
 * @member {Number} reservecouponEffectCount
 */
CampaignForNotification.prototype['reservecouponEffectCount'] = undefined;

/**
 * Timestamp of the most recent event received by this campaign.
 * @member {Date} lastActivity
 */
CampaignForNotification.prototype['lastActivity'] = undefined;

/**
 * Timestamp of the most recent update to the campaign's property. Updates to external entities used in this campaign are **not** registered by this property, such as collection or coupon updates. 
 * @member {Date} updated
 */
CampaignForNotification.prototype['updated'] = undefined;

/**
 * Name of the user who created this campaign if available.
 * @member {String} createdBy
 */
CampaignForNotification.prototype['createdBy'] = undefined;

/**
 * Name of the user who last updated this campaign if available.
 * @member {String} updatedBy
 */
CampaignForNotification.prototype['updatedBy'] = undefined;

/**
 * The ID of the Campaign Template this Campaign was created from.
 * @member {Number} templateId
 */
CampaignForNotification.prototype['templateId'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CampaignForNotification['StateEnum'] = {

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
    "archived": "archived",

    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",

    /**
     * value: "scheduled"
     * @const
     */
    "scheduled": "scheduled",

    /**
     * value: "running"
     * @const
     */
    "running": "running",

    /**
     * value: "expired"
     * @const
     */
    "expired": "expired"
};


/**
 * Allowed values for the <code>features</code> property.
 * @enum {String}
 * @readonly
 */
CampaignForNotification['FeaturesEnum'] = {

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


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignForNotification['TypeEnum'] = {

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



export default CampaignForNotification;
