export default CouponConstraints;
/**
 * The CouponConstraints model module.
 * @module model/CouponConstraints
 * @version 4.2.0
 */
declare class CouponConstraints {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CouponConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponConstraints} obj Optional instance to populate.
     * @return {module:model/CouponConstraints} The populated <code>CouponConstraints</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    usageLimit: any;
    discountLimit: any;
    startDate: any;
    expiryDate: any;
}
