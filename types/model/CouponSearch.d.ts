export default CouponSearch;
/**
 * The CouponSearch model module.
 * @module model/CouponSearch
 * @version 4.2.0
 */
declare class CouponSearch {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, attributes: any): void;
    /**
     * Constructs a <code>CouponSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponSearch} obj Optional instance to populate.
     * @return {module:model/CouponSearch} The populated <code>CouponSearch</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CouponSearch</code>.
     * @alias module:model/CouponSearch
     * @param attributes {Object} Properties to match against a coupon. All provided attributes will be exactly matched against attributes
     */
    constructor(attributes: any);
    attributes: any;
}
