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
import CartItem from './CartItem';

/**
 * The ApplicationSession model module.
 * @module model/ApplicationSession
 * @version 4.1.1
 */
class ApplicationSession {
    /**
     * Constructs a new <code>ApplicationSession</code>.
     * 
     * @alias module:model/ApplicationSession
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created. The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param integrationId {String} The ID used for this entity in the application system.
     * @param coupon {String} Any coupon code entered.
     * @param referral {String} Any referral code entered.
     * @param state {module:model/ApplicationSession.StateEnum} Indicating if the customer session is in progress (\"open\"), \"closed\", or \"cancelled\".
     * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
     * @param discounts {Object.<String, Number>} A map of labelled discount values, in the same currency as the session.
     * @param total {Number} The total sum of the session before any discounts applied.
     */
    constructor(id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts, total) { 
        
        ApplicationSession.initialize(this, id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, integrationId, coupon, referral, state, cartItems, discounts, total) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['integrationId'] = integrationId;
        obj['coupon'] = coupon;
        obj['referral'] = referral;
        obj['state'] = state;
        obj['cartItems'] = cartItems;
        obj['discounts'] = discounts;
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
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
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
 * Unique ID for this entity.
 * @member {Number} id
 */
ApplicationSession.prototype['id'] = undefined;

/**
 * The exact moment this entity was created. The exact moment this entity was created.
 * @member {Date} created
 */
ApplicationSession.prototype['created'] = undefined;

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
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */
ApplicationSession.prototype['integrationId'] = undefined;

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
 * Indicating if the customer session is in progress (\"open\"), \"closed\", or \"cancelled\".
 * @member {module:model/ApplicationSession.StateEnum} state
 */
ApplicationSession.prototype['state'] = undefined;

/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */
ApplicationSession.prototype['cartItems'] = undefined;

/**
 * A map of labelled discount values, in the same currency as the session.
 * @member {Object.<String, Number>} discounts
 */
ApplicationSession.prototype['discounts'] = undefined;

/**
 * The total sum of the session before any discounts applied.
 * @member {Number} total
 */
ApplicationSession.prototype['total'] = undefined;

/**
 * Arbitrary properties associated with this item
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
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"
};



export default ApplicationSession;

