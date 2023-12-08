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
import CustomerProfile from './CustomerProfile';
import Giveaway from './Giveaway';
import InventoryCoupon from './InventoryCoupon';
import InventoryReferral from './InventoryReferral';
import Loyalty from './Loyalty';

/**
 * The CustomerInventory model module.
 * @module model/CustomerInventory
 * @version 6.0.0
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
                obj['referrals'] = ApiClient.convertToType(data['referrals'], [InventoryReferral]);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [InventoryCoupon]);
            }
            if (data.hasOwnProperty('giveaways')) {
                obj['giveaways'] = ApiClient.convertToType(data['giveaways'], [Giveaway]);
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
 * @member {Array.<module:model/InventoryReferral>} referrals
 */
CustomerInventory.prototype['referrals'] = undefined;

/**
 * The coupons reserved by this profile. This array includes hard and soft reservations. See each coupon's `reservation` property. 
 * @member {Array.<module:model/InventoryCoupon>} coupons
 */
CustomerInventory.prototype['coupons'] = undefined;

/**
 * @member {Array.<module:model/Giveaway>} giveaways
 */
CustomerInventory.prototype['giveaways'] = undefined;






export default CustomerInventory;

