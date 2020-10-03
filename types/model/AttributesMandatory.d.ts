export default AttributesMandatory;
/**
 * The AttributesMandatory model module.
 * @module model/AttributesMandatory
 * @version 4.2.0
 */
declare class AttributesMandatory {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttributesMandatory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributesMandatory} obj Optional instance to populate.
     * @return {module:model/AttributesMandatory} The populated <code>AttributesMandatory</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    campaigns: any;
    coupons: any;
}
