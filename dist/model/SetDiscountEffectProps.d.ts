export default SetDiscountEffectProps;
/**
 * The SetDiscountEffectProps model module.
 * @module model/SetDiscountEffectProps
 * @version 4.2.0
 */
declare class SetDiscountEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, value: any): void;
    /**
     * Constructs a <code>SetDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountEffectProps} The populated <code>SetDiscountEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SetDiscountEffectProps</code>.
     * The properties specific to the \&quot;setDiscount\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set discount\&quot; effect. This is a discount that should be applied on the scope of defined with it.
     * @alias module:model/SetDiscountEffectProps
     * @param name {String} The name/description of this discount
     * @param value {Number} The total monetary value of the discount
     */
    constructor(name: string, value: number);
    name: any;
    value: any;
    scope: any;
}
