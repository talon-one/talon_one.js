/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
 * The AccountAnalytics model module.
 * @module model/AccountAnalytics
 * @version 5.0.0
 */
class AccountAnalytics {
    /**
     * Constructs a new <code>AccountAnalytics</code>.
     * @alias module:model/AccountAnalytics
     * @param applications {Number} Total number of applications in the account.
     * @param liveApplications {Number} Total number of live applications in the account.
     * @param sandboxApplications {Number} Total number of sandbox applications in the account.
     * @param campaigns {Number} Total number of campaigns in the account.
     * @param activeCampaigns {Number} Total number of active campaigns in the account.
     * @param liveActiveCampaigns {Number} Total number of active campaigns in live applications in the account.
     * @param coupons {Number} Total number of coupons in the account.
     * @param activeCoupons {Number} Total number of active coupons in the account.
     * @param expiredCoupons {Number} Total number of expired coupons in the account.
     * @param referralCodes {Number} Total number of referral codes in the account.
     * @param activeReferralCodes {Number} Total number of active referral codes in the account.
     * @param expiredReferralCodes {Number} Total number of expired referral codes in the account.
     * @param activeRules {Number} Total number of active rules in the account.
     * @param users {Number} Total number of users in the account.
     * @param roles {Number} Total number of roles in the account.
     * @param customAttributes {Number} Total number of custom attributes in the account.
     * @param webhooks {Number} Total number of webhooks in the account.
     * @param loyaltyPrograms {Number} Total number of all loyalty programs in the account.
     * @param liveLoyaltyPrograms {Number} Total number of live loyalty programs in the account.
     */
    constructor(applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms, liveLoyaltyPrograms) { 
        
        AccountAnalytics.initialize(this, applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms, liveLoyaltyPrograms);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applications, liveApplications, sandboxApplications, campaigns, activeCampaigns, liveActiveCampaigns, coupons, activeCoupons, expiredCoupons, referralCodes, activeReferralCodes, expiredReferralCodes, activeRules, users, roles, customAttributes, webhooks, loyaltyPrograms, liveLoyaltyPrograms) { 
        obj['applications'] = applications;
        obj['liveApplications'] = liveApplications;
        obj['sandboxApplications'] = sandboxApplications;
        obj['campaigns'] = campaigns;
        obj['activeCampaigns'] = activeCampaigns;
        obj['liveActiveCampaigns'] = liveActiveCampaigns;
        obj['coupons'] = coupons;
        obj['activeCoupons'] = activeCoupons;
        obj['expiredCoupons'] = expiredCoupons;
        obj['referralCodes'] = referralCodes;
        obj['activeReferralCodes'] = activeReferralCodes;
        obj['expiredReferralCodes'] = expiredReferralCodes;
        obj['activeRules'] = activeRules;
        obj['users'] = users;
        obj['roles'] = roles;
        obj['customAttributes'] = customAttributes;
        obj['webhooks'] = webhooks;
        obj['loyaltyPrograms'] = loyaltyPrograms;
        obj['liveLoyaltyPrograms'] = liveLoyaltyPrograms;
    }

