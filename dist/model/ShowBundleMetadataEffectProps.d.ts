export default ShowBundleMetadataEffectProps;
/**
 * The ShowBundleMetadataEffectProps model module.
 * @module model/ShowBundleMetadataEffectProps
 * @version 4.2.0
 */
declare class ShowBundleMetadataEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, description: any, bundleAttributes: any, itemsIndices: any): void;
    /**
     * Constructs a <code>ShowBundleMetadataEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowBundleMetadataEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowBundleMetadataEffectProps} The populated <code>ShowBundleMetadataEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ShowBundleMetadataEffectProps</code>.
     * The properties specific to the \&quot;ShowBundleMetadata\&quot; effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \&quot;normal\&quot; discounts that were not the result of a product bundle.
     * @alias module:model/ShowBundleMetadataEffectProps
     * @param description {String} Description of the product bundle
     * @param bundleAttributes {Array.<String>} The cart item attributes that determined which items are being bundled together
     * @param itemsIndices {Array.<Number>} The indices in the cart items array of the bundled items
     */
    constructor(description: string, bundleAttributes: Array<string>, itemsIndices: Array<number>);
    description: any;
    bundleAttributes: any;
    itemsIndices: any;
}
