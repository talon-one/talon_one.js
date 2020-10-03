export default AcceptCouponEffectProps;
/**
 * The AcceptCouponEffectProps model module.
 * @module model/AcceptCouponEffectProps
 * @version 4.2.0
 */
declare class AcceptCouponEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any): void;
    /**
     * Constructs a <code>AcceptCouponEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptCouponEffectProps} obj Optional instance to populate.
     * @return {module:model/AcceptCouponEffectProps} The populated <code>AcceptCouponEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AcceptCouponEffectProps</code>.
     * The properties specific to the \&quot;acceptCoupon\&quot; effect. This gets triggered whenever the coupon is valid and all other conditions in the rules of its campaign are met.
     * @alias module:model/AcceptCouponEffectProps
     * @param value {String} The coupon code that was accepted
     */
    constructor(value: string);
    value: any;
}
