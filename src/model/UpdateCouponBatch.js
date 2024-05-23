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
 * The UpdateCouponBatch model module.
 * @module model/UpdateCouponBatch
 * @version 7.0.0
 */
class UpdateCouponBatch {
    /**
     * Constructs a new <code>UpdateCouponBatch</code>.
     * 
     * @alias module:model/UpdateCouponBatch
     */
    constructor() { 
        
        UpdateCouponBatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateCouponBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCouponBatch} obj Optional instance to populate.
     * @return {module:model/UpdateCouponBatch} The populated <code>UpdateCouponBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCouponBatch();

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
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('batchID')) {
                obj['batchID'] = ApiClient.convertToType(data['batchID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
UpdateCouponBatch.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
UpdateCouponBatch.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
UpdateCouponBatch.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
UpdateCouponBatch.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
UpdateCouponBatch.prototype['expiryDate'] = undefined;

/**
 * Optional property to set the value of custom coupon attributes. They are defined in the Campaign Manager, see [Managing attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes).  Coupon attributes can also be set to _mandatory_ in your Application [settings](https://docs.talon.one/docs/product/applications/using-attributes#making-attributes-mandatory). If your Application uses mandatory attributes, you must use this property to set their value. 
 * @member {Object} attributes
 */
UpdateCouponBatch.prototype['attributes'] = undefined;

/**
 * The ID of the batch the coupon(s) belong to.
 * @member {String} batchID
 */
UpdateCouponBatch.prototype['batchID'] = undefined;






export default UpdateCouponBatch;

