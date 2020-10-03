export default AccountAnalytics;
/**
 * The AccountAnalytics model module.
 * @module model/AccountAnalytics
 * @version 4.2.0
 */
declare class AccountAnalytics {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applications: any, liveApplications: any, sandboxApplications: any, campaigns: any, activeCampaigns: any, liveActiveCampaigns: any, coupons: any, activeCoupons: any, expiredCoupons: any, referralCodes: any, activeReferralCodes: any, expiredReferralCodes: any, activeRules: any, users: any, roles: any, customAttributes: any, webhooks: any, loyaltyPrograms: any): void;
    /**
     * Constructs a <code>AccountAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAnalytics} obj Optional instance to populate.
     * @return {module:model/AccountAnalytics} The populated <code>AccountAnalytics</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AccountAnalytics</code>.
     * @alias module:model/AccountAnalytics
     * @param applications {Number} Total number of applications in the account
     * @param liveApplications {Number} Total number of live applications in the account
     * @param sandboxApplications {Number} Total number of sandbox applications in the account
     * @param campaigns {Number} Total number of campaigns in the account
     * @param activeCampaigns {Number} Total number of active campaigns in the account
     * @param liveActiveCampaigns {Number} Total number of active campaigns in live applications in the account
     * @param coupons {Number} Total number of coupons in the account
     * @param activeCoupons {Number} Total number of active coupons in the account
     * @param expiredCoupons {Number} Total number of expired coupons in the account
     * @param referralCodes {Number} Total number of referral codes in the account
     * @param activeReferralCodes {Number} Total number of active referral codes in the account
     * @param expiredReferralCodes {Number} Total number of expired referral codes in the account
     * @param activeRules {Number} Total number of active rules in the account
     * @param users {Number} Total number of users in the account
     * @param roles {Number} Total number of roles in the account
     * @param customAttributes {Number} Total number of custom attributes in the account
     * @param webhooks {Number} Total number of webhooks in the account
     * @param loyaltyPrograms {Number} Total number of loyalty programs in the account
     */
    constructor(applications: number, liveApplications: number, sandboxApplications: number, campaigns: number, activeCampaigns: number, liveActiveCampaigns: number, coupons: number, activeCoupons: number, expiredCoupons: number, referralCodes: number, activeReferralCodes: number, expiredReferralCodes: number, activeRules: number, users: number, roles: number, customAttributes: number, webhooks: number, loyaltyPrograms: number);
    applications: any;
    liveApplications: any;
    sandboxApplications: any;
    campaigns: any;
    activeCampaigns: any;
    liveActiveCampaigns: any;
    coupons: any;
    activeCoupons: any;
    expiredCoupons: any;
    referralCodes: any;
    activeReferralCodes: any;
    expiredReferralCodes: any;
    activeRules: any;
    users: any;
    roles: any;
    customAttributes: any;
    webhooks: any;
    loyaltyPrograms: any;
}
