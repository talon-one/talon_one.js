export default RollbackCouponEffectProps;
/**
 * The RollbackCouponEffectProps model module.
 * @module model/RollbackCouponEffectProps
 * @version 4.2.0
 */
declare class RollbackCouponEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any): void;
    /**
     * Constructs a <code>RollbackCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackCouponEffectProps} The populated <code>RollbackCouponEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RollbackCouponEffectProps</code>.
     * The properties specific to the \&quot;rollbackCoupon\&quot; effect. This gets triggered whenever previously closed session is now cancelled and a coupon redemption was cancelled on our internal usage limit counters.
     * @alias module:model/RollbackCouponEffectProps
     * @param value {String} The coupon code whose usage has been rolled back
     */
    constructor(value: string);
    value: any;
}