    /**
     * Constructs a <code>AccountAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAnalytics} obj Optional instance to populate.
     * @return {module:model/AccountAnalytics} The populated <code>AccountAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountAnalytics();

            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], 'Number');
            }
            if (data.hasOwnProperty('liveApplications')) {
                obj['liveApplications'] = ApiClient.convertToType(data['liveApplications'], 'Number');
            }
            if (data.hasOwnProperty('sandboxApplications')) {
                obj['sandboxApplications'] = ApiClient.convertToType(data['sandboxApplications'], 'Number');
            }
            if (data.hasOwnProperty('campaigns')) {
                obj['campaigns'] = ApiClient.convertToType(data['campaigns'], 'Number');
            }
            if (data.hasOwnProperty('activeCampaigns')) {
                obj['activeCampaigns'] = ApiClient.convertToType(data['activeCampaigns'], 'Number');
            }
            if (data.hasOwnProperty('liveActiveCampaigns')) {
                obj['liveActiveCampaigns'] = ApiClient.convertToType(data['liveActiveCampaigns'], 'Number');
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], 'Number');
            }
            if (data.hasOwnProperty('activeCoupons')) {
                obj['activeCoupons'] = ApiClient.convertToType(data['activeCoupons'], 'Number');
            }
            if (data.hasOwnProperty('expiredCoupons')) {
                obj['expiredCoupons'] = ApiClient.convertToType(data['expiredCoupons'], 'Number');
            }
            if (data.hasOwnProperty('referralCodes')) {
                obj['referralCodes'] = ApiClient.convertToType(data['referralCodes'], 'Number');
            }
            if (data.hasOwnProperty('activeReferralCodes')) {
                obj['activeReferralCodes'] = ApiClient.convertToType(data['activeReferralCodes'], 'Number');
            }
            if (data.hasOwnProperty('expiredReferralCodes')) {
                obj['expiredReferralCodes'] = ApiClient.convertToType(data['expiredReferralCodes'], 'Number');
            }
            if (data.hasOwnProperty('activeRules')) {
                obj['activeRules'] = ApiClient.convertToType(data['activeRules'], 'Number');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], 'Number');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], 'Number');
            }
            if (data.hasOwnProperty('customAttributes')) {
                obj['customAttributes'] = ApiClient.convertToType(data['customAttributes'], 'Number');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], 'Number');
            }
            if (data.hasOwnProperty('loyaltyPrograms')) {
                obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], 'Number');
            }
            if (data.hasOwnProperty('liveLoyaltyPrograms')) {
                obj['liveLoyaltyPrograms'] = ApiClient.convertToType(data['liveLoyaltyPrograms'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total number of applications in the account.
 * @member {Number} applications
 */
AccountAnalytics.prototype['applications'] = undefined;

/**
 * Total number of live applications in the account.
 * @member {Number} liveApplications
 */
AccountAnalytics.prototype['liveApplications'] = undefined;

/**
 * Total number of sandbox applications in the account.
 * @member {Number} sandboxApplications
 */
AccountAnalytics.prototype['sandboxApplications'] = undefined;

/**
 * Total number of campaigns in the account.
 * @member {Number} campaigns
 */
AccountAnalytics.prototype['campaigns'] = undefined;

/**
 * Total number of active campaigns in the account.
 * @member {Number} activeCampaigns
 */
AccountAnalytics.prototype['activeCampaigns'] = undefined;

/**
 * Total number of active campaigns in live applications in the account.
 * @member {Number} liveActiveCampaigns
 */
AccountAnalytics.prototype['liveActiveCampaigns'] = undefined;

/**
 * Total number of coupons in the account.
 * @member {Number} coupons
 */
AccountAnalytics.prototype['coupons'] = undefined;

/**
 * Total number of active coupons in the account.
 * @member {Number} activeCoupons
 */
AccountAnalytics.prototype['activeCoupons'] = undefined;

/**
 * Total number of expired coupons in the account.
 * @member {Number} expiredCoupons
 */
AccountAnalytics.prototype['expiredCoupons'] = undefined;

/**
 * Total number of referral codes in the account.
 * @member {Number} referralCodes
 */
AccountAnalytics.prototype['referralCodes'] = undefined;

/**
 * Total number of active referral codes in the account.
 * @member {Number} activeReferralCodes
 */
AccountAnalytics.prototype['activeReferralCodes'] = undefined;

/**
 * Total number of expired referral codes in the account.
 * @member {Number} expiredReferralCodes
 */
AccountAnalytics.prototype['expiredReferralCodes'] = undefined;

/**
 * Total number of active rules in the account.
 * @member {Number} activeRules
 */
AccountAnalytics.prototype['activeRules'] = undefined;

/**
 * Total number of users in the account.
 * @member {Number} users
 */
AccountAnalytics.prototype['users'] = undefined;

/**
 * Total number of roles in the account.
 * @member {Number} roles
 */
AccountAnalytics.prototype['roles'] = undefined;

/**
 * Total number of custom attributes in the account.
 * @member {Number} customAttributes
 */
AccountAnalytics.prototype['customAttributes'] = undefined;

/**
 * Total number of webhooks in the account.
 * @member {Number} webhooks
 */
AccountAnalytics.prototype['webhooks'] = undefined;

/**
 * Total number of all loyalty programs in the account.
 * @member {Number} loyaltyPrograms
 */
AccountAnalytics.prototype['loyaltyPrograms'] = undefined;

/**
 * Total number of live loyalty programs in the account.
 * @member {Number} liveLoyaltyPrograms
 */
AccountAnalytics.prototype['liveLoyaltyPrograms'] = undefined;






export default AccountAnalytics;

