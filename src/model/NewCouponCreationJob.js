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
import CodeGeneratorSettings from './CodeGeneratorSettings';

/**
 * The NewCouponCreationJob model module.
 * @module model/NewCouponCreationJob
 * @version 5.0.0
 */
class NewCouponCreationJob {
    /**
     * Constructs a new <code>NewCouponCreationJob</code>.
     * 
     * @alias module:model/NewCouponCreationJob
     * @param usageLimit {Number} The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
     * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign.
     * @param attributes {Object} Arbitrary properties associated with coupons.
     */
    constructor(usageLimit, numberOfCoupons, attributes) { 
        
        NewCouponCreationJob.initialize(this, usageLimit, numberOfCoupons, attributes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, usageLimit, numberOfCoupons, attributes) { 
        obj['usageLimit'] = usageLimit;
        obj['numberOfCoupons'] = numberOfCoupons;
        obj['attributes'] = attributes;
    }

    /**
     * Constructs a <code>NewCouponCreationJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCouponCreationJob} obj Optional instance to populate.
     * @return {module:model/NewCouponCreationJob} The populated <code>NewCouponCreationJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCouponCreationJob();

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
            if (data.hasOwnProperty('numberOfCoupons')) {
                obj['numberOfCoupons'] = ApiClient.convertToType(data['numberOfCoupons'], 'Number');
            }
            if (data.hasOwnProperty('couponSettings')) {
                obj['couponSettings'] = CodeGeneratorSettings.constructFromObject(data['couponSettings']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
NewCouponCreationJob.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
NewCouponCreationJob.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
NewCouponCreationJob.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
NewCouponCreationJob.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
NewCouponCreationJob.prototype['expiryDate'] = undefined;

/**
 * The number of new coupon codes to generate for the campaign.
 * @member {Number} numberOfCoupons
 */
NewCouponCreationJob.prototype['numberOfCoupons'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
NewCouponCreationJob.prototype['couponSettings'] = undefined;

/**
 * Arbitrary properties associated with coupons.
 * @member {Object} attributes
 */
NewCouponCreationJob.prototype['attributes'] = undefined;






export default NewCouponCreationJob;

