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
 * The NewCustomerSession model module.
 * @module model/NewCustomerSession
 * @version 1.0.0
 */
class NewCustomerSession {
    /**
     * Constructs a new <code>NewCustomerSession</code>.
     * 
     * @alias module:model/NewCustomerSession
     */
    constructor() { 
        
        NewCustomerSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewCustomerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerSession} obj Optional instance to populate.
     * @return {module:model/NewCustomerSession} The populated <code>NewCustomerSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCustomerSession();

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
        }
        return obj;
    }


}

/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */
NewCustomerSession.prototype['profileId'] = undefined;

/**
 * Any coupon code entered.
 * @member {String} coupon
 */
NewCustomerSession.prototype['coupon'] = undefined;

/**
 * Any referral code entered.
 * @member {String} referral
 */
NewCustomerSession.prototype['referral'] = undefined;

/**
 * Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled 
 * @member {module:model/NewCustomerSession.StateEnum} state
 * @default 'open'
 */
NewCustomerSession.prototype['state'] = 'open';

/**
 * Serialized JSON representation.
 * @member {Array.<module:model/CartItem>} cartItems
 */
NewCustomerSession.prototype['cartItems'] = undefined;

/**
 * Identifiers for the customer, this can be used for limits on values such as device ID.
 * @member {Array.<String>} identifiers
 */
NewCustomerSession.prototype['identifiers'] = undefined;

/**
 * The total sum of the cart in one session.
 * @member {Number} total
 */
NewCustomerSession.prototype['total'] = undefined;

/**
 * A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings. 
 * @member {Object} attributes
 */
NewCustomerSession.prototype['attributes'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
NewCustomerSession['StateEnum'] = {

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



export default NewCustomerSession;

