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
import CartItem from './CartItem';

/**
 * The ApplicationSession model module.
 * @module model/ApplicationSession
 * @version 8.0.0
 */
class ApplicationSession {
    /**
     * Constructs a new <code>ApplicationSession</code>.
     * 
     * @alias module:model/ApplicationSession
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created. The time this entity was created.
     * @param integrationId {String} The integration ID set by your integration layer.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param coupon {String} Any coupon code entered.
     * @param referral {String} Any referral code entered.
     * @param state {module:model/ApplicationSession.StateEnum} Indicates the current state of the session. Sessions can be created as `open` or `closed`. The state transitions are:  1. `open` → `closed` 2. `open` → `cancelled` 3. `closed` → `cancelled` or `partially_returned` 4. `partially_returned` → `cancelled`  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). 
     * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
     * @param discounts {Object.<String, Number>} **API V1 only.** A map of labeled discount values, in the same currency as the session.  If you are using the V2 endpoints, refer to the `totalDiscounts` property instead. 
     * @param totalDiscounts {Number} The total sum of the discounts applied to this session.
     * @param total {Number} The total sum of the session before any discounts applied.
     */
    constructor(id, created, integrationId, applicationId, coupon, referral, state, cartItems, discounts, totalDiscounts, total) { 
        
        ApplicationSession.initialize(this, id, created, integrationId, applicationId, coupon, referral, state, cartItems, discounts, totalDiscounts, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, integrationId, applicationId, coupon, referral, state, cartItems, discounts, totalDiscounts, total) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['integrationId'] = integrationId;
        obj['applicationId'] = applicationId;
        obj['coupon'] = coupon;
        obj['referral'] = referral;
        obj['state'] = state;
        obj['cartItems'] = cartItems;
        obj['discounts'] = discounts;
        obj['totalDiscounts'] = totalDiscounts;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>ApplicationSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSession} obj Optional instance to populate.
     * @return {module:model/ApplicationSession} The populated <code>ApplicationSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationSession();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('storeIntegrationId')) {
                obj['storeIntegrationId'] = ApiClient.convertToType(data['storeIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
            if (data.hasOwnProperty('profileintegrationid')) {
                obj['profileintegrationid'] = ApiClient.convertToType(data['profileintegrationid'], 'String');
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = ApiClient.convertToType(data['coupon'], 'String');
            }
            if (data.hasOwnProperty('referral')) {
                obj['referral'] = ApiClient.convertToType(data['referral'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('cartItems')) {
                obj['cartItems'] = ApiClient.convertToType(data['cartItems'], [CartItem]);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('totalDiscounts')) {
                obj['totalDiscounts'] = ApiClient.convertToType(data['totalDiscounts'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
ApplicationSession.prototype['id'] = undefined;

/**
 * The time this entity was created. The time this entity was created.
 * @member {Date} created
 */
ApplicationSession.prototype['created'] = undefined;

/**
 * The integration ID set by your integration layer.
 * @member {String} integrationId
 */
ApplicationSession.prototype['integrationId'] = undefined;

/**
 * The integration ID of the store. You choose this ID when you create a store.
 * @member {String} storeIntegrationId
 */
ApplicationSession.prototype['storeIntegrationId'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationSession.prototype['applicationId'] = undefined;

/**
 * The globally unique Talon.One ID of the customer that created this entity.
 * @member {Number} profileId
 */
ApplicationSession.prototype['profileId'] = undefined;

/**
 * Integration ID of the customer for the session.
 * @member {String} profileintegrationid
 */
ApplicationSession.prototype['profileintegrationid'] = undefined;

/**
 * Any coupon code entered.
 * @member {String} coupon
 */
ApplicationSession.prototype['coupon'] = undefined;

/**
 * Any referral code entered.
 * @member {String} referral
 */
ApplicationSession.prototype['referral'] = undefined;

/**
 * Indicates the current state of the session. Sessions can be created as `open` or `closed`. The state transitions are:  1. `open` → `closed` 2. `open` → `cancelled` 3. `closed` → `cancelled` or `partially_returned` 4. `partially_returned` → `cancelled`  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). 
 * @member {module:model/ApplicationSession.StateEnum} state
 */
ApplicationSession.prototype['state'] = undefined;

/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */
ApplicationSession.prototype['cartItems'] = undefined;

/**
 * **API V1 only.** A map of labeled discount values, in the same currency as the session.  If you are using the V2 endpoints, refer to the `totalDiscounts` property instead. 
 * @member {Object.<String, Number>} discounts
 */
ApplicationSession.prototype['discounts'] = undefined;

/**
 * The total sum of the discounts applied to this session.
 * @member {Number} totalDiscounts
 */
ApplicationSession.prototype['totalDiscounts'] = undefined;

/**
 * The total sum of the session before any discounts applied.
 * @member {Number} total
 */
ApplicationSession.prototype['total'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
ApplicationSession.prototype['attributes'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationSession['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",

    /**
     * value: "partially_returned"
     * @const
     */
    "partially_returned": "partially_returned",

    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"
};



export default ApplicationSession;

