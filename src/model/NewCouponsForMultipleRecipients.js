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
 * The NewCouponsForMultipleRecipients model module.
 * @module model/NewCouponsForMultipleRecipients
 * @version 11.0.0
 */
class NewCouponsForMultipleRecipients {
    /**
     * Constructs a new <code>NewCouponsForMultipleRecipients</code>.
     * @alias module:model/NewCouponsForMultipleRecipients
     * @param usageLimit {Number} The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
     * @param recipientsIntegrationIds {Array.<String>} The integration IDs for recipients.
     */
    constructor(usageLimit, recipientsIntegrationIds) { 
        
        NewCouponsForMultipleRecipients.initialize(this, usageLimit, recipientsIntegrationIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, usageLimit, recipientsIntegrationIds) { 
        obj['usageLimit'] = usageLimit;
        obj['recipientsIntegrationIds'] = recipientsIntegrationIds;
    }

    /**
     * Constructs a <code>NewCouponsForMultipleRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCouponsForMultipleRecipients} obj Optional instance to populate.
     * @return {module:model/NewCouponsForMultipleRecipients} The populated <code>NewCouponsForMultipleRecipients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCouponsForMultipleRecipients();

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
            if (data.hasOwnProperty('recipientsIntegrationIds')) {
                obj['recipientsIntegrationIds'] = ApiClient.convertToType(data['recipientsIntegrationIds'], ['String']);
            }
            if (data.hasOwnProperty('validCharacters')) {
                obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
            }
            if (data.hasOwnProperty('couponPattern')) {
                obj['couponPattern'] = ApiClient.convertToType(data['couponPattern'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
NewCouponsForMultipleRecipients.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
NewCouponsForMultipleRecipients.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
NewCouponsForMultipleRecipients.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
NewCouponsForMultipleRecipients.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted.
 * @member {Date} expiryDate
 */
NewCouponsForMultipleRecipients.prototype['expiryDate'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
NewCouponsForMultipleRecipients.prototype['attributes'] = undefined;

/**
 * The integration IDs for recipients.
 * @member {Array.<String>} recipientsIntegrationIds
 */
NewCouponsForMultipleRecipients.prototype['recipientsIntegrationIds'] = undefined;

/**
 * List of characters used to generate the random parts of a code. By default, the list of characters is equivalent to the `[A-Z, 0-9]` regular expression. 
 * @member {Array.<String>} validCharacters
 */
NewCouponsForMultipleRecipients.prototype['validCharacters'] = undefined;

/**
 * The pattern used to generate coupon codes. The character `#` is a placeholder and is replaced by a random character from the `validCharacters` set. 
 * @member {String} couponPattern
 */
NewCouponsForMultipleRecipients.prototype['couponPattern'] = undefined;






export default NewCouponsForMultipleRecipients;

