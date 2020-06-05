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
 * The CampaignAnalytics model module.
 * @module model/CampaignAnalytics
 * @version 4.1.1
 */
class CampaignAnalytics {
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
     */
    constructor(_date, campaignRevenue, totalCampaignRevenue, campaignRefund, totalCampaignRefund, campaignDiscountCosts, totalCampaignDiscountCosts, campaignRefundedDiscounts, totalCampaignRefundedDiscounts, campaignFreeItems, totalCampaignFreeItems, couponRedemptions, totalCouponRedemptions, couponRolledbackRedemptions, totalCouponRolledbackRedemptions, referralRedemptions, totalReferralRedemptions, couponsCreated, totalCouponsCreated, referralsCreated, totalReferralsCreated) { 
        
        CampaignAnalytics.initialize(this, _date, campaignRevenue, totalCampaignRevenue, campaignRefund, totalCampaignRefund, campaignDiscountCosts, totalCampaignDiscountCosts, campaignRefundedDiscounts, totalCampaignRefundedDiscounts, campaignFreeItems, totalCampaignFreeItems, couponRedemptions, totalCouponRedemptions, couponRolledbackRedemptions, totalCouponRolledbackRedemptions, referralRedemptions, totalReferralRedemptions, couponsCreated, totalCouponsCreated, referralsCreated, totalReferralsCreated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _date, campaignRevenue, totalCampaignRevenue, campaignRefund, totalCampaignRefund, campaignDiscountCosts, totalCampaignDiscountCosts, campaignRefundedDiscounts, totalCampaignRefundedDiscounts, campaignFreeItems, totalCampaignFreeItems, couponRedemptions, totalCouponRedemptions, couponRolledbackRedemptions, totalCouponRolledbackRedemptions, referralRedemptions, totalReferralRedemptions, couponsCreated, totalCouponsCreated, referralsCreated, totalReferralsCreated) { 
        obj['date'] = _date;
        obj['campaignRevenue'] = campaignRevenue;
        obj['totalCampaignRevenue'] = totalCampaignRevenue;
        obj['campaignRefund'] = campaignRefund;
        obj['totalCampaignRefund'] = totalCampaignRefund;
        obj['campaignDiscountCosts'] = campaignDiscountCosts;
        obj['totalCampaignDiscountCosts'] = totalCampaignDiscountCosts;
        obj['campaignRefundedDiscounts'] = campaignRefundedDiscounts;
        obj['totalCampaignRefundedDiscounts'] = totalCampaignRefundedDiscounts;
        obj['campaignFreeItems'] = campaignFreeItems;
        obj['totalCampaignFreeItems'] = totalCampaignFreeItems;
        obj['couponRedemptions'] = couponRedemptions;
        obj['totalCouponRedemptions'] = totalCouponRedemptions;
        obj['couponRolledbackRedemptions'] = couponRolledbackRedemptions;
        obj['totalCouponRolledbackRedemptions'] = totalCouponRolledbackRedemptions;
        obj['referralRedemptions'] = referralRedemptions;
        obj['totalReferralRedemptions'] = totalReferralRedemptions;
        obj['couponsCreated'] = couponsCreated;
        obj['totalCouponsCreated'] = totalCouponsCreated;
        obj['referralsCreated'] = referralsCreated;
        obj['totalReferralsCreated'] = totalReferralsCreated;
    }

    /**
     * Constructs a <code>CampaignAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignAnalytics} obj Optional instance to populate.
     * @return {module:model/CampaignAnalytics} The populated <code>CampaignAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignAnalytics();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('campaignRevenue')) {
                obj['campaignRevenue'] = ApiClient.convertToType(data['campaignRevenue'], 'Number');
            }
            if (data.hasOwnProperty('totalCampaignRevenue')) {
                obj['totalCampaignRevenue'] = ApiClient.convertToType(data['totalCampaignRevenue'], 'Number');
            }
            if (data.hasOwnProperty('campaignRefund')) {
                obj['campaignRefund'] = ApiClient.convertToType(data['campaignRefund'], 'Number');
            }
            if (data.hasOwnProperty('totalCampaignRefund')) {
                obj['totalCampaignRefund'] = ApiClient.convertToType(data['totalCampaignRefund'], 'Number');
            }
            if (data.hasOwnProperty('campaignDiscountCosts')) {
                obj['campaignDiscountCosts'] = ApiClient.convertToType(data['campaignDiscountCosts'], 'Number');
            }
            if (data.hasOwnProperty('totalCampaignDiscountCosts')) {
                obj['totalCampaignDiscountCosts'] = ApiClient.convertToType(data['totalCampaignDiscountCosts'], 'Number');
            }
            if (data.hasOwnProperty('campaignRefundedDiscounts')) {
                obj['campaignRefundedDiscounts'] = ApiClient.convertToType(data['campaignRefundedDiscounts'], 'Number');
            }
            if (data.hasOwnProperty('totalCampaignRefundedDiscounts')) {
                obj['totalCampaignRefundedDiscounts'] = ApiClient.convertToType(data['totalCampaignRefundedDiscounts'], 'Number');
            }
            if (data.hasOwnProperty('campaignFreeItems')) {
                obj['campaignFreeItems'] = ApiClient.convertToType(data['campaignFreeItems'], 'Number');
            }
            if (data.hasOwnProperty('totalCampaignFreeItems')) {
                obj['totalCampaignFreeItems'] = ApiClient.convertToType(data['totalCampaignFreeItems'], 'Number');
            }
            if (data.hasOwnProperty('couponRedemptions')) {
                obj['couponRedemptions'] = ApiClient.convertToType(data['couponRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('totalCouponRedemptions')) {
                obj['totalCouponRedemptions'] = ApiClient.convertToType(data['totalCouponRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('couponRolledbackRedemptions')) {
                obj['couponRolledbackRedemptions'] = ApiClient.convertToType(data['couponRolledbackRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('totalCouponRolledbackRedemptions')) {
                obj['totalCouponRolledbackRedemptions'] = ApiClient.convertToType(data['totalCouponRolledbackRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('referralRedemptions')) {
                obj['referralRedemptions'] = ApiClient.convertToType(data['referralRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('totalReferralRedemptions')) {
                obj['totalReferralRedemptions'] = ApiClient.convertToType(data['totalReferralRedemptions'], 'Number');
            }
            if (data.hasOwnProperty('couponsCreated')) {
                obj['couponsCreated'] = ApiClient.convertToType(data['couponsCreated'], 'Number');
            }
            if (data.hasOwnProperty('totalCouponsCreated')) {
                obj['totalCouponsCreated'] = ApiClient.convertToType(data['totalCouponsCreated'], 'Number');
            }
            if (data.hasOwnProperty('referralsCreated')) {
                obj['referralsCreated'] = ApiClient.convertToType(data['referralsCreated'], 'Number');
            }
            if (data.hasOwnProperty('totalReferralsCreated')) {
                obj['totalReferralsCreated'] = ApiClient.convertToType(data['totalReferralsCreated'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} date
 */
CampaignAnalytics.prototype['date'] = undefined;

/**
 * Amount of revenue in this campaign (for coupon or discount sessions).
 * @member {Number} campaignRevenue
 */
CampaignAnalytics.prototype['campaignRevenue'] = undefined;

/**
 * Amount of revenue in this campaign since it began (for coupon or discount sessions).
 * @member {Number} totalCampaignRevenue
 */
CampaignAnalytics.prototype['totalCampaignRevenue'] = undefined;

/**
 * Amount of refunds in this campaign (for coupon or discount sessions).
 * @member {Number} campaignRefund
 */
CampaignAnalytics.prototype['campaignRefund'] = undefined;

/**
 * Amount of refunds in this campaign since it began (for coupon or discount sessions).
 * @member {Number} totalCampaignRefund
 */
CampaignAnalytics.prototype['totalCampaignRefund'] = undefined;

/**
 * Amount of cost caused by discounts given in the campaign.
 * @member {Number} campaignDiscountCosts
 */
CampaignAnalytics.prototype['campaignDiscountCosts'] = undefined;

/**
 * Amount of cost caused by discounts given in the campaign since it began.
 * @member {Number} totalCampaignDiscountCosts
 */
CampaignAnalytics.prototype['totalCampaignDiscountCosts'] = undefined;

/**
 * Amount of discounts rolledback due to refund in the campaign.
 * @member {Number} campaignRefundedDiscounts
 */
CampaignAnalytics.prototype['campaignRefundedDiscounts'] = undefined;

/**
 * Amount of discounts rolledback due to refund in the campaign since it began.
 * @member {Number} totalCampaignRefundedDiscounts
 */
CampaignAnalytics.prototype['totalCampaignRefundedDiscounts'] = undefined;

/**
 * Amount of free items given in the campaign.
 * @member {Number} campaignFreeItems
 */
CampaignAnalytics.prototype['campaignFreeItems'] = undefined;

/**
 * Amount of free items given in the campaign since it began.
 * @member {Number} totalCampaignFreeItems
 */
CampaignAnalytics.prototype['totalCampaignFreeItems'] = undefined;

/**
 * Number of coupon redemptions in the campaign.
 * @member {Number} couponRedemptions
 */
CampaignAnalytics.prototype['couponRedemptions'] = undefined;

/**
 * Number of coupon redemptions in the campaign since it began.
 * @member {Number} totalCouponRedemptions
 */
CampaignAnalytics.prototype['totalCouponRedemptions'] = undefined;

/**
 * Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign.
 * @member {Number} couponRolledbackRedemptions
 */
CampaignAnalytics.prototype['couponRolledbackRedemptions'] = undefined;

/**
 * Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign since it began.
 * @member {Number} totalCouponRolledbackRedemptions
 */
CampaignAnalytics.prototype['totalCouponRolledbackRedemptions'] = undefined;

/**
 * Number of referral redemptions in the campaign.
 * @member {Number} referralRedemptions
 */
CampaignAnalytics.prototype['referralRedemptions'] = undefined;

/**
 * Number of referral redemptions in the campaign since it began.
 * @member {Number} totalReferralRedemptions
 */
CampaignAnalytics.prototype['totalReferralRedemptions'] = undefined;

/**
 * Number of coupons created in the campaign by the rule engine.
 * @member {Number} couponsCreated
 */
CampaignAnalytics.prototype['couponsCreated'] = undefined;

/**
 * Number of coupons created in the campaign by the rule engine since it began.
 * @member {Number} totalCouponsCreated
 */
CampaignAnalytics.prototype['totalCouponsCreated'] = undefined;

/**
 * Number of referrals created in the campaign by the rule engine.
 * @member {Number} referralsCreated
 */
CampaignAnalytics.prototype['referralsCreated'] = undefined;

/**
 * Number of referrals created in the campaign by the rule engine since it began.
 * @member {Number} totalReferralsCreated
 */
CampaignAnalytics.prototype['totalReferralsCreated'] = undefined;






export default CampaignAnalytics;

