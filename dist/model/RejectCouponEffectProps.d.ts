export default RejectCouponEffectProps;
/**
 * The RejectCouponEffectProps model module.
 * @module model/RejectCouponEffectProps
 * @version 4.2.0
 */
declare class RejectCouponEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, rejectionReason: any): void;
    /**
     * Constructs a <code>RejectCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/RejectCouponEffectProps} The populated <code>RejectCouponEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RejectCouponEffectProps</code>.
     * The properties specific to the \&quot;rejectCoupon\&quot; effect. This gets triggered whenever the coupon was rejected. See rejectionReason for more info on why.
     * @alias module:model/RejectCouponEffectProps
     * @param value {String} The coupon code that was rejected
     * @param rejectionReason {String} The reason why this coupon was rejected
     */
    constructor(value: string, rejectionReason: string);
    value: any;
    rejectionReason: any;
}
