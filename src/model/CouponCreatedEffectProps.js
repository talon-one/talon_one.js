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
 * The CouponCreatedEffectProps model module.
 * @module model/CouponCreatedEffectProps
 * @version 4.1.0
 */
class CouponCreatedEffectProps {
    /**
     * Constructs a new <code>CouponCreatedEffectProps</code>.
     * The properties specific to the \&quot;couponCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create coupon\&quot; effect, and a coupon was created for a customer. See \&quot;createdCoupons\&quot; on the response for all details of this coupon.
     * @alias module:model/CouponCreatedEffectProps
     * @param value {String} The coupon code that was created
     * @param profileId {String} The integration identifier of the customer for whom this coupon was created
     */
    constructor(value, profileId) { 
        
        CouponCreatedEffectProps.initialize(this, value, profileId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, profileId) { 
        obj['value'] = value;
        obj['profileId'] = profileId;
    }

    /**
     * Constructs a <code>CouponCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/CouponCreatedEffectProps} The populated <code>CouponCreatedEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCreatedEffectProps();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The coupon code that was created
 * @member {String} value
 */
CouponCreatedEffectProps.prototype['value'] = undefined;

/**
 * The integration identifier of the customer for whom this coupon was created
 * @member {String} profileId
 */
CouponCreatedEffectProps.prototype['profileId'] = undefined;






export default CouponCreatedEffectProps;

