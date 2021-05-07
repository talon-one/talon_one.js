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
 * The RejectCouponEffectProps model module.
 * @module model/RejectCouponEffectProps
 * @version 10.0.0
 */
class RejectCouponEffectProps {
    /**
     * Constructs a new <code>RejectCouponEffectProps</code>.
     * The properties specific to the \&quot;rejectCoupon\&quot; effect. This gets triggered whenever the coupon was rejected. See rejectionReason for more info on why.
     * @alias module:model/RejectCouponEffectProps
     * @param value {String} The coupon code that was rejected
     * @param rejectionReason {String} The reason why this coupon was rejected
     */
    constructor(value, rejectionReason) { 
        
        RejectCouponEffectProps.initialize(this, value, rejectionReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, rejectionReason) { 
        obj['value'] = value;
        obj['rejectionReason'] = rejectionReason;
    }

    /**
     * Constructs a <code>RejectCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/RejectCouponEffectProps} The populated <code>RejectCouponEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RejectCouponEffectProps();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('rejectionReason')) {
                obj['rejectionReason'] = ApiClient.convertToType(data['rejectionReason'], 'String');
            }
            if (data.hasOwnProperty('conditionIndex')) {
                obj['conditionIndex'] = ApiClient.convertToType(data['conditionIndex'], 'Number');
            }
            if (data.hasOwnProperty('effectIndex')) {
                obj['effectIndex'] = ApiClient.convertToType(data['effectIndex'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The coupon code that was rejected
 * @member {String} value
 */
RejectCouponEffectProps.prototype['value'] = undefined;

/**
 * The reason why this coupon was rejected
 * @member {String} rejectionReason
 */
RejectCouponEffectProps.prototype['rejectionReason'] = undefined;

/**
 * The index of the condition that caused the rejection of the coupon
 * @member {Number} conditionIndex
 */
RejectCouponEffectProps.prototype['conditionIndex'] = undefined;

/**
 * The index of the effect that caused the rejection of the coupon
 * @member {Number} effectIndex
 */
RejectCouponEffectProps.prototype['effectIndex'] = undefined;

/**
 * More details about the failure
 * @member {String} details
 */
RejectCouponEffectProps.prototype['details'] = undefined;






export default RejectCouponEffectProps;

