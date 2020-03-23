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
 * The CustomerSession model module.
 * @module model/CustomerSession
 * @version 1.0.0
 */
class CustomerSession {
    /**
     * Constructs a new <code>CustomerSession</code>.
     * 
     * @alias module:model/CustomerSession
     * @param integrationId {String} The ID used for this entity in the application system.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
     * @param coupon {String} Any coupon code entered.
     * @param referral {String} Any referral code entered.
     * @param state {module:model/CustomerSession.StateEnum} Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
     * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
     * @param total {Number} The total sum of the cart in one session.
     * @param attributes {Object} A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
     * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
     * @param discounts {Object.<String, Number>} A map of labelled discount values, values will be in the same currency as the application associated with the session.
     */
    constructor(integrationId, created, applicationId, profileId, coupon, referral, state, cartItems, total, attributes, firstSession, discounts) { 
        
        CustomerSession.initialize(this, integrationId, created, applicationId, profileId, coupon, referral, state, cartItems, total, attributes, firstSession, discounts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationId, created, applicationId, profileId, coupon, referral, state, cartItems, total, attributes, firstSession, discounts) { 
        obj['integrationId'] = integrationId;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['profileId'] = profileId;
        obj['coupon'] = coupon;
        obj['referral'] = referral;
        obj['state'] = state;
        obj['cartItems'] = cartItems;
        obj['total'] = total;
        obj['attributes'] = attributes;
        obj['firstSession'] = firstSession;
        obj['discounts'] = discounts;
    }

    /**
     * Constructs a <code>CustomerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSession} obj Optional instance to populate.
     * @return {module:model/CustomerSession} The populated <code>CustomerSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerSession();

            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
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
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], ['String']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('firstSession')) {
                obj['firstSession'] = ApiClient.convertToType(data['firstSession'], 'Boolean');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */
CustomerSession.prototype['integrationId'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
CustomerSession.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CustomerSession.prototype['applicationId'] = undefined;

/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */
CustomerSession.prototype['profileId'] = undefined;

/**
 * Any coupon code entered.
 * @member {String} coupon
 */
CustomerSession.prototype['coupon'] = undefined;

/**
 * Any referral code entered.
 * @member {String} referral
 */
CustomerSession.prototype['referral'] = undefined;

/**
 * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
 * @member {module:model/CustomerSession.StateEnum} state
 * @default 'open'
 */
CustomerSession.prototype['state'] = 'open';

/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */
CustomerSession.prototype['cartItems'] = undefined;

/**
 * Identifiers for the customer, this can be used for limits on values such as device ID.
 * @member {Array.<String>} identifiers
 */
CustomerSession.prototype['identifiers'] = undefined;

/**
 * The total sum of the cart in one session.
 * @member {Number} total
 */
CustomerSession.prototype['total'] = undefined;

/**
 * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
 * @member {Object} attributes
 */
CustomerSession.prototype['attributes'] = undefined;

/**
 * Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
 * @member {Boolean} firstSession
 */
CustomerSession.prototype['firstSession'] = undefined;

/**
 * A map of labelled discount values, values will be in the same currency as the application associated with the session.
 * @member {Object.<String, Number>} discounts
 */
CustomerSession.prototype['discounts'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CustomerSession['StateEnum'] = {

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



export default CustomerSession;

