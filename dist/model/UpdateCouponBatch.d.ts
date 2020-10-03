export default UpdateCouponBatch;
/**
 * The UpdateCouponBatch model module.
 * @module model/UpdateCouponBatch
 * @version 4.2.0
 */
declare class UpdateCouponBatch {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, batchID: any): void;
    /**
     * Constructs a <code>UpdateCouponBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCouponBatch} obj Optional instance to populate.
     * @return {module:model/UpdateCouponBatch} The populated <code>UpdateCouponBatch</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateCouponBatch</code>.
     *
     * @alias module:model/UpdateCouponBatch
     * @param batchID {String} The id of the batch the coupon belongs to.
     */
    constructor(batchID: string);
    usageLimit: any;
    discountLimit: any;
    startDate: any;
    expiryDate: any;
    attributes: any;
    batchID: any;
}
