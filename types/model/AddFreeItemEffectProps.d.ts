export default AddFreeItemEffectProps;
/**
 * The AddFreeItemEffectProps model module.
 * @module model/AddFreeItemEffectProps
 * @version 4.2.0
 */
declare class AddFreeItemEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, sku: any, name: any): void;
    /**
     * Constructs a <code>AddFreeItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFreeItemEffectProps} obj Optional instance to populate.
     * @return {module:model/AddFreeItemEffectProps} The populated <code>AddFreeItemEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AddFreeItemEffectProps</code>.
     * The properties specific to the \&quot;addFreeItem\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add free item\&quot; effect.
     * @alias module:model/AddFreeItemEffectProps
     * @param sku {String} SKU of the item that needs to be added
     * @param name {String} The name/description of the effect
     */
    constructor(sku: string, name: string);
    sku: any;
    name: any;
}
