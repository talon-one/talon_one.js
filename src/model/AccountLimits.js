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
 * The AccountLimits model module.
 * @module model/AccountLimits
 * @version 4.4.0
 */
class AccountLimits {
    /**
     * Constructs a new <code>AccountLimits</code>.
     * @alias module:model/AccountLimits
     * @param liveApplications {Number} Total number of allowed live applications in the account
     * @param sandboxApplications {Number} Total number of allowed sandbox applications in the account
     * @param activeCampaigns {Number} Total number of allowed active campaigns in live applications in the account
     * @param coupons {Number} Total number of allowed coupons in the account
     * @param referralCodes {Number} Total number of allowed referral codes in the account
     * @param activeRules {Number} Total number of allowed active rulesets in the account
     * @param liveLoyaltyPrograms {Number} Total number of allowed live loyalty programs in the account
     * @param sandboxLoyaltyPrograms {Number} Total number of allowed sandbox loyalty programs in the account
     * @param webhooks {Number} Total number of allowed webhooks in the account
     * @param users {Number} Total number of allowed users in the account
     * @param apiVolume {Number} Allowed volume of API requests to the account
     * @param promotionTypes {Array.<String>} Array of promotion types that are employed in the account
     */
    constructor(liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) { 
        
        AccountLimits.initialize(this, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, liveApplications, sandboxApplications, activeCampaigns, coupons, referralCodes, activeRules, liveLoyaltyPrograms, sandboxLoyaltyPrograms, webhooks, users, apiVolume, promotionTypes) { 
        obj['liveApplications'] = liveApplications;
        obj['sandboxApplications'] = sandboxApplications;
        obj['activeCampaigns'] = activeCampaigns;
        obj['coupons'] = coupons;
        obj['referralCodes'] = referralCodes;
        obj['activeRules'] = activeRules;
        obj['liveLoyaltyPrograms'] = liveLoyaltyPrograms;
        obj['sandboxLoyaltyPrograms'] = sandboxLoyaltyPrograms;
        obj['webhooks'] = webhooks;
        obj['users'] = users;
        obj['apiVolume'] = apiVolume;
        obj['promotionTypes'] = promotionTypes;
    }

    /**
     * Constructs a <code>AccountLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountLimits} obj Optional instance to populate.
     * @return {module:model/AccountLimits} The populated <code>AccountLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountLimits();

            if (data.hasOwnProperty('liveApplications')) {
                obj['liveApplications'] = ApiClient.convertToType(data['liveApplications'], 'Number');
            }
            if (data.hasOwnProperty('sandboxApplications')) {
                obj['sandboxApplications'] = ApiClient.convertToType(data['sandboxApplications'], 'Number');
            }
            if (data.hasOwnProperty('activeCampaigns')) {
                obj['activeCampaigns'] = ApiClient.convertToType(data['activeCampaigns'], 'Number');
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], 'Number');
            }
            if (data.hasOwnProperty('referralCodes')) {
                obj['referralCodes'] = ApiClient.convertToType(data['referralCodes'], 'Number');
            }
            if (data.hasOwnProperty('activeRules')) {
                obj['activeRules'] = ApiClient.convertToType(data['activeRules'], 'Number');
            }
            if (data.hasOwnProperty('liveLoyaltyPrograms')) {
                obj['liveLoyaltyPrograms'] = ApiClient.convertToType(data['liveLoyaltyPrograms'], 'Number');
            }
            if (data.hasOwnProperty('sandboxLoyaltyPrograms')) {
                obj['sandboxLoyaltyPrograms'] = ApiClient.convertToType(data['sandboxLoyaltyPrograms'], 'Number');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], 'Number');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], 'Number');
            }
            if (data.hasOwnProperty('apiVolume')) {
                obj['apiVolume'] = ApiClient.convertToType(data['apiVolume'], 'Number');
            }
            if (data.hasOwnProperty('promotionTypes')) {
                obj['promotionTypes'] = ApiClient.convertToType(data['promotionTypes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Total number of allowed live applications in the account
 * @member {Number} liveApplications
 */
AccountLimits.prototype['liveApplications'] = undefined;

/**
 * Total number of allowed sandbox applications in the account
 * @member {Number} sandboxApplications
 */
AccountLimits.prototype['sandboxApplications'] = undefined;

/**
 * Total number of allowed active campaigns in live applications in the account
 * @member {Number} activeCampaigns
 */
AccountLimits.prototype['activeCampaigns'] = undefined;

/**
 * Total number of allowed coupons in the account
 * @member {Number} coupons
 */
AccountLimits.prototype['coupons'] = undefined;

/**
 * Total number of allowed referral codes in the account
 * @member {Number} referralCodes
 */
AccountLimits.prototype['referralCodes'] = undefined;

/**
 * Total number of allowed active rulesets in the account
 * @member {Number} activeRules
 */
AccountLimits.prototype['activeRules'] = undefined;

/**
 * Total number of allowed live loyalty programs in the account
 * @member {Number} liveLoyaltyPrograms
 */
AccountLimits.prototype['liveLoyaltyPrograms'] = undefined;

/**
 * Total number of allowed sandbox loyalty programs in the account
 * @member {Number} sandboxLoyaltyPrograms
 */
AccountLimits.prototype['sandboxLoyaltyPrograms'] = undefined;

/**
 * Total number of allowed webhooks in the account
 * @member {Number} webhooks
 */
AccountLimits.prototype['webhooks'] = undefined;

/**
 * Total number of allowed users in the account
 * @member {Number} users
 */
AccountLimits.prototype['users'] = undefined;

/**
 * Allowed volume of API requests to the account
 * @member {Number} apiVolume
 */
AccountLimits.prototype['apiVolume'] = undefined;

/**
 * Array of promotion types that are employed in the account
 * @member {Array.<String>} promotionTypes
 */
AccountLimits.prototype['promotionTypes'] = undefined;






export default AccountLimits;

