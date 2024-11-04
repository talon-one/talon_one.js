/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
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
 * The CouponDeletionFilters model module.
 * @module model/CouponDeletionFilters
 * @version 9.0.0
 */
class CouponDeletionFilters {
    /**
     * Constructs a new <code>CouponDeletionFilters</code>.
     * @alias module:model/CouponDeletionFilters
     */
    constructor() { 
        
        CouponDeletionFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponDeletionFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponDeletionFilters} obj Optional instance to populate.
     * @return {module:model/CouponDeletionFilters} The populated <code>CouponDeletionFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponDeletionFilters();

            if (data.hasOwnProperty('createdBefore')) {
                obj['createdBefore'] = ApiClient.convertToType(data['createdBefore'], 'Date');
            }
            if (data.hasOwnProperty('createdAfter')) {
                obj['createdAfter'] = ApiClient.convertToType(data['createdAfter'], 'Date');
            }
            if (data.hasOwnProperty('startsAfter')) {
                obj['startsAfter'] = ApiClient.convertToType(data['startsAfter'], 'Date');
            }
            if (data.hasOwnProperty('startsBefore')) {
                obj['startsBefore'] = ApiClient.convertToType(data['startsBefore'], 'Date');
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
            }
            if (data.hasOwnProperty('usable')) {
                obj['usable'] = ApiClient.convertToType(data['usable'], 'Boolean');
            }
            if (data.hasOwnProperty('redeemed')) {
                obj['redeemed'] = ApiClient.convertToType(data['redeemed'], 'Boolean');
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('exactMatch')) {
                obj['exactMatch'] = ApiClient.convertToType(data['exactMatch'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('referralId')) {
                obj['referralId'] = ApiClient.convertToType(data['referralId'], 'Number');
            }
            if (data.hasOwnProperty('expiresAfter')) {
                obj['expiresAfter'] = ApiClient.convertToType(data['expiresAfter'], 'Date');
            }
            if (data.hasOwnProperty('expiresBefore')) {
                obj['expiresBefore'] = ApiClient.convertToType(data['expiresBefore'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} createdBefore
 */
CouponDeletionFilters.prototype['createdBefore'] = undefined;

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} createdAfter
 */
CouponDeletionFilters.prototype['createdAfter'] = undefined;

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} startsAfter
 */
CouponDeletionFilters.prototype['startsAfter'] = undefined;

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} startsBefore
 */
CouponDeletionFilters.prototype['startsBefore'] = undefined;

/**
 * - `expired`: Matches coupons in which the expiration date is set and in the past. - `validNow`: Matches coupons in which the start date is null or in the past and the expiration date is null or in the future. - `validFuture`: Matches coupons in which the start date is set and in the future. 
 * @member {module:model/CouponDeletionFilters.ValidEnum} valid
 */
CouponDeletionFilters.prototype['valid'] = undefined;

/**
 * - `true`: only coupons where `usageCounter < usageLimit` will be returned. - `false`: only coupons where `usageCounter >= usageLimit` will be returned. - This field cannot be used in conjunction with the `usable` query parameter. 
 * @member {Boolean} usable
 */
CouponDeletionFilters.prototype['usable'] = undefined;

/**
 * - `true`: only coupons where `usageCounter > 0` will be returned. - `false`: only coupons where `usageCounter = 0` will be returned.  **Note:** This field cannot be used in conjunction with the `usable` query parameter. 
 * @member {Boolean} redeemed
 */
CouponDeletionFilters.prototype['redeemed'] = undefined;

/**
 * Filter results by match with a profile id specified in the coupon's `RecipientIntegrationId` field. 
 * @member {String} recipientIntegrationId
 */
CouponDeletionFilters.prototype['recipientIntegrationId'] = undefined;

/**
 * Filter results to an exact case-insensitive matching against the coupon code
 * @member {Boolean} exactMatch
 * @default false
 */
CouponDeletionFilters.prototype['exactMatch'] = false;

/**
 * Filter results by the coupon code
 * @member {String} value
 * @default 'false'
 */
CouponDeletionFilters.prototype['value'] = 'false';

/**
 * Filter results by batches of coupons
 * @member {String} batchId
 */
CouponDeletionFilters.prototype['batchId'] = undefined;

/**
 * Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code.
 * @member {Number} referralId
 */
CouponDeletionFilters.prototype['referralId'] = undefined;

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} expiresAfter
 */
CouponDeletionFilters.prototype['expiresAfter'] = undefined;

/**
 * Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally.
 * @member {Date} expiresBefore
 */
CouponDeletionFilters.prototype['expiresBefore'] = undefined;





/**
 * Allowed values for the <code>valid</code> property.
 * @enum {String}
 * @readonly
 */
CouponDeletionFilters['ValidEnum'] = {

    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",

    /**
     * value: "validNow"
     * @const
     */
    "validNow": "validNow",

    /**
     * value: "validFuture"
     * @const
     */
    "validFuture": "validFuture"
};



export default CouponDeletionFilters;
