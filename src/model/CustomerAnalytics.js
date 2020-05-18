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
 * The CustomerAnalytics model module.
 * @module model/CustomerAnalytics
 * @version 4.1.0
 */
class CustomerAnalytics {
    /**
     * Constructs a new <code>CustomerAnalytics</code>.
     * 
     * @alias module:model/CustomerAnalytics
     * @param acceptedCoupons {Number} Total accepted coupons for this customer
     * @param createdCoupons {Number} Total created coupons for this customer
     * @param freeItems {Number} Total free items given to this customer
     * @param totalOrders {Number} Total orders made by this customer
     * @param totalDiscountedOrders {Number} Total orders made by this customer that had a discount
     * @param totalRevenue {Number} Total Revenue across all closed sessions
     * @param totalDiscounts {Number} The sum of discounts that were given across all closed sessions
     */
    constructor(acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts) { 
        
        CustomerAnalytics.initialize(this, acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, acceptedCoupons, createdCoupons, freeItems, totalOrders, totalDiscountedOrders, totalRevenue, totalDiscounts) { 
        obj['acceptedCoupons'] = acceptedCoupons;
        obj['createdCoupons'] = createdCoupons;
        obj['freeItems'] = freeItems;
        obj['totalOrders'] = totalOrders;
        obj['totalDiscountedOrders'] = totalDiscountedOrders;
        obj['totalRevenue'] = totalRevenue;
        obj['totalDiscounts'] = totalDiscounts;
    }

    /**
     * Constructs a <code>CustomerAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerAnalytics} obj Optional instance to populate.
     * @return {module:model/CustomerAnalytics} The populated <code>CustomerAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAnalytics();

            if (data.hasOwnProperty('acceptedCoupons')) {
                obj['acceptedCoupons'] = ApiClient.convertToType(data['acceptedCoupons'], 'Number');
            }
            if (data.hasOwnProperty('createdCoupons')) {
                obj['createdCoupons'] = ApiClient.convertToType(data['createdCoupons'], 'Number');
            }
            if (data.hasOwnProperty('freeItems')) {
                obj['freeItems'] = ApiClient.convertToType(data['freeItems'], 'Number');
            }
            if (data.hasOwnProperty('totalOrders')) {
                obj['totalOrders'] = ApiClient.convertToType(data['totalOrders'], 'Number');
            }
            if (data.hasOwnProperty('totalDiscountedOrders')) {
                obj['totalDiscountedOrders'] = ApiClient.convertToType(data['totalDiscountedOrders'], 'Number');
            }
            if (data.hasOwnProperty('totalRevenue')) {
                obj['totalRevenue'] = ApiClient.convertToType(data['totalRevenue'], 'Number');
            }
            if (data.hasOwnProperty('totalDiscounts')) {
                obj['totalDiscounts'] = ApiClient.convertToType(data['totalDiscounts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total accepted coupons for this customer
 * @member {Number} acceptedCoupons
 */
CustomerAnalytics.prototype['acceptedCoupons'] = undefined;

/**
 * Total created coupons for this customer
 * @member {Number} createdCoupons
 */
CustomerAnalytics.prototype['createdCoupons'] = undefined;

/**
 * Total free items given to this customer
 * @member {Number} freeItems
 */
CustomerAnalytics.prototype['freeItems'] = undefined;

/**
 * Total orders made by this customer
 * @member {Number} totalOrders
 */
CustomerAnalytics.prototype['totalOrders'] = undefined;

/**
 * Total orders made by this customer that had a discount
 * @member {Number} totalDiscountedOrders
 */
CustomerAnalytics.prototype['totalDiscountedOrders'] = undefined;

/**
 * Total Revenue across all closed sessions
 * @member {Number} totalRevenue
 */
CustomerAnalytics.prototype['totalRevenue'] = undefined;

/**
 * The sum of discounts that were given across all closed sessions
 * @member {Number} totalDiscounts
 */
CustomerAnalytics.prototype['totalDiscounts'] = undefined;






export default CustomerAnalytics;

