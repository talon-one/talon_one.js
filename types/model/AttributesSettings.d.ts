export default AttributesSettings;
/**
 * The AttributesSettings model module.
 * @module model/AttributesSettings
 * @version 4.2.0
 */
declare class AttributesSettings {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttributesSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributesSettings} obj Optional instance to populate.
     * @return {module:model/AttributesSettings} The populated <code>AttributesSettings</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    mandatory: any;
}
