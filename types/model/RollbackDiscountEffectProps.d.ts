export default RollbackDiscountEffectProps;
/**
 * The RollbackDiscountEffectProps model module.
 * @module model/RollbackDiscountEffectProps
 * @version 4.2.0
 */
declare class RollbackDiscountEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, value: any): void;
    /**
     * Constructs a <code>RollbackDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackDiscountEffectProps} The populated <code>RollbackDiscountEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RollbackDiscountEffectProps</code>.
     * The properties specific to the \&quot;rollbackDiscount\&quot; effect. This gets triggered whenever previously closed session is now cancelled and a setDiscount effect was cancelled on our internal discount limit counters.
     * @alias module:model/RollbackDiscountEffectProps
     * @param name {String} The name of the \"setDiscount\" effect that was rolled back
     * @param value {Number} The value of the discount that was rolled back
     */
    constructor(name: string, value: number);
    name: any;
    value: any;
}
