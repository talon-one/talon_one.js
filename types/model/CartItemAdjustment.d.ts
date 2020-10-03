export default CartItemAdjustment;
/**
 * The CartItemAdjustment model module.
 * @module model/CartItemAdjustment
 * @version 4.2.0
 */
declare class CartItemAdjustment {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, payFromLoyaltyProgram: any, pointPayment: any): void;
    /**
     * Constructs a <code>CartItemAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItemAdjustment} obj Optional instance to populate.
     * @return {module:model/CartItemAdjustment} The populated <code>CartItemAdjustment</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CartItemAdjustment</code>.
     * @alias module:model/CartItemAdjustment
     * @param payFromLoyaltyProgram {Number} Loyalty Program to be used for payment
     * @param pointPayment {Number} Amount of points to be spend
     */
    constructor(payFromLoyaltyProgram: number, pointPayment: number);
    payFromLoyaltyProgram: any;
    pointPayment: any;
    remainingPrice: any;
}
