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
 * The ReserveCouponEffectProps model module.
 * @module model/ReserveCouponEffectProps
 * @version 12.0.0
 */
class ReserveCouponEffectProps {
    /**
     * Constructs a new <code>ReserveCouponEffectProps</code>.
     * The properties specific to the \&quot;reserveCoupon\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;reserve coupon\&quot; effect. This reserves the coupon currently on scope to the profile on scope.
     * @alias module:model/ReserveCouponEffectProps
     * @param couponValue {String} The value of the coupon currently on scope.
     * @param profileIntegrationId {String} The ID of this customer profile in the third-party integration.
     * @param isNewReservation {Boolean} Indicates whether this is a new coupon reservation or not.
     */
    constructor(couponValue, profileIntegrationId, isNewReservation) { 
        
        ReserveCouponEffectProps.initialize(this, couponValue, profileIntegrationId, isNewReservation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, couponValue, profileIntegrationId, isNewReservation) { 
        obj['couponValue'] = couponValue;
        obj['profileIntegrationId'] = profileIntegrationId;
        obj['isNewReservation'] = isNewReservation;
    }

    /**
     * Constructs a <code>ReserveCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReserveCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/ReserveCouponEffectProps} The populated <code>ReserveCouponEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReserveCouponEffectProps();

            if (data.hasOwnProperty('couponValue')) {
                obj['couponValue'] = ApiClient.convertToType(data['couponValue'], 'String');
            }
            if (data.hasOwnProperty('profileIntegrationId')) {
                obj['profileIntegrationId'] = ApiClient.convertToType(data['profileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('isNewReservation')) {
                obj['isNewReservation'] = ApiClient.convertToType(data['isNewReservation'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The value of the coupon currently on scope.
 * @member {String} couponValue
 */
ReserveCouponEffectProps.prototype['couponValue'] = undefined;

/**
 * The ID of this customer profile in the third-party integration.
 * @member {String} profileIntegrationId
 */
ReserveCouponEffectProps.prototype['profileIntegrationId'] = undefined;

/**
 * Indicates whether this is a new coupon reservation or not.
 * @member {Boolean} isNewReservation
 */
ReserveCouponEffectProps.prototype['isNewReservation'] = undefined;






export default ReserveCouponEffectProps;

