export default AccountLimits;
/**
 * The AccountLimits model module.
 * @module model/AccountLimits
 * @version 4.2.0
 */
declare class AccountLimits {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, liveApplications: any, sandboxApplications: any, activeCampaigns: any, coupons: any, referralCodes: any, activeRules: any, liveLoyaltyPrograms: any, sandboxLoyaltyPrograms: any, webhooks: any, users: any, apiVolume: any, promotionTypes: any): void;
    /**
     * Constructs a <code>AccountLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountLimits} obj Optional instance to populate.
     * @return {module:model/AccountLimits} The populated <code>AccountLimits</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
    constructor(liveApplications: number, sandboxApplications: number, activeCampaigns: number, coupons: number, referralCodes: number, activeRules: number, liveLoyaltyPrograms: number, sandboxLoyaltyPrograms: number, webhooks: number, users: number, apiVolume: number, promotionTypes: Array<string>);
    liveApplications: any;
    sandboxApplications: any;
    activeCampaigns: any;
    coupons: any;
    referralCodes: any;
    activeRules: any;
    liveLoyaltyPrograms: any;
    sandboxLoyaltyPrograms: any;
    webhooks: any;
    users: any;
    apiVolume: any;
    promotionTypes: any;
}
