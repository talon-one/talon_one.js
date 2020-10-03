export default CouponCreatedEffectProps;
/**
 * The CouponCreatedEffectProps model module.
 * @module model/CouponCreatedEffectProps
 * @version 4.2.0
 */
declare class CouponCreatedEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, profileId: any): void;
    /**
     * Constructs a <code>CouponCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/CouponCreatedEffectProps} The populated <code>CouponCreatedEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CouponCreatedEffectProps</code>.
     * The properties specific to the \&quot;couponCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create coupon\&quot; effect, and a coupon was created for a customer. See \&quot;createdCoupons\&quot; on the response for all details of this coupon.
     * @alias module:model/CouponCreatedEffectProps
     * @param value {String} The coupon code that was created
     * @param profileId {String} The integration identifier of the customer for whom this coupon was created
     */
    constructor(value: string, profileId: string);
    value: any;
    profileId: any;
}
