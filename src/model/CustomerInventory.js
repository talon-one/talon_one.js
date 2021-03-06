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
import Coupon from './Coupon';
import CustomerProfile from './CustomerProfile';
import Loyalty from './Loyalty';
import Referral from './Referral';

/**
 * The CustomerInventory model module.
 * @module model/CustomerInventory
 * @version 4.3.0
 */
class CustomerInventory {
    /**
     * Constructs a new <code>CustomerInventory</code>.
     * @alias module:model/CustomerInventory
     */
    constructor() { 
        
        CustomerInventory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerInventory} obj Optional instance to populate.
     * @return {module:model/CustomerInventory} The populated <code>CustomerInventory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerInventory();

            if (data.hasOwnProperty('profile')) {
                obj['profile'] = CustomerProfile.constructFromObject(data['profile']);
            }
            if (data.hasOwnProperty('loyalty')) {
                obj['loyalty'] = Loyalty.constructFromObject(data['loyalty']);
            }
            if (data.hasOwnProperty('referrals')) {
                obj['referrals'] = ApiClient.convertToType(data['referrals'], [Referral]);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [Coupon]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CustomerProfile} profile
 */
CustomerInventory.prototype['profile'] = undefined;

/**
 * @member {module:model/Loyalty} loyalty
 */
CustomerInventory.prototype['loyalty'] = undefined;

/**
 * @member {Array.<module:model/Referral>} referrals
 */
CustomerInventory.prototype['referrals'] = undefined;

/**
 * @member {Array.<module:model/Coupon>} coupons
 */
CustomerInventory.prototype['coupons'] = undefined;






export default CustomerInventory;

