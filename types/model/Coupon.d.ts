export default Coupon;
/**
 * The Coupon model module.
 * @module model/Coupon
 * @version 4.2.0
 */
declare class Coupon {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, campaignId: any, value: any, usageLimit: any, usageCounter: any): void;
    /**
     * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coupon} obj Optional instance to populate.
     * @return {module:model/Coupon} The populated <code>Coupon</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Coupon</code>.
     *
     * @alias module:model/Coupon
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     * @param value {String} The actual coupon code.
     * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.
     * @param usageCounter {Number} The number of times this coupon has been successfully used.
     */
    constructor(id: number, created: Date, campaignId: number, value: string, usageLimit: number, usageCounter: number);
    id: any;
    created: any;
    campaignId: any;
    value: any;
    usageLimit: any;
    discountLimit: any;
    startDate: any;
    expiryDate: any;
    usageCounter: any;
    discountCounter: any;
    discountRemainder: any;
    attributes: any;
    referralId: any;
    recipientIntegrationId: any;
    importId: any;
    reservation: any;
    batchId: any;
}
