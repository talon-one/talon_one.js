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
import LimitConfig from './LimitConfig';

/**
 * The NewCoupons model module.
 * @module model/NewCoupons
 * @version 10.0.0
 */
class NewCoupons {
    /**
     * Constructs a new <code>NewCoupons</code>.
     * @alias module:model/NewCoupons
     * @param usageLimit {Number} The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
     * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign. Must be at least 1.
     */
    constructor(usageLimit, numberOfCoupons) { 
        
        NewCoupons.initialize(this, usageLimit, numberOfCoupons);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, usageLimit, numberOfCoupons) { 
        obj['usageLimit'] = usageLimit;
        obj['numberOfCoupons'] = numberOfCoupons;
    }

    /**
     * Constructs a <code>NewCoupons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCoupons} obj Optional instance to populate.
     * @return {module:model/NewCoupons} The populated <code>NewCoupons</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCoupons();

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
            if (data.hasOwnProperty('numberOfCoupons')) {
                obj['numberOfCoupons'] = ApiClient.convertToType(data['numberOfCoupons'], 'Number');
            }
            if (data.hasOwnProperty('uniquePrefix')) {
                obj['uniquePrefix'] = ApiClient.convertToType(data['uniquePrefix'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('recipientIntegrationId')) {
                obj['recipientIntegrationId'] = ApiClient.convertToType(data['recipientIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('validCharacters')) {
                obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
            }
            if (data.hasOwnProperty('couponPattern')) {
                obj['couponPattern'] = ApiClient.convertToType(data['couponPattern'], 'String');
            }
            if (data.hasOwnProperty('isReservationMandatory')) {
                obj['isReservationMandatory'] = ApiClient.convertToType(data['isReservationMandatory'], 'Boolean');
            }
            if (data.hasOwnProperty('implicitlyReserved')) {
                obj['implicitlyReserved'] = ApiClient.convertToType(data['implicitlyReserved'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
NewCoupons.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
NewCoupons.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
NewCoupons.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
NewCoupons.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted.
 * @member {Date} expiryDate
 */
NewCoupons.prototype['expiryDate'] = undefined;

/**
 * Limits configuration for a coupon. These limits will override the limits set from the campaign.  **Note:** Only usable when creating a single coupon which is not tied to a specific recipient. Only per-profile limits are allowed to be configured. 
 * @member {Array.<module:model/LimitConfig>} limits
 */
NewCoupons.prototype['limits'] = undefined;

/**
 * The number of new coupon codes to generate for the campaign. Must be at least 1.
 * @member {Number} numberOfCoupons
 */
NewCoupons.prototype['numberOfCoupons'] = undefined;

/**
 * **DEPRECATED** To create more than 20,000 coupons in one request, use [Create coupons asynchronously](https://docs.talon.one/management-api#operation/createCouponsAsync) endpoint. 
 * @member {String} uniquePrefix
 */
NewCoupons.prototype['uniquePrefix'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
NewCoupons.prototype['attributes'] = undefined;

/**
 * The integration ID for this coupon's beneficiary's profile.
 * @member {String} recipientIntegrationId
 */
NewCoupons.prototype['recipientIntegrationId'] = undefined;

/**
 * List of characters used to generate the random parts of a code. By default, the list of characters is equivalent to the `[A-Z, 0-9]` regular expression. 
 * @member {Array.<String>} validCharacters
 */
NewCoupons.prototype['validCharacters'] = undefined;

/**
 * The pattern used to generate coupon codes. The character `#` is a placeholder and is replaced by a random character from the `validCharacters` set. 
 * @member {String} couponPattern
 */
NewCoupons.prototype['couponPattern'] = undefined;

/**
 * An indication of whether the code can be redeemed only if it has been reserved first.
 * @member {Boolean} isReservationMandatory
 * @default false
 */
NewCoupons.prototype['isReservationMandatory'] = false;

/**
 * An indication of whether the coupon is implicitly reserved for all customers.
 * @member {Boolean} implicitlyReserved
 */
NewCoupons.prototype['implicitlyReserved'] = undefined;






export default NewCoupons;

