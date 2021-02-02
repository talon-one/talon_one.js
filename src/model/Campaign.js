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
import CodeGeneratorSettings from './CodeGeneratorSettings';
import LimitConfig from './LimitConfig';

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.3.0
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * 
     * @alias module:model/Campaign
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param name {String} A friendly name for this campaign.
     * @param description {String} A detailed description of the campaign.
     * @param state {module:model/Campaign.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
     * @param tags {Array.<String>} A list of tags for the campaign.
     * @param features {Array.<module:model/Campaign.FeaturesEnum>} A list of features for the campaign.
     * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
     */
    constructor(id, created, applicationId, userId, name, description, state, tags, features, limits) { 
        
        Campaign.initialize(this, id, created, applicationId, userId, name, description, state, tags, features, limits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, userId, name, description, state, tags, features, limits) { 
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
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

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
            if (data.hasOwnProperty('referralCreationCount')) {
                obj['referralCreationCount'] = ApiClient.convertToType(data['referralCreationCount'], 'Number');
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
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
Campaign.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
Campaign.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
Campaign.prototype['applicationId'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */
Campaign.prototype['userId'] = undefined;

/**
 * A friendly name for this campaign.
 * @member {String} name
 */
Campaign.prototype['name'] = undefined;

/**
 * A detailed description of the campaign.
 * @member {String} description
 */
Campaign.prototype['description'] = undefined;

/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */
Campaign.prototype['startTime'] = undefined;

/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */
Campaign.prototype['endTime'] = undefined;

/**
 * Arbitrary properties associated with this campaign
 * @member {Object} attributes
 */
Campaign.prototype['attributes'] = undefined;

/**
 * A disabled or archived campaign is not evaluated for rules or coupons. 
 * @member {module:model/Campaign.StateEnum} state
 * @default 'enabled'
 */
Campaign.prototype['state'] = 'enabled';

/**
 * ID of Ruleset this campaign applies on customer session evaluation.
 * @member {Number} activeRulesetId
 */
Campaign.prototype['activeRulesetId'] = undefined;

/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */
Campaign.prototype['tags'] = undefined;

/**
 * A list of features for the campaign.
 * @member {Array.<module:model/Campaign.FeaturesEnum>} features
 */
Campaign.prototype['features'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
Campaign.prototype['couponSettings'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} referralSettings
 */
Campaign.prototype['referralSettings'] = undefined;

/**
 * The set of limits that will operate for this campaign
 * @member {Array.<module:model/LimitConfig>} limits
 */
Campaign.prototype['limits'] = undefined;

/**
 * The IDs of the campaign groups that own this entity.
 * @member {Array.<Number>} campaignGroups
 */
Campaign.prototype['campaignGroups'] = undefined;

/**
 * Number of coupons redeemed in the campaign.
 * @member {Number} couponRedemptionCount
 */
Campaign.prototype['couponRedemptionCount'] = undefined;

/**
 * Number of referral codes redeemed in the campaign.
 * @member {Number} referralRedemptionCount
 */
Campaign.prototype['referralRedemptionCount'] = undefined;

/**
 * Total amount of discounts redeemed in the campaign.
 * @member {Number} discountCount
 */
Campaign.prototype['discountCount'] = undefined;

/**
 * Total number of times discounts were redeemed in this campaign.
 * @member {Number} discountEffectCount
 */
Campaign.prototype['discountEffectCount'] = undefined;

/**
 * Total number of coupons created by rules in this campaign.
 * @member {Number} couponCreationCount
 */
Campaign.prototype['couponCreationCount'] = undefined;

/**
 * Total number of referrals created by rules in this campaign.
 * @member {Number} referralCreationCount
 */
Campaign.prototype['referralCreationCount'] = undefined;

/**
 * Total number of loyalty points created by rules in this campaign.
 * @member {Number} createdLoyaltyPointsCount
 */
Campaign.prototype['createdLoyaltyPointsCount'] = undefined;

/**
 * Total number of loyalty point creation effects triggered by rules in this campaign.
 * @member {Number} createdLoyaltyPointsEffectCount
 */
Campaign.prototype['createdLoyaltyPointsEffectCount'] = undefined;

/**
 * Total number of loyalty points redeemed by rules in this campaign.
 * @member {Number} redeemedLoyaltyPointsCount
 */
Campaign.prototype['redeemedLoyaltyPointsCount'] = undefined;

/**
 * Total number of loyalty point redemption effects triggered by rules in this campaign.
 * @member {Number} redeemedLoyaltyPointsEffectCount
 */
Campaign.prototype['redeemedLoyaltyPointsEffectCount'] = undefined;

/**
 * Timestamp of the most recent event received by this campaign.
 * @member {Date} lastActivity
 */
Campaign.prototype['lastActivity'] = undefined;

/**
 * Timestamp of the most recent update to the campaign or any of its elements.
 * @member {Date} updated
 */
Campaign.prototype['updated'] = undefined;

/**
 * Name of the user who created this campaign if available.
 * @member {String} createdBy
 */
Campaign.prototype['createdBy'] = undefined;

/**
 * Name of the user who last updated this campaign if available.
 * @member {String} updatedBy
 */
Campaign.prototype['updatedBy'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Campaign['StateEnum'] = {

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
Campaign['FeaturesEnum'] = {

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
    "loyalty": "loyalty"
};



export default Campaign;

