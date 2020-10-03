export default CouponRejectionReason;
/**
 * The CouponRejectionReason model module.
 * @module model/CouponRejectionReason
 * @version 4.2.0
 */
declare class CouponRejectionReason {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, campaignId: any, couponId: any, reason: any): void;
    /**
     * Constructs a <code>CouponRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponRejectionReason} obj Optional instance to populate.
     * @return {module:model/CouponRejectionReason} The populated <code>CouponRejectionReason</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CouponRejectionReason</code>.
     * Holds a reference to the campaign, the coupon and the reason for which that coupon was rejected. Should only be present when there is a &#39;rejectCoupon&#39; effect.
     * @alias module:model/CouponRejectionReason
     * @param campaignId {Number}
     * @param couponId {Number}
     * @param reason {module:model/CouponRejectionReason.ReasonEnum}
     */
    constructor(campaignId: number, couponId: number, reason: any);
    campaignId: any;
    couponId: any;
    reason: any;
}
declare namespace CouponRejectionReason {
    namespace ReasonEnum {
        const CouponNotFound: string;
        const CouponPartOfNotRunningCampaign: string;
        const CouponLimitReached: string;
        const CampaignLimitReached: string;
        const ProfileLimitReached: string;
        const CouponRecipientDoesNotMatch: string;
        const CouponExpired: string;
        const CouponStartDateInFuture: string;
        const CouponRejectedByCondition: string;
        const EffectCouldNotBeApplied: string;
    }
}
