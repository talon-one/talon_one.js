export default CustomerActivityReport;
/**
 * The CustomerActivityReport model module.
 * @module model/CustomerActivityReport
 * @version 4.2.0
 */
declare class CustomerActivityReport {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any, created: any, name: any, customerId: any, couponRedemptions: any, couponUseAttempts: any, couponFailedAttempts: any, accruedDiscounts: any, accruedRevenue: any, totalOrders: any, totalOrdersNoCoupon: any, campaignName: any): void;
    /**
     * Constructs a <code>CustomerActivityReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerActivityReport} obj Optional instance to populate.
     * @return {module:model/CustomerActivityReport} The populated <code>CustomerActivityReport</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomerActivityReport</code>.
     *
     * @alias module:model/CustomerActivityReport
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param created {Date} The exact moment this entity was created.
     * @param name {String} The name for this customer profile.
     * @param customerId {Number} The internal Talon.One ID of the customer.
     * @param couponRedemptions {Number} Number of coupon redemptions in all customer campaigns.
     * @param couponUseAttempts {Number} Number of coupon use attempts in all customer campaigns.
     * @param couponFailedAttempts {Number} Number of failed coupon use attempts in all customer campaigns.
     * @param accruedDiscounts {Number} Number of accrued discounts in all customer campaigns.
     * @param accruedRevenue {Number} Amount of accrued revenue in all customer campaigns.
     * @param totalOrders {Number} Number of orders in all customer campaigns.
     * @param totalOrdersNoCoupon {Number} Number of orders without coupon used in all customer campaigns.
     * @param campaignName {String} The name of the campaign this customer belongs to.
     */
    constructor(integrationId: string, created: Date, name: string, customerId: number, couponRedemptions: number, couponUseAttempts: number, couponFailedAttempts: number, accruedDiscounts: number, accruedRevenue: number, totalOrders: number, totalOrdersNoCoupon: number, campaignName: string);
    integrationId: any;
    created: any;
    name: any;
    customerId: any;
    lastActivity: any;
    couponRedemptions: any;
    couponUseAttempts: any;
    couponFailedAttempts: any;
    accruedDiscounts: any;
    accruedRevenue: any;
    totalOrders: any;
    totalOrdersNoCoupon: any;
    campaignName: any;
}
