/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import LimitConfig from './LimitConfig';

/**
 * The IntegrationCoupon model module.
 * @module model/IntegrationCoupon
 * @version 5.0.0
 */
class IntegrationCoupon {
    /**
     * Constructs a new <code>IntegrationCoupon</code>.
     * 
     * @alias module:model/IntegrationCoupon
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     * @param value {String} The coupon code.
     * @param usageLimit {Number} The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
     * @param usageCounter {Number} The number of times the coupon has been successfully redeemed.
     * @param profileRedemptionCount {Number} The number of times the coupon was redeemed by the profile.
     */
    constructor(id, created, campaignId, value, usageLimit, usageCounter, profileRedemptionCount) { 
        
        IntegrationCoupon.initialize(this, id, created, campaignId, value, usageLimit, usageCounter, profileRedemptionCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, campaignId, value, usageLimit, usageCounter, profileRedemptionCount) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['campaignId'] = campaignId;
        obj['value'] = value;
        obj['usageLimit'] = usageLimit;
        obj['usageCounter'] = usageCounter;
        obj['profileRedemptionCount'] = profileRedemptionCount;
    }

    /**
     * Constructs a <code>IntegrationCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationCoupon} obj Optional instance to populate.
     * @return {module:model/IntegrationCoupon} The populated <code>IntegrationCoupon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationCoupon();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('usageLimit')) {
                obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
            }
            if (data.hasOwnProperty('discountLimit')) {
                obj['discountLimit'] = ApiClient.convertToType(data['discountLimit'], 'Number');
            }
            if (data.hasOwnProperty('reservationLimit')) {
                obj['reservationLimit'] = ApiClient.convertToType(data['reservationLimit'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [LimitConfig]);
            }
            if (data.hasOwnProperty('usageCounter')) {
                obj['usageCounter'] = ApiClient.convertToType(data['usageCounter'], 'Number');
            }
            if (data.hasOwnProperty('discountCounter')) {
                obj['discountCounter'] = ApiClient.convertToType(data['discountCounter'], 'Number');
            }
            if (data.hasOwnProperty('discountRemainder')) {
                obj['discountRemainder'] = ApiClient.convertToType(data['discountRemainder'], 'Number');
            }
            if (data.hasOwnProperty('reservationCounter')) {
                obj['reservationCounter'] = ApiClient.convertToType(data['reservationCounter'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('referralId')) {
                obj['referralId'] = ApiClient.convertToType(data['referralId'], 'Number');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('importId')) {
                obj['importId'] = ApiClient.convertToType(data['importId'], 'Number');
            }
            if (data.hasOwnProperty('reservation')) {
                obj['reservation'] = ApiClient.convertToType(data['reservation'], 'Boolean');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('isReservationMandatory')) {
                obj['isReservationMandatory'] = ApiClient.convertToType(data['isReservationMandatory'], 'Boolean');
            }
            if (data.hasOwnProperty('profileRedemptionCount')) {
                obj['profileRedemptionCount'] = ApiClient.convertToType(data['profileRedemptionCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
IntegrationCoupon.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
IntegrationCoupon.prototype['created'] = undefined;

/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */
IntegrationCoupon.prototype['campaignId'] = undefined;

/**
 * The coupon code.
 * @member {String} value
 */
IntegrationCoupon.prototype['value'] = undefined;

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
IntegrationCoupon.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
IntegrationCoupon.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
IntegrationCoupon.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
IntegrationCoupon.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
IntegrationCoupon.prototype['expiryDate'] = undefined;

/**
 * Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured. 
 * @member {Array.<module:model/LimitConfig>} limits
 */
IntegrationCoupon.prototype['limits'] = undefined;

/**
 * The number of times the coupon has been successfully redeemed.
 * @member {Number} usageCounter
 */
IntegrationCoupon.prototype['usageCounter'] = undefined;

/**
 * The amount of discounts given on rules redeeming this coupon. Only usable if a coupon discount budget was set for this coupon.
 * @member {Number} discountCounter
 */
IntegrationCoupon.prototype['discountCounter'] = undefined;

/**
 * The remaining discount this coupon can give.
 * @member {Number} discountRemainder
 */
IntegrationCoupon.prototype['discountRemainder'] = undefined;

/**
 * The number of times this coupon has been reserved.
 * @member {Number} reservationCounter
 */
IntegrationCoupon.prototype['reservationCounter'] = undefined;

/**
 * Custom attributes associated with this coupon.
 * @member {Object} attributes
 */
IntegrationCoupon.prototype['attributes'] = undefined;

/**
 * The integration ID of the referring customer (if any) for whom this coupon was created as an effect.
 * @member {Number} referralId
 */
IntegrationCoupon.prototype['referralId'] = undefined;

/**
 * The Integration ID of the customer that is allowed to redeem this coupon.
 * @member {String} recipientIntegrationId
 */
IntegrationCoupon.prototype['recipientIntegrationId'] = undefined;

/**
 * The ID of the Import which created this coupon.
 * @member {Number} importId
 */
IntegrationCoupon.prototype['importId'] = undefined;

/**
 * Defines the type of reservation: - `true`: The reservation is a soft reservation. Any customer can use the coupon. This is done via the [Create coupon reservation](https://docs.talon.one/integration-api#operation/createCouponReservation) endpoint. - `false`: The reservation is a hard reservation. Only the associated customer (`recipientIntegrationId`) can use the coupon. This is done via the Campaign Manager when you create a coupon for a given `recipientIntegrationId`, the [Create coupons](https://docs.talon.one/management-api#operation/createCoupons) endpoint or [Create coupons for multiple recipients](https://docs.talon.one/management-api#operation/createCouponsForMultipleRecipients) endpoint. 
 * @member {Boolean} reservation
 * @default true
 */
IntegrationCoupon.prototype['reservation'] = true;

/**
 * The id of the batch the coupon belongs to.
 * @member {String} batchId
 */
IntegrationCoupon.prototype['batchId'] = undefined;

/**
 * Whether the reservation effect actually created a new reservation.
 * @member {Boolean} isReservationMandatory
 * @default true
 */
IntegrationCoupon.prototype['isReservationMandatory'] = true;

/**
 * The number of times the coupon was redeemed by the profile.
 * @member {Number} profileRedemptionCount
 */
IntegrationCoupon.prototype['profileRedemptionCount'] = undefined;






export default IntegrationCoupon;

