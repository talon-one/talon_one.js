export default UpdateCoupon;
/**
 * The UpdateCoupon model module.
 * @module model/UpdateCoupon
 * @version 4.2.0
 */
declare class UpdateCoupon {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UpdateCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCoupon} obj Optional instance to populate.
     * @return {module:model/UpdateCoupon} The populated <code>UpdateCoupon</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    usageLimit: any;
    discountLimit: any;
    startDate: any;
    expiryDate: any;
    recipientIntegrationId: any;
    attributes: any;
}
