export default SetDiscountPerItemEffectProps;
/**
 * The SetDiscountPerItemEffectProps model module.
 * @module model/SetDiscountPerItemEffectProps
 * @version 4.2.0
 */
declare class SetDiscountPerItemEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, value: any, position: any): void;
    /**
     * Constructs a <code>SetDiscountPerItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountPerItemEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountPerItemEffectProps} The populated <code>SetDiscountPerItemEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SetDiscountPerItemEffectProps</code>.
     * The properties specific to the \&quot;setDiscountPerItem\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set per item discount\&quot; effect. This is a discount that should be applied on a specific item.
     * @alias module:model/SetDiscountPerItemEffectProps
     * @param name {String} The name/description of this discount
     * @param value {Number} The total monetary value of the discount
     * @param position {Number} The index of the item in the cart items list on which this discount should be applied
     */
    constructor(name: string, value: number, position: number);
    name: any;
    value: any;
    position: any;
    subPosition: any;
}
