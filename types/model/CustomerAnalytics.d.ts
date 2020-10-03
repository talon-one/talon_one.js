export default CustomerAnalytics;
/**
 * The CustomerAnalytics model module.
 * @module model/CustomerAnalytics
 * @version 4.2.0
 */
declare class CustomerAnalytics {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, acceptedCoupons: any, createdCoupons: any, freeItems: any, totalOrders: any, totalDiscountedOrders: any, totalRevenue: any, totalDiscounts: any): void;
    /**
     * Constructs a <code>CustomerAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerAnalytics} obj Optional instance to populate.
     * @return {module:model/CustomerAnalytics} The populated <code>CustomerAnalytics</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
    constructor(acceptedCoupons: number, createdCoupons: number, freeItems: number, totalOrders: number, totalDiscountedOrders: number, totalRevenue: number, totalDiscounts: number);
    acceptedCoupons: any;
    createdCoupons: any;
    freeItems: any;
    totalOrders: any;
    totalDiscountedOrders: any;
    totalRevenue: any;
    totalDiscounts: any;
}
