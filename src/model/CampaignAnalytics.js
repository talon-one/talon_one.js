/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.CampaignAnalytics = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignAnalytics model module.
   * @module model/CampaignAnalytics
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>CampaignAnalytics</code>.
   * 
   * @alias module:model/CampaignAnalytics
   * @class
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
  var exports = function(_date, campaignRevenue, totalCampaignRevenue, campaignRefund, totalCampaignRefund, campaignDiscountCosts, totalCampaignDiscountCosts, campaignRefundedDiscounts, totalCampaignRefundedDiscounts, campaignFreeItems, totalCampaignFreeItems, couponRedemptions, totalCouponRedemptions, couponRolledbackRedemptions, totalCouponRolledbackRedemptions, referralRedemptions, totalReferralRedemptions, couponsCreated, totalCouponsCreated, referralsCreated, totalReferralsCreated) {
    var _this = this;

    _this['date'] = _date;
    _this['campaignRevenue'] = campaignRevenue;
    _this['totalCampaignRevenue'] = totalCampaignRevenue;
    _this['campaignRefund'] = campaignRefund;
    _this['totalCampaignRefund'] = totalCampaignRefund;
    _this['campaignDiscountCosts'] = campaignDiscountCosts;
    _this['totalCampaignDiscountCosts'] = totalCampaignDiscountCosts;
    _this['campaignRefundedDiscounts'] = campaignRefundedDiscounts;
    _this['totalCampaignRefundedDiscounts'] = totalCampaignRefundedDiscounts;
    _this['campaignFreeItems'] = campaignFreeItems;
    _this['totalCampaignFreeItems'] = totalCampaignFreeItems;
    _this['couponRedemptions'] = couponRedemptions;
    _this['totalCouponRedemptions'] = totalCouponRedemptions;
    _this['couponRolledbackRedemptions'] = couponRolledbackRedemptions;
    _this['totalCouponRolledbackRedemptions'] = totalCouponRolledbackRedemptions;
    _this['referralRedemptions'] = referralRedemptions;
    _this['totalReferralRedemptions'] = totalReferralRedemptions;
    _this['couponsCreated'] = couponsCreated;
    _this['totalCouponsCreated'] = totalCouponsCreated;
    _this['referralsCreated'] = referralsCreated;
    _this['totalReferralsCreated'] = totalReferralsCreated;
  };

  /**
   * Constructs a <code>CampaignAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignAnalytics} obj Optional instance to populate.
   * @return {module:model/CampaignAnalytics} The populated <code>CampaignAnalytics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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

  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Amount of revenue in this campaign (for coupon or discount sessions).
   * @member {Number} campaignRevenue
   */
  exports.prototype['campaignRevenue'] = undefined;
  /**
   * Amount of revenue in this campaign since it began (for coupon or discount sessions).
   * @member {Number} totalCampaignRevenue
   */
  exports.prototype['totalCampaignRevenue'] = undefined;
  /**
   * Amount of refunds in this campaign (for coupon or discount sessions).
   * @member {Number} campaignRefund
   */
  exports.prototype['campaignRefund'] = undefined;
  /**
   * Amount of refunds in this campaign since it began (for coupon or discount sessions).
   * @member {Number} totalCampaignRefund
   */
  exports.prototype['totalCampaignRefund'] = undefined;
  /**
   * Amount of cost caused by discounts given in the campaign.
   * @member {Number} campaignDiscountCosts
   */
  exports.prototype['campaignDiscountCosts'] = undefined;
  /**
   * Amount of cost caused by discounts given in the campaign since it began.
   * @member {Number} totalCampaignDiscountCosts
   */
  exports.prototype['totalCampaignDiscountCosts'] = undefined;
  /**
   * Amount of discounts rolledback due to refund in the campaign.
   * @member {Number} campaignRefundedDiscounts
   */
  exports.prototype['campaignRefundedDiscounts'] = undefined;
  /**
   * Amount of discounts rolledback due to refund in the campaign since it began.
   * @member {Number} totalCampaignRefundedDiscounts
   */
  exports.prototype['totalCampaignRefundedDiscounts'] = undefined;
  /**
   * Amount of free items given in the campaign.
   * @member {Number} campaignFreeItems
   */
  exports.prototype['campaignFreeItems'] = undefined;
  /**
   * Amount of free items given in the campaign since it began.
   * @member {Number} totalCampaignFreeItems
   */
  exports.prototype['totalCampaignFreeItems'] = undefined;
  /**
   * Number of coupon redemptions in the campaign.
   * @member {Number} couponRedemptions
   */
  exports.prototype['couponRedemptions'] = undefined;
  /**
   * Number of coupon redemptions in the campaign since it began.
   * @member {Number} totalCouponRedemptions
   */
  exports.prototype['totalCouponRedemptions'] = undefined;
  /**
   * Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign.
   * @member {Number} couponRolledbackRedemptions
   */
  exports.prototype['couponRolledbackRedemptions'] = undefined;
  /**
   * Number of coupon redemptions that have been rolled back (due to canceling closed session) in the campaign since it began.
   * @member {Number} totalCouponRolledbackRedemptions
   */
  exports.prototype['totalCouponRolledbackRedemptions'] = undefined;
  /**
   * Number of referral redemptions in the campaign.
   * @member {Number} referralRedemptions
   */
  exports.prototype['referralRedemptions'] = undefined;
  /**
   * Number of referral redemptions in the campaign since it began.
   * @member {Number} totalReferralRedemptions
   */
  exports.prototype['totalReferralRedemptions'] = undefined;
  /**
   * Number of coupons created in the campaign by the rule engine.
   * @member {Number} couponsCreated
   */
  exports.prototype['couponsCreated'] = undefined;
  /**
   * Number of coupons created in the campaign by the rule engine since it began.
   * @member {Number} totalCouponsCreated
   */
  exports.prototype['totalCouponsCreated'] = undefined;
  /**
   * Number of referrals created in the campaign by the rule engine.
   * @member {Number} referralsCreated
   */
  exports.prototype['referralsCreated'] = undefined;
  /**
   * Number of referrals created in the campaign by the rule engine since it began.
   * @member {Number} totalReferralsCreated
   */
  exports.prototype['totalReferralsCreated'] = undefined;



  return exports;
}));


