export default CampaignAnalytics;
/**
 * The CampaignAnalytics model module.
 * @module model/CampaignAnalytics
 * @version 4.2.0
 */
declare class CampaignAnalytics {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, _date: any, campaignRevenue: any, totalCampaignRevenue: any, campaignRefund: any, totalCampaignRefund: any, campaignDiscountCosts: any, totalCampaignDiscountCosts: any, campaignRefundedDiscounts: any, totalCampaignRefundedDiscounts: any, campaignFreeItems: any, totalCampaignFreeItems: any, couponRedemptions: any, totalCouponRedemptions: any, couponRolledbackRedemptions: any, totalCouponRolledbackRedemptions: any, referralRedemptions: any, totalReferralRedemptions: any, couponsCreated: any, totalCouponsCreated: any, referralsCreated: any, totalReferralsCreated: any, addedLoyaltyPoints: any, totalAddedLoyaltyPoints: any, deductedLoyaltyPoints: any, totalDeductedLoyaltyPoints: any): void;
    /**
     * Constructs a <code>CampaignAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignAnalytics} obj Optional instance to populate.
     * @return {module:model/CampaignAnalytics} The populated <code>CampaignAnalytics</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignAnalytics</code>.
     *
     * @alias module:model/CampaignAnalytics
     * @param _date {Date}
     * @param campaignRevenue {Number} Amount of revenue in this campaign (for coupon or discount sessions).
     * @param totalCampaignRevenue {Number} Amount of revenue in this campaign since it began (for coupon or discount sessions).
     * @param campaignRefund {Number} Amount of refunds in this campaign (for coupon or discount sessions).
     * @param totalCampaignRefund {Number} Amount of refunds in this campaign since it began (for coupon or discount sessions).
     * @param campaignDiscountCosts {Number} Amount of cost caused by discounts given in the campaign.
     * @param totalCampaignDiscountCosts {Number} Amount of cost caused by discounts given in the campaign since it began.
     * @param campaignRefundedDiscounts {Number} Amount of discounts rolledback due to refund in the campaign.
     * @param totalCampaignRefundedDiscounts {Number} Amount of discounts rolledback due to refund in the campaign since it began.
     * @param campaignFreeItems {Number} Amount of free items given in the campaign.
     * @param totalCampaignFreeItems {Number} Amount of free items given in the campaign since it began.
     * @param couponRedemptions {Number} Number of coupon redemptions in the campaign.
     * @param totalCouponRedemptions {Number} Number of coupon redemptions in the campaign since it began.
     * @param couponRolledbackRedemptions {Number} Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign.
     * @param totalCouponRolledbackRedemptions {Number} Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign since it began.
     * @param referralRedemptions {Number} Number of referral redemptions in the campaign.
     * @param totalReferralRedemptions {Number} Number of referral redemptions in the campaign since it began.
     * @param couponsCreated {Number} Number of coupons created in the campaign by the rule engine.
     * @param totalCouponsCreated {Number} Number of coupons created in the campaign by the rule engine since it began.
     * @param referralsCreated {Number} Number of referrals created in the campaign by the rule engine.
     * @param totalReferralsCreated {Number} Number of referrals created in the campaign by the rule engine since it began.
     * @param addedLoyaltyPoints {Number} Number of added loyalty points in the campaign in a specific interval.
     * @param totalAddedLoyaltyPoints {Number} Number of added loyalty points in the campaign since it began.
     * @param deductedLoyaltyPoints {Number} Number of deducted loyalty points in the campaign in a specific interval.
     * @param totalDeductedLoyaltyPoints {Number} Number of deducted loyalty points in the campaign since it began.
     */
    constructor(_date: Date, campaignRevenue: number, totalCampaignRevenue: number, campaignRefund: number, totalCampaignRefund: number, campaignDiscountCosts: number, totalCampaignDiscountCosts: number, campaignRefundedDiscounts: number, totalCampaignRefundedDiscounts: number, campaignFreeItems: number, totalCampaignFreeItems: number, couponRedemptions: number, totalCouponRedemptions: number, couponRolledbackRedemptions: number, totalCouponRolledbackRedemptions: number, referralRedemptions: number, totalReferralRedemptions: number, couponsCreated: number, totalCouponsCreated: number, referralsCreated: number, totalReferralsCreated: number, addedLoyaltyPoints: number, totalAddedLoyaltyPoints: number, deductedLoyaltyPoints: number, totalDeductedLoyaltyPoints: number);
    date: any;
    campaignRevenue: any;
    totalCampaignRevenue: any;
    campaignRefund: any;
    totalCampaignRefund: any;
    campaignDiscountCosts: any;
    totalCampaignDiscountCosts: any;
    campaignRefundedDiscounts: any;
    totalCampaignRefundedDiscounts: any;
    campaignFreeItems: any;
    totalCampaignFreeItems: any;
    couponRedemptions: any;
    totalCouponRedemptions: any;
    couponRolledbackRedemptions: any;
    totalCouponRolledbackRedemptions: any;
    referralRedemptions: any;
    totalReferralRedemptions: any;
    couponsCreated: any;
    totalCouponsCreated: any;
    referralsCreated: any;
    totalReferralsCreated: any;
    addedLoyaltyPoints: any;
    totalAddedLoyaltyPoints: any;
    deductedLoyaltyPoints: any;
    totalDeductedLoyaltyPoints: any;
}
